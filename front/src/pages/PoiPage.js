import { React, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import PoiMap from "../components/Poi/PoiMap";
import PoiList from "../components/Poi/PoiList";
import DistrictSelector from "../components/Poi/DistrictSelector";
import PoiDataContext from "../contexts/PoiDataContext";
import * as Api from "../apis/api";

const CurrentLocation = () => {

  // Geolocation API를 사용해서 현재 위치 좌표를 가져오는데 필요한 변수, 옵션, 콜백함수를 정의합니다.

  let currentLat = 0;
  let currentLng = 0;

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
  
  function success(position) {
    currentLat = position.coords.latitude;
    currentLng = position.coords.longitude;
    alert(`위도: ${position.coords.latitude} /` + ` 경도: ${position.coords.longitude} /` + ` 정확도: 약 ${position.coords.accuracy} 미터`);
    // [TO-DO] 
    // 마커에 현재 위치를 표시해주는 함수();
    // map.setView([currentLat, currentLng]);
  }
  
  function error(err) {                         // when getCurrentPosition() fails
    const errMsg = ["zero-filler", "PERMISSION_DENIED", "POSITION_UNAVAILABLE", "TIMEOUT"];
    alert("현재 위치를 가져올 수 없습니다.\nERROR: " + errMsg[err.code]);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  
  return (
    <div>
      <button className="px-3 py-1 bg-green-400 rounded-xl" onClick={getCurrentPosition}>현재 위치</button>
    </div>
  )
}

// [참고사항] Leaflet.js의 Map 크기는 상위 div의 크기에 따라 상대적으로 결정되며, Tailwind CSS와 호환되지 않습니다.
//          /src/index.css 파일에서 일반 CSS 코드를 추가하여 크기를 지정해주어야 합니다.

const PoiPage = () => {

  const navigate = useNavigate();

  // 사용자가 선택한 지역은 자식 컴포넌트인 DistrictSelector에서 지정됩니다.
  // 자식 컴포넌트가 부모 컴포넌트인 PoiPage의 district 상태값을 변경시킬 수 있도록 state handler를 사용합니다.
  const [district, setDistrict] = useState("gangnam");

  const [districtPoiData, setDistrictPoiData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  
  const endpoint = '/home';
  const params = '';

  useEffect(() => {
    const fetchDistrictPoiData = async () => {
      try{
        setError(null);
        setDistrictPoiData(null);
              
        // [긴급] try-catch 구문 안에 있음에도 Axios의 API 통신에 관한 오류가 캐치되지 않고 새어나가는 현상이 발생중입니다.
        //       옵션 1. .catch() 체이닝을 통해서 Axios 차원에서 에러 핸들링을 해주기
        //       옵션 2. Api 함수에 await을 적용해 변수에 대입해서 사용하기

        const apiCall = await Api.getData(endpoint, params)
        .then((res) => {
          setDistrictPoiData(res.data);
          setIsFetching(false);
        })

      } catch (err) {
        setError(`${err.name} : ${err.message}`);
        console.log(error);
        alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
        return;
      }
    }

    fetchDistrictPoiData();
  }, []);
  
  if (isFetching) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터를 가져오는 중입니다...</p>
        <p className="font-bold text-lg">{error}</p>
      </div>
    );
  }

  return (
    <PoiDataContext.Provider value={districtPoiData}>
      <div id="poi-page-wrapper" className="flex flex-col overflow-y-auto">
        <div id="poi-toolbar-wrapper" className="flex-none">
          <div id="poi-toolbar" className="flex flex-row justify-between items-center h-8 px-8 mb-3">
            <DistrictSelector />
            <CurrentLocation />
          </div>
        </div>
        <div id="poi-content-wrapper" className="grow overflow-y-auto flex flex-row">
          <div className="w-[30vw] max-h-[calc(100vh-12rem)] overflow-y-scroll scroll-smooth">
              <PoiList />
          </div>
          <div className="flex-1">
              <PoiMap />
          </div>
        </div>  
      </div>
    </PoiDataContext.Provider>
  );
};

export default PoiPage;