var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	changed = require('gulp-changed'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	stripDebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	autoprefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	compass = require('gulp-compass');

gulp.task('jshint', function() {
	gulp.src('js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
	gulp.src(['./scripts/*.js'])
	.pipe(concat('scripts.js'))
	.pipe(stripDebug())
	.pipe(uglify())
	.pipe(gulp.dest('./build/scripts/'))
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
	gulp.src(['stylesheets/*.css'])
	.pipe(concat('main.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});


// Local webserver
gulp.task('webserver', function() {
  connect.server();
});

gulp.task('compass', function() {
	gulp.src('sass/*.scss')
	.pipe(compass({
		config_file: './config.rb',
      	css: 'stylesheets',
      	sass: 'sass'
	}))
	.pipe(gulp.dest('app/assets/temp'));
});

// default gulp tasks
gulp.task('default', ['scripts', 'styles', 'compass', 'webserver'], function() {
	// watch for JS changes
  gulp.watch('./scripts/*.js', function() {
    gulp.run('jshint', 'scripts');
  });

  gulp.watch('./sass/*.scss', function() {
    gulp.run('compass');
  });
 
  // watch for CSS changes
  gulp.watch('./stylesheets/*.css', function() {
    gulp.run('styles');
  });
});