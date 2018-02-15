var express = require('express');
var logger = require('morgan');
var app = express();
var homepageTemplate = require('jade').compileFile(__dirname + '/source/templates/homepage.jade');
var ipconverterTemplate = require('jade').compileFile(__dirname + '/source/templates/ipconverter.jade');

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = homepageTemplate({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.get('/ipconverter', (req, res, next) => {
  try {
    var html = ipconverterTemplate({ title: 'Ip Converter' })
    res.send(html)
  } catch (e) {
    next(e)
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});