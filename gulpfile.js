let gulp = require('gulp');
let less = require('gulp-less');
let cssmin = require('gulp-cssmin');
let rename = require('gulp-rename');

function css_style() {
    return gulp.src('./src/styles/style.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

function watch() {
    gulp.watch('./src/styles/*.less', css_style);
}

gulp.task(css_style);
gulp.task('default', gulp.series(css_style, watch));