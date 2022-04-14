import { RouteLayout } from '@/layouts'

const exampleModle = {
  path: '/dashboard',
  name: 'dashboard',
  redirect: '/dashboard/index',
  component: RouteLayout,
  meta: { title: '工作台', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
  children: [
    {
      path: '/dashboard/index',
      name: 'dashboardIndex',
      component: () => import('@/views/dashboard/Index'),
      meta: { title: '工作总览', keepAlive: true, permission: ['dashboard'] },
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
