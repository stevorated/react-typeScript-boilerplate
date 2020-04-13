module.exports = [
    {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
    },
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: false,
                },
            },
        ],
    },
    {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
    },
];
