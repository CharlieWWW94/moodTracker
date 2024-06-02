import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import moodsRouter from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/moods', moodsRouter);

app.get( "/", (_req: Request, res: Response) => {
  res.send("Server works mateyboy");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});


