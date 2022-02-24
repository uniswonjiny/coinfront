export default function ({$axios, store}) {
    $axios.onRequest(config => { })

    $axios.onResponse((response) => {
        if(response.headers.authorization) store.state.auth.accessToken = response.headers.authorization;

    })

    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            //redirect('/400')
        }
        if(code === 500) {
            // 화면상에서 표시할 메세지만 추출해서 전달
            throw Error(error.response.data.message);
        }
    })
}