module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://baidu.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
}