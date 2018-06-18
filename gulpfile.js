var gulp = require('gulp');
//var browserSync = require('browser-sync').create();
var jasmine = require('gulp-jasmine-phantom');


gulp.task('tests', function () {
	gulp.src('jasmine/spec/feedreader.js')
		.pipe(jasmine({
			integration: true,
			//vendor: 'js/**/*.js'
		}));
});
