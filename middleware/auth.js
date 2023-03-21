// middleware/auth.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret'; // This should match the secret used in routes/auth.js

function authenticateJWT(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.userId = user.id;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = authenticateJWT;
