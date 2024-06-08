import express, { Router } from "express";
import { indexMood, postMood, showMood, updateMood } from "../controllers"
import asyncHandler from "express-async-handler";

const moodsRouter: Router = express.Router();

moodsRouter.get("/", asyncHandler(indexMood));
moodsRouter.post("/", asyncHandler(postMood));
moodsRouter.get("/:moodId", asyncHandler(showMood));
moodsRouter.patch("/:moodId", asyncHandler(updateMood));

export default moodsRouter;

