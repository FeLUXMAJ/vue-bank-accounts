<template>
  <section>
    <md-list class="md-double-line">
      <bank-account v-for="account in accounts"
                    :name="account.name"
                    :value="account.value"></bank-account>
    </md-list>

    <router-link to="/account/new">
      <md-button class="md-fab md-fab-bottom-right">
        <md-icon>add</md-icon>
      </md-button>
    </router-link>

  </section>

</template>

<script>
  import BankAccount from './BankAccount';

  export default {
    name: 'bank-accounts',
    components: {
      BankAccount,
    },
    computed: {
      accounts() {
        return this.$store.state.accounts;
      },
    },
  };
</script>
