import express, { Router } from "express";
import Mood from "../db/models/mood";


const moodsRouter: Router = express.Router();


moodsRouter
  .get("/", (_req, res) => {
    res.send(Mood.findAll());
  });

export default moodsRouter;

