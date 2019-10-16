const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const route = express.Router();


route.get('/List-Diaries',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','listdiaries.html'));
})


module.exports= route;