const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

app.use(cors('*'));
app.use(bodyParser.json())

app.get('/', (req, res) => res.json({ message: 'Welcome' }));

const userRoutes = require('./users');
app.use('/users', userRoutes);

module.exports = app