var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/content', function(req, res, next) {
  res.json([
    {
      title: "Hello World",
      text: "What a wonderful one"
    },
    {
      title: "Answer",
      text: "42"
    }
  ])
});

router.get('/content-jade', function(req, res) {
  res.render('content', { content: [
      {
        title: "Hello World",
        text: "What a wonderful one"
      },
      {
        title: "Answer",
        text: "42"
      }
    ]
  })
});


module.exports = router;
