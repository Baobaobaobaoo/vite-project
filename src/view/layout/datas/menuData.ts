interface menuType {
  label: string;
  icon?: string;
  key: string;
  path: string;
  children?: menuType[]
}

// 侧边栏数据
export const menuData = <menuType[]>[
  {
    label: 'Dashboard',
    icon: 'radar-chart-outlined',
    key: '1',
    path: '/'
  },
  {
    label: '列表应用',
    icon: 'appstore-outlined',
    key: 'sub1',
    path: '/list-application',
    children: [
      {
        label: '基础表格',
        key: '2',
        path: '/list-application/basic-table'
      },
      {
        label: '查询列表',
        key: '3',
        path: '/list-application/select-list'
      }
    ]
  },
  {
    label: '扩展组件',
    icon: 'compass-outlined',
    key: 'sub2',
    path: '/extension-component',
    children: [
      {
        label: '百度地图',
        key: '4',
        path: '/extension-component/baidu-maps'
      }
    ]
  },
  {
    label: '错误页面',
    icon: 'stop-outlined',
    key: '5',
    path: '/error-page'
  },
]