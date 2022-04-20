const body = document.querySelector("body")
/*const btn = document.createElement("button")
btn.innerText = "Buy"
body.append(btn)

btn.addEventListener("click", (event) => {
    btn.innerText = "buyyyyy pleaseeee!!!"
})

const btn2 = document.createElement("button")
btn2.innerText = "0"
body.append(btn2)

let count = 0;
btn2.addEventListener("click", (event) => {
    count++;
    btn2.innerText = count;
})


const input = document.createElement("input")
const para = document.createElement("p")
para.innerText = "hellooo"
body.append(input, para)

input.addEventListener("input", () => {
    para.innerText = input.value
})

let sekunder = 10;
const timer = document.createElement("h1")
timer.innerText = sekunder;
body.append(timer)
setInterval(() => {
    if (sekunder > 0) {
        sekunder--
        timer.innerText = sekunder
    }
    else {
        timer.innerText = "Time's Up!!"
    }
}, 1000)*/

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
    "yellowgreen"]

/*const inputColor = document.createElement("input")
body.append(inputColor)

inputColor.addEventListener("keypress", event => {
    if (colors.includes(event.target.value) && (event.code == "Enter")) {
        body.style.backgroundColor = event.target.value
    }
    else if (!colors.includes(event.target.value) && (event.code == "Enter")) {
        const errorMessage = document.createElement("p")
        errorMessage.innerText = "Error!! No color found!!!!"
        body.append(errorMessage)
    }
})*/

const inputColorSuggestions = document.createElement("input")
body.append(inputColorSuggestions)

let listOfMatched=[]
inputColorSuggestions.addEventListener("keypress", event => {
    if (event.code == "Enter") {
        if (colors.includes(inputColorSuggestions.value)) {
            body.style.backgroundColor = event.target.value
        }
        else{
            const errorMessage = document.createElement("p")
            errorMessage.innerText = "Error!! No color found!!!!"
            body.append(errorMessage)
        }       
    }
    else
    {
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