const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/back", (req, res) => {
  res.render("chat");
});

app.get("/chat", (req, res) => {
  res.render("chat");
});




app.get("/get-question", (req, res) => {
  res.render("pages/getQuestion");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});


app.get('/getQuestion', (req,res) => {
    const data = fs.readFileSync('./data/question.json', {encoding:'utf8'})
    const questions = JSON.parse(data)
    res.render('pages/getQuestion', {questions})
  })




app.post("/get-question", (req, res) => {
  const { userName, question } = req.body;

  const data = fs.readFileSync("./data/question.json", { encoding: "utf8" });
  const questions = JSON.parse(data);
  questions.push({ userName, question });
  fs.writeFileSync("./data/question.json", JSON.stringify(questions));
  //res.redirect('chat')

  res.set("Set-Cookie", "userName=" + userName);
  res.redirect("/getQuestion");
});

app.listen(8080);
