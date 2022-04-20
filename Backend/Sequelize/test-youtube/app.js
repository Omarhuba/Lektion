const express = require("express");
const sequelize = require("./database/database");
const User = require("./Tabellers/User");
const messages = require("./Tabellers/messages");
const { destroy } = require("./Tabellers/User");
const PORT = 8080;
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');

sequelize.sync({ force: true }).then(() => {
  console.log("db is ready!");
});

app.use(express.json());



// app.get('/', (req,res)=>{
//   res.render('pages/index')
// })


//create post users
app.post("/users", async (req, res) => {
  const data = await User.create(req.body);
  res.send(data);
  // res.send('user inserted!');
  // console.log(data);
});


//get all users
app.get("/users", async (req, res) => {
  const allUser = await User.findAll();
  res.render('pages/index', {allUser});
  // console.log(allUser);
});


//create post messages 
app.post("/messages", async (req, res) => {
  const Usermessage = await messages.create(req.body);
  res.send(Usermessage);
  // console.log(Usermessage);
});


//get user with :id
app.get('/users/:id', async(req,res)=>{
    const id = req.params.id
    const user = await User.findOne({ where : {id:id}})
    res.send(user)
  })
  
  
  //get all messages
  app.get("/messages", async (req, res) => {
    const allMessages = await messages.findAll();
    res.send(allMessages);
  });
  
  
  // update user (username, useremail, userpassword) 
  app.put('/users/:id', async(req,res)=>{
  const updateId = req.params.id
  const user = await User.findOne({ where : {id:updateId}})
  user.username = req.body.username
  user.useremail = req.body.useremail
  user.userpassword = req.body.userpassword
  await user.save()
  res.send('updated!')  
})



// delete user
app.delete('/users/:id', async(req,res)=>{
  const id = req.params.id
  await User.destroy({ where: {id:id}})
  res.send('removed!')
})


app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});
