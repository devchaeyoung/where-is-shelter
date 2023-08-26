import { React, useState, useEffect, useContext } from 'react';

import useApi from "../../hooks/useApi";

import * as Api from "../../apis/api";

const PoiReview = (props) => {

  const [isUserAuthor, setIsUserAuthor] = useState(true);

  // 사용자가 선택한 특정 쉼터에 작성된 리뷰 목록을 백엔드로부터 받아와서 상태값으로써 저장합니다.
  const [poiReviewData, setPoiReviewData] = useState();

  // 백엔드로부터 데이터를 받아오고 있는지를 체크하는 상태값입니다.
  const [isFetching, setIsFetching] = useState(true);

  // 백엔드로부터 데이터를 받아오다가 오류가 발생했는지를 체크하는 상태값입니다.
  const [error, setError] = useState("");

  // API 요청에 사용되는 endpoint를 지정해줍니다.
  const endpoint = '/review';

  // 사용자가 선택한 특정 쉼터의 id값을 라우팅 파라미터인 params로써 API 요청에 반영합니다.
  const params = `/${props.selectedPoiId}`;

  useEffect(() => {
    const fetchPoiReviewData = async () => {
      try{
        setIsFetching(true);
        const res = await Api.getData(endpoint, params);
        setPoiReviewData(res.data);
        setIsFetching(false);
      } catch (err) {
        // 만약에 에러가 발생하게 되면 데이터 로딩 상황을 알려주는 placeholder 아래에 에러 메세지가 추가됩니다.
        setError(`${err.name} : ${err.message}`);
        alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
        return;
      }
    }

    fetchPoiReviewData();
  }, [error, props.selectedPoiId]);

  if (isFetching || !poiReviewData) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터를 가져오는 중입니다...</p>
        <p className="font-bold text-lg">{error}</p>
      </div>
    );
  }

  console.log(poiReviewData)
  return(
    <div className="flex flex-col bg-slate-100 rounded-xl overflow-y-scroll h-[30vh] p-2">
      {poiReviewData.map(item => (
        <div key={item.id} className="flex flex-col my-2">
          <div className="flex flex-row justify-between">
            <span>{item.user_id}님</span>
            {isUserAuthor ? <span>🗙</span> : <span></span>}
          </div>
          <p className="">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PoiReview;