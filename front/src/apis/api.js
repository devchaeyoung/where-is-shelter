import axios from "axios";

// [테스트] json-server를 사용합니다.
// 실행 명령어: $ npx json-server ./db.json --port 3333
const backendPortNumber = "3333";
const serverUrl = "http://" + window.location.hostname + ":" + backendPortNumber;

/*
// 리뷰 작성하기
const postData = async (userId, FieldName, newData) => {
  const bodyData = JSON.stringify(newData);

  console.log(
    `%cPOST 요청:${serverUrl}/user/${userId}/${FieldName}s`,
    "color: #296aba;"
  );
  console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

  return axios.post(`${serverUrl}/users/${userId}/${FieldName}s`, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
};
*/

// [긴급] 백엔드로부터 쉼터 데이터를 가져오는것 먼저 최우선적으로 구현합니다.

const getData = async (district) => {
  console.log(
    `%cGET 요청: ${serverUrl}/${district}`,
    "color: #a25cd1;"
  );

  return axios.get(`${serverUrl}/${district}`, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
};


/*
// userId의 FieldName 필드에 data 업데이트하기
const updateData = async (documentId, FieldName, updateData) => {
  const bodyData = JSON.stringify(updateData);

  console.log(
    `%cPUT 요청: ${serverUrl}/${FieldName}s/${documentId}s`,
    "color: #059c4b;"
  );
  console.log(`%cPUT 요청 데이터: ${bodyData}`, "color: #059c4b;");

  return axios.put(`${serverUrl}/${FieldName}s/${documentId}`, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
};

// userId의 FieldName 필드에 data 삭제하기
const deleteData = async (documentId, FieldName) => {
  console.log(
    `%cDEL 요청: ${serverUrl}/${FieldName}s/${documentId}`,
    "color: #00d9ff;"
  );

  axios.delete(`${serverUrl}/${FieldName}s/${documentId}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
};

*/

export { getData };