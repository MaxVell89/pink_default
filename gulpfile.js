var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var server = require("browser-sync");

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "."
  });

gulp.watch("less/**/*.less", ["style"]);
gulp.watch("*.html")
  .on("change", server.reload);

});
