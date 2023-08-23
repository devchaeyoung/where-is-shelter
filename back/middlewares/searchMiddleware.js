import express from "express";
import mongoose from "mongoose";

const decodeMiddleware = (req, res, next) => {
  if (req.params && req.params.search) {
    req.params.search = decodeURIComponent(req.params.search);
  }
  next();
};

export default decodeMiddleware;
