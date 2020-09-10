const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/about", function (req, res){
  res.render("about");
});

app.get("/join_us", function (req, res){
  res.render("join_us");
});

app.get("/events", function (req, res){
  res.render("events");
});

app.get("/contact", function (req, res){
  res.render("contact");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000.");
});
