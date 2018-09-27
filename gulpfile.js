const gulp = require("gulp");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");
const notify = require("gulp-notify");
const plumber = require('gulp-plumber');

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

//ES6変換&bundle
gulp.task("bundle",()=>{
	return gulp.src([
			"./slot/**/*.js"
		])
		.pipe(plumber())
		.pipe(webpack({
			entry:"./slot/main.js",
			
		}))
})

//ブラウザリロード処理
gulp.task('reload', () => {
    browserSync.reload();
});