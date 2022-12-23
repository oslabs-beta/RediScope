const redis = require('redis')

exports.redisConnect = (req, res) => {
  const { URL } = req.body
  console.log(URL)
  const redisDB = redis.createClient(URL)

  redisDB.on('connect', () => console.log('connected to redis DB'))

  redisDB.on('ready', () => {
    setInterval(() => {
      console.log(redisDB.server_info.used_memory)
    }, 10000)
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
