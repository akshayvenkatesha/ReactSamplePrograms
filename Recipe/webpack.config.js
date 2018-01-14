module.exports = {
    entry: "./index.js",
    output: {
        path:  __dirname + "/dist/assets",
        filename: "bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                exclude: /(node_modules)/,
                loader : 'babel-loader',
                query:
                {
                    presets:['react']
                }
            },
            
        ]
    }
}