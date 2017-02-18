<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">Accounts</h1>
    </md-toolbar>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
