const gulp = require('gulp');
const cfg = require('../package.json').config;
const rename = require('gulp-rename');
const notify = require('gulp-notify');

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');


gulp.task('postCss', function() {
	var props = [autoprefixer(), cssnano];
	return gulp.src(cfg.build.css + "index.css")
	.pipe(postcss(props))
	.on('error', function(err) {
		notify().write(error)
		this.emit('end')
	})
	.pipe(rename({suffix: ".min"}))
	.pipe(gulp.dest(cfg.build.css))
})