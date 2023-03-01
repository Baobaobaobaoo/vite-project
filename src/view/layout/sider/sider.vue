<template>
  <a-layout-sider :trigger="null" :width="props.collapsed ? '60' : '200'" collapsible>
    <div class="logo">
      <img src="../../../assets/logo.png" alt="">
      <h2 :class="props.collapsed ? 'sider-change' : ''">Bao Admin</h2>
    </div>
    <a-menu theme="light" mode="inline">
      <div v-for="item in menuData">
        <!-- 没有分组 -->
        <a-menu-item v-if="!item.children" :key="item.key" @click="menuClick(item.path)">
          <component :is="item.icon"></component>
          <span :class="props.collapsed ? 'sider-change' : ''">{{ item.label }}</span>
        </a-menu-item>
        <!-- 有分组 -->
        <a-sub-menu v-else :key="'sub' + item.key">
          <template #title>
            <span>
              <component :is="item.icon"></component>
              <span :class="props.collapsed ? 'sider-change' : ''">{{ item.label }}</span>
            </span>
          </template>
          <a-menu-item v-for="i in item.children" :key="i.key" :class="props.collapsed ? 'sider-change' : ''"
            @click="menuClick(i.path)">
            {{ i.label }}
          </a-menu-item>
        </a-sub-menu>
      </div>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';
import { menuData } from '../datas/menuData'

const props = defineProps({
  collapsed: Boolean
})

let router = useRouter()

// 侧边栏路由跳转
const menuClick = (path: string) => {
  router.push(path)
}

</script>

<style lang="scss">
.ant-layout-sider-children {
  height: 100vh;
}

.logo {
  height: 8.9%;
  background-color: #fff;
  line-height: 64px;
  text-align: center;

  img {
    display: inline-block;
    width: 36px;
    height: 36px;
  }

  h2 {
    display: inline-block;
    margin-left: 6px;
  }
}

.ant-menu {
  height: 91.1%;

  .anticon svg {
    width: 15px;
    height: 15px;
  }
}

.sider-change {
  display: none !important;
}
</style>