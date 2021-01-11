const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const saltRounds = 10;
// customers Lists
const customerLists = require('./cutomerlists');
const cookieParser = require('cookie-parser')
 
let secretKey = "SOFASET"

app.use(cors({ origin: '*' }));
app.use(cookieParser());


mongoose.connect('mongodb://localhost/sofa', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});



const loginSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  role: { type: String }
});

const loginModel = mongoose.model('userdetails', loginSchema);

app.use(express.json());

app.post('/register', async (req, res) => {
  const responsePattern = {};
  if (req.body.password) {
        req.body.password = crypto.createHash("sha1").update(req.body.password, "binary").digest("hex");
        loginModel.create(req.body, (err, result) => {
          if (err) {
            responsePattern.message = "Internal Server Failure";
            responsePattern.status = 500;
            res.send(responsePattern)
          } else {
            responsePattern.message = "Success";
            responsePattern.status = 200;
            res.send(responsePattern)
          }
        });
  }

})

app.post('/login', async (req, res) => {
  const responsePattern = {};
      req.body.password = crypto.createHash("sha1").update(req.body.password, "binary").digest("hex");;
      const { username, password } = req.body;
      loginModel.find({ username: username, password: password}, (err, data) => {
        if (data.length) {
          let token = jwt.sign({ username: req.body.username }, secretKey);
          responsePattern.accessToken = token;
          responsePattern.username = req.body.username;
          responsePattern.message = "success";
          responsePattern.status = 200;
          res.cookie('accessToken', token);
          res.json(responsePattern, 'Bearer ' + token, {
            domain: 'localhost:3000',
            expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
          })
        } else {
          responsePattern.message = "Invalid Login Error";
          responsePattern.status = 500;
          res.json(responsePattern);
        }
  });


});


app.get('/cutomerlists', (req, res) => {
  res.send(customerLists)
})


app.listen('8080');
