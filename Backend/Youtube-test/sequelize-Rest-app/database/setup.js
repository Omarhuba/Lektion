const {User} = require('../model')

User.sync({force: true}).then(()=>{console.log('database is ready');})
