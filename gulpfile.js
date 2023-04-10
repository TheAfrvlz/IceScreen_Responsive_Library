const { src, dest, watch, series } = require("gulp");
const minifyCss = require("gulp-clean-css");
const sourceMap = require("gulp-sourcemaps");
const concat = require("gulp-concat");

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
    .pipe(concat("IceScreen_bun_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};

const devWatch = (Collection2Watch, Bundle) => {
  watch(Collection2Watch, PrincipalBundlendle);
};
const Responsive = () => {
  return src(Responsive_Col)
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat("IceScreen_Responsive_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};

const MobileCSS = () => {
  return src(MobileCSS_Col)
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat("IceScreen_Mobile_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};
const DesktopCSS = () => {
  return src(Desktop_Col)
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat("IceScreen_Desktop_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};
const Colors = () => {
  return src(Colors_Col)
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat("IceScreen_Colors_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};
const Fonts = () => {
  return src(Fonts_Col)
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat("IceScreen_Fonts_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};
const IceScreenCss = () => {
  return src(IceScreenCss_Col)
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat("IceScreen_bun_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};
const IceScreenComponents = () => {
  return src(IceScreenComponents_Col)
    .pipe(sourceMap.init())
    .pipe(minifyCss())
    .pipe(concat("IceScreen_Components_min_css.css"))
    .pipe(sourceMap.write())
    .pipe(dest("./Out/"));
};
//bundles for multiple purposes
// Includes all Screen Sizes
exports.PrincipalBundle = PrincipalBundle;

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

exports.build = series(
  Responsive,
  MobileCSS,
  DesktopCSS,
  Colors,
  IceScreenCss,
  IceScreenComponents
);
