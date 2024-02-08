import express from 'express'
import { addBlog, getAllBlogs, getByID, updateBlog } from '../controllers/blog-controller.js'

const blogRouter = express.Router()

blogRouter.get("/", getAllBlogs)
blogRouter.post("/add", addBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.get("/:id", getByID)
blogRouter.delete("/:id")

export default blogRouter