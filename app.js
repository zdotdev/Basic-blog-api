// import express
import express from 'express'

// import mongoose
import mongoose from 'mongoose'

// Importing route
import router from './routes/user-routes.js';

// importing mongodb
import mongodb from 'mongodb'

// declare app
const app = express();

// declaring port
const port = 3000

// using router with /api/user path
app.use("/api/user",router)

// use mongoose
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