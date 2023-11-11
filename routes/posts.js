var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'posts/list.ejs' }); //무조건 index로 이동
});

router.get('/insert', function(req, res, next) {
    res.render('index', { title: '글쓰기', pageName:'posts/insert.ejs' }); //무조건 index로 이동
  });

module.exports = router;
