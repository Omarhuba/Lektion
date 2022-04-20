const {Users, Flavors} = require('../model/index')


async function test(){
    
    await Users.sync()
    await Flavors.sync()

}
test()