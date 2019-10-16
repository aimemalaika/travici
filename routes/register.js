const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const route = express.Router();


route.get('/Register',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','register.html'));
})


module.exports= route;