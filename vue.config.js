module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //配置别名 访问方便
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',

            }
            // extensions: ['json','vue','css']
        }
    }
}