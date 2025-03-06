var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Strona Index');
});

app.get('/contact', function(req, res){
	res.send('Strona Kontakt');
});



app.listen(3000, function(){
	console.log('Serwer działa prawidłowo');
});