<template>
  <div>
    cart
    {{ name }}
    <input type="text">
  </div>
</template>

<script lang="ts" setup>
import { useCart } from '../store/cart'
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue'
import { homeData } from '../request/api/home'

const cart = useCart()
const { name } = storeToRefs(cart)
const cartName = ref('')
// cart.$patch({
//   name: 'ccc'
// })
cartName.value = cart.name
const id = ref(10)

homeData({ id: id.value }).then(res => {
  console.log(111, res)
})


</script>