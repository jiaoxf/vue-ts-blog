module.exports = {
    publicPath:'/',
    css: {
        loaderOptions: {
        sass: {
            data: `@import "~@/sass/main.scss"`,
        },
        },
    },
    chainWebpack: config => {
        ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
        config.module.rule('scss').oneOf(match).use('sass-loader')
            .tap(opt => Object.assign(opt, { data: `@import '~@/sass/main.scss';` }))
        })
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        '/api': {
            target: 'http://localhost:3000',
            ws: true,
            changOrigin: true,//允许跨域
            /* pathRewrite: {
                '^/api': ''//请求的时候使用这个api就可以
            } */
        }
    }
}