const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
			{
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
        type: 'asset/resource'
      },
			{
        test: /\\.(woff|woff2|ttf|eot)$/i,
        type: 'asset/resource', 
      },
    ],
		
  },
	
	mode: 'development',
  entry: {
    main: './src/index.js',
    stat: './src/statistics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
		new CleanWebpackPlugin()
  ],
};