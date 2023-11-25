var express = require('express');
var router = express.Router();

//목록
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판', pageName:'posts/list.ejs' }); //무조건 index로 이동
});

//글쓰기
router.get('/insert', function(req, res, next) {
    res.render('index', { title: '글쓰기', pageName:'posts/insert.ejs' }); 
  });

//읽는거
  router.get('/read', function(req, res, next) {
    const id=req.query.id;
    res.render('index', { title: '게시글정보', pageName:'posts/read.ejs', id}); 
  });

  //게시글수정
  router.get('/update', function(req, res, next) {
    const id=req.query.id;
    res.render('index', { title: '게시글수정', pageName:'posts/update.ejs', id}); 
  });

module.exports = router;
