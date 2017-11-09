const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};

const common = {
    entry: {
        app: `${PATHS.app}/web-components/Find_Your_Job/find_your_job.js`
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: PATHS.build,
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                include: PATHS.app
            }
        ]
    }
};

module.exports = common;
