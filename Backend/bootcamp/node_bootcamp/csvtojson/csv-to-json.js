const Converter = require('csvtojson')
const fs = require('fs/promises')
// const converter = new Converter({})

Converter().fromFile('./people.csv') 
.then( people=> {
    fs.writeFile('people.json', `${people}`)
    console.log("people.csv",people)
}).catch(err =>{
    console.log(err)
})



// function(err, result){
// if(err){
//     console.log('error')
//     console.log(err)
// }
// const data = result;
// console.log(data)
// })