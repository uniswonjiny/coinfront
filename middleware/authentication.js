export default function({ store, redirect }) {
    if (!store.state.auth.isLoggedIn) {
        return redirect('/account/login');
    }

    // 공지사항 확인 고민중!!!!!
    // 1. 현재 미들웨어와 같이 그냥둘지
    // 2. 다른 공지사항 미들웨어에서 실행할지
    // 3. 다른방식으로 변경할지

    // 에디터 주의사항표시 나는 부분 후속 처리할게 없다 그냥 무시
    store.dispatch('auth/fetchMessageList')

}
