const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const eslint = require('gulp-eslint-new');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');

// File Paths
const paths = {
  css: [
    'assets/css/style.css',
    'assets/css/nav.css',
    'assets/css/hero.css',
    'assets/css/about-me.css',
    'assets/css/digital-skills.css',
    'assets/css/cv-resume.css',
    'assets/css/contact.css',
    'assets/css/portfolio.css',
    'assets/css/preloader.css',
    'assets/css/services.css',
    'assets/css/testimonials.css',
    'assets/css/footer.css',
    'assets/css/scrollbar.css',
    'assets/css/cursor.css'
  ],
  js: [
    'assets/js/main.js',
    'assets/js/nav.js',
    'assets/js/Hero-Links.js',
    'assets/js/Hero-Particles.js',
    'assets/js/about.js',
    'assets/js/digital-skills.js',
    'assets/js/cv-resume.js',
    'assets/js/services.js',
    'assets/js/portfolio.js',
    'assets/js/Testimonials.js',
    'assets/js/ContactFormMessage.js',
    'assets/js/AlertForm.js',
    'assets/js/Footer.js',
    'assets/js/Contact-Icons.js',
    'assets/js/cursor.js'
  ],
  dist: 'public' // 🔥 Updated for Vercel compatibility
};

// Error Handler
function handleError(taskName) {
  return plumber({
    errorHandler: notify.onError({
      title: `❌ Gulp ${taskName} Error`,
      message: '<%= error.message %>',
      sound: false
    })
  });
}

// CSS Task
function css() {
  return gulp.src(paths.css, { allowEmpty: true }) // ✅ prevent crash if missing files
    .pipe(handleError('CSS'))
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS({ compatibility: 'ie11' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist + '/css'));
}

// JS Task
function js() {
  return gulp.src(paths.js, { allowEmpty: true })
    .pipe(handleError('JS'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist + '/js'));
}

// Watch Task
function watchFiles() {
  gulp.watch('assets/css/*.css', css);
  gulp.watch('assets/js/*.js', js);
}

// Combined Tasks
const build = gulp.series(css, js);
const dev = gulp.series(build, watchFiles);

// Exported Tasks
exports.css = css;
exports.js = js;
exports.watch = watchFiles;
exports.build = build;
exports.default = dev;
