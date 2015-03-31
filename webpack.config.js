var path = require('path')

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx', 'babel'] ,exclude: /node_modules/},
            { test: /\.scss$/, loader: "style-loader!css!sass" }
        ]
    }
};
