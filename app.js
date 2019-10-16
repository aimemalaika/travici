const express = require('express');
const path= require('path');
const bodyParser = require('body-parser');
const app = express();
const favicon = require('express-favicon');


const loginRoute = require('./routes/login');
const homeRoute = require('./routes/home');
const notFound = require('./routes/404');
const registerRoute = require('./routes/register');
const recoveraccountRoute = require('./routes/recoveraccount');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(favicon(__dirname + '/favicon.ico'));

// app.use('/admin',loginRoute); // filter route from url
app.use(loginRoute); 
app.use(homeRoute);
app.use(registerRoute);
app.use(recoveraccountRoute);
app.use(notFound);

app.listen(3000)