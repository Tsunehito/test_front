var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

var paths = {
    styles : {
        src : "sass/*.scss",
        dest : "css/"
    }
};

// Define tasks after requiring dependencies
// function style() {
//     return (
//         gulp
//             .src('./sass/global.scss')
//
//             // Use sass with the files found, and log any errors
//             .pipe(sass({outputStyle: 'expanded'}))
//             .pipe(rename('/css/main.css'))
//             .on("error", sass.logError)
//             // What is the destination for the compiled file?
//             .pipe(gulp.dest(paths.styles.dest))
//     );
// }

function css() {
    return (
        gulp
            .src("./sass/*.scss")
            .pipe(plumber())
            .pipe(sass({ outputStyle: "expanded" }))
            .pipe(rename("main.css"))
            .pipe(gulp.dest("./css/"))
    );
}


function watch(){
    gulp.watch(paths.styles.src, css)
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style

// exports.style = style;
exports.watch = watch;
exports.css = css;