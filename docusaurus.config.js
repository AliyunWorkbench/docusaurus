// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apophis WiKi百科',
  tagline: '一个关于 科技与未来 的MINECRAFT社区',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apophis',
        logo: {
          alt: '服务器LOGO',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '技术支持',
            items: [
              {
                label: 'Apophis工作室',
                href: 'http://www.apophis.club',
              },
              {
                label: 'VACsystem协议规则',
                href: 'http://www.apophis.club/rules.html',
              },
              {
                label: 'Ray_Hughes [枫溪]',
                href: 'https://github.com/FxRayHughes',
              },
              {
                label: 'Bkm016 [坏黑]',
                href: 'https://github.com/Bkm016?tab=repositories',
              },
              
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: '官方网站',
                href: 'http://www.apophis.club',
              },
              {
                label: '开黑啦(KOOK)',
                href: 'https://kook.top/4CVK47',
              },
              {
                label: '官方QQ交流群',
                href: 'https://jq.qq.com/?_wv=1027&k=2J3fRH6U',
              },
              {
                label: 'MCBBS论坛',
                href: 'https://www.mcbbs.net/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Docusaurus GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apophis工作室`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
