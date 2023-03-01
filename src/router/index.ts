import { createRouter, createWebHistory } from "vue-router";

let routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../view/layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('../view/dashboard/index.vue')
      },
      {
        path: '/list-application',
        name: '列表应用',
        children: [
          {
            path: '/list-application/basic-table',
            name: '基础表格',
            component: () => import('../view/listApplicate/basicTable/basicTable.vue')
          },
          {
            path: '/list-application/select-list',
            name: '查询列表',
            component: () => import('../view/listApplicate/selectList/selectList.vue')
          }
        ]
      },
      {
        path: '/extension-component',
        name: '扩展组件',
        children: [
          {
            path: '/extension-component/baidu-maps',
            name: '百度地图',
            component: () => import('../view/extensionComp/baiduMaps/baiduMaps.vue')
          }
        ]
      },
      {
        path: '/error-page',
        name: '错误页面',
        component: () => import('../view/errorPage/index.vue')
      },
    ]
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: () => import('../view/cart.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;