<template>
  <div class="header">
    <router-link to="/">Go to Index</router-link>
    <router-link to="/List">Go to List</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.header {
  background-color: #139cbe;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
</style>