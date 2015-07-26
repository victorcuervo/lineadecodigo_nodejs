/**
 * @file holamundo-nodejs.js
 * @version 1.0
 * @author Carmen Rodrigo (http://lineadecodigo.com/author/crodrigob/)
 * @date   23/marzo/2013
 * @url  http://lineadecodigo.com/nodejs/hola-mundo-en-node-js/
 * @description Hola Mundo en Node.js nos muestra un ejemplo de como crear nuestro primer programa con Node.js.
 */

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola Mundo en Node.js\n');
}).listen(8124, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/');