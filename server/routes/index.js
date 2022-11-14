const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/',  (req, res, next), {
  // View-Model
  res.render('index', {
    title: 'Express',
    author: 'Ivan Rivalcoba',
  }),
});

module.exports = router;
