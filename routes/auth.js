const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret';

// User registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const saltRounds = 10;

  const passwordValidation = {
    lowerCase: /[a-z]/.test(password),
    upperCase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    minLength: password.length >= 8,
  };

  const isValidPassword =
    passwordValidation.lowerCase &&
    passwordValidation.upperCase &&
    passwordValidation.number &&
    passwordValidation.minLength;

  if (!isValidPassword) {
    return res.status(400).json({ message: 'Invalid password.' });
  }

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    const user = new User({ email, password: hash });
    await user.save();
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error during login after registration.' });
      }

      // Generate a JWT token containing the user ID
      const token = jwt.sign({ id: user._id }, JWT_SECRET, {
        expiresIn: '1d', // Set the token's expiration time, e.g., 1 day
      });

      return res.status(201).json({ message: 'Registration successful.', token });
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000 && err.name === 'MongoError') {
      res.status(400).json({ message: 'Email already registered.' });
    } else {
      res.status(400).json({ message: 'Error During Registration.)' });
    }
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
        
        // Generate a JWT token containing the user ID
        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
          expiresIn: '1d', // Set the token's expiration time, e.g., 1 day
        });
  
        return res.json({ message: 'login successful', user, token });
      });
    })(req, res, next);
  });
  

// User logout
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful.' });
});

module.exports = router;
