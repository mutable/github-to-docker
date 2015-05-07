var gulp = require('gulp')
var browserify = require('browserify')
var reactify = require('reactify');
var source = require('vinyl-source-stream')
var react = require('gulp-react')

var gutil = require('gulp-util')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

var uglify = require('gulp-uglify')
var watch = require('gulp-watch')
var concat = require('gulp-concat')
var notify = require('gulp-notify')


gulp.task('less', function () {
	return gulp.src('./public/less/style.less')

	.pipe(less({compress: false}).on('error', gutil.log))

	.pipe(minifyCSS({keepBreaks: true}))
	.pipe(gulp.dest('./public/less/'))
	.pipe(notify('Less Compiled Minified'));
});

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify);
  b.add('./app/router.jsx');

  return b.bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./public/js/'))
    .pipe(notify('JSX Compiled Minified'));
});

gulp.task('watch', function() {
	gulp.watch('./public/less/*.less', function() {
		gulp.run('less');
	});

	gulp.watch('./app/**/*.jsx', function() {
		gulp.run('browserify');
	});

	gulp.watch('./app/*.jsx', function() {
		gulp.run('browserify');
	});
});

gulp.task('default', ['less', 'browserify', 'watch']);

