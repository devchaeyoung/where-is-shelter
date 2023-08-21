import { React, useState, useEffect, useContext } from 'react';
import PoiMap from "../components/Poi/PoiMap";
import PoiList from "../components/Poi/PoiList";
import DistrictSelector from "../components/Poi/DistrictSelector";
import PoiDataContext from "../contexts/PoiDataContext";
import * as Api from "../apis/api";

const endpoint = "test";
const params = "district";

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
      <button className="p-3 bg-green-400 rounded-xl" onClick={getCurrentPosition}>현재 위치</button>
    </div>
  )
}

// [참고사항] Leaflet.js의 Map 크기는 상위 div의 크기에 따라 상대적으로 결정되며, Tailwind CSS와 호환되지 않습니다.
//          /src/index.css 파일에서 일반 CSS 코드를 추가하여 크기를 지정해주어야 합니다.

const PoiPage = () => {

  const [districtPoiData, setDistrictPoiData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const PoiData = useContext(PoiDataContext);

  useEffect(() => {
    const fetchDistrictPoiData = async () => {
      try{
        setError(null);
        setDistrictPoiData(null);

        Api.getData(endpoint)
        .then((res) => {
          setDistrictPoiData(res.data);
          setIsFetching(false);
        })
      } catch (err) {
        setError(err);
        alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
        return;
      }
    }

    fetchDistrictPoiData();
  }, []);

  if (isFetching) {
    return (
      <div>
        <p>데이터를 가져오는 중입니다...</p>
      </div>
    );
  }

  if (!districtPoiData) {
    console.log("POI 데이터를 성공적으로 가져왔습니다.")
    return null;
  }
  
  return (
    <PoiDataContext.Provider value={districtPoiData}>
      <div className="flex flex-col overflow-y-auto">
        <div id="poi-toolbar-wrapper" className="flex-none">
          <div id="poi-toolbar" className="flex flex-row justify-between items-center h-12 px-8 mb-5">
            <DistrictSelector />
            <CurrentLocation />
          </div>
        </div>
        <div id="poi-content-wrapper" className="grow overflow-y-auto flex flex-row">
          <div className="flex-1 w-[60vw]">
              <PoiMap />
          </div>
          <div className="w-[40vw] h-[10rem]">
              <PoiList />
          </div>
        </div>  
      </div>
    </PoiDataContext.Provider>
  );
};

export default PoiPage;