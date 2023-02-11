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
  res.send("DB work");
});

app.get("/blogs", (req: Request, res: Response) => {
  const allBlogs = "SELECT * FROM blogs";

  connection.query(allBlogs, (err, result, field) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
});

app.get("/blogs/:id", (req: Request, res: Response) => {
  const blogId = req.params.id;

  const blogById = `SELECT * FROM blogs WHERE blogId = ${blogId}`;

  connection.query(blogById, (err, result, field) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
});

app.get("/comments/:id", (req: Request, res: Response) => {
  const blogId = req.params.id;
  const commentsByBlogId = `SELECT * FROM comments WHERE blog_id = ${blogId}`;
  connection.query(commentsByBlogId, (err, result, field) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
});

app.get("/comments", (req: Request, res: Response) => {
  const allComments = "SELECT * FROM comments";

  connection.query(allComments, (err, result, field) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
});

type TBlogs = {
  title: string;
  content: string;
  image: string;
};

app.post("/blogs", (req: Request<null, null, TBlogs>, res: Response) => {
  const { content, image, title } = req.body;
  const postBlog = `INSERT into blogs (title, content, image) VALUES (${title}, ${content}, ${image})`;
  connection.query(postBlog, (err, result, field) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
});

type TComments = {
  comment: string;
};

app.post(
  "/comments/:id",
  (req: Request<any, any, TComments>, res: Response) => {
  const blogId = req.params.id;
    const {comment} = req.body
  const postComment = `INSERT into comments (blog_id, comment) VALUES (${blogId}, '${comment}')`;
  connection.query(postComment, (err, result, field) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.json(result);
    }
  });
  }
);

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
