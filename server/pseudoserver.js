const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { // mock for sending index.html
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.use('/parseRequestBody', (req, res) => {
  // mock for seeing if mock was processed
  const parsed = req.body
  return res.status(200).json(req.body)
})

app.use('/error', (req, res, next) => { // mock for sending errorObjects
  return next({
    status: 400,
    message: 'error'
  });
})

app.use((req, res) => { // mock for sending 404
  return res.sendStatus(404)
})

app.use( (err, res) => { // mock for sending an error
  const defaultError = {
    log: 'Unknown Error caught in global error handler',
    status: 400,
    message: {err: err.message}
  };
  const errorObj = {
    ...defaultError, ...err
  }
  // display the current error
  console.log(errorObj.log, "status:", errorObj.status, "Error:", "error")
  return res.status(errorObj.status).send(errorObj.message.err);
})

module.exports = app