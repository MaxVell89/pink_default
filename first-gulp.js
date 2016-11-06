var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

// gulp.task('less', function () {
//   return gulp.src('less/style.less')
//     .pipe(less())
//     .pipe(gulp.dest('css'))
//     .pipe(browserSync.reload({stream: true}))
// });

gulp.task('less', function(done) {
  gulp.src('less/style.less')
    .pipe(less().on('error', function(error) {
      // у нас ошибка
      done(error);
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}))
    .on('end', function() {
      // у нас все закончилось успешно
      done();
    });

});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'less'], function() {
  gulp.watch('less/**/*.less', ['less']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/*js', browserSync.reload);
});

gulp.task('default', ['watch']);
