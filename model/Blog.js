import mongoose from 'mongoose';

const Schema = new mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: True
    },
    description:{
        type: String,
        required: True
    },
    image: {
        type: String,
        required: True
    },
    user:{
        type: String,
        required: True
    }
})

export default mongoose.model("Blog", blogSchema)