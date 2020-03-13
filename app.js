const express = require('express');
const app = express();
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology : true  });

app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});

app.use('/posts', postsRoute);
app.use('/user', userRoute);

app.listen(port, (req,res) => {
    console.log('Server running at port: ', port);
});
