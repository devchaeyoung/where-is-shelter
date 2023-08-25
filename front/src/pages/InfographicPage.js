import { React, useState, useEffect, useContext } from 'react';

import 'chart.js/auto';

import Graph from "../components/Infographic/Graph";
import Commentary from "../components/Infographic/Commentary";

function InfographicToolbar () {

  /*
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
            <span class="float-left mx-10 my-5"></span>
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
  */
}


const InfographicPage = () => {
 
  // const [dataset, setDataset] = useState([])
  
  // setDataset([128.14, 112.61, 163.21, 229.98])

  const data = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    datasets: [
      {
        data: [{x:0,y:87},{x:1,y:91},{x:2,y:87},{x:3,y:92},{x:4,y:96},{x:5,y:91},{x:6,y:93},{x:7,y:88},{x:8,y:95}]
      }
    ],
  }

  const type = 'bar'

  return (
    <div className="flex flex-col">
      <div>
        인포그래픽 화면입니다.
      </div>
      <div className="flex flex-row">
        <Graph chartData={data} chartType={type} />
        <Commentary />
      </div>
    </div>
  );
};

export default InfographicPage;