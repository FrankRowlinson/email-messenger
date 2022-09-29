const express = require('express')
const getOrCreateUser = require('../middlewares/getOrCreateUser')
const router = express.Router()
const { Message, User } = require('../models')

router.get('/:userid', async (req, res) => {
  const userid = req.params.userid
  const messages = await Message.findAll({
    attributes: ['theme', 'text', 'createdAt'],
    where: {
      receiverId: userid,
    },
    include: { model: User, as: 'sender', attributes: ['username'] },
    order: [
      ['createdAt', 'DESC']
    ]
  })
  res.json(messages)
})

router.post('/', getOrCreateUser, async (req, res) => {
  const user = req.user
  const { senderid, theme, text } = req.body
  try {
    await Message.create({
      senderId: senderid,
      receiverId: user[0].id,
      theme: theme,
      text: text,
    })
    res.json('Your message has been sent!')
  } catch (err) {
    res.json('Cannot send message. Try again later')
  }
})

module.exports = router
