const gulp = require('gulp');
const sequence = require('run-sequence')

gulp.task('default', function(){
	sequence('sass', 'pug', 'server', 'sass:watch', 'pug:watch')
})