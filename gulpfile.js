var gulp 		= require('gulp'),
	sass 		= require('gulp-ruby-sass'),
	livereload 	= require('gulp-livereload'),
	notify 		= require('gulp-notify');

gulp.task('default', function() {
	gulp.start('sass');
});

// Clean
gulp.task('clean', function(cb) {
    // del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

gulp.task('sass', function() {
	return sass('css/style.scss', { style: 'minified' })
	.pipe(gulp.dest('css/'))
	.pipe(notify({ message: 'Styles task complete' }))
	.pipe(livereload());
});

gulp.task('watch', function() {

  	// Create LiveReload server
  	livereload.listen();

  	// Watch .scss files
  	gulp.watch('css/*.scss', ['sass']);

  	// Watch .js files
  	// gulp.watch('js/*.js', ['sass']);

	// Watch any files reload on change
 	gulp.watch(['**/*.*']).on('change', livereload.reload);
});