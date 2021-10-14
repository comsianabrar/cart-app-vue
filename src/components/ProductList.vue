<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
    <ul v-else v-for="product in products" :key="product.id">
      <li>{{product.title }} | <b>${{ product.price }} <small><i> ({{product.inventory}} available)</i></small></b>

        &nbsp;
        &nbsp;
        &nbsp;
        <button @click="addProductToCart(product)">Add To Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    name: 'ProductList',
    props: {
      msg: String
    },
    data() {
      return {
        loading: false
      }
    },
    methods: {
      addProductToCart(product) {
        this.$store.dispatch('addProductToCart', product)

      },
    },
    computed: {
      products() {
        return this.$store.getters.availableProducts
      }
    },
    created() {
      this.loading = true;
      this.$store.dispatch('fetchProducts')
        .then(() => {
          this.loading = false;
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  /*ul {*/
  /*  list-style-type: none;*/
  /*  padding: 0;*/
  /*}*/
  /*li {*/
  /*  display: inline-block;*/
  /*  margin: 0 10px;*/
  /*}*/
  /*a {*/
  /*  color: #42b983;*/
  /*}*/
</style>
