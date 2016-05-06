'use strict';

const gulp = require('gulp');
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const size = require('gulp-size');

import del from 'del';

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

gulp.task('scripts', () => {
    return gulp.src(src)
      .pipe(sourceMaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(sourceMaps.write('.'))
      .pipe(gulp.dest(dest));
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('extras', () => {
  return gulp.src([
    'src/*.*',
    '!src/*.js'
  ]).pipe(gulp.dest('dist'));
});

gulp.task('build', ['scripts', 'extras', 'images', 'lint', 'clean'], () => {
  return gulp.src('dist/**/*').pipe(size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('test', () => {
  return gulp.src(testSrc, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});
