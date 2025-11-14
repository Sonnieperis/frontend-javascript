const path = require('path');

module.exports = {
  mode: 'development', // ensures dev mode
  entry: {
    main: './js/main.ts', // your TypeScript entry file
  },
  devtool: 'inline-source-map', // useful for debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // serve files from dist
    },
    port: 8081,
    open: true, // automatically opens browser
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,       // handle TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,      // optional if you use CSS/Sass
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // import without specifying extensions
  },
  output: {
    filename: '[name].bundle.js', // prevents multiple chunks conflict
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clears old bundles on rebuild
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // separates vendor code from main
    },
  },
};
