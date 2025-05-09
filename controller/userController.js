const  asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
//@desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler (async (req,res) => {
    //console.log(req.body);
    const {username,email,password} = req.body;

    if(!username || !email || !password ){
        res.status(400);
        throw new Error("All fields are required");
    }

     const userAvailable = await User.findOne({email});
     if(userAvailable || userAvailable == null){
        res.status(400);
        throw new Error("User alredy exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create(
        {
            username,
            email,
            password:hashedPassword
       });

    if(user){
        res.status(201).json({message:"User Register",_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("User not created");
    }
});

//@desc Login User
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler (async (req,res) => {
    const {email,password} = req.body;
    res.json({message:"User Login"});
});


//@desc Current User
//@route POST /api/users/register
//@access private
const currentUser = asyncHandler (async (req,res) => {
    res.json({message:"User Current"});
});


module.exports = {registerUser,loginUser,currentUser};