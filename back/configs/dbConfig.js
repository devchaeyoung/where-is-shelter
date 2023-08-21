import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const mongoURL = process.env.MONGO_URL;

function databaseConnection() {
  // mongoose 연결 - require 버전

  const db = mongoose.connection;
  mongoose.connect(mongoURL);
  db.on("connected", () =>
    console.log(`${mongoURL}정상적으로 연결되었습니다.`)
  );

  db.on("error", (error) =>
    console.error(`MongoDB 연결에 실패하였습니다.\n ${mongoURL}\n${error}`)
  );

  db.on("disconnected", () => {
    console.log(`mongoDB 연결이 끊겼습니다. 연결을 재시도 합니다.`);
    connect(mongoURL);
  });
}

export default databaseConnection;
