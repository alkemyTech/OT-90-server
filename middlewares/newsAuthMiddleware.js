import { User } from '../models/index'

function newsAuthMiddleware (req, res, next) {
	const userAdmin = User.findOne({ where: { roleId: 0 } })
  if (!userAdmin) {
    return res.status(401).send({ Error: 'Auth failed' })
  }
  next()
}

export default newsAuthMiddleware
