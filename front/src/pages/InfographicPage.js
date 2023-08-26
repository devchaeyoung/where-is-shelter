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
    setCurrentChartType(chartData.type);
  }

  
  return (
    <div className="flex flex-col w-full h-full">
      <div id="infographic-toolbar" className="flex flex-row justify-between items-center h-8 px-8 mb-3">
        <ChartItemSelector handleState={handleCurrentChartItemState} />
      </div>
      {currentChartItem
        ? <div className="flex flex-row grow w-full max-h-[calc(100vh-16rem)]">
            <div className="w-[40vw] h-full my-5 ml-10 mr-5 p-10 bg-slate-100 rounded-xl">
              <Graph chartData={currentChartData} chartType={currentChartType} />
            </div>
            <div className="w-[60vw] h-full my-5 mr-10 ml-5 p-10 bg-slate-100 rounded-xl">
              <Commentary title={currentChartData.title} summaryData={currentChartData.summary} commentaryData={currentChartData.commentary}/>
            </div>
          </div>
        : <div className="flex flex-col w-full h-full items-center justify-center">표시할 통계 항목을 선택해주세요.</div>
      }
    </div>
  );
};

export default InfographicPage;