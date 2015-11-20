var path = require('path');

module.exports = {
    context: path.join(__dirname + '/app'),
    entry: {
        javascript: './app.js',
        html: './index.html'
    },
    
    output: {
        filename: 'app.js',
        path: path.join(__dirname, "dist")
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:
                {
                    presets:['es2015','react']
                }
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }
        ]
    }
};