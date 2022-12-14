const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const ffmpegPath = require('ffmpeg-static')
Stream = require('node-rtsp-stream')

const redisRouter = require('./routes/redisRoutes')
const db = require('./db/db')

let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.listen(4000, console.log('server listening on port 4000'))

app.get('/', function (req, res) {
  console.log('app.get at root')
  // res.send('Server is ready!');
  res.json({ key: 'testvalue' })
})

app.get('/api/flasks', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM poll')
    console.log('results from /api/flasks', results)
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      poll: results.rows,
    })
  } catch (err) {
    console.log(err)
  }
})

app.use('/api/redis', redisRouter)

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

// let { ipcMain } = require("electron")

// ipcMain.handle("console", (event, line) => {
//   console.log(`Received from frontend: ${line}`)
//   return `Backend confirms it received: ${line}`
// })
