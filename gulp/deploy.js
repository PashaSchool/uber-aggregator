const gulp = require( 'gulp' );
const sequence = require('run-sequence');

gulp.task('deploy', function() {
    sequence('imgmin', 'ftp')
})