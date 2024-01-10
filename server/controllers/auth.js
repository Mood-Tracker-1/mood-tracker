const db = require('../models/moodTrackerModels');

const auth = {};

auth.verifySignUp = (req, res, next) => {
  //values is like a variables array
  //first element and second element may be in req.body
  //note that you may want to hash password before storing in DB
  const values = [req.body.username, req.body.password];
  const verifySignUpQuery = `INSERT INTO users (username, password)
    VALUES ($1, $2)`;
  db.query(verifySignUpQuery, values)
    .then((data) => {
      console.log('auth line 14 verify signup data rows:', data.rows);
      //do we want to send anything back besides a status 200?
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error ${err} at auth verifySignUp, User may not have unique User`,
        status: 304,
        message: 'Error: try again!',
      });
    });
};

auth.verifyLogin = (req, res, next) => {
  //search for a record in the users db with the given username and pw
  console.log('verify login controller');

  const verifyLoginQuery = `SELECT * FROM users WHERE username = $1 AND password = $2`;
  const values = [req.body.username, req.body.password];

  db.query(verifyLoginQuery, values)
    .then((data) => {
      console.log('auth line 30 verify login data.rows', data.rows);
      // if the user does not exist...
      if (data.rows.length === 0) {
        console.log('data rows empty');
        return next({
          log: `Error at auth verifyLogin, Nothing Found`,
          status: 404,
          message: { err: 'User Not Found' },
        });
      }
      // successful login
      console.log('should be successful login');
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error ${err} at auth verifyLogin`,
        status: 500,
        message: { err: 'Internal Server Error' },
      });
    });
};

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
