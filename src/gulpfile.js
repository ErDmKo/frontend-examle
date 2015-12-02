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
var cssnext = require('postcss-cssnext');
var postcssImport = require('postcss-import');
var cssMqpacker = require('css-mqpacker');
var postcssNested = require('postcss-nested');
var postcssVariables = require('postcss-css-variables');
var postcssInherit  = require('postcss-inherit');
var plugins = require('gulp-load-plugins')();

var libs = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-resource/angular-resource.min.js',
    'node_modules/hamsterjs/hamster.js',
    'node_modules/angular-youtube-embed/src/angular-youtube-embed.js'
]

gulp.task('copy', function() {
    return gulp.src(libs)
        .pipe(plugins.concat("lib.js"))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dirs.dist + '/js/'));
});
gulp.task('css', function () {
    var processors = [
        postcssImport({
            from: dirs.src + '/css/main.css'
        }),
        postcssMixins,
        postcssVariables,
        postcssNested,
        postcssInherit,
        cssMqpacker,
        autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8', '> 1%'],
        }),
     ];
    return gulp.src(dirs.src + '/css/main.css')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.postcss(processors))
        .on('error', function (err) {
                console.log(err.toString());
                this.emit("end");
        })
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.dist + '/css'))
});
gulp.task('js', function() {
    browserify({
        entries: dirs.src + '/js/main.js',
        debug: true
    })
    .transform(babelify)
    .bundle()
    .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
    })
    .pipe(source('main.js'))
    .pipe(plugins.ngAnnotate())
    .pipe(gulp.dest(dirs.dist + "/js"));
});
gulp.task('watch', function() {
    gulp.watch(jsDirs, ['js']);
    gulp.watch(cssDirs, ['css']);
    gulp.watch(dirs.dist + '/css/main.css', function(files){
        plugins.livereload.changed(files)
    });

});
gulp.task('default', ['watch', 'js', 'css'], function() {
    plugins.livereload.listen();
});
