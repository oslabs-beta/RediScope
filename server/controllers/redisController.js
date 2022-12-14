const redis = require('redis')

exports.redisConnect = async (req, res) => {
  const { url } = req.body
  //log in to user's redis instance
  // const redisDb = redis.createClient({
  //   url,
  // })
  const redisDb = redis.createClient()

  redisDb.on('connect', () => console.log('connect'))

  redisDb.on('ready', () => {
    console.log(redisDb.server_info.used_memory)
    console.log('total memory', redisDb.server_info.used_memory_rss)
    setInterval(() => {
      console.log(new Date().toISOString(), redisDb.server_info.used_memory)
    }, 4000)
  })

  redisDb.on('error', err => console.log('Redis Client error', err))

  res.status(200).json({
    name: 'andy',
  })
}
