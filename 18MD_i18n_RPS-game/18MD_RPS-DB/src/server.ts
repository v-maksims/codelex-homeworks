import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { TComputer, TUser, TWinner } from "./types/resBody";
import { connectionQuery } from "./utils/connection";

const app = express();
app.use("/static", express.static("public"));
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

// Post game data
app.post("/winner-info", (req: Request<any, any, TWinner>, res: Response) => {
  const { winner } = req.body;
  const winDb = `INSERT INTO win (winStatus) VALUES ('${winner}')`;
  connectionQuery(res, winDb);
});

app.post("/user-info", (req: Request<any, any, TUser>, res: Response) => {
  const { name, time, userChoice } = req.body;
  const userDb = `INSERT INTO user (name, choice, time, game_id) VALUES ('${name}', '${userChoice}', '${time}', (SELECT MAX(id) FROM win))`;
  connectionQuery(res, userDb);
});

app.post(
  "/computer-info",
  (req: Request<any, any, TComputer>, res: Response) => {
    const { computerChoice, time } = req.body;
    const computerDb = `INSERT INTO computer (choice, time, game_id) VALUES ('${computerChoice}', '${time}', (SELECT MAX(id) FROM win))`;
    connectionQuery(res, computerDb);
  }
);

// Get static
app.get("/win-static", (req: Request, res: Response) => {
  const winStatic =
    "SELECT winStatus, COUNT(*) as count FROM win GROUP BY winStatus";
  connectionQuery(res, winStatic);
});

app.get("/top-10", (req: Request, res: Response) => {
  const top =
    "SELECT name, count(*) as wins FROM win left JOIN user ON win.id = user.game_id WHERE `winStatus` = 'user' GROUP BY name ORDER BY wins DESC LIMIT 10;";
  connectionQuery(res, top);
});

app.get("/logs", (req: Request, res: Response) => {
  const logs =
    "SELECT win.id as `gameID`, `winStatus` as `win`, name, user.choice as `userChoice`, computer.choice as `computerChoice`, user.time as `time` FROM win right JOIN user ON win.id = user.game_id right JOIN computer ON win.id = computer.game_id ORDER BY gameID DESC";
  connectionQuery(res, logs);
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
