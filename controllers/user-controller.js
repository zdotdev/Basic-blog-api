import User from "../model/User.js";
import bcrypt from 'bcryptjs'

export const getAllUser = async(req, res) => {
    let users

    try{
        users = await User.find() 
    }
    catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404).json({error: "No user"})
    }
    return res.status(200).json({users}) 
}

export const signup = async(req, res) => {
    const {name, email, password} = req.body
    let existingUser

    try{
        existingUser = await User.findOne({email})
    }
    catch(err){
        return console.log(err)
    }
    
    if(existingUser){
        return res.status(400).json({error: "Existing User"})
    }
    
    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: []
    }) 
    
    try{
        await user.save()
    }
    catch(err){
        return console.log(err);
    }
    return res.status(201).json({user})
}

export const login = async (req, res) => {
    const {email, password} = req.body

    let existingUser

    try{
        existingUser = await User.findOne({email})
    }
    catch(err){
        return console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({error: "Can't find the user"})
    }

    const passwordIsCorrect= bcrypt.compareSync(password, existingUser.password)

    if(!passwordIsCorrect){
        return res.status(400).json({error: "Incorrect password"})
    }
    return res.status(200).json({message: "Login successful"})
}