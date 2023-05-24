const { src, dest, watch, series } = require("gulp");
const minifyCss = require("gulp-clean-css");
const sourceMap = require("gulp-sourcemaps");
const concatCss = require("gulp-concat");
const cssMinify = require("gulp-css-minify");
const cssnano = require("gulp-cssnano");

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

const Responsive_Col = [
  "./Components/xxG.css",
  "./Components/xG.css",
  "./Components/G.css",
  "./Components/M.css",
  "./Components/S.css",
  "./Components/xS.css",
  "./Components/xxS.css",
];
const MobileCSS_Col = [
  "./Components/S.css",
  "./Components/xS.css",
  "./Components/xxS.css",
];
const Desktop_Col = [
  "./Components/xxG.css",
  "./Components/xG.css",
  "./Components/G.css",
  "./Components/M.css",
];
const Colors_Col = [
  "./Components/Colors.css",
  "./Components/Gradients.css",
  "./Components/PalletColors.css",
];
const Fonts_Col = [];
const IceScreenCss_Col = [
  "./Components/Navbar.css",
  "./Components/Card.css",
   "./Components/Breadcum.css",
   "./Components/Link.css",
  "./Components/.css",
   "./Components/xxS.css"
];
const IceScreenComponents_Col = [];

const PrincipalBundle = () => {
  return src("./Components/*.css")
    .pipe(concatCss("IceScreen_Grl.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};

const devWatch = (Collection2Watch, Bundle) => {
  watch(Collection2Watch, PrincipalBundlendle);
};
const Responsive = () => {
  return src(Responsive_Col)
    .pipe(concatCss("IceScreen_Rsp.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};

const MobileCSS = () => {
  return src(MobileCSS_Col)
    .pipe(concatCss("IceScreen_Mob.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};
const DesktopCSS = () => {
  return src(Desktop_Col)
    .pipe(concatCss("IceScreen_Dsk.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};
const Colors = () => {
  return src(Colors_Col)
    .pipe(concatCss("IceScreen_Clr.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};
const Fonts = () => {
  return src(Fonts_Col)
    .pipe(concatCss("IceScreen_fts.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};
const IceScreenCss = () => {
  return src(IceScreenCss_Col)
    .pipe(concatCss("IceScreen_Grl.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};
const IceScreenComponents = () => {
  return src(IceScreenComponents_Col)
    .pipe(concatCss("IceScreen_Com.css"))
    .pipe(cssnano())
    .pipe(dest("./Out/"));
};

const bundleHTML = () => {
  return src("index.html")
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[0]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[1]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[2]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[3]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[4]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[5]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[6]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[7]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[8]}" />`, "")
    )
    .pipe(
      replace(`<link rel="stylesheet" href="./src/Styles/${Styles[9]}" />`, "")
    )
    .pipe(
      replace(
        `<link rel="stylesheet" href="./src/Styles/${Styles[10]}" />`,
        '<link rel="stylesheet" href="bundle.css"/>'
      )
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./Production/"));
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

exports.bundleHTML = bundleHTML;

exports.build = series(
  Responsive,
  MobileCSS,
  DesktopCSS,
  Colors,
  IceScreenCss,
  IceScreenComponents
);
