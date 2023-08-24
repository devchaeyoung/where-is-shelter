import { React, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import PoiMap from "../components/Poi/PoiMap";
import PoiList from "../components/Poi/PoiList";
import PoiDetails from "../components/Poi/PoiDetails";
import DistrictSelector from "../components/shared/DistrictSelector";
import CurrentPosition from "../components/Poi/CurrentPosition";

import DistrictPoiDataContext from "../contexts/DistrictPoiDataContext";
import CurrentPositionContext from "../contexts/CurrentPositionContext";

import useApi from "../hooks/useApi";

import * as Api from "../apis/api";

// [참고사항] Leaflet.js의 Map 크기는 상위 div의 크기에 따라 상대적으로 결정되며, Tailwind CSS와 호환되지 않습니다.
//          /src/index.css 파일에서 일반 CSS 코드를 추가하여 크기를 지정해주어야 합니다.

const PoiPage = () => {

  // 특정 쉼터가 선택되었는지를 확인하는 상태값입니다.
  const [selectedPoi, setSelectedPoi] = useState();

  // 자식 컴포넌트인 PoiList가 부모 컴포넌트인 PoiPage의 focusedPoi 상태값을 변경시킬 수 있도록 state handler를 사용합니다.
  // PoiList.js를 참고하세요.
  function handleSelectedPoiState(poi) {
    setSelectedPoi(poi);
  }

  // 자식 컴포넌트인 CurrentLocation 컴포넌트로부터 오는 현재 위치 좌표를 상태값으로 사용합니다.
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  function handleLatLngState(currentLatitude, currentLongitude) {
    setLatitude(currentLatitude);
    setLongitude(currentLongitude);
  }
      
  // 사용자가 선택한 지역은 자식 컴포넌트인 DistrictSelector를 통해서 처리됩니다.
  // 자식 컴포넌트인 DistrictSelector가 부모 컴포넌트인 PoiPage의 district 상태값을 변경시킬 수 있도록 state handler를 사용합니다.
  // DistrictSelector.js를 참고하세요.
  const [district, setDistrict] = useState("gangnam");

  // 툴바 상에서 사용자에게 보여줄 현재 행정구역 정보입니다.
  const [districtLabel, setDistrictLabel] = useState('강남구');
  
  function handleDistrictState(selectedDistrict) {
    setDistrict(selectedDistrict);
  }

  // 사용자가 선택한 특정 지역의 쉼터 목록을 백엔드로부터 받아 상태값으로써 저장합니다.
  const [districtPoiData, setDistrictPoiData] = useState([]);

  // API 요청에 사용되는 endpoint를 지정해줍니다.
  const endpoint = '/shelters/districts';

  // 사용자가 선택한 행정구역 정보를 담고 있는 district 상태값을 라우팅 파라미터인 params로써 API 요청에 반영합니다.
  const params = `/${district}`;

  const { data, isFetching, error } = useApi(() => Api.getData(endpoint, params)
        .then((res) => {
          setDistrictPoiData(res.data)
        }), district);
  
  if (isFetching) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터를 가져오는 중입니다...</p>
        <p className="font-bold text-lg">{error}</p>
      </div>
    );
  }

  if (!districtPoiData){
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터가 도착할때까지 잠시만 기다려주세요...</p>
      </div>
    );
  }
  
  return (
    <DistrictPoiDataContext.Provider value={districtPoiData}>
      <div id="poi-page-wrapper" className="flex flex-col overflow-y-auto">
        <div id="poi-toolbar-wrapper" className="flex-none">
          <div id="poi-toolbar" className="flex flex-row justify-between items-center h-8 px-8 mb-3">
            <DistrictSelector handleState={handleDistrictState} currentDistrict={district}/>
            <CurrentPosition handleState={handleLatLngState} />
          </div>
        </div>
        <div id="poi-content-wrapper" className="grow overflow-y-auto flex flex-row">
          <div id="poi-list" className="w-[30vw] max-h-[calc(100vh-12rem)] overflow-y-scroll scroll-smooth">
            {selectedPoi 
              ? <PoiDetails handleState={handleSelectedPoiState} selectedPoi={selectedPoi} /> 
              : <PoiList handleState={handleSelectedPoiState} />}
          </div>
          <CurrentPositionContext.Provider value={[latitude, longitude]}>
            <div id="poi-map" className="flex-1">
                <PoiMap  />
            </div>
          </CurrentPositionContext.Provider>
        </div>  
      </div>
    </DistrictPoiDataContext.Provider>
  );
};

export default PoiPage;