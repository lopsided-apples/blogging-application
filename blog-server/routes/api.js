let express = require('express');
let mongo = require('mongodb');
let router = express.Router();
let secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
let jwt = require('jsonwebtoken');
let MongoClient = require('mongodb').MongoClient;
let db;

const MONGODB_URI = "mongodb://localhost:27017/";

MongoClient.connect(MONGODB_URI, function(err, database) {
  db = database;
});

/* Returns an array of posts by the user */
router.get('/:username', function(req, res, next) {
  var valid = false;
  if (req.cookies.jwt){
    jwt.verify(req.cookies.jwt, secretKey, function(err, decoded) {
      if (!err && decoded.usr == req.params.username)
        valid = true;
    });
  }
  if (!valid){
    res.status(401).json();
    return;
  }
	let dbo = db.db('BlogServer');
  let query = { 
    username: req.params.username,  
  };

  dbo.collection("Posts").find(query).toArray(function(err, results) {
    if(err || results.length === 0) {
      res.status(404);
      res.json({ error: 'User not found' });
      return;
    }

    res.status(200);
    res.json({ body: results });
  });
});

/* Returns a single post with the username and postid */
router.get('/:username/:postid', function(req, res, next) {
  var valid = false;
  if (req.cookies.jwt){
    jwt.verify(req.cookies.jwt, secretKey, function(err, decoded) {
      if (!err && decoded.usr == req.params.username)
        valid = true;
    });
  }
  if (!valid){
    res.status(401).json();
    return;
  }
  let dbo = db.db('BlogServer');
  let query = { 
    username: req.params.username, 
    postid:   parseInt(req.params.postid) 
  };

  dbo.collection("Posts").find(query).toArray(function(err, results) {
    if(err || results.length === 0) {
      // 404 Not Found
      res.status(404);
      res.json({ error: 'Post not found' });
      return;
    }

    res.status(200);
    res.json({ body: results[0] });
  });
});

/* Creates a new post with the username and postid */
router.post('/:username/:postid', function(req, res,next) {
  var valid = false;
  if (req.cookies.jwt){
    jwt.verify(req.cookies.jwt, secretKey, function(err, decoded) {
      if (!err && decoded.usr == req.params.username)
        valid = true;
    });
  }
  if (!valid){
    res.status(401).json();
    return;
  }
  //req.body.title = req.body.title ? req.body.title : '';
  //req.body.body  = req.body.body ? req.body.body : '';

  if((!req.body.title && req.body.title !== '') || (!req.body.body && req.body.body !== '') || isNaN(parseInt(req.params.postid)) || parseInt(req.params.postid) < 0) {
    res.status(400).json();
    return;
  }

  let findQuery = {
    username: req.params.username,
    postid:   parseInt(req.params.postid)
  };

  let timeNow = req.body.created ? req.body.created : (new Date).getTime();

  let putQuery = { 
    username:   req.params.username,
    postid:     parseInt(req.params.postid),
    title:      req.body.title, 
    body:       req.body.body,
    created:    timeNow,
    modified:   timeNow
  };

  let dbo = db.db('BlogServer');
  dbo.collection('Posts').find(findQuery).limit(1).toArray(function(err, results) {
    if(err || results.length !== 0) {
      // 400 Bad Request
      res.status(400);
      res.json({ error: 'Post already exists!' });
      return;
    }

    dbo.collection('Posts').insertOne(putQuery, null, function(err, results) {
      if(err) {
        // 500 Server error
        res.status(500);
        res.json({ error: 'Server error' });
        return;
      }

      res.status(201).json();
    });
  });
});

/* Updates the title and body of a post with corresponding username and postid */
router.put('/:username/:postid', function(req, res,next) {
  var valid = false;
  if (req.cookies.jwt){
    jwt.verify(req.cookies.jwt, secretKey, function(err, decoded) {
      if (!err && decoded.usr == req.params.username)
        valid = true;
    });
  }
  if (!valid){
    res.status(401).json();
    return;
  }

  if((!req.body.title && req.body.title !== '') || (!req.body.body && req.body.body !== '')) {
    res.status(400);
    res.json({ error: 'Missing post title or body in POST body'});
    return;
  }

  let query = {
    username: req.params.username,
    postid:   parseInt(req.params.postid)
  };

  let updateQuery = {
    $set: {
      title:    req.body.title,
      body:     req.body.body,
      modified: (new Date).getTime()
    }
  };

  let dbo = db.db('BlogServer');
  dbo.collection('Posts').find(query).limit(1).toArray(function(err, results) {
    if(err || results.length === 0) {
      // 404 Not Found
      res.status(400);
      res.json({ error: 'Post does not exist!' });
      return;
    }

    dbo.collection('Posts').updateOne(query, updateQuery, function(err, results) {
      if(err) {
        // 500 Server error
        res.status(500);
        res.json({ error: 'Server error' });
        return;
      }

      res.status(200).json();
    });
  });
});

/* Deletes a post with the username and postid */
router.delete('/:username/:postid', function(req, res,next) {
  var valid = false;
  if (req.cookies.jwt){
    jwt.verify(req.cookies.jwt, secretKey, function(err, decoded) {
      if (!err && decoded.usr == req.params.username)
        valid = true;
    });
  }
  if (!valid){
    res.status(401).json();
    return;
  }
  let query = {
    username: req.params.username,
    postid:   parseInt(req.params.postid)
  };

  let dbo = db.db('BlogServer');
  dbo.collection('Posts').find(query).limit(1).toArray(function(err, results) {
    if(err || results.length === 0) {
      // 400 Bad request
      res.status(400);
      res.json({ error: 'Post does not exist!' });
      return;
    }

    dbo.collection('Posts').deleteOne(query, null, function(err, results) {
      if(err) {
        // 500 Server error
        res.status(500);
        res.json({ error: 'Server error' });
        return;
      }

      res.status(204).json();
    });
  });
});

module.exports = router;