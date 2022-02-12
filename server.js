const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/book-store'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/book-store/src/index.html'));});
app.listen(process.env.BaseUrl || 4200);