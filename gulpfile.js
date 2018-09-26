var gulp = require("gulp");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");

gulp.task('default', ['browser-sync']);

//ブラウザ表示
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./"   //サーバとなるrootディレクトリ
        }
    });
    //ファイルの監視
    //以下のファイルが変わったらリロードする
    gulp.watch("./js/**/*.js", ['reload']);
    gulp.watch("./*.html", ['reload']);
});


//ブラウザリロード処理
gulp.task('reload', () => {
    browserSync.reload();
});