const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const menuRouter = require('./routers/menu.router');

const app = express();

app.use(body_parser.json());

app.use('/', userRouter);
app.use('/', menuRouter);

module.exports = app;