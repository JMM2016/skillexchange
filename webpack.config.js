const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    context: __dirname + "/app",

    // This is the entry point or start of our react applicaton
    entry:

        [
        'bootstrap',
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap/dist/css/bootstrap-theme.css',
        './app.js'
        ],

    // The plain compiled JavaScript will be output into this file
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "/bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: '../views', to: '../public' },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],

    // This section desribes the transformations we will perform
    module: {
        rules: [{
                // Only working with files that in in a .js or .jsx extension
                test: /\.jsx?$/,
                // Webpack will only process files in our app folder. This avoids processing
                // node modules and server files unnecessarily
                include: /app/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    // These are the specific transformations we'll be using.
                    presets: ["react", "es2015"],
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
                // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 

            },

            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                // include: /..\/client\/img/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: 'img/[name].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader'
                }]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                // loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        mimetype: 'application/octet-stream',
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                include: /(src\/fonts|node_modules)/,
                use: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        mimetype: 'application/octet-stream',
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.eot/,
                 loader: 'url-loader?mimetype=application/vnd.ms-fontobject'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                include: /(src\/fonts|node_modules)/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        limit: 1000,
                        mimetype: 'image/svg+xml',
                        name: 'img/[name].[ext]'
                    }
                }]
            }
            // {
            //     test: /\.(jpe?g|png|gif|svg|ico)$/i,
            //     include: /..\/client\/img/,
            //     use: [{
            //         loader: 'file-loader',
            //         query: {
            //             name: 'img/[name].[ext]'
            //         }
            //     }, {
            //         loader: 'image-webpack-loader'
            //     }]
            // }
        ]
    },
    // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
    // Without this the console says all errors are coming from just coming from bundle.js
    devtool: "eval-source-map"
};

