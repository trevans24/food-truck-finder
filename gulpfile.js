// REQUIRING GULP, SASS, and BABEL

let gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel');

// DEFAULT GULP TASK

gulp.task('default', function(){
	console.log('i am a default task...');
	gulp.watch('./public/sass/**/*.scss', ['styles']);
	gulp.watch('src/**/*.js', ['front']);
});

// GULP RUNNING CSS FILE FOR SASS

gulp.task('styles', function(){
	gulp.src('./public/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public/css/'));
});

// GULP RUNNING SCRIPTS FE

gulp.task('front', function(){
	return gulp.src('src/**/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(gulp.dest('./public/js/'));
});

