const db = require ('../db/db');
const bcrypt = require('bcryptjs');
const pg = require('pg')
const Readable = require('node-rtsp-stream')
const Readable = require ('readable-stream')

// type SignUpFunction = () => void;

type UserControllerType = {
    signUp: Function;
    verifyUser: Function;
}

const userController: UserControllerType = {
    signUp: Function,
    verifyUser: Function,
};




const SALT = bcrypt.genSaltSync(10);
// connect log in/sign up info to here
// db.query()

userController.signUp = async (req: Request, res: Response, next: Function): Promise<any> => {
const { username, password, email } = req.body
const hashedP = bcrypt.hashSync(password, SALT)
try {
    const text = `
    INSERT INTO USERS (username, password, email)
    VALUES ($1, $2, $3) 
    RETURNING username`
    ;
    const params = [username, hashedP, email]
    const result = await db.query(text, params)
    res.locals.user = result.rows[0]
    return next()
}
catch (err) {
    return next({
        log: `userController.createUser: error ${err}`,
        message: { err: 'Error occurred in usercontroller.create user'}
    });
};

};


  type ReadableStream2 = {
    username: string;
    password: string;
    email: string
    }



userController.verifyUser = async (req: Request, res: Response, next: Function): Promise<any> => {
    // type Body = {
    // username: string;
    // password: string;
    // email: string
    // }


const reqBody: ReadableStream2 = req.body as ReadableStream2
    // const req.body: {username: string, password: string, email: string} = {username: username, password: password, email: email }
    const { username, password, email } = reqBody
    const hashedP = bcrypt.hashSync(password, SALT);
    try {
        const text = `
        SELECT * FROM USERS
        WHERE username=$1 
        `
        const params = [username, hashedP, email]
        const result = await db.query(text, params)
        
    } catch (err) {
        return next({
              log: `userController.varifyUser: error ${err}`,
        message: { err: 'Error occurred in usercontroller.varify User'}
        })
    }
}


module.exports = userController;

