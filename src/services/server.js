var location = require('./location.js');

var url = 'https://api.wheretheiss.at/v1/satellites/';
var id = 25544;

location.getData(id, url);
