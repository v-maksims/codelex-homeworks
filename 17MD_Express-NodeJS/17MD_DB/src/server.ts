import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import connectionQuery from "./utils/connectionQuery";

type TComments = {
  comment: string;
};

type TBlogs = {
  title: string;
  content: string;
  image: string;
};

const app = express();
app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("DB work");
});

// Blogs

// get list of blogs
app.get("/blogs", (req: Request, res: Response) => {
  const allBlogs = "SELECT * FROM blogs";

  connectionQuery(res, allBlogs);
});

// new blog post
app.post("/blogs", (req: Request<null, null, TBlogs>, res: Response) => {
  const { content, image, title } = req.body;
  const postBlog = `INSERT into blogs (title, content, image) VALUES (${title}, ${content}, ${image})`;

  connectionQuery(res, postBlog);
});

// get 1 blog with full info
app.get("/blogs/:id", (req: Request, res: Response) => {
  const blogId = req.params.id;
  const blogById = `SELECT * FROM blogs WHERE blogId = ${blogId}`;

  connectionQuery(res, blogById);
});

// update blog info

app.put("/blogs/:id", (req: Request<any, any, TBlogs>, res: Response) => {
  const blogId = req.params.id;
  const { content, image, title } = req.body;
  const updateBlog = `UPDATE blogs SET content="${content}", title="${title}", image="${image}" WHERE blogId=${blogId}`

  connectionQuery(res, updateBlog)
});

// Comments

// get for blog
app.get("/comments/:id", (req: Request, res: Response) => {
  const blogId = req.params.id;
  const commentsByBlogId = `SELECT * FROM comments WHERE blog_id = ${blogId}`;
  connectionQuery(res, commentsByBlogId);
});

// post new comment for blog
app.post(
  "/comments/:id",
  (req: Request<any, any, TComments>, res: Response) => {
    const blogId = req.params.id;
    const { comment } = req.body;
    const postComment = `INSERT into comments (blog_id, comment) VALUES (${blogId}, '${comment}')`;
    connectionQuery(res, postComment);
  }
);







app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
