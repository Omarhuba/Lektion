const mongoose = require('mongoose')
const {HTTPException} = require('../errors')
module.exports = (error, req, res, next)=>{
    console.log(req.method, req.path, error.message);
    if(error instanceof mongoose.CastError){
        res.status(400).json({error: 'invalid ID'})
    }else if(error instanceof  HTTPException){
        res.status(error.status).json({error: error.message})
    }
}