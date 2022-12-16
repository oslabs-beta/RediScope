const db = require ('../db/db');
const bcrypt = require('bcryptjs');
import { Request, Response } from 'express'
const pg = require('pg')

type SignUpFunction = () => void;

const userController = {};


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
    RETURNING *`
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

userController.verifyUser = async (req: Request, res: Response, next: Function): Promise<any> => {
    const {username, password, email} = req.body
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

