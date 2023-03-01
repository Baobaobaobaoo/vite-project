<template>
  <div>
    home
    <button @click="btnClick">{{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
import { useMain } from '../store/home'
import { storeToRefs } from 'pinia';

const main = useMain()
const { count, name, doubleCount } = storeToRefs(main)  // 使用storeToRefs解构才会有响应式

main.$patch({
  count: 10,
  name: 'bao'
})
main.$patch((state) => {
  state.arr.push(5)
})
main.$state = { count: 2, name: '', arr: [] }

const btnClick = () => {
  // 方法目前不能解构
  main.addCount()
}
</script>

<style lang="scss" scoped></style>