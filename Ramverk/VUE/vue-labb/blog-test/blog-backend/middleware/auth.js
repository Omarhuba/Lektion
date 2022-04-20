const {Unauthorized, Forbidden} = require('../errors')
const User = require('../models/User')

function extractToken(headers){
  const {authorization} = headers
  if(!authorization){ throw new Unauthorized() }
  const token = authorization.replace('Bearer ', '')
  return token
}

module.exports = {
  anonymous: (req,res,next) => {
    const token = extractToken(req.headers)
    try{
      const user = User.validateToken(token)
      req.user = user
    }catch(error){
      req.user = {role: 'anonymous'}
    }
    next()
  },
  user: (req, res, next) => {
    const token = extractToken(req.headers)
    const user = User.validateToken(token)
    req.user = user
    next()
  },
  admin: (req, res, next) => {
    const token = extractToken(req.headers)
    const user = User.validateToken(token)
    if(user.role !== 'admin'){ throw new Forbidden()}
    req.user = user
    next()
  },


}