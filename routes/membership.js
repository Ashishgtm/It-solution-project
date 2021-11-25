var express = require('express');
var router = express.Router();

/* GET membership listing. */
router.get('', function(req, res, next) {
  res.render('index',{req: req})
});

module.exports = router;
