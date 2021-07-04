const express = require('express');
const app = express();
const { port } = require('./config');

// router
const router = require('./routes/web');
app.use('/', router);

// server listener
app.listen(port, () => {
    console.log("Serwer wystartował!");
});