<template>
    <div class="ps-login--modal">
        <form>
<!--            <div class="form-group">
                <label>Username or Email Address</label>
                <input class="form-control" type="text" v-model="email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" v-model="password">
            </div>
            <div class="form-group form-check">
                <input class="form-check-input" type="checkbox" v-model="remember">
                <label>Remember Me</label>
            </div>-->
            <button class="ps-btn ps-btn--warning" @click.prevent="logout">로그아웃</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'login-modal',
    data() {
        return {
            email: null,
            password: null,
            remember: false
        }
    },
    methods: {
       async logout(){
         await this.$store.dispatch('auth/logout')
         await this.$router.push("/");
      }
/*        handleLogin() {
            console.log('login')
        }*/
    }
}
</script>
