const cnfg = require('../package.json').config;
const gulp = require('gulp');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const fs = require('fs');

gulp.task('pug', function() {
	return gulp.src([cnfg.src.html + '*.pug', '!' + cnfg.src.html + 'layout.pug'])
	.pipe(pug({
		locals : {
			nav: JSON.parse(fs.readFileSync('./data/navigation.json', 'utf-8')),
			content: JSON.parse(fs.readFileSync('./data/content.json', 'utf-8'))
		},
		pretty: true
	}))
	.on('error', function(err) {
		notify().write(err);
		this.emit('end')
	})
	.pipe(gulp.dest(cnfg.build.html))
});

gulp.task('pug:watch', function() {
	gulp.watch([cnfg.src.html + "*.pug", cnfg.src.html + "**/*.pug"], ['pug'])
})
