
module.exports = {
    entry : "./src/main.js" ,
    output : {
        filename: 'bundle.js',


    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']}
        ]
    }
};
