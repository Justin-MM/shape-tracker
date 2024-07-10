const path =require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const{CleanWebpackPlugin}=require('clean-webpack-plugin');
const ESLintPlugin=require('eslint-webpack-plugin');// new line!

module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname,'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devtool:'eval-source-map',
  devServer:{
    static:{
      directory: path.join(__dirname,"dist"),
    },
  },
  plugins:[
    new HtmlWebpackPlugin({
        title: 'Shape Tracker',
        template: './src/index.html',
        inject: 'body'
      }),
    new ESLintPlugin(),// new line!
    new CleanWebpackPlugin(),
  ]
}
