import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
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

  if(props.chartType == "bar"){
    return (
      <div>
        <BarGraph chartData={props.chartData}/>
      </div>
    );
  }

  else if(props.chartType == "line"){
    return (
      <div>
        <LineGraph chartData={props.chartData}/>
      </div>
    );
  }

};

export default Graph;