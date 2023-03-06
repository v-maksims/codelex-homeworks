import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import animals from "./schema/animals";
import movies from "./schema/movies";

type TAnimal = {
  image: string;
  category: string;
};

type TMovie = {
  title: string;
  image: string;
  year: number;
};

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/angular-25md");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

// Movies

app.get("/movies", (req: Request, res: Response) => {
  movies
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.post("/movies", (req: Request<any, any, TMovie>, res: Response) => {
  const { body } = req;
  movies
    .create(body)
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

// Animals

app.get("/animals/category/:category", (req: Request, res: Response) => {
  const animalCategory = req.params.category;
  animals
    .find({ category: animalCategory })
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.delete("/animals/:id", (req: Request, res: Response) => {
  const animalID = req.params.id;
  animals
    .deleteOne({ _id: animalID })
    .then(() => res.json("success delete"))
    .catch((err) => res.send(err));
});

app.post("/animals", (req: Request<any, any, TAnimal>, res: Response) => {
  const animalBody = req.body;
  animals
    .create(animalBody)
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
