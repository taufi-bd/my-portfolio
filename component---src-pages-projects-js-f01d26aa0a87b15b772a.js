(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"16l3":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),c=t.n(r),n=t("7oih"),l=t("DxCv"),s=t("EYWl");a.default=e=>{let{data:{allStrapiProjects:{nodes:a}}}=e;return c.a.createElement(n.a,null,c.a.createElement(s.a,{title:"Projects",description:"This is the project page"}),c.a.createElement("section",{className:"project-page"},c.a.createElement(l.a,{projects:a,title:"all projects"})))}},DxCv:function(e,a,t){"use strict";var r=t("q1tI"),c=t.n(r),n=t("ap0H"),l=t("9eSz"),s=t.n(l);var o=e=>{let{title:a,github:t,stack:r,url:n,image:l,index:o}=e;return c.a.createElement("article",{className:"project"},c.a.createElement("div",{className:"project__card"},c.a.createElement(s.a,{fluid:l.childImageSharp.fluid,className:"project__card__image"}),c.a.createElement("div",{className:"project__card__container"},c.a.createElement("h3",{className:"project__card__container__title"},a),c.a.createElement("div",{className:"project__card__container__stacks"},r.map(e=>c.a.createElement("span",{key:e.id},e.title)))),c.a.createElement("div",{className:"project__card__footer"},c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"project__card__container__footer__icon "+(t?"":"empty-github")},"Github Link"),c.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"project__card__container__footer__icon"},"View Live"))))},i=t("Wbzz"),_=t("ma3e");a.a=e=>{let{projects:a,title:t,showLink:r}=e;return c.a.createElement("section",{className:"projects"},c.a.createElement(n.a,{title:t}),c.a.createElement("div",{className:"projects__inner-wrapper"},a.map((e,a)=>c.a.createElement(o,Object.assign({key:e.id,index:a},e)))),r&&c.a.createElement(i.a,{to:"/projects",className:"projects__button"},c.a.createElement("span",null,"See All Projects"),c.a.createElement(_.d,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-f01d26aa0a87b15b772a.js.map