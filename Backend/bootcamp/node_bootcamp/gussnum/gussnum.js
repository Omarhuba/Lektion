process.stdin.setEncoding('utf8')

let random = Math.floor(Math.random()*100)
console.log(random)
console.log('type number between 1 to 100')

process.stdin.on('data', data =>{
    if(data == random){
        console.log('currect! and game over')
        process.exit()
    }else if(data < random){
        console.log('gussing to high...')
    }else{
        console.log('gussing to low...')
    }
})