const express   = require('express');
const cors = require('cors');
const ffmpegPath  = require('ffmpeg-static');
Stream = require('node-rtsp-stream');
const db = require('./db/db')

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(4000, console.log('server listening on port 4000'));

app.get('/', function(req, res){
   console.log('app.get at root')
    // res.send('Server is ready!');
    res.json({"key": "testvalue"});    
});
 
app.get("/api/flasks", async(req, res)=>{
    try{
      const results = await db.query("SELECT * FROM poll");
      console.log('results from /api/flasks', results);
      res.status(200).json({
        status: "success",
        results: results.rows.length,
          poll: results.rows
      })
    } catch(err){ 
      console.log(err)
    }
})

// let { ipcMain } = require("electron")

// ipcMain.handle("console", (event, line) => {
//   console.log(`Received from frontend: ${line}`)
//   return `Backend confirms it received: ${line}`
// })