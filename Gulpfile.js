const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const less        = require('gulp-less');
const path        = require('path');
const cssmin      = require('gulp-cssmin');

gulp.task('serve', ['less'], function ()
{
    
    browserSync.init({
        server: './'
    });
    
    gulp.watch('./styles/*.less', ['less']).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task(
    'less',
    function ()
    {
        return gulp.src('./styles/*.less')
                   .pipe(less())
                   .pipe(gulp.dest('./styles'));
    }
);

gulp.task('cssmin', function ()
{
    gulp.src('./styles/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./styles'));
});


gulp.task('default', ['less', 'cssmin']);