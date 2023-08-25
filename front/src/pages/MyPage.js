import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/MyPage/UserProfile";

import * as Api from "../apis/api";

function MyPage() {
  const navigate = useNavigate();

  // API 요청에 사용되는 endpoint를 지정해줍니다.
  const endpoint = "/user/mypage";

  const getUserInfo = async () => {
    try {
      const res = await Api.getData(endpoint);
      console.log(res);
    } catch (e) {
      alert(e.response.data);
      console.log(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="flex flex-row overflow-y-auto min-h-full p-8 justify-between">
      <div className="flex flex-col bg-slate-100 w-4/12 p-8 items-center h-96">
        <UserProfile />
        <div className="flex justify-between w-full">
          <p className="text-xl font-bold mt-4">홍길동</p>
          <p className="text-l font-bold mt-4">수정</p>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-m font-semi mt-4">리뷰작성 횟수별 등급(임시)</p>
          <p className="text-m font-semi mt-4">user 한줄소개란입니다.</p>
        </div>
      </div>
      <div className="flex flex-col w-7/12">
        <div className="flex bg-slate-100 w-full h-48 p-8">
          <p className="text-xl font-bold">내가 즐겨 찾은 쉼터</p>
        </div>
        <div className="flex bg-slate-100 w-full h-full mt-10 p-8">
          <p className="text-xl font-bold">내가 남긴 쉼터 후기</p>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
