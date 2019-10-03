(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("GraphQL")]),t._v(" "),s("h2",{attrs:{id:"queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries","aria-hidden":"true"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),s("h3",{attrs:{id:"categories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#categories","aria-hidden":"true"}},[t._v("#")]),t._v(" Categories")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("em",[t._v("Authentication:")])]),t._v(" Required")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("query "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  categories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    name\n    challenges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    createdAt\n    updatedAt\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"challenges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenges","aria-hidden":"true"}},[t._v("#")]),t._v(" Challenges")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("em",[t._v("Authentication:")])]),t._v(" Required")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("query "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  challenges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    name\n    description\n    points\n    category "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    solvedchallengeSet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    createdAt\n    updatedAt\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"teams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teams","aria-hidden":"true"}},[t._v("#")]),t._v(" Teams")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("em",[t._v("Authentication:")])]),t._v(" Required")])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("Teams API will change in a future release to better secure user and team information")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  teams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    name\n    affiliation\n    website\n    accesscode\n    players"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ...\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \tcorrectFlags\n    wrongFlags\n    solved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#users","aria-hidden":"true"}},[t._v("#")]),t._v(" Users")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("em",[t._v("Authentication:")])]),t._v(" Required")])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",[t._v("Users API will change in a future release to better secure user and team information")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    username\n    firstName\n    lastName\n    email\n    isStaff\n    isSuperuser\n    isActive\n    profile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"solves"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solves","aria-hidden":"true"}},[t._v("#")]),t._v(" Solves")]),t._v(" "),s("blockquote",[s("p",[s("strong",[s("em",[t._v("Authentication:")])]),t._v(" Required")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("query "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  solves"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    team"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    challenge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    timestamp\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"mutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutations","aria-hidden":"true"}},[t._v("#")]),t._v(" Mutations")])])},[],!1,null,null,null);a.default=e.exports}}]);