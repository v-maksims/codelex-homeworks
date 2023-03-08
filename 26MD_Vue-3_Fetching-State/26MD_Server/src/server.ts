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
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err));
});

app.post("/jokes", (req: Request<any, any, TPostJoke>, res: Response) => {
  const { body } = req;

  favoriteJokes
    .findOne({ joke: body.joke })
    .then((data) => {
      if (!data) {
        favoriteJokes
          .create(body)
          .then((data) => res.status(201).json(data))
          .catch((err) => res.status(500).send(err));
        return;
      }
      res.status(409).send("Joke already exists in MongoDB");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete("/jokes/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  favoriteJokes
    .deleteOne({ _id: id })
    .then(() => res.status(200).send("Joke deleted success"))
    .catch((err) => res.status(500).send(err));
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
