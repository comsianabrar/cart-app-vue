<template>
  <div class="home">
    <ProductList msg="Vuex Shopping Cart"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
