const express = require('express');

const { register, login, getImages } = require('.././controllers/controller');

const router = express.Router();

/* GET default. */
router.get('/', (req, res) => {
  res.send('Welcome to the Foodsnap API');
});

/* GET users listing. */
router.get('/users', (req, res) => {
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
router.post('/register', register);
router.post('/login', login);
router.get('/images', getImages);

module.exports = router;
