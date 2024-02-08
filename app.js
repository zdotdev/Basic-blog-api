// import express
import express from 'express'

// import mongoose
import mongoose from 'mongoose'

// Importing user route
import router from './routes/user-routes.js';

// import blog route
import blogRouter from './routes/blog-routes.js';

// declare app
const app = express();

// declaring port
const port = 3000

// convert all the post request into json file
app.use(express.json())

// using router with /api/user path
app.use("/api/user",router)

// Use blog router
app.use("/api/blogs", blogRouter)

// use mongoose to connect to the mongoDB
mongoose.connect("mongodb+srv://admin:weakpassword@cluster0.dtfunjp.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    // to listen to the port
    app.listen(port)
})
.then(() => {
    console.log("connected")
})
.catch((err) => {
    console.log(err)
})

// testing 
app.get("/api", (req, res) => {
    res.send("test")
})