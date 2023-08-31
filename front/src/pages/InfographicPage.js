import { React, useState, useEffect, useContext } from 'react';

import ChartItemSelector from "../components/Infographic/ChartItemSelector";
import Graph from "../components/Infographic/Graph";
import Commentary from "../components/Infographic/Commentary";

const InfographicPage = () => {
 
  const [currentChartItem, setCurrentChartItem] = useState();
  const [currentChartData, setCurrentChartData] = useState();
  const [currentChartType, setCurrentChartType] = useState();

  function handleCurrentChartItemState(chartItem) {
    const chartData = require(`../assets/staticDB/${chartItem}.json`);
    setCurrentChartItem(chartItem);
    setCurrentChartData(chartData);
    setCurrentChartType(chartData.metadata.type);
  }
  
  return (
    <div className="flex flex-col w-full h-full">
      <div id="infographic-toolbar" className="flex flex-row justify-between items-center h-8 px-8 mb-3">
        <ChartItemSelector handleState={handleCurrentChartItemState} />
      </div>
      {currentChartItem
        ? <div className="flex flex-row grow w-full max-h-[calc(100vh-16rem)]">
            <div className="w-[50vw] h-full my-5 ml-10 mr-5 p-10 bg-slate-100 rounded-xl">
              {/* 사용자가 선택한 통계 항목명에 대한 상태값을 Graph 컴포넌트의 key로 지정해서, 사용자가 다른 항목을 선택할 때 그래프 컴포넌트 전체를 다시 렌더링하도록 합니다. */}
              {/* 이렇게 하지 않으면 react-chartjs-2가 chart.js 캔버스를 부분적으로만 렌더링하려는 버그가 발생합니다. */}
              <Graph key={currentChartData.metadata.title} chartData={currentChartData} chartType={currentChartType} />
            </div>
            <div className="w-[50vw] h-full my-5 mr-10 ml-5 p-10 bg-slate-100 rounded-xl">
              <Commentary metadata={currentChartData.metadata}/>
            </div>
          </div>
        : <div className="flex flex-row w-full h-full items-center justify-center p-10 m-10 bg-slate-100 rounded-xl">
            <img className="w-[20%]" src="images/infographic-placeholder.svg" 
                                     alt="인포그래픽 메뉴의 대기 화면입니다."
                                     style={{opacity: 0.5, filter: 'grayscale(1)'}}/>
            <h1 className="ml-12 font-bold text-xl text-slate-500">화면에 표시할 통계 항목을 선택해주세요.</h1>
          </div>
      }
    </div>
  );
};

export default InfographicPage;