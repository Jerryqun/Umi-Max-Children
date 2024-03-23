import { defineConfig } from '@umijs/max';

const name = 'deopCmd';

const shared = {
  // umi: {
  //   singleton: true,
  //   eager: true,
  // },
  react: {
    singleton: true,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max-children',
  },
  mfsu: false,
  mf: {
    name,
    remotes: [
      // 主应用
      {
        name: 'main',
        entry: '//localhost:8000/remote.js',
      },
    ],
    shared,
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table-children',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
