var gulp = require('gulp')

var $ = require('gulp-load-plugins')();

var webpack = require('gulp-webpack');

var webpack_config  = require('./webpack.config')


// IP For your corp's LAN
var RE_LOCAL_IP = /^172/

// Webserver
gulp.task('serve', function () {
    var os = require('os');
    var ifaces = os.networkInterfaces();
    var local_ip;
   
    for (var k in ifaces) {
        for (var m in ifaces[k]){
            if (ifaces[k][m].internal === false && ifaces[k][m].family === 'IPv4' 
                    && RE_LOCAL_IP.test(ifaces[k][m].address)) {
                local_ip = ifaces[k][m].address;
            }
        }
    }

    if (!local_ip) {
        // if you need lan ,then change it to '0.0.0.0'
        local_ip = 'localhost';
    }

    gulp.src('./')
        .pipe($.webserver({
            host: local_ip,
            fallback:'index.html',
            livereload: true,
            port: 9111,
            open:true
        }));
});


gulp.task("webpack", function() {
    return gulp.src('./js/app.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('watch', ['webpack',  'serve'], function(){
    gulp.watch('js/**.js', ['webpack']);
});


