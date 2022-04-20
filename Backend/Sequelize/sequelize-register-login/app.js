const express = require("express");
const session = require("express-session");
const User = require("./models/User");
require("dotenv").config();
const hash = require("bcryptjs");
const bcrypt = require("bcryptjs/dist/bcrypt");

const app = express();
const PORT = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.set('view engine', 'ejs')
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))

function generateHash(password) {
  const hash = bcrypt.hashSync(password);
  return hash;
}

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  let hash = generateHash(password);
  const user = await User.create({ email, password: hash });
  // res.send('user inserted!')
  res.send(hash);
  console.log(hash);
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  const login = await User.findOne({ where: { email: email } });
  console.log(login);
  const result = bcrypt.compareSync(password, login.password);
  console.log(result);
  if (result) {
    res.send("You are loged in!");
  } else {
    res.send("errrrroooorrrrr");
  }
});

// let count = 0;

// app.get('/', (req,res)=>{
//     // count++
//     if(req.session.counter){
//         req.session.counter++
//     }else{
//         req.session.counter = 1
//     }
//     res.render('index', {count: req.session.counter})
//     console.log(req.session);
// })

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});
