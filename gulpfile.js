const { src, dest, watch } = require("gulp");
const minifyCss = require("gulp-clean-css");
const sourceMap = require("gulp-sourcemaps");
const concat = require('gulp-concat');

const Styles = [
  "./Components/Imports.css",
  "./Components/Index.css",
  "./Components/Responsive.css",
  "./Components/Root.css",
  "./Components/Skills.css",
  "./Components/Variables.css",
  "./Components/Imports.css",
  "./Components/Works.css",
];

const Responsive_Col = [];
const MobileCSS_Col = [];
const Desktop_Col = [];
const Colors_Col = [];
const Fonts_Col = [];
const IceScreenCss_Col = [];
const IceScreenComponents_Col = [];


const PrincipalBundle = () => {
  return src("./Components/*.css")
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat('Production.css'))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};


const devWatch = (Collection2Watch,Bundle) => {
  watch(Collection2Watch,PrincipalBundlendle);
};


//bundles for multiple purposes
// Includes all Screen Sizes
exports.Responsive = Responsive;

//Include Screen Sizes for Mobiles Only
exports.MobileCSS = MobileCSS;

//Include Screen Sizes for Desktop Only
exports.DesktopCSS = DesktopCSS;

//Include Colors Only
exports.Colors = Colors;

//Include Fonts Only
exports.Fonts = Fonts;

//Include All Screen Sizes, Fonts, Colors
exports.IceScreenCss = IceScreenCss;

//Include IceScreen Components
exports.IceScreenComponents = IceScreenComponents;

//Include Watch
exports.devWatch = devWatch;