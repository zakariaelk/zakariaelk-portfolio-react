(this["webpackJsonpzakariaelk-v2"]=this["webpackJsonpzakariaelk-v2"]||[]).push([[0],{43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i(2),n=i.n(s),c=i(25),r=i.n(c),o=(i(45),i(22)),l=(i.p,i(12)),d=i(7),j=i(1),m=i(5),h=i(3),u=i(4),g=i(19);function p(){return Object(a.jsx)("div",{id:"loader",children:Object(a.jsx)("div",{className:"loader-content"})})}function b(){var e=document.querySelector("#loader"),t=document.querySelector("html");if(console.log("Loading Page Anime"),document.querySelector(".welcome-statement")){var i=document.querySelector(".welcome-statement"),a=document.querySelector(".discover"),s=document.querySelector(".side-visual");console.log("Home Animated"),g.a.timeline({duration:250}).add({targets:e,complete:function(){e.classList.add("off")}}).add({targets:t,complete:function(){t.classList.remove("no-scroll")}}).add({targets:s,begin:function(){s.classList.add("on")}}).add({targets:i,complete:function(){i.classList.add("on")}}).add({targets:a,complete:function(){a.style.opacity=1}})}else if(document.querySelector(".banner-txt")){var n=document.querySelector(".banner-txt"),c=document.querySelector(".banner-visual"),r=g.a.timeline({duration:250});console.log("Work Animated"),r.add({targets:e,complete:function(){e.classList.add("off")}}).add({targets:t,complete:function(){t.classList.remove("no-scroll")}}).add({targets:n,begin:function(){n.classList.add("on")}}).add({targets:c,begin:function(){c.classList.add("on")}})}else{var o=g.a.timeline({duration:250});console.log("Default Animated"),o.add({targets:e,complete:function(){e.classList.add("off")}}).add({targets:t,complete:function(){t.classList.remove("no-scroll")}})}}var v=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){return Object(j.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&(window.scrollTo(0,0),b())}},{key:"render",value:function(){return Object(a.jsx)(n.a.Fragment,{})}}]),i}(s.Component),f=Object(d.o)(v);function x(e){e.preventDefault();var t=this.getAttribute("href"),i=document.querySelector(t);if(i){var a,s=(a=i,Math.floor(a.getBoundingClientRect().top));window.scrollBy({top:s,left:0,behavior:"smooth"});setInterval((function(){window.innerHeight,window.pageYOffset,document.body.offsetHeight}),2e3)}}function w(){function e(){var e=document.querySelector("body").getBoundingClientRect().top,t=document.querySelector("header"),i=document.querySelector(".nav-wrapper"),a=document.querySelector(".bottom-part"),s=document.querySelector(".scroll-indic");e<0?(t.classList.add("scrolled"),a.classList.add("scrolled"),i.classList.add("scrolled")):(t.classList.remove("scrolled"),a.classList.remove("scrolled"),i.classList.remove("scrolled")),s&&(e<0?s.classList.add("scrolled"):s.classList.remove("scrolled"))}return Object(s.useEffect)((function(){window.addEventListener("scroll",e),document.querySelectorAll('a[href^="#"]').forEach((function(e){return e.onclick=x}))})),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"top-header",children:[Object(a.jsx)("div",{className:"logo-link",children:Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("span",{className:"top-part",children:"Zakaria Elk."}),Object(a.jsx)("span",{className:"bottom-part",children:"UX Designer, Frontend Developer, SEO Strategist"})]})}),Object(a.jsx)("nav",{role:"nav",className:"nav-wrapper",children:Object(a.jsx)("div",{className:"nav-container",children:Object(a.jsx)("div",{className:"nav-menu",children:Object(a.jsxs)("a",{href:"mailto:work@zakariaelk.com",target:"_blank",children:["get in touch",Object(a.jsxs)("svg",{className:"chevron",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{className:"chevron-stroke",d:"M1.01026 10.322V8.27H9.12826V10.322H1.01026ZM1.01026 14.192V12.14H9.12826V14.192H1.01026ZM11.1545 7.208L19.5065 10.898V11.564L11.1545 15.254V13.13L15.6185 11.222L11.1545 9.314V7.208Z",fill:"black"}),Object(a.jsx)("path",{className:"chevron-bg",d:"M0.941406 14.1901V8.27502H11.3785L16.1662 11.1978L11.7615 14.1901H0.941406Z",fill:"black"}),Object(a.jsx)("path",{className:"chevron-triangle",d:"M19.7747 11.1538L11.183 5.76117V16.5464L19.7747 11.1538Z",fill:"black"})]})]})})})})]})})})}function O(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"about-container",children:[Object(a.jsxs)("div",{className:"intro",children:["I love to ",Object(a.jsx)("span",{className:"mark",children:" express new ideas "})," through design and code.",Object(a.jsx)("br",{}),"When I am not working, I enjoy ",Object(a.jsx)("span",{className:"mark",children:"running and playing the guitar"})," ",Object(a.jsx)("div",{className:"guitar",children:"\ud83c\udfb8"})]}),Object(a.jsxs)("div",{className:"contact-info",children:[Object(a.jsx)("a",{href:"mailto:work@zakariaelk.com",className:"email",children:"work@zakariaelk.com"}),Object(a.jsxs)("div",{className:"social",children:[Object(a.jsx)("a",{href:"https://www.linkedin.com/in/zakaria-elkhachia-8334aa35",className:"linkedin",target:"_blank",children:Object(a.jsx)("img",{src:"/img/svg/linkedin.svg",alt:"zakaria elkhachia linkedin"})}),Object(a.jsx)("a",{href:"media/zakaria-elkhachia_resume.pdf",className:"cv",target:"_blank",download:!0,children:Object(a.jsx)("img",{src:"/img/svg/cv.svg",alt:"zakaria elkhachia cv"})})]})]})]})})})}var y=i(16),k=i.n(y);i(42);function N(){return Object(s.useEffect)((function(){!function(){var e=document.querySelector(".dynamic-welcome span"),t=(new Date).getHours();e&&(e.innerHTML=t>6&&t<12?"How's your day starting?":t>=12&&t<17?"Having a nice afternoon?":"Having a good evening?")}(),function(){if(document.querySelector(".side-visual")){var e=k()(window).width();e=k()(window).width()<768?512:256,k()(".side-visual").ripples({dropRadius:20,perturbance:.04,resolution:e,imageUrl:"img/svg/water-shape.svg"}),setInterval((function(){var e=k()(".side-visual"),t=Math.random()*e.outerWidth(),i=Math.random()*e.outerHeight();e.ripples("drop",t,i,20,.01)}),400)}}(),b()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("aside",{className:"side-visual",style:{}}),Object(a.jsx)("section",{id:"home-welcome",children:Object(a.jsx)("div",{className:"welcome-content boxed",children:Object(a.jsxs)("div",{className:"welcome-statement",children:[Object(a.jsx)("div",{className:"dynamic-welcome",children:Object(a.jsx)("span",{})}),Object(a.jsx)("div",{className:"static-welcome",children:Object(a.jsx)("span",{children:"Welcome to visit my work down below"})}),Object(a.jsx)("a",{href:"#work-list",className:"discover scroll",children:"discover."})]})})})]})}function L(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"project-container ".concat(e.id%2!==0?"inverted":""),children:[Object(a.jsx)("figure",{className:"project-visual",children:Object(a.jsxs)(l.Link,{to:"/work/".concat(e.project.slug),slug:e.project.slug,children:[Object(a.jsx)("img",{className:"img-1",src:"img/jpg/".concat(e.project.image1)}),Object(a.jsx)("img",{className:"img-2",src:"img/jpg/".concat(e.project.image2)})]})}),Object(a.jsxs)("div",{className:"project-text",children:[Object(a.jsx)("h3",{className:"project-title",children:e.project.title}),Object(a.jsx)("div",{className:"project-tags",children:e.project.tags.map((function(t,i){return i===e.project.tags.length-1?Object(a.jsxs)("span",{children:[t," "]},i):Object(a.jsxs)("span",{children:[t,", "]},i)}))}),Object(a.jsx)("p",{className:"desc",children:e.project.excerpt}),Object(a.jsx)(l.Link,{to:"/work/".concat(e.project.slug),slug:e.project.slug,className:"project-action",children:"learn more"})]})]})})}var I=[{title:"Daga Architects",slug:"daga-architects",tags:["#animejs","#sass","#svg-morphing","#UI","#wp"],excerpt:"Award winning architect agency, specializing in interior design and construction.",image1:"daga-01.jpg",image2:"daga-02.jpg",intro:"Specializing in architecture and construction services, Daga Architects reached out to me with a specific set of goals, of which International expansion was a top priority. I had the chance to work together with their creative team to translate their ideas into a seamless digital experience.",categories:["user journey mapping","web design","frontend development","wordpress integration"],year:"2019",site:"daga.zakariaelk.com",note:"site might run slow due to hosting restrictions in Mainland China",visuals:["daga-03.jpg","daga-04.jpg","daga-05.jpg"]},{title:"Triotech",slug:"triotech",tags:["#Intersection-API","#sass","#SnapSVG","#Tilt-API","#UI-design"],excerpt:"Global entertainment company with award-winning immersive attractions.",image1:"triotech-01.jpg",image2:"triotech-02.jpg",intro:"Being one of the top leaders in the Game & Attraction Industry, Triotech was looking to adapt their web image to the Chinese audience. For that purpose, I took a simple approach with both the design and code, allowing the website to operate smoothly across widely used browsers and devices in China, and ultimately, improving the overall user experience.",categories:["web design","frontend development","cms integration","cross-device adaptation","seo","web development"],year:"2020",site:"triotechchina.com",note:"",visuals:["triotech-03.jpg","triotech-04.jpg"]},{title:"CanLife Sports",slug:"canlife",tags:["#figma","#Intersection-API","#sass","#UI-design","#vanilla-js"],excerpt:"Focused on expanding winter sports and lifestyle in China. Canlife was looking to modernize their online image.",image1:"canlife-01.jpg",image2:"canlife-02.jpg",intro:"CanLife Sports is a branding and marketing agency, that help winter sports companies expand their operations in China. I worked with them to revamp their website with a modern approach to user experience across all devices, and thus allowing them to easily reach their online audience, and showcase their expertise.",categories:["web design","frontend development","cms integration","web development"],year:"2020",site:"canlifesports.com",note:"",visuals:["canlife-03.jpg"]},{title:"Alwin Capital",slug:"alwin-capital",tags:["#babel","#css-transitions","#particlesjs","#UI-design","#vanilla-js"],excerpt:"Alwin Capital is a leading venture capital firm in China, specializing in early stage life science investments.",image1:"alwin-01.jpg",image2:"alwin-02.jpg",intro:"Together with the PBB Creative team, I had the chance to work on designing and developing the new Alwin Capital\u2019s corporate website. This site was built to provide its audience with concise information about the company\u2019s vision for investment in science. It features a portfolio section, categorized by the different industries in which Alwin Capital is active.",categories:["user journey mapping","web design","frontend development"],year:"2020",site:"alwincapital.com",note:"",visuals:["alwin-03.jpg","alwin-04.jpg"]},{title:"3e International",slug:"3e-international",tags:["#babel","#css-transitions","#particlesjs","#UI-design","#vanilla-js"],excerpt:"3e is a school that adopts a visionary approach to dual-immersion bilingual education.",image1:"3e-01.jpg",image2:"3e-02.jpg",intro:"3e international school is a well established institute, that has a mission to develop creative thinkers and collaborative learners who are able to move respectfully and appreciatively across cultures. I worked together with their communication team and PBB to design and develop a new website, that serves as a platform for publishing news and events. The latter was built on solid SEO guidelines allowing it to rank first in SERP for the targeted keywords.",categories:["user journey","web design","frontend development","wordpress cms integration","seo"],year:"2018",site:"3einternationalschool.org",note:"",visuals:["3e-03.jpg"]},{title:"Grace Choy",slug:"grace",tags:["#canvas","#custom-slider","#sass","#svg-text-animation"],excerpt:"A young artist who takes unfamiliarity as its dominant.",image1:"grace-01.jpg",image2:"grace-02.jpg",intro:"Grace is an artist who\u2019s work is focused on the experimentation of different series of ideas, converging in a storytelling form. I worked with her to design and develop her portfolio, enabling her to easily reach out to her audience.",categories:["user journey","web design","frontend development","wordpress cms integration","seo"],year:"2019",site:"gracegchoy.com",note:"",visuals:["grace-03.jpg"]},{title:"LFIP",slug:"lfip",tags:["#+40 pages","#bootstrap","#custom-WP","#jquery","#videojs"],excerpt:"LFIP forms the players of tomorrow from different parts of the globe.",image1:"lfip-01.jpg",image2:"lfip-02.jpg",intro:"LFIP is a school of success with a unique approach to education, as it welcomes more than 900 students from 50 different countries. The key to LFIP students\u2019 success lies in the balance of learning, developing skills, personal growth and exposure to a multicultural environment. I had the chance to work on the complete revamp of the LFIP website, which required careful restructuring and a functional design, allowing the school to easily and regularly manage updates.",categories:["Prototyping & Wireframing","frontend development","wordpress cms integration"],year:"2017",site:"lfip.net.cn",note:"",visuals:["lfip-03.jpg"]},{title:"Italus",slug:"italus",tags:["#bootstrap","#content","#custom-WP","#sass","#UI"],excerpt:"Operating in Italy and China, Italus has become a symbol of Italian Food Quality and Premium Culinary Traditions.",image1:"italus-01.jpg",image2:"italus-02.jpg",intro:"Together with the PBB Creative team, I had the chance to work on designing and developing the new Alwin Capital\u2019s corporate website. This site was built to provide its audience with concise information about the company\u2019s vision for investment in science. It features a portfolio section, categorized by the different industries in which Alwin Capital is active.",categories:["web design","frontend development","wordpress cms integration","deployment for china"],year:"2018",site:"italus.com.cn",note:"",visuals:["italus-04.jpg","italus-05.jpg"]},{title:"Yifuze Investment",slug:"yifuze-investment",tags:["#bootstrap","#content","#css-transitions","#jquery"],excerpt:"Persistently devoted to technological innovation and industrial upgrading in Mainland China.",image1:"yifuze-01.jpg",image2:"yifuze-02.jpg",intro:"Yifuze is an investment company working across healthcare, new energy and high-tech manufacturing amongst other industries. The company was looking to establish a preliminary online presence, and so requested a simple one page site, which helped them introduce their business to prospects.",categories:["web design","frontend development","mobile adaptation"],year:"2016",site:"e-future.com",note:"",visuals:["yifuze-03.jpg"]}];function S(e){[].forEach.call(e,(function(e){e.getBoundingClientRect().top>900||e.classList.add("on")}))}function q(){return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){var e=document.querySelectorAll(".project-visual a"),t=document.querySelectorAll(".project-text"),i=document.querySelectorAll(".visual-figure img");return S(e),S(t),S(i),function(){window.removeEventListener("scroll")}}))})),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"work-list",className:"home-work-list",children:Object(a.jsx)("div",{className:"boxed",children:I.map((function(e,t){return Object(a.jsx)(L,{id:t,project:e},t)}))})})})}var C=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{id:"home",children:[Object(a.jsx)(N,{}),Object(a.jsx)(q,{})]})})};function A(){return Object(s.useEffect)((function(){b()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"error-wrapper",children:Object(a.jsx)("div",{className:"boxed",children:Object(a.jsxs)("h1",{className:"error-txt",children:["Whoops! There must be a better option => ",Object(a.jsx)(l.Link,{to:"/",children:" here"})]})})})})}var z=i(28),F=i(27),E=i.n(F);function P(){document.querySelector("#loader").classList.remove("off")}function H(e){var t=e.projects,i=e.match,n=Object.entries(t).filter((function(e,t){if(e[1].slug===i.params.id)return e})),c=e.location.pathname,r=Object(s.useState)(c),o=Object(z.a)(r,2);o[0],o[1];Object(s.useEffect)((function(){P(),b()}),[]),Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){return S(document.querySelectorAll(".visual-figure img")),function(){window.removeEventListener("scroll")}}))})),0===n.length&&window.location.replace("/");var d=n[0][0],j=n[0][1],m=t[parseInt(d)+1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{id:"work",children:[Object(a.jsx)("section",{id:"project-hero",children:Object(a.jsxs)("div",{className:"hero-content boxed",children:[Object(a.jsxs)("div",{className:"container-l",children:[Object(a.jsxs)("div",{className:"col-4 banner-txt",children:[Object(a.jsx)("h1",{children:j.title}),Object(a.jsx)("p",{className:"desc",children:j.excerpt})]}),Object(a.jsx)("div",{className:"col-8 banner-visual",children:Object(a.jsx)("img",{src:"../img/jpg/".concat(j.image2),alt:j.title})})]}),Object(a.jsx)("i",{className:"scroll-indic",children:">"})]})}),Object(a.jsx)("section",{id:"project-info",children:Object(a.jsx)("div",{className:"info-content boxed",children:Object(a.jsxs)("div",{className:"container-l",children:[Object(a.jsx)("div",{className:"col-4 info-title",children:Object(a.jsx)("h2",{children:"What i did"})}),Object(a.jsxs)("div",{className:"col-8 info-details",children:[Object(a.jsx)("div",{className:"info-intro",children:j.intro}),Object(a.jsxs)("div",{className:"info-list-container",children:[Object(a.jsxs)("div",{className:"info-list",children:[Object(a.jsx)("span",{className:"list-title",children:"services"}),Object(a.jsx)("div",{className:"list-details",children:Object(a.jsx)("ul",{children:j.categories.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})})]}),Object(a.jsxs)("div",{className:"info-list",children:[Object(a.jsx)("span",{className:"list-title",children:"year"}),Object(a.jsxs)("div",{className:"list-details",children:[j.year," "]})]}),Object(a.jsxs)("div",{className:"info-list",children:[Object(a.jsx)("span",{className:"list-title",children:"take a look"}),Object(a.jsx)("div",{className:"list-details site-link",children:Object(a.jsx)("a",{href:"http://".concat(j.site),target:"_blank",children:j.site})})]})]})]})]})})}),Object(a.jsx)("section",{id:"project-visuals",children:Object(a.jsx)("div",{className:"visual-content boxed",children:j.visuals.map((function(e,t){return Object(a.jsx)("figure",{className:"visual-figure",children:Object(a.jsx)("img",{src:"../img/jpg/full/".concat(e)})},t)}))})}),parseInt(n[0][0])===t.length-1?Object(a.jsxs)(l.Link,{className:"next-post-nav",to:"/",onClick:P,children:[Object(a.jsx)("div",{className:"next-link","data-label":"more work",children:"back to"}),Object(a.jsx)("div",{className:"next-label","data-label":"see here",children:"work"})]}):Object(a.jsx)(l.Link,{className:"next-post-nav",to:"/work/".concat(m.slug),children:Object(a.jsxs)(E.a,{delay:1e3,to:"/work/".concat(m.slug),clickAction:P,replace:!1,className:"next-post-nav",children:[Object(a.jsx)("div",{className:"next-link","data-label":"more work",children:"up next"}),Object(a.jsx)("div",{className:"next-label","data-label":"see here",children:m.title})]})})]})})}i.p,i.p,i.p,i.p,i(43),i.p,i.p,i.p;var B=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(l.BrowserRouter,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(f,{}),Object(a.jsxs)("div",{className:"site-wrapper",children:[Object(a.jsx)(w,{}),Object(a.jsx)("main",{className:"page-content",children:Object(a.jsxs)(d.g,{children:[Object(a.jsx)(d.d,{path:"/",exact:!0,component:C}),Object(a.jsx)(d.d,{path:"/work/:id",exact:!0,render:function(e){return Object(a.jsx)(H,Object(o.a)(Object(o.a)({},e),{},{projects:I}))}}),Object(a.jsx)(d.d,{component:A})]})}),Object(a.jsx)(O,{})]})]})})};r.a.render(Object(a.jsx)(B,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9ad46d5a.chunk.js.map