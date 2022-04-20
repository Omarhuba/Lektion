const div = document.querySelector("div");
const output = document.querySelector("#outputText");
const btn = document.querySelector("#btn");
const antal = document.createElement("p");
let count = 10;
antal.innerHTML = `Antal gissning = ${count}`;
div.append(antal);

let number = Math.floor(Math.random() * 100);
btn.addEventListener("click", function () {
    if (count > 0) {
        count--
        let input = document.querySelector("#userInput").value;
        if (input == number) {
            output.innerText = "Correct!!!";
            const newbtn = document.createElement("button");
            newbtn.innerText = "Spela Igen!";
            div.append(newbtn);
            newbtn.addEventListener("click", () => { location.reload() })
        } else if (input < number) {
            output.innerText = "Too low";
        } else {
            output.innerText = "Too high"
        }
    } else {
        output.innerText = "För mycket gissning! GAME OVER";
        // btn.removeEventListener();
        const newbtn1 = document.createElement("button");
        newbtn1.innerText = "Spela Igen!";
        div.append(newbtn1)
        newbtn1.addEventListener("click", function() { location.reload()})
    }
})