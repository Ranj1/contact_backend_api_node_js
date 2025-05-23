const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true

    },
    name:{
            type:String,
            required: [true,"Please add a name"]
        },
    email:{
        type:String,
        required: [true,"Please add a email"]

    },
    phone:{
        type:String,
        required: [true,"Please add a phone"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model("contacts",contactSchema);