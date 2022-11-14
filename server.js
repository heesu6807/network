const express = require('express');
const app = express();

app.listen(8081, function(){
    console.log('listening on 8081')
});

app.use(express.static('css'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/upload.html');
})

app.get('/upload2.html', function(req, res){
    res.sendFile(__dirname + '/upload2.html');
})

app.get('/streaming.html', function(req, res){
    res.sendFile(__dirname + '/streaming.html');
})

app.get('/streamset.html', function(req, res){
    res.sendFile(__dirname + '/streamset.html');
})

app.get('/streamboard.html', function(req, res){
    res.sendFile(__dirname + '/streamboard.html');
})