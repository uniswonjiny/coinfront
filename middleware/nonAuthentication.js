export default function({ store, redirect }) {
    console.log(11)
    if (store.state.auth.isLoggedIn) {
        console.log(22)
        return redirect('/');
    }
}
