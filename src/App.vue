<template>
  <div id="app">
    <h1>All Available Products</h1>
    <ProductList/>
    <hr>
    <h3>Shopping Cart</h3>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
  import ProductList from "./components/ProductList";
  export default {
    components: {ProductList}
  }
</script>
