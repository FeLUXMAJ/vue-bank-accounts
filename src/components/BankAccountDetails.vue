<template>
  <section class="BankAccountDetails">
    <form novalidate @submit.stop.prevent="onSubmit">
      <md-input-container>
        <label>Name</label>
        <md-input required v-model="accountName" :disabled="isSaving"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Value</label>
        <md-input type="number" required v-model="accountValue" :disabled="isSaving"></md-input>
      </md-input-container>

      <router-link to="/">
        <md-button class="md-raised">Back</md-button>
      </router-link>

      <md-button class="md-primary md-raised" type="submit" :disabled="isSaving">Save</md-button>

      <md-spinner v-if="isSaving" md-indeterminate></md-spinner>
    </form>
  </section>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'bank-account-details',
    props: [
      'name',
    ],
    data() {
      const currentValue = _.result(this.$store.getters.accountByName(this.name), 'value');
      return {
        showPlusPanel: false,
        showMinusPanel: false,
        accountName: this.name,
        accountValue: currentValue,
        isSaving: false,
      };
    },
    methods: {
      onSubmit() {
        this.isSaving = true;
        this.$store.dispatch('saveAccount', {
          name: this.accountName,
          value: this.accountValue,
        }).then(() => {
          this.isSaving = false;
        });
      },
    },
  };
</script>

<style scoped>
  .BankAccountDetails {
    padding: 16px;
  }
</style>
