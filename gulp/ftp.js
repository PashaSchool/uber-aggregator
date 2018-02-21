const gulp = require( 'gulp' );
const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

const FTP = require("../ftp_data.json");
 
gulp.task( 'ftp', function () {
 
    var conn = ftp.create( {
        host: FTP.host,
        user: FTP.user,
        password: FTP.password
    } );
 
    var globs = [
        'app/css/**',
        'app/js/**',
        'app/img/**',
        'app/index2.html',
        'app/about.html',
    ];

    return gulp.src( globs, { base: './app/', buffer: false } )
        .pipe( conn.newer( '/agregator.agnertech.com' ) )
        .pipe( conn.dest( '/agregator.agnertech.com' ) );
 
});
