module.exports = (req,res,next) => {
  console.log(`${req.method} ${req.path} Body: ${JSON.stringify(req.body)}`)
  next()
}