const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "development", //开发环境
  //webpack
  //   entry: "./src/index.js",
  //typeScript
  entry: {
    app: "./src/demo/jointModel/index.ts", //入口
    // print: "./src/print.ts",
  },
  devtool: "inline-source-map", //映射到源码位置
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "[name].bundle.js", //输出
    path: path.resolve(__dirname, "dist"),
    // publicPath: "", //webpack-dev-middleware设置，yarn server//本示例只是运行3000端口一下
  },
  //dev-server

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 7000,
    // host:'0.0.0.0'//主机号
    historyApiFallback: {
      //无效地址
      rewrites: [{ from: /./, to: "/404.html" }],
    },
    watchOptions: {
      //监听文件改动
      aggregateTimeout: 800,
      poll: 1000,
      ignored: /node_modules/,
    },
    hot: true, //热刷新//WDS..hot module
    quiet: true, //终端显示
    overlay: true, //编译错误是显示界面
    progress: true, //进度条
  },
};
