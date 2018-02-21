const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const User = mongoose.model('User');
const Image = mongoose.model('Image');

module.exports = {
  login: (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      // to be added back with browser integration
      // req.session.user = user;
      const { email, password } = req.body;
      if (err) {
        return (err);
      } else if (user == null) {
        return res.status(404).send('Incorrect credentials or user not found');
      } else if (email === user.email && password === user.password) {
        return res.status(200).send('Successful login');
      }
      return next();
    });
  },

  register: (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        return res.status(422).json(err);
      } else if (!err) {
        return res.send('User is registered');
      }
      return next();
    });
  },

  current: (req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    console.log('logged out');
    res.redirect('/');
  },

  upload: (req, res) => {
    if (!req.session.user) {
      return res.status(500).send('no user');
    }
    const newImage = new Image(req.body);
    newImage._user = req.session.user._id;
    newImage.save((err, savedImage) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Image is saved');
        return res.json(savedImage);
      }
    });
  },

  getImages: (req, res) => {
    Image.find({}, (err, allimages) => {
      if (err) {
        console.log(err);
      } else {
        return res.json(allimages);
      }
    });
  },

  showprofile: (req, res) => {
    if (!req.session.user) {
      return res.status(500).send('no such a user');
    }
    console.log('Lets go!!');
    Image.find({ _user: req.params.id }, (err, images) => {
      if (err) {
        console.log(err);
      } else {
        console.log('YEAH!!!!');
        return res.json(images);
      }
    });
  },

  addLike: (req, res) => {
    Image.findOne({ _id: req.body.id }, (err, image) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      if (image.likes.indexOf(req.session.user._id) != -1) {
        const index = image.likes.indexOf(req.session.user._id);
        image.likes.splice(index, 1);
        console.log(image.likes.length);
      } else {
        image.likes.push(req.session.user._id);
        console.log("I've been pushed", image.likes.length);
      }
      image.save((err, savedImage) => {
        if (err) {
          console.log(err);
        } else {
          return res.json(savedImage);
        }
      });
    });
  },

};
