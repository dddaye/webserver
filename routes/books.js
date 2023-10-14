var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'books/search.ejs' }); //무조건 index로 이동
});

// 장바구니 페이지 이동
router.get('/cart', function(req, res) { //next 생략 가능
  res.render('index', {title: '장바구니', pageName:'books/cart.ejs'});
});
module.exports = router;
