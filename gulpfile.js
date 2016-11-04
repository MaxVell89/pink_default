var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});
