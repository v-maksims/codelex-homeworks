import { Request, Response } from "express";

import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import favoriteJokes from "./favoriteJoke";

type TPostJoke = {
  category: string;
  joke: string;
};

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/angular-26md");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/jokes", (req: Request, res: Response) => {
  favoriteJokes
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.post("/jokes", (req: Request<any, any, TPostJoke>, res: Response) => {
  const { body } = req;
  console.log(body);
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
