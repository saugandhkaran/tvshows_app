<template>
  <div class="home">
    <div class="flex-container center">
      <p>Welcome to PLAYTV24x7</p>
    </div>
    <div class="flex-container center">
      <router-link to="/search"><button class="btn-secondary">Search</button></router-link>
      <router-link to="/browse"><button class="btn-primary">Browse</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
p {
  font-size: 4em;
  font-weight: bold;
  text-align: center;
}
</style>
