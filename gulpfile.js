var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var fs = require('fs');

function defaultTask(cb) {
  compileTask();
  copyProtoTask();
  cb();
}

function compileTask() {
  let compile = tsProject.src().pipe(tsProject());
  compile.js.pipe(gulp.dest('dist'));
  compile.dts.pipe(gulp.dest('dist'));
}

function copyProtoTask() {
  let proto_files = gulp.src('./src/proto/*.proto');
  proto_files.pipe(gulp.dest('./dist/proto'));
}

function pipe_proto_to_JSON() {
  // TODO: TRANSFORM PROTO TO PROTOBUFJS JSON
  // I don't know, I hate this but it's for the best
}

exports.default = defaultTask;
