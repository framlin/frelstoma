module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname+"/build",
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },
            { test: /\.json$/, loader: "json-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map'
};
