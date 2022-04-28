const { Movie, sequelize } = require('../models')
const {NODE_ENV} = require('../config')

if(NODE_ENV == 'development'){
    sequelize.sync().then(createMovie)
}else{
    createMovie()
}


async function createMovie(){
    try{
        await Movie.bulkCreate([
            {title: 'Titanic', year: '2000'},
            {title: 'Harry Poter', year: '2001'},
            {title: 'Moon', year: '2002'},
            {title: 'X-man', year: '2003'},
        ])
        console.log('added movie');
    }catch(error){
        console.log(error);
    }
}