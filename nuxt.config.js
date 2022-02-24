export default {
    head: {
        htmlAttrs: {
            lang: 'kr'
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
        { src: '~/plugins/vueliate.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/vue-slide-up-down.js', ssr: false },
        { src: '~/plugins/axios.js', ssr: false }
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        '@nuxtjs/moment',
    ],

    modules: [
        '@nuxtjs/axios',
        "vue-toastification/nuxt",
        ["vue-toastification/nuxt", {
            timeout: 1000,
            draggable: false
        }]
    ],
    toast: {
        timeout: 2000,
        closeOnClick: false
    },

    moment: {
        locales: ['ko'],
    },

    target: 'server',

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active'
    },

    server: {
        port: process.env.PORT || 4003,
        host: 'localhost'
    },
    axios : {
        browserBaseURL: process.env.NODE_ENV === 'production' ? 'https://api.swonjiny.co.kr/api' : 'http://localhost/api',
        baseURL: process.env.NODE_ENV === 'production' ? 'https://api.swonjiny.co.kr/api' : 'http://localhost/api',
        https: process.env.NODE_ENV === 'production' ? true : false,
    }
};
