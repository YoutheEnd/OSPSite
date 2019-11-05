export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'OSP简介',
            link: '/en-us/docs/dir/what_is_OSP.html',
          },
          {
            title: '示例1',
            link: '/en-us/docs/dir/demo1.html',
          },
          {
            title: '示例2',
            link: '/en-us/docs/dir/demo2.html',
          },
          {
            title: '机器人',
            link: '/en-us/docs/dir/robot.html',
          }
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'OSP',
        children: [
          {
            title: 'OSP是什么？',
            opened: true,
            children: [
              {
                title: 'OSP简介',
                link: '/zh-cn/docs/dir/what_is_OSP.html',
              },
              {
                title: '示例1',
                link: '/zh-cn/docs/dir/demo1.html',
              },
              {
                title: '示例2',
                link: '/zh-cn/docs/dir/demo2.html',
              },
              {
                title: '机器人',
                link: '/zh-cn/docs/dir/robot.html',
              }
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
