const path = require('path');
const webpack = require('webpack');
const args = process.argv.slice(2);
const https = args[2] === '--https' && args[3] === 'true';
const port = process.env.PORT || 8080;

module.exports = {
    devtool: 'eval',
    entry: {
        main: [
            './client/main.js'
        ],
        zoom: [
            './client/api-zoom/zoom.js'
        ],
        meeting: [
            './client/api-zoom/meeting.js'
        ],
        zoomin: [
            './client/api-zoom/zoomin.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, '/static'),
        publicPath: '/static',
        hashDigestLength: 5,
        // filename: `zoom-meeting-${buildVersion}-[name]-[chunkhash].min.js`,
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader?limit=500000'
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: 'url-loader?limit=50000'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        'babel-polyfill': 'babel-polyfill',
        react: 'React',
        'react-dom': 'ReactDOM',
        redux: 'Redux',
        'redux-thunk': 'ReduxThunk',
        lodash: {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_',
            var: '_'
        }
    },
    context: __dirname,
    target: 'web',
    devServer: {
        https,
        cert: './localhost.crt',
        key: './localhost.key',
        host: '0.0.0.0',
        port: port,
        hot: true,
        overlay: true,
        historyApiFallback: true,
        watchContentBase: false,
        disableHostCheck: true,
        watchOptions: {
            ignored: './node_modules/'
        },
        headers: {
            'Access-Control-Allow-Origin': https ? 'https://0.0.0.0:' + port : 'http://0.0.0.0:' + port
        }
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.BABEL_ENV': JSON.stringify('development'),
        })
    ],
};

