import Blog from "../model/Blog.js";
import User from "../model/User.js";
import mongoose from 'mongoose';

export const getAllBlogs = async (req, res) => {
    let blogs

    try{
        blogs = await Blog.find()
    }
    catch(err){
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({error: "No blogs found"})
    }

    return res.status(200).json({blogs})
}

export const addBlog = async (req, res) => {
    const {title, description, image, user} = req.body

    let existingUser

    try{
        existingUser = await User.findById(user)
    }
    catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({error: "Cant find user"})
    }

    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try{
        const session = await mongoose.startSession()
        session.startTransaction()
        await blog.save({session})
        existingUser.blogs.push(blog)
        await existingUser.save({session})
        await session.commitTransaction()
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error: err})
    }
    return res.status(200).json({blog})
}

export const updateBlog = async (req, res) => {
    const {title, description} = req.body
    const blogID = req.params.id
    let blog

    try{
        blog = await Blog.findByIdAndUpdate(blogID, {
            title,
            description
        })
    }
    catch(err){
        return console.log(err)
    }
    if(!blog){
        return res.status(500).json({error: "Unable to update"})
    }
    return res.status(200).json({blog})
}

export const getByID = async (req, res) => {
    const id = req.params.id
    let blog

    try{
        blog = await Blog.findById(id)
    }
    catch(err){
        return console.log(err)
    }
    if(!blog){
        return res.status(404).json({error: "Blog not found"})
    }
    
    return res.status(200).json({blog})
} 

export const deleteBlog = async (req, res) => {
    const id = req.params.id
    let blog

    try{
        blog = await Blog.findByIdAndDelete(id)
    }
    catch(err){
        return console.log(err)
    }
    if(!id){
        return res.status(400).json({error: "Can't delete blog"})
    }

    return res.status(200).json({blog})
}