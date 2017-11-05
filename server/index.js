'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const UserModel = require('../database/index.js');


const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const http = require('http').createServer(app);

app.listen(PORT, () => {
  console.log('Server listening on port 3000!');
});


app.use(express.static(path.join(__dirname, '../public/dist')));


app.post('/api/user', (req, res) => {
  if (!req.body) { res.sendStatus(404); }
  
  UserModel.findOne({ username: req.body.username, password: req.body.password }, function(err, user) {
    if (err) { 
      var newUser = new UserModel({ username: req.body.username, password: req.body.password });

      newUser.save(function(err) {
        if (err) { console.log(err); }
        console.log('User saved!')
        res.end('User saved!')
      });
    } else {
      console.log('User already exists!')
      res.end(302, 'User already exists!');
    }
  })
});