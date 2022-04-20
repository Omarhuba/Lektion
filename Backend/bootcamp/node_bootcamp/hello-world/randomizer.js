const fs = require('fs/promises')


async function random(){
    const path = process.argv[2]
    try{
        await fs.access (`${path}`)
        const content = await fs.readFile(`${path}`, {encoding: 'utf8'})
        const Array = content.split(/\r?\n/)
        let random = Math.floor(Math.random()* Array.length)
        console.log(Array[random])
    }catch{
        console.log('errrrroooooeeeeerrrrrr')
    }
}
random()

// eller toString...

// async function random(){
//     const content = await fs.readFile('./randomizer.txt')
//     console.log(content.toString())
//     const Array = content.toString().split(/\r?\n/)
//     let random = Math.floor(Math.random()* Array.length)
//     console.log(Array[random])
// }
// random()