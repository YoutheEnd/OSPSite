import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'OSP开放服务平台',
      briefIntroduction: '提供完整的覆盖软件全生命周期的开发、集成、运行、管理等功能于一体的统一软件平台。',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/demo1.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: '',
          type: 'normal',
        },
      ],
      starImg: '/img/star-32-32.png',
      forkImg: '/img/fork-32-32.png',
    },
    introduction: {
      title: 'OSP.DEV 开发平台',
      desc: 'OSP.DEV 是从多年的应用软件研发过程中提炼出业务模型，模板，开发工具，开发框架，中间件，基础类库及研发模式等成果，以可视化和集成化的开发模式，提供完整的覆盖软件全生命周期的开发、集成、运行、管理等功能于一体的统一软件平台。\n',
      img: '/img/osp_architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '模型搭建',
          content: '模型搭建是平台开发的基石，他负责管理系统中所有的表以及表和表之间的逻辑关系。',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '服务编排',
          content: '服务编排是平台的逻辑加工厂，业务逻辑通过原子级业务插件，可视化编排形式，每个插件独立运行互不影响。',
        },
        {
          img: '/img/feature_service.png',
          title: '表单设计',
          content: '表单设计是平台的前台加工厂，将丰富的组件排列组成绚美的界面，即改即用不需要编译或者发布。',
        },
        {
          img: '/img/feature_hogh.png',
          title: '流程设计',
          content: '流程是平台串接器，将各个岗位节点串接到一起，流程设计可视化，分支条件配置化，审批信息配置化。',
        },
        {
          img: '/img/feature_runtime.png',
          title: '权限分配',
          content: '通过功能权限、数据权限，对系统进行全面的权限控制，权限分配方式灵活、操作简单，支持到人和角色。',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '菜单管理',
          content: '通过前台界面动态配置菜单，菜单项可设置访问权限，操作简单方便。',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '面向业务建模、系统开发依赖平台标准、维护升级简单、标准化模块化、项目可以快速搭建',
      img: '/img/osp_quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/demo1.html',
      },
    },
    users: {
      title: '谁在使用OSP',
      desc: <span>提供最好的服务</span>,
      list: [
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
        '/img/logo_zgjz.png',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'brandName',
      briefIntroduction: 'some description of product',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/demo1.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: '',
          type: 'normal',
        },
      ],
      starIMg: '/img/star-32-32.png',
      forkIMg: '/img/fork-32-32.png',
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'feature1',
          content: 'feature description',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'feature2',
          content: 'feature description',
        },
        {
          img: '/img/feature_service.png',
          title: 'feature3',
          content: 'feature description',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'feature4',
          content: 'feature description',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'feature5',
          content: 'feature description',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'feature6',
          content: 'feature description',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
      ],
    },
  },
};
