const gulp = require( 'gulp' );
const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

const FTP = require("../ftp_data.json");
 
gulp.task( 'deploy', function () {
 
    var conn = ftp.create( {
        host: FTP.host,
        user: FTP.user,
        password: FTP.password
    } );
 
    var globs = [
        'app/css/**',
        'app/js/**',
        'app/index.html'
    ];

    return gulp.src( globs, { base: './app/', buffer: false } )
        .pipe( conn.newer( '/agregator.agnertech.com' ) )
        .pipe( conn.dest( '/agregator.agnertech.com' ) );
 
} );