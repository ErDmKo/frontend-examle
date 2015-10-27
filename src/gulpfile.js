var pkg = require('./package.json');

var dirs = pkg['dev-configs'].directories;
var jsDirs = [dirs.src + '/js/*.js', dirs.src+'/js/**/*.js'];
var cssDirs = [dirs.src + '/css/*.css'];

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var postcssMixins = require('postcss-mixins');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var postcssImport = require('postcss-import');
var cssMqpacker = require('css-mqpacker');
var postcssNested = require('postcss-nested');
var plugins = require('gulp-load-plugins')();

gulp.task('css', function () {
    var processors = [
        postcssMixins,
        autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8', '> 1%'],
            cascade: false
        }),
        cssnext(),
        postcssImport({
            from: dirs.src + '/css/main.css'
        }),
        postcssNested,
        cssMqpacker
     ];
    return gulp.src(dirs.src + '/css/main.css')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.postcss(processors))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.dist + '/css'));
});
gulp.task('js', function() {
    browserify({
        entries: dirs.src + '/js/main.js',
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(dirs.dist + "/js"));
});
gulp.task('default', function() {
    gulp.watch(jsDirs, ['js']);
    gulp.watch(cssDirs, ['css']);
});
