const btn = document.querySelector("#btn")
const output = document.querySelector("#outputtext")
const div=document.querySelector("div")
const antal=document.createElement("p")
antal.innerHTML=`No.of Guesses left= ${count}`
div.append(antal)
let count=5;
let number = Math.floor(Math.random()*100);
btn.addEventListener("click", function(){
    if(count>0){
        let input = document.querySelector("#userInput").value
        if (input == number) {
            output.innerText = "Correct!!"
            const newbtn=document.createElement("button")
            newbtn.innerText="PlayAgain!!"
            div.append(newbtn)
            newbtn.addEventListener("click",()=>{location.reload()})
        }
        else if (input < number) {
            output.innerText = "You guessed too low"
        }
        else {
            output.innerText = "You guessed too high"
        }
        count--
    }
    else {
        output.innerText="Too many guesses!!Game Over!!"
        btn.removeEventListener()
    }
})






// const btn = document.querySelector("#btn")
// const output = document.querySelector("#outputtext")
// const div = document.querySelector("div")
// const antal = document.createElement("p")
// let count = 5;
// div.append(antal)
// let number = Math.floor(Math.random() * 100);
// btn.addEventListener("click", function () {
//     if (count > 0) {
//         let input = document.querySelector("#userInput").value
//         if (input == number) {
//             output.innerText = "Correct!!"
//             const newbtn = document.createElement("button")
//             newbtn.innerText = "PlayAgain!!"
//             div.append(newbtn)
//             newbtn.addEventListener("click", () => { location.reload() })
//         }
//         else if (input < number) {
//             output.innerText = "You guessed too low"
//         }
//         else {
//             output.innerText = "You guessed too high"
//         }
//         count--
//         antal.innerHTML = `No.of Guesses left= ${count}`

//     }
//     else {
//         output.innerText = "Too many guesses!!Game Over!!"
//         btn.removeEventListener()
//     }
// })

// function auto(varde, val = 0) {
//     if (val == 0) {
//         return Math.floor(Math.random() * 100)
//     }
//     else if (val == 1) {
//         return Math.floor(Math.random() * varde)
//     }
//     else {
//         return Math.floor(Math.random() * 100) - varde
//     }
// }