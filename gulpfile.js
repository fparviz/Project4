var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

gulp.task('default', function() {
    return gulp.src('./index.html')
        .pipe(inlineCss({
	        	applyStyleTags: true,
	        	applyLinkTags: true,
	        	removeStyleTags: true,
	        	removeLinkTags: true
        }))
        .pipe(gulp.dest('build/'));
});