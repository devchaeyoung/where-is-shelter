import { Router } from "express";
import ShelterController from "../controllers/shelterController";

const districtRouter = Router({ mergeParams: true });

// get 라우팅 추가
districtRouter.get("/", (req, res) => {
  const { id } = req.prams;
  res.send(`Finding district ${id}`);
});

module.exports = districtRouter;
