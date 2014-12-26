var gulp = require('gulp');
var sass = require('gulp-sass');
var ftp = require('gulp-ftp');
var connect = require('gulp-connect');

var paths = {
    sass: ['./css/scss/**/*.scss'],
    css: './css/compiled',
    html: ['./*.html']
};

gulp.task('ftp', function () {
    gulp.src(paths.css + "/*.css")
        .pipe(ftp({
            host: 'ftp.wellencpa.com',
            user: 'cwellen01',
            pass: 'Parsons1'
        }));
});

gulp.task('connect', function () {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.css))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src(paths.css)
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['connect', 'watch']);