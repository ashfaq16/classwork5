  var http = require('http');
  var express = require('express');
  var app = express();
  var server = http.Server(app);
  
  
   app.get('/form', function(req, res){
     res.sendFile(__dirname+'/Form.html');
  });
  
  app.get('/about', function(req, res){
     res.sendFile(__dirname+'/about.html');
  });
  
   app.get('/', function(req, res){
     res.sendFile(__dirname+'/index.html');
  });
  
 app.post('/submit_user', function (req, res) {
    console.log(req.body);
    res.send( ' Submitted Successfully!');
});

 

server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
});