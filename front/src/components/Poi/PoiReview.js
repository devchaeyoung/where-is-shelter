import { React, useState, useEffect, useContext } from 'react';

import useApi from "../../hooks/useApi";

import * as Api from "../../apis/api";

import UserStateContext from "../../contexts/UserStateContext";
import DispatchContext from "../../contexts/DispatchContext";


const PoiReview = (props) => {

  const dispatch = useContext(DispatchContext);
  const userState = useContext(UserStateContext);

  // 사용자가 선택한 특정 쉼터에 작성된 리뷰 목록을 백엔드로부터 받아와서 상태값으로써 저장합니다.
  const [poiReviewData, setPoiReviewData] = useState();

  // 백엔드로부터 데이터를 받아오고 있는지를 체크하는 상태값입니다.
  const [isFetching, setIsFetching] = useState(true);

  // 백엔드로부터 데이터를 받아오다가 오류가 발생했는지를 체크하는 상태값입니다.
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPoiReviewData = async () => {
      try{
        // API 요청에 사용되는 endpoint를 지정해줍니다.
        const endpoint = '/review';
        
        // 사용자가 선택한 특정 쉼터의 id값을 라우팅 파라미터인 params로써 API 요청에 반영합니다.
        const params = `/${props.selectedPoiId}`;
        
        setIsFetching(true);
        const res = await Api.getData(endpoint, params);
        setPoiReviewData(res.data);
      } catch (err) {
        // 만약에 에러가 발생하게 되면 데이터 로딩 상황을 알려주는 placeholder 아래에 에러 메세지가 추가됩니다.
        setError(`${err.name} : ${err.message}`);
        alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
        return;
      }
      finally {
        setIsFetching(false);
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

  async function handleClick (event) {
    event.preventDefault();
    const reviewId = event.target.id;
    console.log(reviewId)
   
    try{
      const endpoint = "/review"
      const params = `/${reviewId}`
      const res = await Api.deleteData(endpoint, params);
      console.log(res)
      if(!res.status == 204){
        alert(`리뷰를 삭제하는 도중 오류가 발생했습니다.: ${res.data}`);
      }
      if(res.status == 204){
        alert(`리뷰를 성공적으로 삭제했습니다.`);
      }
    } catch (err) {
      // 만약에 에러가 발생하게 되면 데이터 로딩 상황을 알려주는 placeholder 아래에 에러 메세지가 추가됩니다.
      setError(`${err.name} : ${err.message}`);
      alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
      return;
    }

  }

  return(
    <div className="flex flex-col bg-slate-100 rounded-xl overflow-y-scroll h-[30vh] p-2">
      {poiReviewData.map(item => (
        <div key={item.id} className="flex flex-col my-2">
          <div className="flex flex-row justify-between">
            <span>{item.nickname}님</span>
            {/* 현재 로그인한 사용자의 id와 리뷰를 작성한 사용자의 id가 일치하는 경우에만 삭제 버튼을 표시합니다. */}
            {/* [TO-DO][REFACTOR] 로그인 시 백엔드에서는 사용자의 고유 _id를 다른 사용자 정보들과 함께 담아 프론트엔드에 넘겨주고, 
                                  프론트엔드는 그걸 받아서 사용자 계정 정보를 담고있는 전역 상태값 userState에 저장해서 사용자의 고유 _id를 사용하는 지금 방식 대신,
                                  사용자의 고유 _id를 파악할 필요가 있을때마다, 백엔드로 JWT 토큰을 보내고 그걸 백엔드에서 받아 사용자의 고유 _id를 반환하는 방식의
                                  별도의 API를 구축하고 사용하는 것을 보안 측면에서 고려해볼 수 있습니다.*/}
            {item.user_id == userState.user.id
              ? <button key={item.id} id={item.id} onClick={handleClick} className="text-slate-500 underline">
                  리뷰 삭제
                </button> 
              : <span></span>
            }
          </div>
          <p className="">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PoiReview;