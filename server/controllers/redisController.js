const redis = require('redis')

exports.redisConnect = (req, res) => {
  console.log(req.body)
  const { url } = req.body
  const redisDB = redis.createClient(url)

  redisDB.on('connect', () => console.log('connected to redis DB'))

  redisDB.on('ready', () => {
    res.status(200).json(redisDB.server_info)
  })

  redisDB.on('error', err => console.log('Redis Client error', err))
}
