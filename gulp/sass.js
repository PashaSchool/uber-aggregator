const cnfg = require('../package.json').config;
const gulp = require('gulp');
const sequence = require('run-sequence');

const sass = require('gulp-sass');
const notify = require('gulp-notify');



gulp.task('sass', function() {

	return gulp.src(cnfg.src.sass + '*.scss')
	.pipe(sass())
	.on('error', function(error) {
		notify().write(error)
		this.emit('end')
	})
	.pipe(gulp.dest(cnfg.build.css))
})

gulp.task('sass:watch', function () {
  gulp.watch([
  	cnfg.src.sass + '*.scss',
  	cnfg.src.sass + '**/*.scss',
  	cnfg.src.sass + '**/**/*.scss'
  	], function() {
  	return sequence('sass','postCss')
  });
});