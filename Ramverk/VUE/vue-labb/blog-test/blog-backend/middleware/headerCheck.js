const {MissingHeader} = require('../errors')
module.exports = {
  headerCheck: (req, res, next) => {
    if(req.method != 'GET' && req.method != 'DELETE' && req.headers['content-type'] != 'application/json'){
      throw new MissingHeader()
    }
    next()
  }
}