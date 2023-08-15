const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// insert required route handlers here

// parse request body
app.use(express.json());

// Have a production route:
if (process.env.NODE_ENV === 'development') { // switch NODE_ENV to 'production when finishing
  // app.use('/dist', express.static(path.resolve(__dirname, '../src'))); // directory to store our static files, if we have any. Can delete if we have no static files to serve
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
  });
} 

// create route handlers here

app.post('/signup', auth.verifySignUp, (req,res)=>{
  return res.sendStatus(200)
  //should we be redirecting?
})

app.post('/login', auth.verifyLogin, (req,res)=>{
  return res.sendStatus(200);
  //should we be redirecting?
})

// get request for entries specific to whoever is logged in
// end point would be '/entries'
app.get('/entries', (req, res) => {
  return res.sendStatus(200);
});

//post request for new entries 

// create catch-all route handler
app.use((req, res) => {
  return res.sendStatus(404)
})

// create global error handler
app.use( (err, res) => {
  const defaultError = {
    log: 'Unknown Error caught in global error handler',
    status: 400,
    message: {err: err}
  };
  const errorObj = {
    ...defaultError, ...err
  }
  // display the current error
  console.log(errorObj.log, "status:", errorObj.status, "Error:", "error")
  return res.status(errorObj.status).send("errorObj.message.err");
})

// Have an event listener
app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`)
});

module.exports = app;
