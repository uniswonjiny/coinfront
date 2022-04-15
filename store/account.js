export const state = () => ({
    buyUniPoint: {
        money: 0,
        tax: 0,
        uniPoint: 0
    },
    // 유니포인트 구매 정보
    unicoreAccount: {
        bank_name: '우리은행',
        account_no: '12345-56-5478940',
        account_holder: '유니코아1',
        no: 1
    },
    // 유니코아 계좌정보
    uniPointPrice: 0,
    uniPointList: [],
    uniPointSum: 0,
    // 비트코인시세
    bitCoinCurrent: {search_time: null, one_price: 0},
    // 사용자의 누적수입
    userBitCoinSum: 0.0,
    // 사용자의 코인잔고
    userBitCoinBalance: 0.0,
    // 사용자의 코인입출금내역
    userBitCoinList: [],
    // 사용자 코인갯수
    userBitCoinListCount: 0,
    // 사용자 코인목록페이지 정렬코드
    userBitCoinListSort : '',
    // 시용자별 코인누적수익금액
    userCoinBenefit : [],
    // 사용자별 유니포인트 정보(보유포인트, 금액)
    userUniPointInfo : {uni_point:0, money:0},
    // 회사의 수수료율 목록
    rootFeeList: []
});
export const mutations = {
    setBuyPoint(state, info) {
        state.buyUniPoint = info;
    },
    setUnicoreAccount(state, info) {
        state.unicoreAccount = info;
    },
    setUniPointPrice(state, val) {
        state.uniPointPrice = val;
    },
    setUniPointList(state, list) {
        state.uniPointList = list;
    },
    setUniPointSum(state, val) {
        state.uniPointSum = val;
    },
    setBitCoinCurrent(state, info) {
        state.bitCoinCurrent = info
    },
    setUserBitCoinSum(state, val) {
        state.userBitCoinSum = val;
    },
    setUserBitCoinSort(state, val) {
        state.userBitCoinListSort = val;
    },
    setUserBitCoinBalance(state, val) {
        state.userBitCoinBalance = val;
    },
    setUserBitCoinList(state, list) {
        const targetList = list.filter(item => {
            if(!state.userBitCoinList.find(item2 => item.no === item2.no)){
                return item;
            }
        })
        state.userBitCoinList = state.userBitCoinList.concat(targetList);
    },
    setUserBitCoinListCount(state, val) {
        state.userBitCoinListCount = val
    },
    setUserBitCoinListEmpty(state) {
        state.userBitCoinList = [];
        state.userBitCoinListCount = 0;
    },
    setUserCoinBenefit(state, info) {
        state.userCoinBenefit = info;
    },
    setUserUniPointInfo(state, info) {
        state.userUniPointInfo = info;
    },
    setRootFeeList(state, list){
        state.rootFeeList = list;
    }
};

export const actions = {
    // 사용자별 누적 코인수익확인
    fetchUserCoinBenefit({commit}){
        this.$axios.post('/account/getBenefit', {user_no: this.state.auth.userInfo.user_no})
            .then(res => {
                commit('setUserCoinBenefit' , res.data)
            })
    },

    // 유니코어 입금계좌
    fetchUnicoreAccount({commit}) {
        this.$axios.get('/com/unicoreAccount')
            .then((res) => {
                commit('setUnicoreAccount', res.data);
            })
    },
    // 유니포인트 현재 시세
    fetchUniPointPrice({commit}) {
        this.$axios.get('/com/uniPointPrice')
            .then((res) => {
                commit('setUniPointPrice', res.data);
            })
    },
    // 보유 유니포인트 목록
    fetchUniPointList({commit}, userId) {
        this.$axios.get(`/account/uniPointList/${userId}`)
            .then((res) => {
                commit('setUniPointSum', res.data.userSumInfo.uni_point);
                commit('setUniPointList', res.data.userPointList);
            })
    },
    // 비트코인 시세확인
    fetchBitCoinCurrent({commit}) {
        this.$axios.get(`/com/bitCoinCurrent`)
            .then((res) => {
                commit('setBitCoinCurrent', res.data);
            })
    },
    // 누적수익확인
    fetchUserBtcSum({commit}) {
        this.$axios.post(`/account/getUserBtcSum`, {
            user_no: this.state.auth.userInfo.user_no
        })
            .then((res) => {
                commit('setUserBitCoinSum', res.data.coin_value);
            })
    },
    // 코인잔고
    fetchUserBtcBalance({commit}) {
        this.$axios.post(`/account/getUserBtcBalance`, {user_no: this.state.auth.userInfo.user_no})
            .then((res) => {
                commit('setUserBitCoinBalance', res.data.coin_value);
            })
    },
    // 사용자의 코인입출금내역
    // user_no,type,size,start_num
    fetchUserCoinList({commit}, payload) {
        let size = 5, start_num = 0;
        if (payload) {
            size = payload.size,
                start_num = payload.start_num
        }
        if (!size) size = 5;
        if (!start_num) start_num = 0;
        this.$axios.post(`/account/getUserCoinList`, {
            size,
            start_num,
            type: this.state.account.userBitCoinListSort,
            user_no: this.state.auth.userInfo.user_no
        })
            .then((res) => {
                commit('setUserBitCoinList', res.data.list);
                commit('setUserBitCoinListCount', res.data.count);
            })
    },

    fetchUserUniPointInfo({commit}) {
        this.$axios.post(`/account/getSumBuyMoney`, {
            user_no: this.state.auth.userInfo.user_no
        })
            .then((res) => {
                commit('setUserUniPointInfo', res.data);

            })
    },
    // 회사의 수수료율 목록
    fetchRootFeeList({commit}){
        this.$axios.get(`/com/settingFeeList`)
            .then((res) => {
                commit('setRootFeeList', res.data);
            })
    }
};