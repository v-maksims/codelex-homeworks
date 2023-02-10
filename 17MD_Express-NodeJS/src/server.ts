import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { createConnection } from "net";
// import mysql from "mysql";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "blog_db",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log("connected");
});

const app = express();
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
