const errorHandler =  (err,req,res,next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.json({title:"Not Found",message:err.message,stackTrace:err.stack});
    res.json({title:"Validataion Error",message:err.message,stackTrace:err.stack});
}

module.exports = errorHandler;
