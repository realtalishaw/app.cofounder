const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
require('./config/passport')(passport);
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const surveyRoutes = require('./routes/survey');
const cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'your-session-secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use('/api/survey', surveyRoutes);




app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
}); 


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const connectionString = 'mongodb+srv://doadmin:78q5EaAro4k12t09@db-mongodb-nyc1-22353-db14ccba.mongo.ondigitalocean.com/admin?replicaSet=db-mongodb-nyc1-22353&tls=true&authSource=admin';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
