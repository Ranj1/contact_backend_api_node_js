const asyncHandler  = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateTokenHandler = asyncHandler(async(req,res,next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    
    
    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(401);
        throw new Error("User is not authorized or token is missing");
    }

    try {
        token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch(err) {
        res.status(401);
        throw new Error("User is not authorized");
    }
});

module.exports = validateTokenHandler;
