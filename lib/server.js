import express from "express";
import config from "./config";

const app = express(); //initialize the app

app.use(express.static("public")); //express.static middleware to serve public folder
app.set("view engine", "ejs"); //this is to let Express know that ejs will be the template language

// '/' endpoint
app.get("/", (req, res) => {
  res.render("index", { answer: 42 });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
