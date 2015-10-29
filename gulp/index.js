'use strict';

var fs = require('fs'),
	path = require('path'),
	scripts = function(name) { return /(\.(js)$)/i.test(path.extname(name))},
	tasks = fs.readdirSync('./gulp/tasks/').filter(scripts);

tasks.forEach(function(task) {
	require('./tasks/' + task);
});