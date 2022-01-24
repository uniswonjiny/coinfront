export default {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        titleTemplate: 'Unicore 채굴기 중계',
        title: 'Unicore 채굴기 중계',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Unicore 채굴기 중계서비스'
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/png",
                href: "/img/favicon.png"
            },
            {
                rel: "apple-touch-icon-precomposed",
                href: "/img/favicon.png"
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            },
            {
                type: "stylesheet",
                href:
                    "https://fonts.googleapis.com/earlyaccess/nanumgothic.css"
            },
            // {
            //     type: "stylesheet",
            //     href:
            //         "https://fonts.googleapis.com/earlyaccess/nanumgothic.css"
            // },
            // {
            //     type: "stylesheet",
            //     href:
            //         "https://fonts.googleapis.com/css?family=Jost:400,500,600,700&display=swap&ver=1607580870"
            // }
        ]
    },

    css: [
        '~/assets/styles/style.scss',
        '~/static/css/bootstrap.min.css',
        '~/static/fonts/Jua/stylesheet.css',
        '~/static/fonts/Jost/stylesheet.css',
        '~/static/fonts/Dongle/stylesheet.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/fonts/font-awesome/css/font-awesome.min.css'
    ],

    plugins: [
        { src: '~plugins/vueliate.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/vue-slide-up-down.js', ssr: false },
        { src: '~/plugins/vue-printer.js', ssr: false },
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    modules: ['nuxt-i18n'],

    i18n: {
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'fr', file: 'fr.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        langDir: 'lang/locales/'
    },

    target: 'server',

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active'
    },

    server: {
        port: 4003,
        host: 'localhost'
    }
};
