const fs = require("fs");
const path = require("path");
const os = require('os');

const { stat } = fs;

function copy(src, dst) {
  // 读取目录
  fs.readdir(src, (err, paths)=> {
    if (err) {
      throw err;
    }
    paths.forEach(path1 =>{
      const _src = `${src}/${path1}`;
      const _dst = `${dst}/${path1}`;
      let readable;
      let writable;
      stat(_src, (errs, st) =>{
        if (errs) {
          throw errs;
        }

        if (st.isFile()) {
          readable = fs.createReadStream(_src); // 创建读取流
          writable = fs.createWriteStream(_dst); // 创建写入流
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copy);
        }
      });
    });
  });
}

function exists(src, dst, callback) {
  // 测试某个路径下文件是否存在
  fs.exists(dst, (exist)=> {
    if (exist) { // 不存在
      callback(src, dst);
    } else { // 存在
      fs.mkdir(dst, ()=> { // 创建目录
        callback(src, dst);
      });
    }
  });
}

const pathToCopy = ["assets"];

function readDir(_path, callback) {
  fs.readdir(_path, (err, arr) => {
    if (err) {
      console.error(err);
    } else {
      try {
        fs.statSync(path.resolve(__dirname, _path.split("src\\")[1]));
      } catch (e) {
        const info = fs.statSync(_path);
        if (info.isDirectory()) {
          fs.mkdirSync(path.resolve(__dirname, _path.split("src\\")[1]));
        } else if (info.isFile()) {
          // fs.writeFileSync(path.resolve(__dirname, _path.split("src\\")[1]), "", "utf-8");
        }
      }
      arr.forEach(file => {
        const fullPath = `${_path}\\${file}`;
        const info = fs.statSync(fullPath);
        if (info.isFile()) {
          callback(fullPath);
        }
        if (info.isDirectory()) {
          readDir(fullPath, callback);
        }
      });
    }
  });
}

function copyAllFile() {
  pathToCopy.forEach(_path => {
    readDir(path.resolve(__dirname, `src\\${_path}`), (fullPath) => {
      fs.copyFileSync(fullPath, path.resolve(__dirname, fullPath.split("src\\")[1]));
    });
  });
}


const sysType = os.type();
if (sysType === "Windows_NT") {
  copyAllFile();
} else {
  exists(`${process.cwd()}/src/assets`, `${process.cwd()}/assets`, copy);
}