const { User } = require('../models')

async function getOrCreateUser(req, res, next) {
  const { username } = req.body
  const user = await User.findOrCreate({
    where: {
      username: username,
    },
  })
  req.user = user
  next()
}

module.exports = getOrCreateUser
