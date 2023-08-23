import { React, useState, useEffect, useContext } from 'react';

import PoiReview from './PoiReview'
import ReviewForm from './ReviewForm'

import * as Api from "../../apis/api";

const PoiDetails = ({handleState, selectedPoi}) => {

  // 백엔드로부터 받아온 데이터가 탑재되는 상태값입니다
  const [selectedPoiData, setSelectedPoiData] = useState();

  // 백엔드로부터 데이터를 받아오고 있는지를 체크하는 상태값입니다.
  const [isFetching, setIsFetching] = useState(true);

  // 백엔드로부터 데이터를 받아오다가 오류가 발생했는지를 체크하는 상태값입니다.
  const [error, setError] = useState("");

  function handleClick() {
    // PoiPage에서의 selectedPoi 상태값을 소거해서, PoiPage에서 쉼터 상세정보 컴포넌트 대신에 쉼터 목록 컴포넌트를 보여주도록 합니다.
    // 쉼터 상세정보 창을 꺼버리는 기능으로써 작동합니다.
    handleState()
  }
  
  console.log(selectedPoi)

  useEffect(() => {
    const fetchSelectedPoiData = async () => {
      try{
        setError(null);
        setSelectedPoiData(null);
              
        // [긴급] try-catch 구문 안에 있음에도 Axios의 API 통신에 관한 오류가 캐치되지 않고 새어나가는 현상이 발생중입니다.
        //       옵션 1. .catch() 체이닝을 통해서 Axios 차원에서 에러 핸들링을 해주기
        //       옵션 2. Api 함수에 await을 적용해 변수에 대입해서 사용하기

        // API 요청에 사용되는 endpoint를 지정해줍니다.
        const endpoint = '/shelters';
  
        // 사용자가 선택한 행정구역 정보를 담고 있는 district 상태값을 라우팅 파라미터인 params로써 API 요청에 반영합니다.
        const params = `/${selectedPoi}`;

        await Api.getData(endpoint, params)
        .then((res) => {
          setSelectedPoiData(res.data);
          setIsFetching(false);
        })

      } catch (err) {
        // 만약에 에러가 발생하게 되면 데이터 로딩 상황을 알려주는 placeholder 아래에 에러 메세지가 추가됩니다.
        setError(`${err.name} : ${err.message}`);
        console.log(error);
        alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
        return;
      }
    }

    fetchSelectedPoiData();
  }, [error, selectedPoi]);
  
  if (isFetching) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터를 가져오는 중입니다...</p>
        <p className="font-bold text-lg">{error}</p>
      </div>
    );
  }

  if (!selectedPoiData){
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터가 도착할때까지 잠시만 기다려주세요...</p>
      </div>
    );
  }

  console.log(selectedPoiData)

  return(
    <div className="flex flex-col">
      <div className="flex flex-row-reverse" onClick={handleClick}>
        <button className="p-3 font-bold text-2xl">닫기 🗙</button>
      </div>
      <div className="flex flex-col p-3">
        <h1 className="font-bold text-xl">{selectedPoiData.name}</h1>
        <h2 className="font-bold text-lg mt-3">장소 정보</h2>
        <div className="ml-2">
          <p><span className="mr-2">주소:</span><span>{selectedPoiData.address}</span></p>
          <p><span className="mr-2">유형:</span><span>{selectedPoiData.shelter_type}</span></p>
          <p><span className="mr-2">면적:</span><span>{selectedPoiData.area}</span></p>
          <p><span className="mr-2">최대 인원:</span><span>{selectedPoiData.capacity}</span></p>
        </div>
        <h2 className="font-bold text-lg mt-3">개방 정보</h2>
        <div className="ml-2">
          <p><span className="mr-2">야간 개방 여부:</span><span>{selectedPoiData.open_at_night}</span></p>
          <p><span className="mr-2">주말 개방 여부:</span><span>{selectedPoiData.open_on_weekends}</span></p>
          <p><span className="mr-2">숙박 가능 여부</span><span>{selectedPoiData.overnight_stay}</span></p>
        </div>
        <h2 className="font-bold text-lg mt-3">운영 정보</h2>
        <div className="ml-2">
          <p><span className="mr-2">운영 개시 시기:</span><span>{selectedPoiData.season_start_date.slice(0, 10)}</span></p>
          <p><span className="mr-2">운영 종료 시기:</span><span>{selectedPoiData.season_end_date.slice(0, 10)}</span></p>
          <p><span className="mr-2">담당 기관:</span><span>{selectedPoiData.authority_name}</span></p>
          <p><span className="mr-2">담당 기관 전화번호:</span><span>{selectedPoiData.authority_contact}</span></p>
        </div>
        <h2 className="font-bold text-lg mt-3">냉난방 기구 관련 정보</h2>
        <div className="ml-2">
          <p><span className="mr-2">선풍기 보유 대수:</span><span>{selectedPoiData.fan_count}</span></p>
          <p><span className="mr-2">에어컨 보유 대수:</span><span>{selectedPoiData.ac_count}</span></p>
          <p><span className="mr-2">난방기구 보유 대수:</span><span>{selectedPoiData.heater_count}</span></p>
        </div>
      </div>
      <PoiReview />
    </div>
  )
}

export default PoiDetails;