var gulp = require("gulp"),
	less = require("gulp-less");

gulp.task("default", function(){
	gulp.watch(['css/**/*.less']).on('change', function (event) {
        gulp.src("css/estilos.less")
            .pipe(less().on('error', function (erro) {
                console.log('Problema na compilação: '+erro.filename);
                console.log(erro.message);
            }))
            .pipe(gulp.dest('css'));
    });
})