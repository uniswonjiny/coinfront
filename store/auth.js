export const state = () => ({
    isLoggedIn: false,
    userInfo : null,
    accessToken: null,
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
    setUserInfo(state , info){
        state.userInfo= info;
    },
    setAccessToken(state , token){
        state.accessToken = token;
    }
};

export const actions = {
    async login({commit, state}, payload) {
        const res = await this.$axios.post('/auth/loginInfo' , {'user_id' : payload.user_id , 'user_password' : payload.user_password})
        await commit('setUserInfo' , res.data);
        //
        //
        // res.data = {
        //     bank_account: null
        //     bank_holder: null
        //     bank_name: null
        //     mobile_phone: "01039997777"
        //     recommend_user_id: "unicore"
        //     user_birth_day: "19990101"
        //     user_id: "unicore001"
        //     user_name: "사용자이름입니다"
        //     user_status: 1
        // }
    },
    logout({commit}){
        commit('setUserInfo', null);
        commit('setAccessToken', null);
    },

    setAuthStatus({ commit, state }, payload) {
        commit('setIsLoggedIn', payload);

    }
};
