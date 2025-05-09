const asyncHandler  = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateTokenHandler = asyncHandler(async(req,res,next) => {
    console.log("hellow wold");
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    console.log(authHeader);

    if(authHeader && authHeader.startsWith("Bearer")){
        console.log("hellow11 wold");
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,decode) => {
            console.log("decode",err);
            if(err){
                res.status(401);
                res.json({message:"Unauthorized"});
            }
        });
        console.log(decode);

    }
})

module.exports = validateTokenHandler;
