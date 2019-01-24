const path = require('path');
//path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
module.exports = {
  entry: './src/index.js',//入口
  output: {//输出
    path: path.resolve(__dirname, 'dist'),//输出的路径
    filename: 'bundle.js'//输出的文件名
  }
};