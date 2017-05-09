// REQUIRING GULP, SASS, and BABEL

let gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-CSS'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	babel = require('gulp-babel');

// DEFAULT GULP TASK

gulp.task('default', function(){
	console.log('i am a default task...');
	gulp.watch('src/sass/**/*.scss', ['styles']);
	gulp.watch('src/**/*.js', ['front']);
	gulp.watch('src/**/*.html', ['html']);
});

// GULP RUNNING CSS minified FILE FOR SASS

gulp.task('styles', function(){
	gulp.src('src/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./public/css/'));
});

// GULP RUNNING JS SCRIPTS minified FE

gulp.task('front', function(){
	return gulp.src('src/**/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(uglify())
	.pipe(gulp.dest('./public/js/'));
});

// GULP RUNNING HTML minified

gulp.task('html', function(){
	return gulp.src('src/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./public/'));
});
