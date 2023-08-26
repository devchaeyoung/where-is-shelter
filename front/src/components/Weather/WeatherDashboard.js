import { React, useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDroplet } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

import * as WeatherApi from "../../apis/weatherApi";

function WeatherDashboard (props) {

  // 현재 시간을 나타내는 타임스탬프를 정의합니다.
  // [참고] YYYY-MM-DD HH-mm-ss 포맷을 사용하는 남아프리카공화국 로케일을 임시로 사용합니다.
  const now = new Date();
  const timestamp = now.toLocaleString('af-ZA');

  // 사용자가 선택한 특정 지역의 기상정보 데이터를 백엔드로부터 받아와서 상태값으로써 저장합니다.
  const [districtCurrentData, setDistrictCurrentData] = useState();
  const [districtForecastData, setDistrictForecastData] = useState();

  // 백엔드로부터 데이터를 받아오고 있는지를 체크하는 상태값입니다.
  const [isFetching, setIsFetching] = useState(true);

  // 백엔드로부터 데이터를 받아오다가 오류가 발생했는지를 체크하는 상태값입니다.
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDistrictWeatherData = async () => {
      try{
        setIsFetching(true);
        // OpenWeatherMap에서는 시/군/구별 기상정보를 제공하지 않으므로 지금은 요청이 '서울특별시'로 hardcoded 된 상태입니다.
        const resCurrent = await WeatherApi.getCurrentData('Seoul');
        setDistrictCurrentData(resCurrent.data);
        const resForecast = await WeatherApi.getForecastData('Seoul');
        setDistrictForecastData(resForecast.data);
        setIsFetching(false);
      } catch (err) {
        // 만약에 에러가 발생하게 되면 데이터 로딩 상황을 알려주는 placeholder 아래에 에러 메세지가 추가됩니다.
        setError(`${err.name} : ${err.message}`);
        alert(`데이터를 가져오는 도중 에러가 발생했습니다: ${err}`);
        return;
      }
    }
    fetchDistrictWeatherData();
  }, [error, props.currentDistrict]);

  if (isFetching) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터를 가져오는 중입니다...</p>
        <p className="font-bold text-lg">{error}</p>
      </div>
    );
  }

  if (!districtCurrentData || !districtForecastData){
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="font-bold text-lg">데이터가 도착할때까지 잠시만 기다려주세요...</p>
      </div>
    );
  }


  return (
    <div className="flex flex-col">
      <div className="flex-none">
        <p className=" mx-7 text-slate-500">{timestamp} 기준 OpenWeatherMap 제공 정보입니다.</p>
      </div>
      <div id="weather-dashboard-content" className="grid grid-cols-4 grid-rows-3 gap-5 p-5">
        
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex flex-row items-center w-full bg-red-500 p-10">
          <FontAwesomeIcon icon={faCloudSun} size="3x" />
          <div className="flex flex-col ml-8 text-white items-center">
            <h2 className="font-bold text-lg">현재 날씨</h2>
            <h1 className="font-bold text-2xl">{districtCurrentData.weather[0].description}</h1>
          </div>
        </div>

        <div className="col-start-3 col-end-4 row-start-1 row-end-2 flex flex-row items-center w-full bg-red-500 p-10">
          <FontAwesomeIcon icon={faCloudSun} size="3x" />
          <div className="flex flex-col ml-8 text-white items-center">
            <h2 className="font-bold text-lg">현재 날씨</h2>
            <h1 className="font-bold text-2xl">{districtCurrentData.weather[0].description}</h1>
          </div>
        </div>

        <div className="col-start-4 col-end-5 row-start-1 row-end-2 flex flex-row items-center w-full bg-red-500 p-10">
          <FontAwesomeIcon icon={faCloudSun} size="3x" />
          <div className="flex flex-col ml-8 text-white items-center">
            <h2 className="font-bold text-lg">건강 적신호</h2>
            <h1 className="font-bold text-2xl">상태</h1>
          </div>
        </div>

        <div className="col-start-1 col-end-3 row-start-2 row-end-3 flex flex-row items-center bg-orange-500 p-10">
          <FontAwesomeIcon icon={faTemperatureHalf} size="3x" />
          <div className="flex flex-row ml-8 text-white items-center">
            <h2 className="font-bold text-lg">현재 기온</h2>
            <h1 className="ml-5 font-bold text-3xl">{districtCurrentData.main.temp}°C</h1>
          </div>
        </div>

        <div className="col-start-3 col-end-5 row-start-2 row-end-3 flex flex-row items-center bg-lime-500 p-10">
          <FontAwesomeIcon icon={faHandHoldingDroplet} size="3x" />
          <div className="flex flex-row ml-8 text-white items-center">
            <h2 className="font-bold text-lg">현재 습도</h2>
            <h1 className="ml-5 font-bold text-3xl">{districtCurrentData.main.humidity}%</h1>
          </div>
        </div>

        <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex flex-row items-center bg-sky-600 p-10">
          <FontAwesomeIcon icon={faUmbrella} size="3x" />
          <div className="flex flex-row ml-8 text-white items-center">
              <h2 className="font-bold text-lg">강우량</h2>
              {/* OpenWeatherMap에서 제공하는 3시간 단위의 5일치 예보 중에서, 현재 시간에 가장 가까운 3시간 예보의 인덱스인 0을 사용합니다. */}
              {/* OpenWeatherMap에서는 타임스탬프에 UTC+0 시간대를 사용하고 있습니다. */}
              <h1 className="ml-5 font-bold text-3xl">{districtForecastData.list[0].pop}</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WeatherDashboard;