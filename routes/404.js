const express = require('express');

const route = express.Router();


route.use((req,res,next) => {
    res.status(404).send("<h1>Page not found !</h1>");
});


module.exports = route;