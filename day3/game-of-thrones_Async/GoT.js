var fs = require('fs');

var fileActions = require('./GoTcb.js')

fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);

