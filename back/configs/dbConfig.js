import mongoose from "mongoose";

const ATLAS_URL_CORRECT =
  "mongodb+srv://elice_3_team:1234@cluster0.orhh1yn.mongodb.net/shelter";

function databaseConnection() {
  // mongoose 연결 - require 버전
  const db = mongoose.connection;

  mongoose.connect(ATLAS_URL_CORRECT);
  db.on("connected", () => console.log("정상적으로 연결되었습니다."));

  db.on("error", (error) =>
    console.error(
      "MongoDB 연결에 실패하였습니다.\n" + ATLAS_URL_CORRECT + "\n" + error
    )
  );

  db.on("disconnected", () => {
    console.log("mongoDB 연결이 끊겼습니다. 연결을 재시도 합니다.");
    connect(ATLAS_URL_CORRECT);
  });
}

export default databaseConnection;
