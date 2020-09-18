let express = require('express');
let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let commonmark = require('commonmark');

let router = express.Router();
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

const MONGODB_URI = "mongodb://localhost:27017/";
const DISPLAY_POSTS_LIMIT = 5;

let db;
MongoClient.connect(MONGODB_URI, function(err, database) {
  db = database;
});

/* GET blog post using username and postid */
router.get('/:username/:postid', function(req, res, next) {
  let dbo = db.db('BlogServer');
  let query = { 
    username: req.params.username, 
    postid: parseInt(req.params.postid) 
  };
  dbo.collection("Posts").find(query).toArray(function(err, results) {
    if(err || results.length === 0) {
      // 404 Not Found
      res.status(404);
      res.render('404', { url: req.url });
      return;
    }

    let result = results[0];

    let renderedTitle = writer.render(reader.parse(result.title));
    let renderedBody  = writer.render(reader.parse(result.body));
    
    res.status(200);
    res.render('showPost', { 
      username:   result.username, 
      postid:     result.postid, 
      created:    result.created,
      modified:   result.modified,
      title:      renderedTitle,
      body:       renderedBody
    });
  }); 
});

/* GET first x amount of posts by user */
router.get('/:username', function(req, res, next) {
  let dbo = db.db('BlogServer');
  let skip;
  if(req.query.start) {
    skip = parseInt(req.query.start);
  } else {
    skip = 0;
  }
  let query = { 
    username:   req.params.username, 
    postid:     { "$gte": skip }
  };

  dbo.collection("Posts").find(query).limit(DISPLAY_POSTS_LIMIT).toArray(function(err, results) {
    if(err || results.length === 0) {
      // 404 Not Found
      res.status(404);
      res.render('404', { url: req.url });
      return;
    }

    for(let i = 0; i < results.length; i++) {
      results[i].title = writer.render(reader.parse(results[i].title));
      results[i].body  = writer.render(reader.parse(results[i].body));
    }

    let newSkip = results[results.length-1].postid + 1;

    res.status(200);
    res.render('showUserPosts', {
      results: results, 
      nextUrl: '/blog/' + req.params.username + '?start=' + newSkip
    });
  });
});

router.get('*', function(req, res, next) {
  res.status(404);
  res.render('404', { url: req.url });
});

module.exports = router;