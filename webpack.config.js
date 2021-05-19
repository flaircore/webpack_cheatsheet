const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path")

let mode = "development",
    target = "web",
    source_map = "source-map"

if (process.env.NODE_ENV === "production") {
    mode = "production"
    target = "browserslist"
    source_map = "eval" // TODO:: better
}

module.exports = {
    mode: mode,
    target: target,

    entry: {
        es6: './src/es6entry.js',
        react_entry: './src/react_js_entry.js',
        homepage_block: './src/homepage_block.ts',
        vue_app: './src/vue_entry.js',
    },

    output: {
        assetModuleFilename: "images/[hash][ext][query]",
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //clean: true,
    },

    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCSSExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                //type: "asset/inline", // in javascript file
                //type: "asset/resource" //output folder
                type: "asset" //  for auto
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    "vue-style-loader",
                    {
                        loader: MiniCSSExtractPlugin.loader,
                        options: { publicPath: "",  esModule: false }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?|\.ts$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader",
            },

        ],
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
        alias: { vue: 'vue/dist/vue.js' },
    },

    devtool: source_map,
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}