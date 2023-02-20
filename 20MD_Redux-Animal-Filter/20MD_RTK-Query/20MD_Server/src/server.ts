import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import animals from "./schema/animals";

type TAnimal = {
  image: string;
  name: string;
  species: string;
};

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/animals");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.post("/post-animal", (req: Request<any, any, TAnimal>, res: Response) => {
  const { image, name, species } = req.body;
  animals
    .create({
      image,
      name,
      species,
    })
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.delete("/animals/:id", (req: Request, res: Response) => {
  const cardID = req.params.id;
  animals.deleteOne({ _id: cardID }).then(() => res.send("success delete"));
});

app.get("/animals", (req: Request, res: Response) => {
  animals
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.get("/animals-species", (req: Request, res: Response) => {
  animals
    .distinct("species")
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.get("/animals/:species", (req: Request, res: Response) => {
  const filterSpecies = req.params.species;
  animals
    .find({ species: filterSpecies })
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
