const { src, dest, watch } = require("gulp");
const minifyCss = require("gulp-clean-css");
const sourceMap = require("gulp-sourcemaps");
const concat = require('gulp-concat');



const bundleCss = () => {
  return src("./Components/*.css")
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat('Production.css'))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};


const devWatch = () => {
  watch('./Components/*.css',bundleCss);
};

exports.bundleCss = bundleCss;
exports.devWatch = devWatch;