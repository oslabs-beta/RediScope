const db = require('../db/db')
const bcrypt = require('bcryptjs')
const pg = require('pg')

const SALT = bcrypt.genSaltSync(10)
// connect log in/sign up info to here
// db.query()

const userController = {}

// const text1 = `
//        SELECT * FROM USERS
//        `
// const testingDB = async () => {
// const testDB = await db.query(text1)
// console.log(testDB)
// }
// testingDB();
userController.signUp = async (req, res, next) => {
  try {
    const { username, password, email } = req.body
    // console.log('req.body: ', req.body)
    const hashedP = bcrypt.hashSync(password, SALT)
    const text = `
   INSERT INTO USERS (username, password, email)
   VALUES ($1, $2, $3)
   RETURNING username`
    const params = [username, hashedP, email]
    const result = await db.query(text, params)
    return res.status(200).json({ data: true })
  } catch (err) {
    return next({
      log: `userController.signup: error ${err}`,
      message: { err: 'Error occurred in usercontroller.signup' },
    })
  }
}

userController.verifyUser = async (req, res, next) => {
  try {
    // console.log(req.body)
    const { username, password } = req.body
    //  const hashedP = bcrypt.hashSync(password, SALT);

    const text = `
       SELECT password FROM USERS WHERE username=$1
       `
    const params = [username]
    const pw = await db.query(text, params)
    const result = await bcrypt.compare(password, pw.rows[0].password)
    if (result) {
      return res.status(200).json({ data: true })
    } else {
      res.status(400).json({ message: 'no user match found' })
    }
  } catch (err) {
    return next({
      log: `userController.varifyUser: error ${err}`,
      message: { err: 'Error occurred in usercontroller.varify User' },
    })
  }
}

module.exports = userController
