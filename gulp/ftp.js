const gulp = require('gulp');
const gutil = require('gulp-util');
const ftp = require('gulp-ftp');
 
gulp.task('ftp', function () {
    return gulp.src('app/*')
        .pipe(ftp({
            host: 'skm162.hostsila.org',
            user: 'admin@agnertech.com',
            pass: 'Qazwsx56'
        }))
        .pipe(gutil.noop());
});