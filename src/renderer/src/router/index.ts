// src\router\index.ts
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  //  hash 模式。
  history: createWebHashHistory(),
  routes: [
    // 设置首页
    {
      path: '/',
      component: () => import('../pages/MainPage.vue')
    },
    // 配置helloworld页的路径
    {
      path: '/hello',
      component: () => import('../pages/Hello.vue')
    }
  ]
})

export default router
