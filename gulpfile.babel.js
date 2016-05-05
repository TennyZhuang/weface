'use strict';

const gulp = require('gulp');
const sourceMaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const src = ['src/**/*.js'];
const testSrc = ['test/**/*.js'];
const srcOption = { base: './' };
const dest = './dist'

gulp.task('lint', () => {
  return gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('extras', () => {
  return gulp.src([
    'src/*.*',
    '!src/*.html',
    '!src/*.js'
  ]);
});

gulp.task('default', ['clean', 'lint'], () => {
  return gulp.src(src, srcOption)
    .pipe(sourceMaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourceMaps.write('.', { includeContent: false, sourceRoot: '..' }))
    .pipe(gulp.dest(dest));
});

gulp.task('clean', () => {
  return gulp.src(dest, {read: false})
    .pipe(clean());
});

gulp.task('test', () => {
  return gulp.src(testSrc, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});
