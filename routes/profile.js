const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const route = express.Router();


route.get('/Profile',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','profile.html'));
})


module.exports= route;