import axios from "axios";

// 기상정보를 가져오는 API를 별도로 구축합니다.
// 백엔드 로직이 필요 없으므로 프론트엔드에서만 사용합니다.

const getCurrentData = async (area) => {
  
  const url = "http://api.openweathermap.org/data/2.5/weather" 
              + `?q=${area}`
              + "&units=metric"
              + "&lang=kr"
              + "&appid=7b26c92417fd3678d52eac12dc870222"
  
  console.log(`%cGET 요청: ${url}`, "color: #a25cd1;");

  return axios.get(url, {
    
  });
};

const getForecastData = async (area) => {
  
  const url = "http://api.openweathermap.org/data/2.5/forecast" 
              + `?q=${area}`
              + "&units=metric"
              + "&lang=kr"
              + "&appid=7b26c92417fd3678d52eac12dc870222"
  
  console.log(`%cGET 요청: ${url}`, "color: #a25cd1;");

  return axios.get(url, {
    
  });
};

export { getCurrentData, getForecastData };