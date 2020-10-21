// const express = require('express')
import express from 'express';
var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});