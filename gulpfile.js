const jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
console.log('Paso por aqui')
});


gulp.task('lint', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
