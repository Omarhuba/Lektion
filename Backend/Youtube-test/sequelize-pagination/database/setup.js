const {User} = require('../model')


//skapa users in i setup, 
User.sync({force: true}).then( async ()=>{
    for(let i = 1; i<=30; i++){
        const user = {
            username: `user${i}`,
            email: `user${i}@gmail.com`,
            password: 'hello'
        }
        await User.create(user)
    }
})
