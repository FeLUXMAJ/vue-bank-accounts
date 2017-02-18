import Vue from 'vue';
import Vuex from 'vuex';
import router from './../router';

Vue.use(Vuex);

const localStorageKey = 'bank_accounts_data';

/**
 * Store data in Local Storage
 * @param key
 * @param data
 */
function storeLocally(key, data) {
  return localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Restore data from Local Storage
 * @param key
 * @returns {{accounts: {Main: {name: string, value: number}}}}
 */
function restoreLocally(key) {
  const defaults = {
    accounts: {
      Main: {
        name: 'Cash',
        value: 0,
      },
    },
  };

  return JSON.parse(localStorage.getItem(key)) || defaults;
}

const store = new Vuex.Store({
  state: restoreLocally(localStorageKey),
  getters: {
    accounts: state => state.accounts,
    accountByName: (state, getters) => name =>
      getters.accounts[name],
  },
  mutations: {
    setAccountData: (state, update) => {
      state.accounts[update.name] = update;
      storeLocally(localStorageKey, state);
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
