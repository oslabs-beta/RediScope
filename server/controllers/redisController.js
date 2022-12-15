const redis = require('redis')

exports.redisConnect = async (req, res) => {
  console.log(req.body)
  // const { url } = req.body
  console.log('hello from redisconnect middleware')
  //log in to user's redis instance
  // const redisDb = redis.createClient({
  //   url,
  // })
  const redisDb = redis.createClient()
  let memory
  let totalMem

  redisDb.on('connect', () => console.log('connect'))

  redisDb.on('ready', () => {
    console.log('used mem', redisDb.server_info.used_memory)
    console.log('total memory', redisDb.server_info.used_memory_rss)
    memory = redisDb.server_info.used_memory
    totalMem = redisDb.server_info.used_memory_rss
    // setInterval(() => {
    //   console.log(new Date().toISOString(), redisDb.server_info.used_memory)
    // }, 4000)
    res.status(200).json({
      data: {
        memory,
        totalMem,
      },
    })
  })

  redisDb.on('error', err => console.log('Redis Client error', err))
}
