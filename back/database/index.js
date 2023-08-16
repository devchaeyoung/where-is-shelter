//DB용

// <username>, <password>를 바꾸어 줍니다.
const ATLAS_URL_CORRECT =
  "mongodb+srv://elice_3_team:1234@cluster0.orhh1yn.mongodb.net/";

// mongoose 연결 - require 버전
const mongoose = require("mongoose");

// mongoose 연결 - import 버전
import mongoose from "mongoose";

mongoose.connect(ATLAS_URL_CORRECT);
db.on("connected", () => console.log("정상적으로 연결되었습니다."));
