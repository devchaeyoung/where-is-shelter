import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import 'chart.js/auto';

import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

function BarGraph (props) {
  return(
    <Bar
      data={props.chartData}
    />
  )
}

function LineGraph (props) {

  return(
    <Line
      data={props.chartData}
    />
  )
}

const Graph = (props) => {

  const chartType = props.chartType;

  return (
    <div className="w-full h-full">
      {chartType === "bar" &&
      <BarGraph chartData={props.chartData} />
      }

      {chartType == "line" &&
      <LineGraph chartData={props.chartData} />
      }
    </div>
  )

};

export default Graph;