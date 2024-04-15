const {Schema, mongoose} = require("mongoose");


const friendListSchema = new Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    state:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    age:{
        type:String,
        require:true,
    },
})


const friendList = new mongoose.model("friendlist",friendListSchema);


module.exports = friendList;







