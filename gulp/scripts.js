const gulp = require('gulp');
const babel = require("gulp-babel");
const cnfg = require('../package.json').config;
const concat = require('gulp-concat');
const sourcemaps = require("gulp-sourcemaps");

gulp.task('script', function() {
	return gulp.src([cnfg.src.js + "**/*.js", "!" + cnfg.src.js + "_assets/**/*.js"])
	.pipe(sourcemaps.init())
	.pipe(babel())
	.pipe(concat('index.js'))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest(cnfg.build.js))
});

gulp.task('script:watch', function() {
	gulp.watch([cnfg.src.js + "**/*.js", "!" + cnfg.src.js + "_assets/"], ['script'])
})
