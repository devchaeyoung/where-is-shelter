import { React, useState, useEffect } from 'react';

const CurrentLocation = ({handleState}) => {

  let receivedLatitude = '';
  let receivedLongitude = '';
  const [isActive, setIsActive] = useState(false);
  
  // Geolocation API를 사용해서 현재 위치 좌표를 가져오는데 필요한 변수, 옵션, 콜백함수를 정의합니다.
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
  
  function success(position) {
    receivedLatitude = position.coords.latitude;
    receivedLongitude = position.coords.longitude;

    // 부모 컴포넌트인 PoiPage로부터 전달받은 handleState 함수를 사용해서,
    // 부모 컴포넌트인 PoiPage 및 자식 컴포넌트의 PoiMap의 latitude와 longitude 상태값을 갱신시켜 줍니다.
    handleState(receivedLatitude, receivedLongitude);

    alert(`위도: ${position.coords.latitude} /` + ` 경도: ${position.coords.longitude} /` + ` 정확도: 약 ${position.coords.accuracy} 미터`);
    // [TO-DO] 
    // 마커에 현재 위치를 표시해주는 함수();
    // map.setView([currentLat, currentLng]);
  }
  
  function error(err) {
    const errMsg = ["zero-filler", "PERMISSION_DENIED", "POSITION_UNAVAILABLE", "TIMEOUT"];
    alert("현재 위치를 가져올 수 없습니다.\nERROR: " + errMsg[err.code]);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function HandleToggle() {

    getCurrentPosition();

    if(isActive){
      /*
      useEffect(() => {
        const ContinuousTracking = setInterval(() => {
          getCurrentPosition
        }, 5000)
      }, []);
      setIsActive(false);
      */
    }
    if(!isActive){
      setIsActive(true);
    }

  }

  // 현재 위치정보를 얻는 함수를, 지도상에 주기적으로 갱신하는데 사용할 수 있도록 useEffect 안에 넣어줍니다.
  return (
    <div>
      <button id="current-position-btn" 
              className={isActive ? `bg-green-400 px-3 py-1 rounded-xl` : `bg-slate-200 px-3 py-1 rounded-xl`}
              onClick={HandleToggle}>
          {isActive ? `위치 표시 중...` : `현재 위치`}
      </button>
    </div>
  )
}

export default CurrentLocation;