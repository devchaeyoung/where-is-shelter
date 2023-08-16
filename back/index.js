const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
모;

const ATLAS_URL_CORRECT =
  "mongodb+srv://elice_3_team:1234@cluster0.orhh1yn.mongodb.net/";

// mongoose 연결 - require 버전
const mongoose = require("mongoose");

mongoose.connect(ATLAS_URL_CORRECT);
db.on("connected", () => console.log("정상적으로 연결되었습니다."));
