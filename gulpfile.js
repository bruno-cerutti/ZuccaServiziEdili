var gulp = require('gulp');

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('watch', ['browserSync'], function (){
    gulp.watch('Site/index.html', browserSync.reload);
    gulp.watch('Site/pages/*.html', browserSync.reload);
    gulp.watch('Site/assets/js/*.js', browserSync.reload);
    gulp.watch('Site/assets/css/*.css', browserSync.reload);
});

gulp.task('fonts', function() {
  return gulp.src('Site/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('css', function() {
  return gulp.src('Site/assets/css/**/*')
  .pipe(gulp.dest('dist/assets/css'))
});

gulp.task('js', function() {
  return gulp.src('Site/assets/js/**/*')
  .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('img', function() {
  return gulp.src('Site/assets/images2/**/*')
  .pipe(gulp.dest('dist/assets/images2'))
});

gulp.task('html', function() {
  return gulp.src('Site/index.html')
  .pipe(gulp.dest('dist'))
});

var del = require('del');
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

var runSequence = require('run-sequence');
gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['html', 'css', 'js', 'img', 'fonts'],
    callback
  )
});