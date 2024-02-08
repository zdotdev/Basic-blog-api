import express from 'express'
import { addBlog, deleteBlog, getAllBlogs, getByID, updateBlog } from '../controllers/blog-controller.js'

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.post("/add", addBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.get("/:id", getByID)
blogRouter.delete("/:id", deleteBlog)

export default blogRouter