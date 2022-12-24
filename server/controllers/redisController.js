const redis = require('redis')
let count = 0

exports.redisConnect = (req, res) => {
  const { URL } = req.body
  const redisDB = redis.createClient(URL)

  redisDB.on('connect', () => console.log('connected to redis DB'))

  redisDB.on('ready', async () => {
    redisDB.quit()
    res.status(200).json(redisDB.server_info)
  })

  redisDB.on('error', err => {
    console.log('Redis Client error', err)
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  })
}
