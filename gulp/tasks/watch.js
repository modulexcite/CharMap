/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');
var watchify = require('./browserify')

gulp.task('watch', ['watchify','browserSync'], function(callback) {
  //gulp.watch(config.sass.src,   ['sass']);
  //gulp.watch(config.lint.src, ['lint']);
  //gulp.watch(config.images.src, ['images']);
  //gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.ko.src, ['ko']);
  gulp.watch(config.ng.src, ['ng']);
  gulp.watch(config.js.src, ['js']);
  gulp.watch(config.winjs.src, ['winjs']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
