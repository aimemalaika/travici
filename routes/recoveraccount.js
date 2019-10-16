const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const route = express.Router();


route.get('/Recover-Account',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','recoverpassword.html'));
})


module.exports= route;