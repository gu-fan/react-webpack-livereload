var gulp = require('gulp')

var $ = require('gulp-load-plugins')();

var webpack = require('gulp-webpack');

var webpack_config  = require('./webpack.config')

var bower = require('gulp-bower')

var sass = require('gulp-sass')


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

    gulp.src('./dist')
        .pipe($.webserver({
            host: local_ip,
            fallback:'index.html',
            livereload: true,
            // livereload: {
            //     enable: true,
            //     filter: function(fileName) {
            //         // console.log('LIVE_RELOAD:'+fileName);
            //         if (fileName.match(/dist\/js\/app.js$/)) {
            //             return true
            //         } else {
            //             return false
            //         }
            //     }
            // },
            port: 9111,
            open:true
        }));
});

gulp.task("html", function(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'));
})

gulp.task("sass", function() {
    return gulp.src('./src/scss/**/*.scss')
          .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task("webpack", function() {
    return gulp.src('./src/js/app.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('bower', function() {
    gulp.src('src/vendor/**/*.{js,css,eot,svg,ttf,woff,woff2,map}', {base: 'app/bower_components'})
        .pipe(gulp.dest('dist/vendor/'));
});

gulp.task('watch', ['webpack', 'sass', 'html', 'serve'], function(){
    gulp.watch('./src/js/**/*.js', ['webpack']);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/index.html', ['html']);
});

