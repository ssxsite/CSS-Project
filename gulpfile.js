const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnext = require("postcss-cssnext")
const atImport = require("postcss-import")
const cssnano = require("cssnano")


gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        atImport,
        cssnext,
        cssnano()
    ];
    return gulp.src('./chapter9/postcss-test01.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./gulp-postcss-test01.css'));
});