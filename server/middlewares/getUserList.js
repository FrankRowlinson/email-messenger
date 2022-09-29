const { User } = require('../models')


async function getUserList(req, res, next) {
  const userList = await User.findAll()
  req.userList = userList
  next()
}

module.exports = getUserList