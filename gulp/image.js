const gulp = require( 'gulp' );
const imagemin = require('gulp-imagemin');
// const FTP = require("../ftp_data.json");

gulp.task('imgmin', function(){
    return  gulp.src('app/img/*')
        .pipe(imagemin([imagemin.jpegtran({progressive: true})]))
        .pipe(gulp.dest('app/img'))
})

