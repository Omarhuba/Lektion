
// ---Button Event---
const body = document.querySelector("body")
body.style.background = "#eee";


// const btn = document.createElement("button");
// btn.innerText = "Click me!";
// document.body.append(btn);


// // btn.addEventListener("click", (event) =>{
// //     btn.innerText = "--click me and change text--";
// // })


// // ---andra sätt---

// function hello() {
//     const background = document.querySelector("button")
//     background.style.color = "red"
// }

// function change() {
//     const changeText = document.querySelector('button');
//     changeText.innerText = "---Andra sätt att byta text....--";
// }
// // let button1 = document.getElementById('button1');

// // button1.onclick = hello;
// // button1.onclick = change;

// btn.addEventListener("click", hello);
// btn.addEventListener("click", change);


//  ---tredje särr---

// function change (){
//         const changeText = document.querySelector('button')
//         changeText.innerText = "tredje sätt att ändra text";
//         changeText.style.background = "darkgrey";
//     }
//     btn.onclick = change;







// ------------Click Counter----utan HTML----------

// const btn2 = document.createElement("button");
// btn2.innerText = "Click Counter!";
// body.append(btn2);

// let count = 0;
// btn2.addEventListener("click", ()=>{
//     count++;
//     btn2.innerText = "räkna:" + count;
// })

// ----andra sätt--med HTML--

// let count = 0

// const button2 = document.querySelector(".button2");
// button2.addEventListener("click",()=>{
// });
// button2.onclick = function(){
//     count +=1;
//     button2.innerHTML = "räkna:" + count; 
// }




// -----------input Duplication----------

// const input = document.createElement("input");
// const paragraph = document.createElement("p")
// paragraph.innerText = "hej på dig";
// body.append(input, paragraph);

// input.addEventListener("input", () => {
//     paragraph.innerText = input.value;
// })



// function myFunction() {
//     document.getElementById("lego").innerText = text.value;
// }
// let text = document.getElementById("textField");
// text.input = myFunction;
// text.addEventListener("input", myFunction)







/*callbacks*/
// function sayHello(){
//     console.log("HELLO")
// } 
// setTimeout(sayHello, 2000) //function kommer att säga HELLO efter 2 sec.
// /*det samma också här (functioner utan namn)*/
// const sayHello = function(){
//     console.log("HELLO")
// }
// setTimeout(sayHlello, 2000);

// setTimeout(function(){
//     console.log("HELLO")
// },2000);




// ------countDown-------

// let counter = 10;
// const time = document.createElement("h1")
// time.innerText = counter;
// body.append(time);

// setInterval(() => {
//     if (counter > 0) {
//         counter--
//         time.innerText = counter;
//     } else {
//         time.innerText = "Time is up!"
//     }
// }, 1000)




// ------andra sätt-----
// let counter = 10;
// let finiteNumber = 0;
// document.querySelector("#counter1").innerHTML = counter;

// const btn = document.querySelector("#counter");
// setInterval(countDown,100)

// function countDown() {
//     if(counter>finiteNumber){
//         counter--
//         counter1.innerText = counter

//     }    

//     if (counter === finiteNumber ) {
//         counter1.innerText = 'räknat klart'
//     }
// }


// 




// -----Color Picker------

let colors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond",
    "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen",
    "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory",
    "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan",
    "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen",
    "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen",
    "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
    "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream",
    "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid",
    "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum",
    "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown",
    "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen",
    "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow",
    "yellowgreen"];

const colorChanger = document.createElement("input");
body.append(colorChanger);

colorChanger.addEventListener("keypress", event => {//---callback functuin
    if (colors.includes(event.target.value) && (event.code === "Enter")) {
        body.style.background = event.target.value;
    } else if (!colors.includes(event.target.value) && (event.code === "Enter")) {
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Tyvärr kan inte hitta Färgen!";
        body.append(errorMessage);
    }
})

// -----andra sätt--med HTML--
const changeColor = document.getElementById("colorPicker");
changeColor.addEventListener("keypress", event => {
    if (colors.includes(event.target.value) && (event.code == "Enter")) {
        body.style.background = event.target.value;
    } else if (!colors.includes(event.target.value) && (event.code == "Enter")) {
        const felMessage = document.getElementById("fel");
        felMessage.innerText = "Finns ingen rätt färg! försök igen!";
    }
})






const inputColorSuggestions = document.createElement("input")
body.append(inputColorSuggestions)

let listOfMatched = []
inputColorSuggestions.addEventListener("keypress", event => {
    if (event.code == "Enter") {
        if (colors.includes(inputColorSuggestions.value)) {
            body.style.backgroundColor = event.target.value
        }
        else {
            const errorMessage = document.createElement("p")
            errorMessage.innerText = "Error!! No color found!!!!"
            body.append(errorMessage)
        }
    }
    else {
        listing(inputColorSuggestions.value);
    }
})

const display=document.createElement("ul")
display.innerText=""

function listing(xxx){
    display.innerText=""
    listOfMatched=[]
    for(let clr of colors){
        if(clr.includes(xxx)){
            listOfMatched= [...listOfMatched,clr];
        }
    }
    display.innerText=listOfMatched
    body.append(display)

}




// const colors = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"]
// .addEventListener('keyup', (e) => {
//     let input = e.target.value;

//     let found = colors.filter((color) => {
//         return color.includes(input);
//     )}

// document.querySelector('p.suggestions').innerText = found.join(', ')

// if(e.code === 'Enter') {
//     if(colors.includes(e.target.value)){
//             document.querySelector('body').style.backgroundColor = e.target.value;
//         }else{
//             error(e);
//         }
//         .e.target.value = '';
//     }

// })




// function main(){
//     const input = document.querySelector("input");
//     input.addEventListener("input", addColor);
//     input.addEventListener("change", changeBackground);
// }
// main();

// function addColor(){
//     let colorsSuggestion = [];

//     const input = document.querySelector("input").value;
//     colorsSuggestion = [];
//     if(input.length < 3){
//         for(color of colors){
//             if(colors[0] == input[0]){
//                 colorsSuggestion.push(color);
//             }
//         }
//     }
//     console.log(colorsSuggestion);
//     document
//     .querySelector("input")
//     .insertAdjacentHTML("afterend", '<p>${colorSuggestion}</p>');
// }

// function changeBackground(e) {
//     let colorexist = false;
//     for(let color of colors){
//         if(color == e.target.value){

//         }
//     }
// }














