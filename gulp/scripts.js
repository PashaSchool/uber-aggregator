const gulp = require('gulp');
const concat = require('gulp-concat');
const cnfg = require('../package.json').config;

gulp.task('script', function() {
	return gulp.src(cnfg.src.js + "**/*.js")
	.pipe(concat('main.js'))
	.pipe(gulp.dest(cnfg.build.js))
})

gulp.task('script:watch', function() {
	gulp.watch(cnfg.src.js + "**/*.js", ['script'])
})