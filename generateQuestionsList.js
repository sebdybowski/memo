#!/usr/bin/node
var fs = require('fs');

fs.readdirSync('./pages/questions', file => console.log(file));

var files = fs.readdirSync(`${__dirname}/pages/questions`);

fs.writeFileSync(
  `${__dirname}/questions.json`,
  JSON.stringify({ files })
);
