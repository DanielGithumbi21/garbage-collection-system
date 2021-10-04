const isAuth = (req,res,next) => {
  if(req.session.isAuth === true){
    return next()
  }
  // redirect to login page
  return res.json({
    message: 'Redirect to login page'
  })
}

module.exports = isAuth;