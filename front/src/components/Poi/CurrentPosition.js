import { React, useState, useEffect, useRef } from 'react';

const CurrentPosition = ({handleState}) => {

  // [TO-DO] 전역변수는 안티패턴이므로 사용을 자제해야 합니다.
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

  useEffect(() => {
    if (isActive) {

      getCurrentPosition();
      
      // 현재 위치 찾기 버튼이 활성화 상태라면 getCurrentPosition() 함수를 5초마다 호출합니다.
      // useEffect의 dependency인 isActive의 상태값이 false가 되면 clearInterval 처리를 해주기 위해서 setInterval() 함수를 변수에 담아줍니다.
      const interval = setInterval(getCurrentPosition, 5000);
      
      return() => {
        clearInterval(interval);
      }
    }
  }, [isActive])

  //
  function HandleToggle() {
    // setState() 함수에서는 이전 값을 참조할 수 있으므로, if 구문 없이도 한 줄의 코드로 이전의 boolean 상태값을 토글해줄 수 있습니다.
    setIsActive(prev => !prev)
  }

  // 현재 위치정보를 얻는 함수를, 지도상에 주기적으로 갱신하는데 사용할 수 있도록 useEffect 안에 넣어줍니다.
  return (
    <div>
      <button id="current-position-btn" 
              className={isActive ? `bg-green-400 px-3 py-1 rounded-xl` : `bg-slate-200 px-3 py-1 rounded-xl`}
              onClick={HandleToggle}>
        {isActive ? `위치 확보 중...` : `현재 위치`}
      </button>
    </div>
  )
}

export default CurrentPosition;