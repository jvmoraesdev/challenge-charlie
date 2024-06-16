import { merge } from 'webpack-merge';
import common from './webpack.common.config';
import webpack from 'webpack';
import 'webpack-dev-server'

const devConfig: webpack.Configuration = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    stats: 'minimal'
};

export default merge(common, devConfig);
