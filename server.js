const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config()

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use("/api/users" , require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log("server is running on port", port);
});




