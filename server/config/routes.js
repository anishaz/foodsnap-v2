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

// Foodsnap
router.post('/create-user', controller.register);
router.post('/login', controller.login);
router.get('/images', controller.getImages);

module.exports = router;
