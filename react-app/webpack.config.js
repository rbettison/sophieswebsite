module.exports = {  
    entry: './src/index.js',  
    output: {    
        path: __dirname + '/dist',    
        publicPath: '/',    
        filename: 'bundle.js'  
    },  
    devServer: {   
        historyApiFallback: true, 
        contentBase: './dist',  
    },
    module: {    
        rules: [    
            {      
                test: /\.(js|jsx)$/,      
                exclude: /node_modules/,      
                use: {
                    loader: "babel-loader"
                }   
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000' 
            }    
        ]  
    }

};
