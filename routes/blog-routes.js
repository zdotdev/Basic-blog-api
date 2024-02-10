import express from 'express'
import { addBlog, deleteBlog, getAllBlogs, getByID, getByUserID, updateBlog } from '../controllers/blog-controller.js'

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.post("/add", addBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.get("/:id", getByID)
blogRouter.delete("/delete/:id", deleteBlog)
blogRouter.get("/user/:id", getByUserID)

export default blogRouter