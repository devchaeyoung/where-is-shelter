import express from "express";
import dotenv from "dotenv";
import db from "./models/index";

dotenv.config();
db();

const app = express();

const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
