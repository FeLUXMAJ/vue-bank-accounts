import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import BankAccounts from 'components/BankAccounts';
import BankAccountDetails from 'components/BankAccountDetails';
// import Hello from 'components/Hello';

Vue.use(VueMaterial);
Vue.use(Router);

Vue.material.registerTheme('default', {
  primary: 'orange',
  accent: 'lime',
  warn: 'red',
  background: 'white',
});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BankAccounts',
      component: BankAccounts,
    },
    {
      path: '/account/:name',
      props: true,
      name: 'BankAccountDetails',
      component: BankAccountDetails,
    },
  ],
});
