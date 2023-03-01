import { defineStore } from "pinia"

export const useCart = defineStore('cart', {
  state: () => {
    return {
      name: '购物车',
      cartCount: 0
    }
  },
  getters: {

  },
  actions: {

  }
})