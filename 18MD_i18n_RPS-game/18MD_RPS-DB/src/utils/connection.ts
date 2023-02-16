import express from "express";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "18MD",
});

export const connectionQuery = (res: express.Response, query: string) => {
  connection.query(query, (err, result) => {
    if (err) {
      res.status(400);
      res.send(err);
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
};
