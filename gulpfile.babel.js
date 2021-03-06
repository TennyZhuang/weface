'use strict';

const gulp = require('gulp');
const sourceMaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const base64 = require('gulp-css-base64');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano')
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const size = require('gulp-size');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
const zip = require('gulp-zip');
const version = require('./package.json').version;

import del from 'del';
import fs from 'fs';

const src = ['src/**/*.js'];
const testSrc = ['test/**/*.js'];
const srcOption = { base: './' };
const dest = './dist';

gulp.task('lint', () => {
  return gulp.src(src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('styles', () => {
  return gulp.src('src/weface.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(base64())
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', () => {
    return gulp.src(src)
      .pipe(sourceMaps.init())
      .pipe(babel())
      .pipe(uglify())
      .pipe(sourceMaps.write('.'))
      .pipe(gulp.dest(dest));
});

gulp.task('extras', () => {
  return gulp.src([
    'src/*.*',
    '!src/*.js',
    '!src/*.sass'
  ]).pipe(gulp.dest('dist'));
});

gulp.task('build', ['scripts', 'styles', 'extras', 'lint'], () => {
  return gulp.src('dist/**/*')
    .pipe(size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

gulp.task('gz', () => {
  return gulp.src('dist/**/*')
    .pipe(tar(`weface-${version}.tar`))
    .pipe(gzip())
    .pipe(gulp.dest('release'));
});

gulp.task('zip', () => {
  return gulp.src('dist/**/*')
    .pipe(zip(`weface-${version}.zip`))
    .pipe(gulp.dest('release'));
});

gulp.task('examples', () => {
  return gulp.src('dist/**/*')
    .pipe(gulp.dest('examples'));
});

gulp.task('release', () => {
  gulp.start('gz');
  gulp.start('zip');
  gulp.start('examples');
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('test', () => {
  return gulp.src(testSrc, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});
