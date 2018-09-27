const gulp = require("gulp");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");
const notify = require("gulp-notify");
const plumber = require('gulp-plumber');

gulp.task('default', ['browser-sync']);

//�u���E�U�\��
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./"   //�T�[�o�ƂȂ�root�f�B���N�g��
        }
    });
    //�t�@�C���̊Ď�
    //�ȉ��̃t�@�C�����ς�����烊���[�h����
    gulp.watch("./js/**/*.js", ['reload']);
    gulp.watch("./*.html", ['reload']);
});

//ES6�ϊ�&bundle
gulp.task("bundle",()=>{
	return gulp.src([
			"./slot/**/*.js"
		])
		.pipe(plumber())
		.pipe(webpack({
			entry:"./slot/main.js",
			
		}))
})

//�u���E�U�����[�h����
gulp.task('reload', () => {
    browserSync.reload();
});