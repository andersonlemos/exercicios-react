const webpack = require('webpack');

module.exports = {
    entry: './ex/index.js',
    output:{
            path: __dirname + '/public',
            filename: './bundle.js'
    },
    devServer: {
            port: 8081,
            contentBase: './public'
    },
    plugins:[
            new ExtractTextPlugin('app.css')
    ],
    module:{
                loaders:[{
                        test: /.jsx?$/,
                        loader: 'babel-loader',
                        exclude : /node_modules/,
                        query:{
                                presets:['es2015','react'],
                                     }
                 }]
    }
}
