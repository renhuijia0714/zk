//4.启动一个服务引入压缩后的js和css文件
//5.使用git将本地工作区修改的代码提交
//6.将刚提交的代码push到远程仓库
//2.使用gulp压缩多个js文件并且合并成一个文件
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var minify = require("gulp-minify-css");
//压缩js文件
gulp.task("miniJs",function(){
         gulp.src("js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
})
//压缩css文件
gulp.task("miniCss",function(){
    gulp.src("css/*.css")
        .pipe(concat("all.css"))
        .pipe(minify())
        .pipe(gulp.dest("list"))
})

var server = require("gulp-webserver");
  gulp.task("script",function(){
      gulp.src("./")
          .pipe(server({
             requ:function(){
                 var dist = require("dist");
                 var list = require("list");
             }
          }))
  })