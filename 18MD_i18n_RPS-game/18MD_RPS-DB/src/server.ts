import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "18MD",
});

const connectionQuery = (res: express.Response, query: string) => {
  connection.query(query, (err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
      console.log(err);
    }
    if (result) {
      res.json(result);
      res.end();
    }
  });
};

type TWinner = {
  winner: string;
};
type TUser = {
  name: string;
  userChoice: string;
  time: string;
};
type TComputer = {
  computerChoice: string;
  time: string;
};

const app = express();
app.use("/static", express.static("public"));
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.post("/user-info", (req: Request<any, any, TUser>, res: Response) => {
  const { name, time, userChoice } = req.body;
  const userDb = `INSERT INTO user (name, choice, time) VALUES ('${name}', '${userChoice}', '${time}')`;
  connectionQuery(res, userDb);
});

app.post("/winner-info", (req: Request<any, any, TWinner>, res: Response) => {
  const { winner } = req.body;
  const winDb = `INSERT INTO win (winStatus, game_id) VALUES ('${winner}', LAST_INSERT_ID())`;
  connectionQuery(res, winDb);
});

app.post(
  "/computer-info",
  (req: Request<any, any, TComputer>, res: Response) => {
    const { computerChoice, time } = req.body;
    const computerDb = `INSERT INTO computer (choice, time) VALUES ('${computerChoice}', '${time}')`;
    connectionQuery(res, computerDb);
  }
);

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
