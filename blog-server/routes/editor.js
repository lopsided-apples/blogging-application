let express = require('express');
let router = express.Router();
let secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";
let jwt = require('jsonwebtoken')

router.all('/*', function(req, res, next) {
	let valid = false;
	if (req.cookies.jwt){
		jwt.verify(req.cookies.jwt, secretKey, function(err, decoded) {
		  if (!err)
		    valid = true;
		});
  }

  if(valid) {
  	next();
  	return;
  } else {
  	res.redirect('/login?redirect=/editor/');
  	return;
  }
});

module.exports = router;