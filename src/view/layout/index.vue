<template>
  <a-layout>
    <!-- 侧边栏 -->
    <Sider :collapsed="state.collapsed" />
    <a-layout>
      <!-- 头部 -->
      <a-layout-header style="background: #fff; padding: 0">
        <Header :collapsed=state.collapsed @menuclick="menuClick" />
      </a-layout-header>
      <!-- 内容 -->
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
      <!-- 尾部 -->
      <a-layout-footer>
        footer
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Sider from './sider/sider.vue'
import Header from './header/header.vue'
import { reactive } from 'vue'

/**
 * 数据
 */
const state = reactive({
  collapsed: false
})


/**
 * 方法
 */

// 接收子组件(header)传过来的事件
const menuClick = (val: boolean): void => {
  state.collapsed = val
}
</script>

<style lang="scss"></style>