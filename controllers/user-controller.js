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