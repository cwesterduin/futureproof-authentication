const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

app.use(cors('*'));
app.use(bodyParser.json())

app.get('/', (req, res) => res.json({ message: 'Welcome' }));

const userRoutes = require('./users');
const authRoutes = require('./auth');

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

module.exports = app