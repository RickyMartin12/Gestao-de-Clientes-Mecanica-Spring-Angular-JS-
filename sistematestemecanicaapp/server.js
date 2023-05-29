const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const app = express();
app.use(function (req, res, next) {
      //Enabling CORS
      //res.header("Access-Control-Allow-Origin", "https://sistema-manager-app.herokuapp.com");
	  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
        next();
      });

    httpServer = http.createServer(app);
app.use(cors());
app.use(express.static(__dirname + '/dist/sistematestemecanicaapp'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/sistematestemecanicaapp/index.html'));});
app.listen(process.env.PORT || 8080);