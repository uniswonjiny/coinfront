export const state = () => ({
    buyUniPoint: {
        money: 0,
        tax: 0,
        uniPoint: 0
    }, // 유니포인트 구매 정보
    unicoreAccount: {
        bank_name: '우리은행',
        account_no: '12345-56-5478940',
        account_holder: '유니코아1'
    }, // 유니코아 계좌정보
    uniPointPrice: 0,
});
export const mutations = {
    setBuyPoint(state, info){
        // info 내용 uniPoint = 5, money = 500000 , tax = 50000
        state.buyUniPoint = info;
    },
    setUnicoreAccount(state, info){
        state.unicoreAccount = info;
    },
    setUniPointPrice(state, val){
        state.uniPointPrice = val;
    }
};

export const actions = {
    // 유니코어 입금계좌
    fetchUnicoreAccount({commit}){
        this.$axios.get('/com/unicoreAccount')
            .then((res) => {
                commit('setUnicoreAccount' , res.data);
            })
    },
    // 유니포인트 현재 시세
    fetchUniPointPrice({commit}){
        this.$axios.get('/com/uniPointPrice')
            .then((res)=>{
                commit('setUniPointPrice' , res.data);
            })
    }
};