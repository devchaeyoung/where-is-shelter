import { React, useState } from 'react';
import PoiMap from "../components/Poi/PoiMap";
import PoiList from "../components/Poi/PoiList";
import DistrictSelector from "../components/Poi/DistrictSelector";

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
  return (
    <div className="flex flex-col overflow-y-auto h-full">
      <div className="flex-none">
        <div id="poi-toolbar" className="flex flex-row justify-between items-center px-8 mb-5">
          <DistrictSelector />
          <CurrentLocation />
        </div>
      </div>
      <div className="grow overflow-y-auto">
        <div className="">
          <div className="flex flex-row">
            <div className="flex-1">
              <PoiMap />
            </div>
            <div className="w-[33%]">
              <PoiList />
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default PoiPage;