const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// User registration
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const saltRounds = 10;
  
    try {
      const hash = await bcrypt.hash(password, saltRounds);
  
      const user = new User({ email, password: hash });
      await user.save();
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error during login after registration.' });
        }
        return res.status(201).json({ message: 'Registration successful.' });
      });
    } catch (err) {
        console.error(err);
      res.status(400).json({ message: 'Error during registration.' });
    }
  });
  

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.status(400).json({ message: info.message });
      }
  
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
  
        return res.json({ message: 'login successful', user });
      });
    })(req, res, next);
  });
  

// User logout
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful.' });
});

module.exports = router;
