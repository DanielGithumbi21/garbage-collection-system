const isAuth = (req, res, next) => {
  if(req.session.isAuth === true){
  return next()
  }
  return res.status(403).json({ message: 'UNAUTHORIZED REQUEST'})
}
module.exports = isAuth;