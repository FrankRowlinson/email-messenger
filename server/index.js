const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const db = require('./models')

// routers
const userRouter = require('./routes/Users')
app.use('/users', userRouter)
const messageRouter = require('./routes/Messages')
app.use('/messages', messageRouter)

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log('server is up on 3001')
    })
  })
  .catch((err) => {
    console.log(`Error on making connection. Try again. ${err}`)
  })
