/**
 * @file obtener-parametro-get.js
 * @version 1.0
 * @author Víctor Cuervo (http://lineadecodigo.com)
 * @date   26/julio/2015
 * @url    http://lineadecodigo.com/nodejs/parametros-get-con-node-js-y-express/
 * @description Ejemplo de uso de Node.js y Express.js para obtener un parámetro enviado por GET
 */

var express = require('express');
var app = express();


app.get('/saludo', function (req, res) {

	var nombre = req.query.nombre || '';
	var saludo = '';
	
	if (nombre != '')
		saludo = "Hola " + nombre;
	
	res.send('<html><body>'
		      + '<h1>Saludo</h1>'
		      + '<p>' + saludo + '</p>'
		      + '<form method="get" action="/saludo">'
		      + '<label for="nombre">¿Cómo te llamas?</label>'
		      + '<input type="text" name="nombre" id="nombre">'	
		      + '<input type="submit" value="Enviar"/>'
		      + '</form>'
		      + '</body></html>');
	
});



// Arrancamos el servidor
var server = app.listen(8000, function () {
	  console.log('Servidor ejecutandose en localhost:8000');
});
