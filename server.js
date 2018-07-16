  var http = require('http');
  var express = require('express');
  var app = express();
  var server = http.Server(app);
  
  
  app.get('/', function(req, res){
     res.sendFile(__dirname+'/about.html');
  });
  
   app.get('/', function(req, res){
     res.sendFile(__dirname+'/index.html');
  });
  
    app.get('/', function(req, res){
     res.sendFile(__dirname+'/Form.html');
  });

server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
});