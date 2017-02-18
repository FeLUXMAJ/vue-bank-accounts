import Vue from 'vue';
import Vuex from 'vuex';
import router from './../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    accounts: {
      mBank: {
        name: 'mBank',
        value: 100,
      },
      PEKAO: {
        name: 'PEKAO',
        value: 300,
      },
      DB: {
        name: 'DB',
        value: 400,
      },
    },
  },
  getters: {
    accounts: state => state.accounts,
    accountByName: (state, getters) => name =>
      getters.accounts[name],
  },
  mutations: {
    incrementAccountValue: (state, update) => {
      state.accounts[update.name].value += update.val;
    },
    setAccountValue: (state, update) => {
      state.accounts[update.name].value = update.val;
    },
    setAccountData: (state, update) => {
      state.accounts[update.name] = update;
    },
  },
  actions: {
    saveAccount: (state, data) => {
      const w8 = new Promise((resolve) => {
        setTimeout(() => {
          state.commit('setAccountData', data);
          resolve();
          router.push({
            path: '/',
          });
        }, 500);
      });
      return w8;
    },
  },
});

export default store;
