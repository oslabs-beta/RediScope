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
 
//BK server
const db = require ('./db/db');

//make a new url and save it under user
app.post("/api/createURL", async(req, res)=>{
  try{
    console.log('made it into create a flask server')
    const results = await db.query("INSERT INTO url (username, url, name) values ($1, $2, $3) returning *", [req.body.user, req.body.url, req.body.name]);
    console.log('create url', results);
    res.status(200).json({
      data: results.rows
    })
  } catch(err){ 
    console.log(err)
  }
})

//get users table
app.get("/api/allUsers", async(req, res)=>{
  try{
    const results = await db.query("SELECT * FROM users");
    console.log(results);
    res.status(200).json({
      data: results.rows
    })
  } catch(err){ 
    console.log(err)
  }
})

//get url table
app.get("/api/allURL", async(req, res)=>{
  try{
    const results = await db.query("SELECT * FROM url");
    console.log(results);
    res.status(200).json({
      data: results.rows
    })
  } catch(err){ 
    console.log(err)
  }
})

//get all data fron a single user
app.get("/api/userURL/:user", async(req, res)=>{
  try{
    console.log('req.params.user', req.params.user)
    const results = await db.query("select * from url WHERE username = $1 ORDER BY id DESC", [req.params.user]);
    console.log('results of getting flask', results.rows);
    res.status(200).json({
      data: results.rows
    })
  } catch(err){ 
    console.log(err)
  }
})
 
////////////////////////////////////////////////////////////
//not needed for app, used to add columns and tests into url table
// ALTER TABLE url ADD COLUMN name VARCHAR(250);
//add name column to url table
app.get("/api/addColumn", async(req, res)=>{
  try{
    const results = await db.query("ALTER TABLE url ADD COLUMN name VARCHAR(250)");
    console.log(results);
    res.status(200).json({
      data: results.rows
    })
  } catch(err){ 
    console.log(err)
  }
})

//add name column to url table
app.get("/api/addName", async(req, res)=>{
  try{
    const results = await db.query("INSERT INTO url (username, url, name) values ('a','testurl2', 'myOnlyURL2')");
    console.log(results);
    res.status(200).json({
      data: results.rows
    })
  } catch(err){ 
    console.log(err)
  }
})
//////////////////////////////////////////////////////////////////////

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
