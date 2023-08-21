import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./configs/dbConfig";
import cors from "cors";
import { shelterRouter } from "./routers/shelterRouter";
const userRouter = require("./routers/userRouter")

dotenv.config();
db();
const port = process.env.SERVER_PORT;

const app = express();

app.use(cors())
app.use(express.json());

app.use(shelterRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
