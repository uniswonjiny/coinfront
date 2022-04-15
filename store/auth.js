export const state = () => ({
    isLoggedIn: false,
    userInfo: null,
    accessToken: null,
    noticeList: [],
    noticeCount: 0
});

export const mutations = {
    setIsLoggedIn(state, val) {
        state.isLoggedIn = val;
    },
    setUserInfo(state, info) {
        state.userInfo = info;
    },
    setAccessToken(state, token) {
        state.accessToken = token;
    },
    setNoticeList(state, list) {
        state.noticeList = list;
    },
    setNoticeCount(state, val) {
        state.noticeCount = val;
    }
};

export const actions = {
    async login({commit, state}, {user_id, user_password}) {
        try {
            const res = await this.$axios.post('/auth/loginInfo', {
                user_id,
                user_password
            })
            const {userInfo, authKey} = await res.data;
            await commit('setIsLoggedIn', true);
            await commit('setUserInfo', userInfo);
            await commit('setAccessToken', authKey);
            await localStorage.setItem("authKey", authKey);
        } catch (e) {
            this.$toast.error(`${e.message}`, {position: "top-left"})
        }
    },

    async logout({commit}) {
        await commit('setUserInfo', null);
        await commit('setAccessToken', null);
        await localStorage.clear();
        return await commit('setIsLoggedIn', false);
    },

    async fetchMessageList({commit}) {
        try {
            const res = await this.$axios.post('/auth/userMessageList', {
                user_no: this.state.auth.userInfo.user_no,
            })
            const list = await res.data;
            await commit('setNoticeList', list);
            // 사용자보 확인 하지 않은 공지사항 목록
            const sawList = list.filter(item => item.saw_flag == 0);
            await commit('setNoticeCount', sawList.length);
        } catch (e) {
            console.error(e);
        }
    },

    async messageListSaw({commit}, message_no) {
        try {
            const temp = await this.$axios.post('/auth/userMessageSaw', {
                user_no: this.state.auth.userInfo.user_no,
                message_no
            })
            await this.fetchMessageList;
        } catch (e) {
            console.error(e);
        }
    }
};
