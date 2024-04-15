// const FriendList = require("../models/FriendList-model");
const FriendList = require("../model/friendlist-model")

// LOGIC TO GET ALL FriendList
const getAllUsers = async(req,res) => {
    try {
        const UserList = await FriendList.find({},{password:0});
        // console.log(UserList);
        if(!UserList || UserList.length===0){
            return res.status(404).json({message:"No UserList found"});
        }
        return res.status(200).json(UserList);
    } catch (error) {
        next(error);
    }
}

// LOGIC TO GET SINGLE Shop DATA     
const getUserById = async(req,res) => {
    try {
        const id = req.params.id;
        const data = await FriendList.findOne({_id: id}, {password: 0});
        return res.status(200).json(data);
        // return res.status(200).json({message:"User updated successfully"});
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllUsers,getUserById};

