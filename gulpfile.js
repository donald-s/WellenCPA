var gulp = require('gulp');
var sass = require('gulp-sass');
var ftp = require('gulp-ftp');

var paths = {
    sass: ['./css/scss/*.scss'],
    css: './css/compiled'
};

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.css));
});

gulp.task('ftp', function() {
    gulp.src(paths.css + "/*.css")
        .pipe(ftp({
            host: 'ftp.wellencpa.com',
            user: 'cwellen01',
            pass: 'Parsons1'
        }));
});

gulp.task('watch', function() {
   gulp.watch(paths.sass, ['sass']);
//   gulp.watch(paths.css + "/*.css", ['ftp']);
});