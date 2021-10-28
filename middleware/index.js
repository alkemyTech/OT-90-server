module.exports = {
  isAdmin: (req, res, next) => {
    const roleId = req.header('roleId')
    if (roleId === '1') {
      next()
    } else {
      res.status(403).send('Your user role have not authorization to make this request')
    }
  }
}
