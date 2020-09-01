import express from "express";
import config from "./config";
import serverRender from "./renderers/server";
import { data } from "./testData";

const app = express(); //initialize the app

app.use(express.static("public")); //express.static middleware to serve public folder
app.set("view engine", "ejs"); //this is to let Express know that ejs will be the template language

// '/' endpoint
app.get("/", async (req, res) => {
  const initialContent = await serverRender();
  res.render("index", { ...initialContent });
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
