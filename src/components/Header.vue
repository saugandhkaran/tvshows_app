<template>
  <nav class="flex-container">
   <router-link to="/" exact><h2>PlayTV24x7</h2></router-link>
    <section class="flex-container menu-items">
      <router-link to="/browse"><h3>Browse</h3></router-link>
      <router-link to="/search"><h3>Search</h3></router-link>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    showObject: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  height: 73px;
  background-color: rgb(18,21,26)
}
.flex-container {
  padding: 0px 20px;
  align-items: center;
  color: rgb(138, 6, 98);
  h2 {
    color: rgb(138, 6, 98);
  }
  .menu-items {
    margin-right: 20px;
  }
  a {
    margin-left: 30px;
  }
}

</style>
