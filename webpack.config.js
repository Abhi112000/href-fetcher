// webpack.config.js
import path from 'path';

export default {
    entry: './src/index.js', // Your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve('public'), // Ensure the output directory is 'public'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Match .css files
                use: ['style-loader', 'css-loader'], // Load CSS files
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Allow imports without extensions
    },
    devtool: 'source-map',
    mode: 'production',
};
