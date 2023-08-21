import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "../configs/dbConfig";

const app = express();
dotenv.config();
db();
const port = process.env.SERVER_PORT;
const whitelist = {
  origin: "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode",
  optionsSucessStatus: 200,
};

// function CorsMiddleware() {
//   app.use(express.json());
//   app.use(cors(whitelist));
//   // CORS 에러시 호출
//   app.get("/", function (req, res, next) {
//     res.json({ msg: `This is CORS-enabled for all origins!` });
//   });

//   app.listen({ port }, function () {
//     console.log(`CORS-enabled web server listening on port ${port}`);
//   });
// }

export default CorsMiddleware;
