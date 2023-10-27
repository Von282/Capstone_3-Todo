import express from "express";
import bodyParser from "body-parser";

let app = express();
let port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let dailyTasks = [];
let workTasks = [];

app.get("/", (req, res) => {
    // let d = new Date();
    
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    

    res.render("index.ejs", {
        day: new Date().toDateString().slice(0,3),
        numDay: new Date().toDateString().slice(8,10),
        month: new Date().toDateString().slice(4,7),
        year: new Date().toDateString().slice(11),
        taskItems: dailyTasks
    });
});

app.post("/", (req, res) => {
    dailyTasks.push(req.body["task"]);

    res.render("index.ejs", {
        day: new Date().toDateString().slice(0,3),
        numDay: new Date().toDateString().slice(8,10),
        month: new Date().toDateString().slice(4,7),
        year: new Date().toDateString().slice(11),
        taskItems: dailyTasks
    });

    // console.log(req.body["task"]);
});


app.get("/work", (req, res) => {

    res.render("work.ejs", {
        day: new Date().toDateString().slice(0,3),
        numDay: new Date().toDateString().slice(8,10),
        month: new Date().toDateString().slice(4,7),
        year: new Date().toDateString().slice(11),
        workTaskItems: workTasks
    });
});

app.post("/work", (req, res) => {
    workTasks.push(req.body["task"]);

    res.render("work.ejs", {
        day: new Date().toDateString().slice(0,3),
        numDay: new Date().toDateString().slice(8,10),
        month: new Date().toDateString().slice(4,7),
        year: new Date().toDateString().slice(11),
        workTaskItems: workTasks
    });
});

app.listen(port, () => {
    console.log("Server Running on port " + port);
});