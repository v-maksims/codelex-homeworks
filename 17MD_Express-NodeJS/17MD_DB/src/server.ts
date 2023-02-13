import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import connectionQuery from "./utils/connectionQuery";
import multer from "multer";
import path from "path";

type TComments = {
  comment: string;
};

type TBlogs = {
  title: string;
  content: string;
  image: string;
};

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use("/static", express.static("public"));
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

// new blog image
app.post(
  "/upload-image",
  upload.single("image"),
  (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const allFrom = `UPDATE blogs SET image ='/static/${req.file.filename}' ORDER BY blogId DESC LIMIT 1`;

    connectionQuery(res, allFrom);
  }
);

// new blog post
app.post("/blogs", (req: Request<null, null, TBlogs>, res: Response) => {
  const { content, title } = req.body;
  const postBlog = `INSERT into blogs (title, content) VALUES ("${title}", "${content}")`;
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
  const { content, title } = req.body;
  const updateBlog = `UPDATE blogs SET content="${content}", title="${title}" WHERE blogId=${blogId}`;

  connectionQuery(res, updateBlog);
});

// Delete blog
app.delete("/blogs/:id", (req: Request<any, any, TBlogs>, res: Response) => {
  const blogId = req.params.id;
  const deleteBlog = `DELETE FROM blogs WHERE blogId=${blogId}`;
  connectionQuery(res, deleteBlog);
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
