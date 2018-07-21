const express = require('express');
const app = express();
const port = 2000;
const postsRoute = require('./routes/posts');
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


mongoose.connect(config.url, () => {
    console.log('Connected to database: ', config.url);
});

mongoose.connection.on('error', (error) => {
    console.log('Error connecting database: ', error);
});

app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});

app.use('/posts', postsRoute);

app.listen(port, (req,res) => {
    console.log('Server running at port: ', port);
});
