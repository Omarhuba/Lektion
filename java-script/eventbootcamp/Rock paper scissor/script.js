let userInput=""
let datorInput=""
sten=document.querySelector(".sten")
sax=document.querySelector(".sax")
påse=document.querySelector(".påse")
output=document.querySelector(".output")

sten.addEventListener("click",()=>{
    userInput="Sten"
    datorInput=datorInputGenerate()
    game(userInput,datorInput)
    console.log(datorInput)

})
sax.addEventListener("click",()=>{
    userInput="Sax"
    datorInput=datorInputGenerate()
    game(userInput,datorInput)
    console.log(datorInput)
})
påse.addEventListener("click",()=>{
    userInput="Påse"
    datorInput=datorInputGenerate()
    game(userInput,datorInput)
    console.log(datorInput)
})

function datorInputGenerate(){
    let array=["Sten","Sax","Påse"]
    return array[Math.floor(Math.random()*3)]
}

function game(userInput,datorInput){
    if(userInput=="Sten"){
        if(datorInput=="Sten")
        {
            output.innerText="Same Play Again"
            output.addEventListener("click",()=>{location.reload()})
        }
        else if(datorInput=="Sax")
        {
            output.innerText="You Win!!!"
        }
        else if(datorInput=="Påse")
        {
            output.innerText="You Loose!!!"
        }
    }
    if(userInput=="Sax"){
        if(datorInput=="Sten")
        {
            output.innerText="You loose"
            output.addEventListener("click",()=>{location.reload()})
        }
        else if(datorInput=="Sax")
        {
            output.innerText="same Play again"
        }
        else if(datorInput=="Påse")
        {
            output.innerText="You win!!!"
        }
    }
    if(userInput=="Påse"){
        if(datorInput=="Sten")
        {
            output.innerText="You win"
            output.addEventListener("click",()=>{location.reload()})
        }
        else if(datorInput=="Sax")
        {
            output.innerText="You Loose!!!"
        }
        else if(datorInput=="Påse")
        {
            output.innerText="same Play again"
        }
    }

}
