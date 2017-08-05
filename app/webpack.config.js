const webpack = require('webpack');

module.exports = {
    entry: {
        app: '/src/app/source/app.jsx',
        vendor: ['react','react-dom','whatwg-fetch','babel-polyfill'],
    },
    output: {
        path: '/src/app/static',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            },
        ]
    }
};