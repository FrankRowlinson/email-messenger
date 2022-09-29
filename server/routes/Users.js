const express = require('express')
const router = express.Router()
const getOrCreateUser = require('../middlewares/getOrCreateUser')
const getUserList = require('../middlewares/getUserList')

router.get('/', getUserList, (req, res) => {
  res.json({ userList: req.userList })
})

router.post('/', getOrCreateUser, (req, res) => {
  res.json({ user: req.user })
})

module.exports = router
