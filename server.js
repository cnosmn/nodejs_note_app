const express = require("express");
const  routes  = require("./routers/taskRouters");

const connectDB = require("./db/connect");
require('dotenv').config();

const app = express();
const port = 3000;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks",routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("application running on port : ", port);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

