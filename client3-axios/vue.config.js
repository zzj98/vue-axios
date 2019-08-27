module.exports = {
    devServer: {
        proxy: {//如需跨域请求多个域名，在此对象进行扩展即可
            '/apis': {
                target: 'http://localhost:8080',//访问数据的计算机域名
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': ''
                }
            },
        }
    }
}