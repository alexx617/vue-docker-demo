module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.88.89.127:3080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    pluginOptions: {
        
    }
}