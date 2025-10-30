/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: "category",
      label: "The Basics",
      link: {type: "generated-index"},
      items: [
        "overview",
        "core-concepts",
        "installation",
        "casdoor-sso",
      ],
    },
    {
      type: "category",
      label: "Sites",
      link: {type: "generated-index"},
      items: [
        "site",
      ],
    },
    {
      type: "category",
      label: "Certs",
      link: {type: "generated-index"},
      items: [
        "cert",
      ],
    },
    {
      type: "category",
      label: "Rules",
      link: {type: "generated-index"},
      items: [
        "rule",
        "ip-rule",
        "ua-rule",
        "waf-rule",
        "ip-rate-rule",
        "compound-rule",
      ],
    },
    {
      type: "category",
      label: "Records",
      link: {type: "generated-index"},
      items: [
        "record",
      ],
    },
    // {
    //   type: "category",
    //   label: "",
    //   link: { type: "generated-index" },
    //   items: [
    //     "doc1",
    //     "folder1/doc1",
    //     {
    //       type: "category",
    //       label: "",
    //       link: { type: "generated-index" },
    //       items: [
    //         "floder2/doc1",
    //         "floder2/doc2",
    //         "floder2/doc3",
    //       ],
    //     },
    //   ],
    // },
  ],
};
