const express = require("express");
const  routes  = require("./routers/taskRouters");

const app = express();
const port = 3000;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks",routes);


app.listen(port, () => {
    console.log("application running on port : ", port);
});

