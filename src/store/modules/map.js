import * as types from '../mutation-types'

const state = {
    infoModal: '',
}

const getters = {
    infoModal: state => state.infoModal,
}

const mutations = {
    [types.SETSELFMODAL]: (state, infoModal) => {
        state.infoModal = infoModal
    }
}

const actions = {
    setSelfModal({ commit }, infoModal) {
        commit(types.SETSELFMODAL, infoModal);
    },
}



export default {
    state,
    getters,
    actions,
    mutations
}