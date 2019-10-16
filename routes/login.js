const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const route = express.Router();


route.get('/Login',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','login.html'));
})


module.exports= route;