module.exports = {
  title: "Documentation",
  description: "Documentation for Yet Another CTF Framework",
  displayAllHeaders: true,
  themeConfig: {
    logo: "/img/logo-p.png",
    nav: [{ text: "Github", link: "https://github.com/yacf" }],
    sidebar: [
      {
        title: "YACF",
        path: "/",
        collapsable: false,
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/start/introduction", "/start/gettingstarted"]
      },
      {
        title: "Deployment", // required
        path: "/deploy/", // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/deploy/docker"]
      },
      {
        title: "Developer", // required
        path: "/dev/", // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/dev/api", "/dev/docker"]
      }
    ]
  }
};
