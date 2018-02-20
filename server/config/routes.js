const express = require('express');

const controller = require('.././controllers/controller');

const router = express.Router();

/* GET default. */
router.get('/', (req, res, next) => {
  res.send('Welcome to the Foodsnap API');
});

/* GET users listing. */
router.get('/users', (req, res, next) => {
  res.json([{
    id: 1,
    username: 'samsepi0l',
  }, {
    id: 2,
    username: 'D0loresH4ze',
  },
  ]);
});

// Create new users
router.post('/users', controller.register);


/* GET images listing. */
router.get('/images', controller.getImages);

module.exports = router;
