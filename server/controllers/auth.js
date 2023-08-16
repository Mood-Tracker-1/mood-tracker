const db = require('../models/moodTrackerModels');

const auth = {};

auth.verifySignUp = (req, res, next) => {
    //values is like a variables array
    //first element and second element may be in req.body
    //note that you may want to hash password before storing in DB
    const values = [req.body.username, req.body.password];
    const verifySignUpQuery = `INSERT INTO users (username, password)
    VALUES ($1, $2)`
    db.query(verifySignUpQuery, values)
        .then(data =>{
            console.log('auth line 14 verify signup data rows:', data.rows)
            //do we want to send anything back besides a status 200?
            return next();
        })
        .catch(err => next({
            log: `Error ${err} at auth verifySignUp, User may not have unique User`,
            status: 304,
            message: 'Error: try again!'
          }))   
}

auth.verifyLogin = (req,res,next) => {
    //search for a record in the users db with the given username and pw
    const verifyLoginQuery = `SELECT * FROM users WHERE username = ${req.body.username} AND password = ${req.body.username}`;
    db.query(verifyLoginQuery)
        .then(data =>{
            console.log('auth line 30 verify login data.rows', data.rows)
            //do we want to send anything back besides a status 200?
            return next();
        })
        .catch(err => next({
            log: `Error ${err} at auth verifyLogin`,
            status: 404,
            message: 'Error: User Not Found'
          }))
}

//example from simran solo project
// tableController.addTask = (req, res, next) =>{
//     const values = [req.body.personid, req.body.completedStatus,req.body.item];
//     // const addTaskQuery = `INSERT INTO list VALUES (231, 'Incomplete', 'this works')`
//     const addTaskQuery = `INSERT INTO list VALUES ($1, $2, $3)`
//     // console.log(req.body) 
       
//     db.query(addTaskQuery, values)
//         .then(data => {
//             console.log('afterquery')
//             console.log("data", data)
//             res.locals.newTaskRow = data.rows
//             return next()
//         })
//         .catch((err) => next ({
//             log: 'Express error handler caught tableController.addTask error',
//             status: 400,
//             message: { err: 'An error occurred' },
//           }))

// }


module.exports = auth;

