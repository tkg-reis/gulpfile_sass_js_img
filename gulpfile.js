const { src, dest, series, parallel, watch, tree } = require("gulp");
const gulp = require("gulp");
const autoPrefixer = require("gulp-autoprefixer");

const imageMin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");  
const pngquant = require("imagemin-pngquant");  
const changed = require("gulp-changed");

const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");

const purgecss = require("gulp-purgecss");
const cleancss = require("gulp-clean-css");

// sass compire benderprefix

const sass = require("gulp-sass")(require("sass"));

gulp.task("default", () => {
  
  return gulp.watch(["./css/*.scss", "./css/setting/*.scss"],() => {
  
    return (
      gulp
        .src("css/main.scss")
        .pipe(
          sass({
            outputStyle: "expanded",
          })
            
            .on("error", sass.logError)
        )
        .pipe(
          autoPrefixer()
        )
        .pipe(gulp.dest("css"))
    );
  });
});

// 画像圧縮処理

function imagemin(done) {
  src("./img/**")
  .pipe(changed("./dist/img/"))
  .pipe(
    imageMin([
      pngquant({     
        quality: [0.6, 0.7],
        speed: 1,
      }),
      mozjpeg({ quality: 65 }), 
      imageMin.svgo(),
      imageMin.optipng({optimizationLevel: 5}),
      imageMin.gifsicle(),
    ])
  )
  .pipe(dest("./dist/img/"));
  
  done();
}

exports.imagemin = imagemin;

// jsの圧縮処理

function js(done) {
  src("./js/**/*.js")
    .pipe(plumber())                 
    .pipe(uglify())                  
    .pipe(dest("./dist/js/"));

  done();
}

exports.js = series(js);

// cssの圧縮処理

function minify(done) {
  src("./css/*.css")
    .pipe(plumber())                              
    .pipe(purgecss({
      content: ["./html/*.html","./html/**/*.js"],    
    }))
    .pipe(cleancss())                            
    .pipe(dest("./dist/css/"));

  done();
}

exports.minify = series(minify);