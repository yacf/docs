module.exports = {
    // base: "/totalrecon/",
    title: "Documentation",
    description: "Documentation for Yet Another CTF Framework",
    displayAllHeaders: true,
    themeConfig: {
        logo: "/img/logo-p.png",
        nav: [
            { text: "Discord", link: "https://github.com/" },
        ],
        sidebar: [
            {
                title: "YACF",
                path: "/home/",
                collapsable: false,
            },
            {
                title: "Getting Started",
                path: "/start/",
                collapsable: false,
                sidebarDepth: 3,
                children: ["/start/deployment"]
            }
        ]
    }
};