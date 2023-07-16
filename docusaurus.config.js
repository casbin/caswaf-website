const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "CasWAF · Web Application Firewall (WAF), aligned with ModSecurity, powered by Casbin and Casdoor",
  url: "https://caswaf.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "casbin", // Usually your GitHub org/user name.
  projectName: "caswaf-website", // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "fr", "de", "ko", "ru", "ja"],
  },
  themeConfig: {
    metadata: [{name: "CasWAF", content: "Web Application Firewall (WAF), aligned with ModSecurity, powered by Casbin and Casdoor"}],
    // algolia: {
    //   appId: "",
    //   apiKey: "",
    //   indexName: "caswaf",
    //   contextualSearch: true,
    // },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hotjar: {
      applicationId: "3575159",
    },
    navbar: {
      title: "CasWAF",
      logo: {
        alt: "My Site Logo",
        src: "img/casbin.svg",
      },
      // hideOnScroll: true,
      items: [
        {
          type: "doc",
          docId: "overview",
          position: "left",
          label: "Docs",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },
        {
          label: "Help",
          to: "/help",
          position: "left",
        },
        {
          href: "https://casdoor.com",
          label: "For Enterprise",
          position: "left",
        },
        {
          href: "https://casdoor.com",
          label: "Hosting Plan (SaaS)",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: "<hr style=\"margin: 0.3rem 0;\">",
            },
            {
              to: "https://crowdin.com/project/caswaf-website",
              label: "Help translate",
            },
          ],
        },
        {
          href: "https://github.com/casbin/caswaf",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "custom-community",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "custom-casdoor",
          label: "Sign Up",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-signup casdoor-link",
        },
        {
          type: "custom-casdoor",
          label: "Login",
          src: "https://casdoor.com",
          position: "right",
          className: "casdoor-login casdoor-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "/docs/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/casbin/caswaf",
            },
            {
              label: "Discord",
              href: "https://discord.gg/KFqhXQnqBz",
            },
            {
              label: "QQ Group",
              href: "https://qm.qq.com/cgi-bin/qm/qr?k=aBPu0dxHnuCH_a-Hs7ZjVSIb8sxEyW0q&jump_from=webapi&authKey=d9RenOiH4QBn/uRwqtDQOGLP7HB3ecJo3M1PSfDuXo+5GDsUzIeXsJXqCj2Mcd87",
            },
            {
              label: "Wechat Group",
              href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/casbin/caswaf",
            },
            {
              html: `
              <iframe src="https://ghbtns.com/github-btn.html?user=casbin&repo=caswaf&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">CasWAF</iframe>
              `,
            },
            {
              html: `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?497e6839ee12099a2de5c51cbccdd763";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
`,
            },
            {
              html: "<div class=\"placeholderads\"></div>",
            },
          ],
        },
      ],
      logo: {
        alt: "Casbin Logo",
        src: "img/casbin_min.svg",
        href: "https://caswaf.org/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} CasWAF contributors.`,
    },
    prism: {
      additionalLanguages: ["nginx", "java", "properties", "groovy", "ruby"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    announcementBar: {
      id: "announcement", // ID of the announcement bar
      content:
        "<a target=\"_blank\" rel=\"noreferrer\" href=\"https://casbin.org/\">💖 Looking for an open-source and cross-platform authorization solution that supports ACL, RBAC, ABAC? Learn more about: Casbin</a>",
      isCloseable: true,
    },
    docs: {
      sidebar: {hideable: true},
    },
  },
  // // https://docusaurus.io/docs/markdown-features/diagrams#configuration
  // markdown: {
  //   mermaid: true,
  // },
  // themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // gtag: {
        //   trackingID: "",
        // },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl: ({locale, docPath}) => {
            if (locale === "en") {
              return `https://github.com/casbin/caswaf-website/edit/master/docs/${docPath}`;
            }
            if (locale === "zh") {
              return "https://crowdin.com/project/caswaf-website/zh-CN";
            }
            return `https://crowdin.com/project/caswaf-website/${locale}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({locale, blogDirPath, blogPath}) => {
            if (locale === "en") {
              return `https://github.com/casbin/caswaf-website/edit/master/${blogDirPath}/${blogPath}`;
            }
            if (locale === "zh") {
              return "https://crowdin.com/project/caswaf-website/zh-CN";
            }
            return `https://crowdin.com/project/caswaf-website/${locale}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-hotjar"],
  scripts: [
    {
      src: "/js/isMainland.js",
      async: true,
    },
    {
      src: "/js/tawk.js",
      async: true,
    },
  ],
};
