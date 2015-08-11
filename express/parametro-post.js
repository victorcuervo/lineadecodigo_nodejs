/**
 * @file obtener-parametro-get.js
 * @version 1.0
 * @author Víctor Cuervo (http://lineadecodigo.com)
 * @date   26/julio/2015
 * @url    http://lineadecodigo.com/nodejs/parametros-post-con-node-js-y-express/
 * @description Ejemplo de uso de Node.js y Express.js para obtener un parámetro enviado por GET
 */

var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.use(body_parser.urlencoded({extended:true}));

var formulario = '<form method="post" action="/saludo">'
    + '<label for="nombre">¿Cómo te llamas?</label>'
    + '<input type="text" name="nombre" id="nombre">'	
    + '<input type="submit" value="Enviar"/>'
    + '</form>';
    
var cabecera = '<h1>Saludo</h1>';

app.get('/saludo', function (req, res) {
	
	res.send('<html><body>'
			+ cabecera
			+ formulario
			+ '</html></body>'
	);
	
});

app.post('/saludo', function (req, res) {
	
	var nombre = req.body.nombre || '';
	var saludo = '';
	
	if (nombre != '')
		saludo = "Hola " + nombre;
	
	res.send('<html><body>'
			+ cabecera
			+ '<p>' + saludo + '</p>'
			+ formulario
			+ '</html></body>'
	);

});

// Arrancamos el servidor
var server = app.listen(8000, function () {
	  console.log('Servidor ejecutandose en localhost:8000');
});
