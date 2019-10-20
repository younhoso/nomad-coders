const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css파일로 컴파일해 별도의 파일로 불리해서 따라 생성시키기 위한 플러그인
const HtmlWebPackPlugin = require("html-webpack-plugin");  //html파일 컴파일 할때 필수
// process.env.NODE_ENV = 'production'; //실서버스로 반영할때 주석 풀기

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서버스로 반영할때: production으로 변경
    devtool: 'eval',     //hidden-source-map
    devServer: {   // 개발 서버(테스트 서버)를 돌리는 설정
        contentBase: path.join(__dirname, 'dist'),  //개발 서버(테스트 서버)를 돌리 폴더 지정
        compress: true,
        port: 9000      //포트를 9000번 포트로 지정
    },
    resolve: { //entry에 확장자들 지정을 배열로 여러게 한다.
        extensions: ['.js', '.jsx']
    },

    entry: { //입력
        app:['./index'],
    },
    module: {
        rules: [
            {   // jsx에서 html-loader 사용할때 필요하다. 
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)|(dist)/,   //node_modules디렉토리 아래있는 파일들은 제외하고, | dist디렉토리 제외하고
                loader: 'babel-loader',
                options: {
                    presets: [
                        // plugin들의 모음이 preset입니다. (preset안에 수십개의 플러그인들이 존재함)
                        ['@babel/preset-env',{
                            targets: {
                                // 브라우저 호환 옵션을 구체적으로 지정할수 있다.
                                browsers: [
                                    '> 5% in KR'
                                ],
                            },
                            debug: true,
                        }],
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',  // class문법 사용할때는 설치하고, 추가
                        '@babel/plugin-transform-runtime',
                        'react-hot-loader/babel'                    // react-hot-loader 실행할때 babel도 실행 (추가)
                    ],
                },
            },
            {   // images css에서 background-image 속성 사용할때 필요하다. 
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'dist-img/'
                    }
                    }
                ]
            },
            {  // scss
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    },
    plugins: [  //추가 기능
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new HtmlWebPackPlugin({
            template: "./index.html",   // 빌드할 대상을 말한다.
            filename: "./index.html"    // 빌드을 했을때 나오는 결과물
          }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',    // 빌드되서 나오는 결과물
            disable: false,    // CSS 청크와 관련된 고려 사항을 해결할 때까지 CSS 청크를 비활성화 할 수있는 플러그인 옵션
            allChunks: true    // 모든 CSS 또는 SCSS를 파일로 결합하는 방법 설정
        })
    ],
    output: {  //출력
        filename: 'app.js',
        publicPath: '/dist/',   //추가
        path: path.join(__dirname, 'dist') 
    }
};