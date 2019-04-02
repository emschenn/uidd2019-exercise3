var express = require('express');
var app = express();
//var data = require('students.json');
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static(`${__dirname}/dist`))

app.get('/hello', (req, res) => {
  var fs = require('./students.json');
  var id = req.query.search;
  var name;
  for(key in fs){
    if(key == id)
        name = fs[key];
  }
  res.send('Hello, '+ name);
})

app.get('/add', (req, res) => {
  var fs = require('./students.json');
  var id = req.query.addid;
  var name = req.query.addname;
  fs[id] = name;
})

app.get('/delete', (req, res) => {
  var fs = require('./students.json');
  var id = req.query.delete;
  var name;
  for(key in fs){
    if(key == id)
        delete fs[key];
  } 
})

app.get('/listall', (req, res) => {
  var fs = require('./students.json');
  res.send(fs);
})

app.listen(12500, function () {
  console.log('Example app listening on port 12500!');
});


