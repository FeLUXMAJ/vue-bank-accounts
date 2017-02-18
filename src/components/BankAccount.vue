<template>
  <md-list-item>
    <md-layout>
      <div class="md-list-text-container">
        <span>{{value}}</span>
        <p>{{name}}</p>
      </div>

      <router-link :to="{ name: 'BankAccountDetails', params: { name }}">
      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">keyboard_arrow_right</md-icon>
      </md-button>
      </router-link>
    </md-layout>

    <md-divider></md-divider>
  </md-list-item>
</template>

<script>
  export default {
    name: 'bank-account',
    props: [
      'name',
      'value',
    ],
  };
</script>
