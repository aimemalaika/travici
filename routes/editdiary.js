const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const route = express.Router();


route.get('/Edit-Diary',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','editdiary.html'));
})


module.exports= route;