import path from 'path';

export default {
    entry: './src/index.js', // Adjust the path if your entry file is located somewhere else
    output: {
        filename: 'bundle.js',
        path: path.resolve('build'), // Output directory for the build
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Ensure you have Babel presets installed
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Load CSS files
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    mode: 'production', // Set to 'development' for dev mode
};
