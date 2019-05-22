var gulp = require('gulp');
var sass = require('gulp-sass');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

// Compiles the SASS to CSS
gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    }))
   .pipe(gulp.dest('./src/css/'));
});

// gulp.task('browser-sync', function(){
//  browserSync.init({
//   sever:'./public',
//   notify: false,
//   open: true
//  });
// });

gulp.task('cleanCSS', function(){

});

gulp.task('default', ['sass'], function(){
 gulp.watch('sass/**/*', ['sass'])
});

// gulp.task('name', function(){
//  console.log("hello there!")
// });