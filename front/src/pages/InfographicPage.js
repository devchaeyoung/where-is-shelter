import { React, useState, useEffect, useContext } from 'react';

import LoginForm from "../components/MyPage/LoginForm";
import UserInfo from "../components/MyPage/UserInfo";

function InfographicToolbar () {

  const [category1, setCategory1] = useState(); 
  const [category2, setCategory2] = useState();
  const [category3, setCategory3] = useState();

  const handleChange = (event) => {
    const select = event.target.value;
    set지역선택(select);
    alert(select);
  }

  return(
    <div class = "flex flex-col">
      <div>
            <p class = "float-left mx-10 my-5">통계자료 찾아보기</p>
            <span class="float-left mx-10 my-5"><지역별 /></span>
            <span class="float-left mx-10 my-5"><기후별 /></span>
            <span class="float-left mx-10 my-5"><친환경 /></span>
      </div>

      <div class = "flex flex-row">
        <div class ="bg-green-100 w-1/2 py-96">
        <p class = "text-center"><Graph /></p>
        </div>

        <div class = "float-left bg-yellow-100 w-1/2 py-96">
        <p class = "text-center"><Commentary /></p>
        </div>
      </div>
    </div>
  )
}


const InfographicPage = () => {
 

  return (
    <div className="flex flex-col">
      <div>
        <InfographicToolbar />
      </div>
      <div className="flex flex-row">
        <Graph />
        <Commentary />
      </div>
    </div>
  );
};

export default InfographicPage;