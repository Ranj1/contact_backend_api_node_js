const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please ad a username"]
    },

    email:{
         type:String,
         required:[true,"Please ad a email"],
    },

    password:{
        type:String,
        required:[true,"Please ad a password"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("users",userSchema);