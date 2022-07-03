const express = require("express");
const ejs = require("ejs");
const app = express();

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs"); // setting view engine of app to ejs.

app.use(express.static("public")); // for serving static folder containing css and image files.


var list_items = ['Buy Food','Cook Food','Eat Food'];

let workItems = [];

var day = new Date();
// we created a new object of date and using that object we call getDay method which return a no. from 0 to 6 based on week days
// var weekDayNum = day.getDay();

// to get required format date we will use date object how it is going u can see in stack-verflow also.

var options = {weekday: "long",day: "numeric",month: "long"};

weekDay = day.toLocaleDateString("locales",options); // passing the option we created in which we want to rander the date/.



app.get("/", function (req, res) {

  res.render("index", { post: '/',Title: weekDay , new_list_item: list_items}); // render option of ejs in place of send. now this will render the index.ejs page in views directory and change the variables value their to the data passed here in form of key value pairs.
});


app.post('/',function(req,res){
    list_item = req.body.list_item;
    list_items.push(list_item); // pushing list_item to list_items array.
    res.redirect('/');
});

app.get('/work',function(req,res){
  res.render('index', {post: '/work',Title : "Work" , new_list_item: workItems})
});

app.post('/work',function(req,res){
  workItem = req.body.list_item;
  workItems.push(workItem); // pushing list_item to list_items array.
  res.redirect('/work');
});

app.get('/about',function(req,res){
  res.render('about');
});

app.listen(3000 || process.env.PORT, function () {
  console.log("Server have started on port 3000");
});
