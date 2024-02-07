import User from "../model/User.js";

export const getAllUser = async(req, res) => {
    let users

    try{
        users = await User.find() 
    }
    catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404)
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
        return res.status(400)
    }
    
    const user = new User({
        name,
        email,
        password
    }) 
    
    try{
        await user.save()
    }
    catch(err){
        return console.log(err);
    }
    return res.status(201).json({user})
}