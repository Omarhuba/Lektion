const mongoose = require('mongoose')
const { HTTPExeption } = require('../errors')


module.exports = (err, req, res, next)=>{
    console.error(req.method, req.path, error.status, error.message);
    if( error instanceof mongoose.CastError){
        res.status(400).json({msg: "errrroooorrrr"})
    }else if( error instanceof HTTPExeption){
        res.status(400).json({error: error.message})
    }

}

// const errorHandler = (err, req, res, next)=>{
//     console.error(req.method, req.path, error.status, error.message);
//     if( error instanceof mongoose.CastError){
//         res.status(400).json({msg: "errrroooorrrr"})
//     }else if( error instanceof HTTPExeption){
//         res.status(400).json({error: error.message})
//     }

// }
//  module.exports =  errorHandler