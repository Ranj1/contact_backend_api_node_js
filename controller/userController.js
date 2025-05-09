const  asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const jwt  = require("jsonwebtoken");

//@desc Register User
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler (async (req,res) => {
    
    const {username,email,password} = req.body;

    if(!username || !email || !password ){
        res.status(400);
        throw new Error("All fields are required");
    }

     const userAvailable = await User.findOne({email});
     console.log("userAvailable",userAvailable);
     if(userAvailable || userAvailable != null){
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
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler (async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("All fields are required")
    }

    const userAvailable  = await User.findOne({email});

    if(userAvailable && await bcrypt.compare(password,userAvailable.password)){
        const accessToken  = jwt.sign(
            {
            user:{
                username:userAvailable.username,
                email:userAvailable.email,
                id:userAvailable.id
            }
           },
           process.env.JWT_SECRET,
           {
            expiresIn:"1m"
           }
    );
    res.status(200).json({accessToken});
    }else{
        res.status(400);
        throw new Error("Invalid credentials");
    }
    
});


//@desc Current User
//@route POST /api/users/register
//@access private
const currentUser = asyncHandler (async (req,res) => {
    res.json({message:"User Current"});
});


module.exports = {registerUser,loginUser,currentUser};