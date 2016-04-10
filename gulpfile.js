var gulp 		= require('gulp'),
	htmlmin 	= require('gulp-htmlmin'),
	csso 		= require('gulp-csso'),
	imagemin	= require('gulp-imagemin')
	uglify		= require('gulp-uglify');

gulp.task('copyJSON', function() {
	return gulp.src('Content/*')
		.pipe(gulp.dest('dist/Content'))
});

gulp.task('html', function() {
	return gulp.src('*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
});

gulp.task('css', function() {
	return gulp.src('css/*')
		.pipe(csso())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('img', function() {
	return gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});

gulp.task('copyJQuery', function() {
	return gulp.src('Scripts/jquery-1.6.4.min.js')
		.pipe(gulp.dest('dist/Scripts'))
});

gulp.task('js', function() {
	return gulp.src('Scripts/app.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/Scripts'))
});

gulp.task('build', ['copyJSON', 'html', 'css', 'img', 'copyJQuery', 'js']);

gulp.task('default', ['build']);