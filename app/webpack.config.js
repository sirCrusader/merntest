module.exports = {
    entry: './source/app.jsx',
    output: {
        path: './static',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presents: ['react','es2015']
                }
            },
        ]
    }
};