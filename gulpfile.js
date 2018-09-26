var gulp = require("gulp");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");

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


//�u���E�U�����[�h����
gulp.task('reload', () => {
    browserSync.reload();
});