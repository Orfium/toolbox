// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

const { themes } = require('prism-react-renderer');
const darkCodeTheme = themes.oceanicNext;
const lightCodeTheme = themes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🧰 Toolbox',
  tagline: 'Tools are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Orfium', // Usually your GitHub org/user name.
  projectName: 'Toolbox Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      { disableVersioning: true, includeRoutes: ['/docs/api/**/*'] },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          exclude: ['**/_type-definitions/**'],
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [simplePlantUML],
          editCurrentVersion: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '🧰 Toolbox',
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorials',
            label: 'Docs',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            label: 'API',
            position: 'left',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Orfium/toolbox',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        // links: [
        //   {
        //     title: 'Items',
        //     items: [
        //       {
        //         label: 'Docs',
        //         to: '/docs/tutorials',
        //       },
        //       {
        //         label: 'API',
        //         to: '/docs/api',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Orfium. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
