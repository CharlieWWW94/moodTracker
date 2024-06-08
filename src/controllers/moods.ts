import { Request, Response } from "express";
import Mood from "../db/models/mood";

export async function indexMood(_req: Request, res: Response): Promise<void> {
  const allMoods = await Mood.findAll();

  res.send(allMoods);
};

export async function postMood(req: Request, res: Response): Promise<void> {
  const name: string = req.body["moodName"];
  const newMood = await Mood.create({name: name});

  res.send(newMood);
};

export async function showMood(req: Request, res: Response): Promise<void> {
  const moodId: string = req.params["moodId"]
  const mood = await Mood.findOne({ where: { id: moodId } });

  res.send(mood);
};

export async function updateMood(req: Request, res: Response): Promise<void> {
  const moodId: string = req.params["moodId"];
  const moodName: string = req.body["moodName"];

  const updatedMood = await Mood.update(
    { name: moodName },
    { where: { id: moodId } }
  );

  res.send(updatedMood);
};



