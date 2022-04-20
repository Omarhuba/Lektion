const Datastore = require("nedb-promises");
const database = Datastore.create("./database/dev.db");

// async function data(){
//    await database.insert([{
//         "name": "hello",
//         "email": "hello@gmail.com"
//     },{
//         "name": "heasdasdllo",
//         "email": "hello@gmail.com"
//     },{
//         "name": "aada",
//         "email": "hello@gmail.com"
//     }])

// }
// data()

// async function find(){
//     let user = await database.find({"name":"hello"})
//     console.log(user)
// }
// find()

database
  .insert([
    {
      name: "hello",
      email: "hello@gmail.com",
    },
    {
      name: "heasdasdllo",
      email: "hello@gmail.com",
    },
    {
      name: "aada",
      email: "hello@gmail.com",
    },
  ])
  .then(() => {
   database.find({ name: "hello" }).then((data)=>{
       console.log(data);

   } )
  });
