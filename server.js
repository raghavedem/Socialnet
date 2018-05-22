const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var api = require('./server/routes/api');
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api',api);

app.listen(PORT,function(){
	console.log('App listen at  localhost:'+PORT);
});

