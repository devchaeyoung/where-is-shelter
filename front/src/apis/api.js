import axios from "axios";

// [테스트] Mock API가 필요하다면 json-server를 사용합니다.
// 실행 명령어: $ npx json-server ./db.json --port 5000

const backendPortNumber = "5000";
const serverUrl = "http://" + window.location.hostname + ":" + backendPortNumber + "/";

async function postData(endpoint, params = "", other = "", data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  console.log(`%cPOST 요청: ${serverUrl + endpoint + "/" + params + other}`, "color: #296aba;");
  console.log(`%cPOST 요청 데이터: ${data}`, "color: #296aba;");

  return axios.post(serverUrl + endpoint + "/" + params + other, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

// [긴급] 백엔드로부터 쉼터 데이터를 가져오는것 먼저 최우선적으로 구현합니다.
const getData = async (endpoint, params = "", other = "") => {
  console.log(
    `%cGET 요청: ${serverUrl + endpoint + "/" + params + other}`,
    "color: #a25cd1;"
  );

  return axios.get(serverUrl + endpoint + "/" + params + other, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
};

async function putData(endpoint, params = "", other = "", data) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);
  console.log(`%cPUT 요청: ${serverUrl + endpoint + "/" + params + other}`, "color: #059c4b;");
  console.log(`%cPUT 요청 데이터: ${bodyData}`, "color: #059c4b;");

  return axios.put(serverUrl + endpoint + "/" + params + other, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,
// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.
async function deleteData(endpoint, params = "", other = "") {
  console.log(`DELETE 요청 ${serverUrl + endpoint + "/" + params + other}`);
  return axios.delete(serverUrl + endpoint + "/" + params + other, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { getData, postData, putData, deleteData };
