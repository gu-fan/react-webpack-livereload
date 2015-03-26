var path = require('path')

module.exports = {
    entry: "./js/app.js",
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx'] ,exclude: /node_modules/}
        ]
    }
};
