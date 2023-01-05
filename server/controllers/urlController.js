const db = require('../db/db')

const urlController = {};

urlController.createURL = async (req, res) => {
  try {
    const results = await db.query(
      'INSERT INTO url (username, url, name) values ($1, $2, $3) returning *',
      [req.body.user, req.body.url, req.body.name]
    )
    res.status(201).json({data: results.rows})
  } catch (err) {
    res.status(400).json({status: 'fail', message: err})
  }
}

urlController.deleteURL = async (req, res) => {
    try {
      const results = await db.query('DELETE FROM url WHERE url = $1 AND username = $2', [req.params.url, req.params.user])
      res.status(200).json({
        data: results.rows
      })  
    } catch (err){
       res.status(400).json({status: 'fail', message: err}) 
    }
}

urlController.getUserURL = async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM url WHERE username = $1 ORDER BY id DESC', [req.params.user])
        res.status(200).json({
            data: results.rows
        })
    } catch (err) {
        res.status(400).json({status: 'fail', message: err})
    }
}


module.exports = urlController;

