const express = require('express');
const app = express();
const port = 2000;


app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, (req,res) => {
    console.log('Server running at port: ', port);
});
