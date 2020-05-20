<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view class="web-content"/>
  </div>
</template>
<script>
import Header from "../src/components/Header";
export default {
  name: "app",
  components: {
    'header-menu': Header
  }
};
</script>
<style lang="scss">
body, div {
  margin: 0;
  padding: 0;
  background-color: #08090C;
  color: #FFFFFF;
}

.router-link-active {
  color: rgb(138, 6, 98);
}

.tags {
  color: white;
  background-color: rgb(138, 6, 98);
  border-radius: 20px;
  padding:5px 10px;
  margin-left: 5px;
}

.web-content {
  padding-top: 90px;
}

a {
  text-decoration: none;
  color: white;
}
p {
  color: #A9A9B2;
  padding: 0px 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.btn-primary {
  padding: 15px 20px;
  font-weight: bold;
  color: white;
  font-size: 1.2em;
  min-width: 150px;
  background-color: rgb(138, 6, 98);
  border-radius: 30px;
  border: transparent;
  margin: 10px;
}

.error {
  color: red;
};

.btn-secondary {
  padding: 15px 20px;
  font-weight: bold;
  color: rgb(138, 6, 98);
  font-size: 1.2em;
  min-width: 150px;
  background-color: rgb(8, 9, 11);
  border-radius: 30px;
  border: 1px solid rgb(138, 6, 98);
  margin: 10px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  &.around {
    justify-content: space-around;
  }
  &.between {
    justify-content: space-between;
  }
  &.center {
    justify-content: center;
  }
  &.column {
    flex-direction: column;
    flex-wrap: wrap;
  }
  &.overflow-x {
    flex-wrap: nowrap;
    overflow: scroll;
  }
  &.section {
    max-width: 100%;
    padding: 40px 0px;
  }
}

.form-control {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  input[type=text] {
    padding: 14px 15px;
    font-size: 16px;
    min-width: 300px;
    border-radius: 12px;
    border: transparent;
  }
}
</style>
