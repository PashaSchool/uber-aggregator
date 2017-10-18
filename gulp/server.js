const gulp = require('gulp');
const server = require('browser-sync').create();
const cnfg = require('../package.json').config;

gulp.task('server', function() {
	server.init({
		server: {
			baseDir: "./app/"
		},
		files: [
			cnfg.build.html + "*.html",
			cnfg.build.css + "*.css"
		]
	})
})