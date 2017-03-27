module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './dist/app.js'
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader', 'buble-loader']}
        ]
    }
};