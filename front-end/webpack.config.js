
module.exports = {
    entry : "./src/main.js" ,
    output : {
        filename: 'bundle.js',


    },
    module: {
          rules: [
              {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
              {test: /\.css$/,use: [ 'style-loader','css-loader' ]},
              {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
              {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: "file-loader?name=/public/icons/[name].[ext]"}
          ]
      }
};
