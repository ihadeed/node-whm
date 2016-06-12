var
  gulp = require('gulp'),
  exec = require('child_process').exec;

gulp.task('build:js', function(done){
  exec('tsc', function(err, stdout, stderr){
    console.log(stdout);
    console.error(stderr);
    done(err);
  });
});

gulp.task('watch:js', function(){
  return gulp.watch('src/**/*.ts', ['build:js']);
});