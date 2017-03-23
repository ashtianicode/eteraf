
module.exports = {
    entry : ["./src/router.js"] ,
    output : {
        filename: 'bundle.js',


    },
    module: {
          rules: [
              {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
              {test: /\.css$/,use: [ 'style-loader','css-loader' ]},
              {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]"},
          ]
      }
};
