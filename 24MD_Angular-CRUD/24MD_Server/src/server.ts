import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import animals from "./schema/animals";

type TAnimal = {
  image: string;
  category: string;
};

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/angular-animals");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.get("/animals", (req: Request, res: Response) => {
  animals
    .find()
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
