module.exports = {
    parser: false,
    map: false,
    from: './src/assets/css/main.css',
    to: '',
    plugins: {
        "postcss-import": {},
        "postcss-simple-vars": {},
        "postcss-extend": {},
        "postcss-nested": {},
        "postcss-px2rem": {
            remUnit: 16
        },
        "postcss-mixins": {
            mixins: {
                flexcenter: {
                    '&': {
                        display: 'flex',
                        'align-items': 'center'
                    }

                },
                shadow: {
                    '&': {
                        'box-shadow': '0 2px 8px 0 rgba(23,35,61,0.25)'
                    }
                },
                shadowTooltip: {
                    '&': {
                        'box-shadow': '0 1px 2px 0 rgba(23,35,61,0.25)'
                    }
                },
                shadowPlus: {
                    '&': {
                        'box-shadow': '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)'
                    }
                }
            }
        },
        'precss': {},
        "postcss-preset-env": {
            browsers: ['last 2 versions', '> 5%']
        },
        // "postcss-font-magician": {
        //     custom: {
        //         'iconfont': {
        //             variants: {
        //                 normal: {
        //                     400: {
        //                         url: {
        //                             woff: './src/assets/css/common/fonts/iconfont.woff',
        //                             ttf: './src/assets/css/common/fonts/iconfont.ttf',
        //                             eot: './src/assets/css/common/fonts/iconfont.eot',
        //                             svg: './src/assets/css/common/fonts/iconfont.svg'
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        "postcss-url": { url: 'inline' },
        "postcss-reporter": {}
    }
}
