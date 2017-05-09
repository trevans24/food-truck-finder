var gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel');

gulp.task('default', function(){
	console.log('i am a default task...');
	gulp.watch('./public/sass/**/*.scss', ['styles']);
});

gulp.task('styles', function(){
	gulp.src('./public/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public/css/'));
});