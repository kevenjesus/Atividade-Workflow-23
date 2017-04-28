var gulp = require('gulp');	// Gulp
var sass = require('gulp-sass');	// Compila o Sass
var htmlmin = require('gulp-htmlmin');	// Minifica o Html
var cleanCSS = require('gulp-clean-css');	// Minifica o Css

// Compila o Sass e Minifica o Css
gulp.task('sass', function () {
  return gulp.src('./source/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});

// Watch de Compilação do Sass 
gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/*.scss', ['sass']);
});

// Minifica o Html
gulp.task('html', function() {
  return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});

// Watch de Minificação do Html
gulp.task('html:watch', function(){
	gulp.watch('./source/index.html',['html'])
});

// Task Default que verifica alteração nos arquivos .scss e .html
gulp.task('default', ['sass:watch', 'html:watch'], function () {
	gulp.watch('./source/');
});
