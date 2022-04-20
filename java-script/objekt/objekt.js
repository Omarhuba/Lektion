// ----Bibblan----


// const book = { tittle:"ABCD", author:"David", numPage:"300" }
// console.log(book)
// console.log(book.author)

const books =[
    { tittle:"HTML och CSS", author:"David", numPage:"300" },
    { tittle:"Naruto", author:"Masashi Kishimoto", numPage:"900" },
    { tittle:"LoL", author:"HELLO", numPage:"200" },
    { tittle:"HARRY POTTER", author:"J.K Rowling", numPage:"500" }
]
// console.log(books[0].tittle)
// console.log(books[1])
// console.log(books[3].tittle)
// console.log(books[3].numPage)



// function search(array, searching) {
//     for (let i = 0; i < array.length; i++) {
//         if (searching == books[i].tittle) {
//             return books[i]
//         } 
//     }
//     return null
// }
// function main() {
//     let searching = "Naruto"
//     let result = search(books, searching)
// }

// main();








// '----Letter Frequency--

function letterFrequency(str) {
    result = {}
    for (let i = 0; i < str.length; i++) {
        if (result[str[i]]) {
            result[str[i]] += 1
        }else{
            result[str[i]] = 1
        }
        
    }
    return result
}
function main() {
    let str = "adammaaammm"
    let x= letterFrequency(str)
    console.log(x)
}
main();


// console.log(users)
// '-----USERS-----
// let country = "CH"
// filter(users,country)



function filter(users,country) {
    let result = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].nat===country) {
            result.push(users[i])
        }
        
    }
    console.log(result)
    return result  
}
let frankrike = 'FR'
let USA = 'US'
let CH = 'CH'
filter(users, CH)





function filterGender(users,gender) {
    let result = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.title===gender) {
            result.push(users[i])
        }       
    }
    // console.log(result)
    return result
}
let male = 'Mr'
let female = 'Ms'
let miss = 'Miss'
let mrs = 'Mrs' 
let madame = 'Madame'
let monsieur = 'Monsieur'
let mademoiselle = 'Mademoiselle'

// filterGender(users, mademoiselle)
// const filterGender  = users.map(user => user.name.title)
// console.log(filterGender)





function listEmails(users){
    const userEmails = [];
    for(let user of users){
        userEmails.push(user.email);
    }
    return userEmails;
}
// let result=listEmails(users);
// console.log(result);


// const mapResult = users.map(user => user.email)
// console.log(mapResult);


function reformatEmails(user){
    const emailParts = user.email.split("@");
    const local = emailParts[0];
    const localPartis = local.split(".");
    const firstName = localPartis[0];
    const lastName = localPartis[1];
    
    let nat = user.nat.toLowerCase();
    if(nat == 'GB'){ nat = 'ee'}
    else if(nat == 'ES'){ nat = 'ee'}
    const newDomain = `evilcorp.${nat}`
    
    return  `${lastName}.${firstName}@${newDomain}`
   

}
function reformatEmails(users){
    for(let user of users){
        user.email = reformatEmails(user)
        
    }
}




// function changeEmails(arr, newDomain){
//     const changedArray = []
//     for(let i = 0; i< 3; i++){
//       let splittedEmail =  arr[i].email.split('@')
//       let splittedName = splittedEmail[0].split('.')
//       let firstName = splittedName[0]
//       let secondName = splittedName[1]
//     //   let newEmail = secondName + '.' + firstName + '@' + newDomain
//     let newEmail = `${secondName}.${firstName}@${newDomain}`
//         console.log(newEmail)
//         let newUserObject ={...arr[i], email: newEmail}
//         console.log(newUserObject)
//         changedArray.push(newUserObject)

//     }
//     // console.log(changedArray)
//     return changedArray
// }