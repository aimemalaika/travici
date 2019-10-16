const path = require('path');
const express = require('express');

const rootPath = require('../helpers/pathrender');

const router = express.Router();

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootPath,'views','index.html'));
});

module.exports = router;