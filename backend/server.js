const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/attendances", require("./routes/attendanceRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    //`` these are backticks and not single quotes. In JS string interpolation works only with backticks
    
    //string interpolation- String interpolation is a feature in many programming languages that allows 
    //you to embed expressions or variables directly within string literals. 
    //This makes it easier to create dynamic strings without needing to concatenate multiple parts together explicitly.

    //Here ${port} embeds the value of port

    console.log(`Server running on port ${port}`);
});