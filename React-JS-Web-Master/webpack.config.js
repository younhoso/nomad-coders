import path from 'path';
import webpack from 'webpack';

module.exports = {
    name:'React-JS-Web-Master-Setting',
    mode:'development',
    devtool:'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app:['./App'],
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(mode_modules) | (dist)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: [
                                    '> 5% in KR'
                                ],
                            },
                            debug: true,
                        }],
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel'
                    ],
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'dist-img/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }

        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        filename: 'app.js',
        publicPath: '/dist/',
        path: path.join(__dirname, 'dist') 
    }
};