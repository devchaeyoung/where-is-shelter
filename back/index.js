import express from "express";
import cors from "cors";
import db from "./configs/dbConfig";
import { shelterRouter } from "./routers/shelterRouter";
import { reviewRouter } from "./routers/reviewRouter";
const userRouter = require("./routers/userRouter");

require("dotenv").config();
db();

const port = process.env.SERVER_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(shelterRouter);
app.use(userRouter);
app.use(reviewRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
