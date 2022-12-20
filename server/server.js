const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const redisRouter = require('./routes/redisRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api/users', userRouter)
app.use('/api/redis', redisRouter)

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  }
  const errorObj = Object.assign({}, defaultErr, err)
  console.log(errorObj.log)
  return res.status(errorObj.status).json(errorObj.message)
})

// START SERVER
app.listen(4000, console.log('server listening on port 4000'))
