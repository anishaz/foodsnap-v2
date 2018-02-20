const express = require('express');

const router = express.Router();

/* GET images listing. */
router.get('/', (req, res, next) => {
  res.json([{
    id: 1,
    url: 'google.com',
  }, {
    id: 2,
    url: 'cnn.com',
  }]);
});

module.exports = router;
