let express = require('express');
let mongo = require('mongodb');
let router = express.Router();
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let MongoClient = require('mongodb').MongoClient;
let secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"
let db;

const MONGODB_URI = "mongodb://localhost:27017/";
const DISPLAY_POSTS_LIMIT = 5;

MongoClient.connect(MONGODB_URI, function(err, database) {
  db = database;
});

router.get('/', function(req, res, next) {
  let redir;
  if(req.query.redirect) {
    redir = req.query.redirect;
  } else {
    redir = "";
  }
  let cookie = req.cookies.jwt;
  if (cookie){
    jwt.verify(cookie, secretKey, function(err, decoded) {
      if (err){
        res.status(200);
        res.render('login', { 
          status: false,
          redirect: redir
        });
      }
      else{
        if(redir == ""){
          res.status(200).send( "Authentication Successful. Welcome back,  " + decoded.usr + "!");
        }
        else{
          res.redirect(redir);
        }
      }
    }); 
  }
  else {
    res.status(200);
    res.render('login', { 
      status: false,
      redirect: redir
    });
  }
});

router.post('/', function(req, res, next) {
  let redir;
  if(req.body.redirect) {
    redir = req.body.redirect;
  } else {
    redir = "";
  }

  let cookie = req.cookies.jwt;
  var error = false;
  if (cookie){
    jwt.verify(cookie, secretKey, function(err, decoded) {
      if (err){
        error = true;
      }
      else{
        if(redir == ""){
          res.status(200).send( "Authentication Successful. Welcome back, " + decoded.usr + "!");
        }
        else{
          res.redirect(redir);
        }
      }
    }); 
    if (!error)
      return;
  }

  let dbo = db.db('BlogServer');
  let username = req.body.username;
  let password = req.body.password;
  let query = { 
    username: username
  };
  dbo.collection("Users").find(query).toArray(function(err, results) {
    if(err || results.length === 0) {
      // 401 Unauthorized
      res.status(401);
      res.render('login', { 
        status: true,
        redirect: redir,
       });
      return;
    }
    let result = results[0];
    bcrypt.compare(password, result.password, function(err, same) {
      if(!same){
        res.status(401);
        res.render('login', { 
          status: true, 
          redirect: redir,
        });
        return;
      }
      let token = jwt.sign({
        "exp": Math.floor(Date.now()/1000) + 7200,
        "usr": username
      }, secretKey, 
      {header: {
        "alg": "HS256",
        "typ": "JWT"
      }});
      res.cookie("jwt", token, {
          expires: 0
        });
      if(redir == ""){
        res.status(200).send( "Authentication Successful. Welcome, " + username + "!");
      }
      else{
        res.redirect(redir);
      }
    });
  });
});

router.get('*', function(req, res, next) {
  res.status(404);
  res.render('404', { url: req.url });
});

module.exports = router;
