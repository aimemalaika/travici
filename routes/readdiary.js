const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const route = express.Router();


route.get('/Read-Diary',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','readdiary.html'));
})


module.exports= route;