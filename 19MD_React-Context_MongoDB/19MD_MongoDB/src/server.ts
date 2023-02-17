/* eslint-disable @typescript-eslint/ban-ts-comment */
import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import ToDo from "./schemas/todo";

type TTodoBody = {
  title: string;
  content: string;
};

type TIsDone = {
  id: string;
  isDone: boolean;
};

mongoose.connect("mongodb://localhost:27017/todo");

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.post("/post-todo", (req: Request<any, any, TTodoBody>, res: Response) => {
  const { content, title } = req.body;
  ToDo.create({
    title,
    content,
  });
  res.send("created");
});

app.get("/get-todo", (req: Request, res: Response) => {
  ToDo.find()
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.put("/update-done", (req: Request<any, any, TIsDone>, res: Response) => {
  const { id, isDone } = req.body;
  ToDo.updateOne({ _id: id }, { $set: { isDone } })
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

app.delete(
  "/delete-todo",
  (req: Request<any, any, { id: string }>, res: Response) => {
    const { id } = req.body;
    ToDo.deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.send(error));
  }
);

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
