var
  gulp = require('gulp'),
  ts = require('gulp-typescript'),
  tsProject = ts.createProject('tsconfig.json');

gulp.task('build:js', function(done){
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('dist'));
});