const mongoose = require("mongoose");

const connectDB =  async () => {
     try{
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("MongoDB connected:", conn.connection.host,conn.connection.name)

      }catch(error){
        console.log("Mongoose connection error", error);
        process.exit(1);
     }
}

module.exports = connectDB;