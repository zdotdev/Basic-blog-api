import Blog from "../model/Blog.js";

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

    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try{
        await blog.save()
    }
    catch(err){
        return console.log(err)
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
