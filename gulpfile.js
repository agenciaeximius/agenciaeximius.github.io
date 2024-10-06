import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

function compileSass() {
	return gulp
		.src('./src/scss/style.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(
			autoprefixer({
				cascade: false,
			}),
		)
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('./public/css/'))
		.pipe(browserSync.stream());
}

function gulpJS() {
	return gulp
		.src('./src/scripts/*.+(js|jsx)')
		.pipe(concat('script.min.js'))
		.pipe(
			babel({
				presets: ['@babel/env'],
			}),
		)
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/'))
		.pipe(browserSync.stream());
}

function sync() {
	browserSync.init({
		server: {
			baseDir: './public',
		},
	});
}

function watch() {
	gulp.watch('./src/scss/**/**/*.scss', compileSass);
	gulp.watch('./src/scripts/*.js', gulpJS);
	gulp.watch('./public/**/*.html').on('change', browserSync.reload);
}

export default gulp.parallel(compileSass, gulpJS, watch, sync);
