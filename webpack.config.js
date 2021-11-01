/* eslint-disable spaced-comment */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Plugin para trabajar con HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Acá se añaden las configuraciones que usa webpack para trabajar
module.exports = {
  entry: './src/index.js', //Punto de entrada de webpack para saber donde estan todos los elementos conectados
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', //Se compila todo el javascript y se guarda acá y es lo que se inserta en el proyecto
    publicPath: '/',
  },
  //Resolve de las extensiones a usar. Que extensiones va a escuchar
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  //El modulo con reglas necesarias para la construccion de los recursos
  module: {
    //Elementos que por medio de los loaders detectan los archivos js y trabaja con ellos
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html', //Como se va a preparar cuando se envie a produccion
    }),
    //Se crea la instancia del plugin para css
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    static: './',
    compress: true,
    port: 3005,
    // open: true,
    historyApiFallback: true,
  },
};
