const express = require('express');

const app = express();

const {
  register, login, logout, getImages,
} = require('.././controllers/controller');

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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// Foodsnap
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/images', getImages);

module.exports = router;
