export const state = () => ({
    appDrawer: false,
    currentDrawerContent: null,
    loading: true,
    openDialogLanguage: false,
    openDialogCurrency: false,
    dialogNotify: false,
    messageNotify: null
});

export const mutations = {
    setAppDrawer(state, payload) {
        state.appDrawer = payload;
    },

    setCurrentDrawerContent(state, payload) {
        state.currentDrawerContent = payload;
    },

    setLoading(state, payload) {
        state.loading = payload;
    },

    setDialogNotify(state, payload) {
        state.dialogNotify = payload;
    },

    setMessageNotify(state, payload) {
        state.messageNotify = payload;
    }
};

export const actions = {};
