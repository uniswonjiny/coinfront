export default function ({$axios, redirect, store, error: nuxtError}) {
    $axios.onRequest(config => {
        try {
            if (store.state.auth.accessToken) config.headers['authorization'] = store.state.auth.accessToken;
        } catch (e) {
            console.error(e)
            return Promise.reject(e)
        }
    })

    $axios.onResponse((response) => {
    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            //redirect('/400')
        }
        // 인증키 만료해당
        if (code === 401) {
            redirect('/account/login');
        }
        if (code === 500) {
            // 화면상에서 표시할 메세지만 추출해서 전달
            // throw Error(error.response.data.message);
            return Promise.reject(error.response.data)
        }
    })
}
