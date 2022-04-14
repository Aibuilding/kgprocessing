import { RouteLayout } from '@/layouts'

const exampleModle = {
  path: '/kg',
  name: 'kg',
  redirect: '/kg/search',
  component: RouteLayout,
  meta: { title: '知识图谱', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
  children: [
    {
      path: '/kg/search',
      name: 'search',
      component: () => import('@/views/kg/Search'),
      meta: { title: '知识搜索', keepAlive: true, permission: ['dashboard'] },
    },
    // {
    //   path: '/dashboard/test',
    //   name: 'exampleTest',
    //   component: () => import('@/views/example/test'),
    //   meta: { title: 'test', keepAlive: true, permission: ['dashboard'] },
    // },
  ],
}

export default exampleModle
