import axios from "axios";

// 기상청으로부터 기상정보를 가져오는 API를 별도로 구축합니다.
// 백엔드 로직이 필요 없으므로 프론트엔드에서만 사용합니다.

// 기상청 단기예보 API를 사용합니다.
// 참고 문서: https://www.data.go.kr/data/15084084/openapi.do

const serverUrl = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";

const getWeatherData = async (params = "", other = "") => {
  console.log(`%cGET 요청: ${serverUrl + params + other}`, "color: #a25cd1;");

  return axios.get(serverUrl + params + other, {
    
  });
};

export { getWeatherData };