import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    // getter of state
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  mutations: {
    // alter state

    setProducts(state, products) {
      state.products = products
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },

    incrementCartItemQuantity(state, cartItem) {
      cartItem.quantity++
    },
    decrementProductInventory(state, product) {
      product.inventory--
    }

  },
  actions: {
    //   methods
    fetchProducts({commit}) { // context = store , context.commit

      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })

      });


    },
    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          // new product add new one
          context.commit('pushProductToCart', product.id)


        } else {
          //  increament the product quantity as it already exists
          context.commit('incrementCartItemQuantity', cartItem)
        }

        context.commit('decrementProductInventory', product)
      }
    }
  }
})
