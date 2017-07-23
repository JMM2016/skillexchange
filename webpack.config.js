var webpack = require('webpack');
var path = require('path');
var DotenvPlugin = require('webpack-dotenv-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    context: path.join(__dirname, 'skillexchange'),
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders: [
            {
                // Only working with files that in in a .js or .jsx extension
                test: /\.js?$/,
                // Webpack will only process files in our app folder. This avoids processing
                // node modules and server files unnecessarily
                include: APP_DIR,
                loader: "babel-loader",
                // query: {
                //     // These are the specific transformations we'll be using.
                //     presets: ["react", "es2015"]
                // }
            }
        ]
    },
    plugins: [
        new DotenvPlugin({
            sample: './.env',
            path: './.env'
        })
    ]
};

module.exports = config;
