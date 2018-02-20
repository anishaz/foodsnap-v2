const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const User = mongoose.model('User');
const Image = mongoose.model('Image');

module.exports = {
  login: (req, res) => {
    const user = req.session.user;
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else if (user == null) {
        return res.status(500).send('User does not exist');
      }
      console.log('User logged in');
      req.session.user = user;
      return res.json(user);
    });
  },

  register: (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        return res.json(err);
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
