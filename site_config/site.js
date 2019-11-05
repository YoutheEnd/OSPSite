// 全局的一些配置
export default {
    rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
    port: 8080, // 本地开发服务器的启动端口
    domain: 'dubbo.apache.org', // 站点部署域名，无需协议和path等
    defaultSearch: 'google', // 默认搜索引擎，baidu或者google
    defaultLanguage: 'zh-cn',
    'en-us': {
        pageMenu: [
            {
                key: 'home', // 用作顶部菜单的选中
                text: 'HOME',
                link: '/en-us/index.html',
                list: [
                    {
                        text: 'demo1',
                        link: '/zh-cn/docs/dir/demo1.html'
                    },
                    {
                        text: 'demo2',
                        link: '/zh-cn/docs/dir/demo2.html'
                    },
                ],
            },
            {
                key: 'docs',
                text: 'DOCS',
                link: '/en-us/docs/demo1.html',
                list: [
                    {
                        text: 'demo1',
                        link: '/zh-cn/docs/dir/demo1.html'
                    },
                    {
                        text: 'demo2',
                        link: '/zh-cn/docs/dir/demo2.html'
                    },
                ],
            },
            {
                key: 'blog',
                text: 'BLOG',
                link: '/en-us/blog/index.html',
                list: [
                    {
                        text: 'demo1',
                        link: '/zh-cn/docs/dir/demo1.html'
                    },
                    {
                        text: 'demo2',
                        link: '/zh-cn/docs/dir/demo2.html'
                    },
                ],
            },
            {
                key: 'community',
                text: 'COMMUNITY',
                link: '/en-us/community/index.html',
                list: [
                    {
                        text: 'demo1',
                        link: '/zh-cn/docs/dir/demo1.html'
                    },
                    {
                        text: 'demo2',
                        link: '/zh-cn/docs/dir/demo2.html'
                    },
                ],
            },
        ],
        disclaimer: {
            title: 'Disclaimer',
            content: 'the disclaimer content',
        },
        documentation: {
            title: 'Documentation',
            list: [
                {
                    text: 'Overview',
                    link: '/en-us/docs/demo1.html',
                },
                {
                    text: 'Quick start',
                    link: '/en-us/docs/demo2.html',
                },
                {
                    text: 'Developer guide',
                    link: '/en-us/docs/dir/demo3.html',
                },
            ],
        },
        resources: {
            title: 'Resources',
            list: [
                {
                    text: 'Blog',
                    link: '/en-us/blog/index.html',
                },
                {
                    text: 'Community',
                    link: '/en-us/community/index.html',
                },
            ],
        },
        copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    'zh-cn': {
        pageMenu: [
            {
                key: 'home',
                text: '首页',
                link: '/zh-cn/index.html',
                list: []
            },
            {
                key: 'docs',
                text: '文档',
                link: '/zh-cn/docs/dir/what_is_OSP.html',
                list: [
                    {
                        text: 'demo1',
                        link: '/zh-cn/docs/dir/demo1.html'
                    },
                    {
                        text: 'demo2',
                        link: '/zh-cn/docs/dir/demo2.html'
                    },
                ],
            },
            {
                key: 'blog',
                text: '博客',
                link: '/zh-cn/blog/index.html',
                list: []
            },
            {
                key: 'community',
                text: '社区',
                link: '/zh-cn/community/index.html',
                list: []
            },
        ],
        disclaimer: {
            title: '愿景',
            content: '快速响应用户需求，提升开发与布署效率，协同合作伙伴共同创新，为客户提供全面服务',
        },
        documentation: {
            title: '文档',
            list: [
                {
                    text: '概览',
                    link: '/zh-cn/docs/dir/demo1.html',
                },
                {
                    text: '快速开始',
                    link: '/zh-cn/docs/dir/demo2.html',
                },
                {
                    text: '开发者指南',
                    link: '/zh-cn/docs/dir/robot.html',
                },
            ],
        },
        resources: {
            title: '资源',
            list: [
                {
                    text: '博客',
                    link: '/zh-cn/blog/index.html',
                },
                {
                    text: '社区',
                    link: '/zh-cn/community/index.html',
                },
            ],
        },
        copyright: 'Copyright © 2019 普联软件',
    },
};
