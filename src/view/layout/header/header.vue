<template>
  <div class="left">
    <menu-unfold-outlined v-if="state.collapsed" class="trigger" @click="menuClick" />
    <menu-fold-outlined v-else class="trigger" @click="menuClick" />
  </div>
  <div class="center">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="item in state.breadcrumbList" :key="item.path">{{ item.name }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
  <div class="right">

  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, reactive, watchEffect } from 'vue'
import { RouteLocationMatched, useRouter } from 'vue-router';

const props = defineProps({
  collapsed: Boolean
})
const emit = defineEmits(['menuclick'])
const router = useRouter()

/**
 * 数据
 */
const state = reactive({
  collapsed: props.collapsed,
  breadcrumbList: [] as RouteLocationMatched[],
})

// 更新面包屑标签
watchEffect(() => {
  // 获取当前路由并进行判断
  const breadcrumbArr = router.currentRoute.value.matched;
  if (breadcrumbArr[1].name === 'Dashboard') {
    state.breadcrumbList = breadcrumbArr.slice(1,)
  } else {
    state.breadcrumbList = breadcrumbArr
  }
})


/**
 * 方法
 */

// 动态修改折叠变量(collapsed)并传递给父组件
const menuClick = (): void => {
  state.collapsed = !state.collapsed
  emit('menuclick', state.collapsed)
}

</script>

<style lang="scss">
.left {
  display: inline-block;
  margin-left: 20px;
}

.center {
  display: inline-block;
  margin-left: 20px;
}
</style>