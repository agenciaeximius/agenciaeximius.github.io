import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-terser';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import replace from 'gulp-replace';
import zip from 'gulp-zip';
import merge from 'merge-stream';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

function compileSass() {
	return gulp
		.src('./src/scss/style.scss')
		.pipe(
			plumber({
				errorHandler: notify.onError('Error: <%= error.message %>'),
			}),
		)
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
		.pipe(
			plumber({
				errorHandler: notify.onError('Error: <%= error.message %>'),
			}),
		)
		.pipe(concat('script.min.js'))
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			}),
		)
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/'))
		.pipe(browserSync.stream());
}

function buildZip() {
	const htmlStream = gulp.src('./public/**/*.html').pipe(replace(/\.html(?=["'])/g, ''));

	const assetsStream = gulp.src(['./public/**/*', '!./public/**/*.html'], { encoding: false });

	return merge(htmlStream, assetsStream).pipe(zip('publicLive.zip')).pipe(gulp.dest('./'));
}

function sync(done) {
	browserSync.init({
		server: {
			baseDir: './public',
		},
	});
	done();
}

function watch() {
	gulp.watch('./src/scss/**/*.scss', compileSass);
	gulp.watch('./src/scripts/*.+(js|jsx)', gulpJS);
	gulp.watch('./public/**/*.html').on('change', browserSync.reload);
}

export default gulp.parallel(sync, compileSass, gulpJS, watch);

// gulp publicLive
export const publicLive = gulp.series(gulp.parallel(compileSass, gulpJS), buildZip);
