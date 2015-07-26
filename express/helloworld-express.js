/**
 * @file helloworld-express.js
 * @version 1.0
 * @author Víctor Cuervo (http://lineadecodigo.com)
 * @date   30/junio/2015
 * @url    http://lineadecodigo.com/nodejs/hola-mundo-con-node-js-y-express/
 * @description Programa con un Hola Mundo con NodeJS y Express.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	  res.send('Hola Mundo');
});

var server = app.listen(3000, function () {
	  console.log('Servidor ejecutandose en localhost:3000');
});


