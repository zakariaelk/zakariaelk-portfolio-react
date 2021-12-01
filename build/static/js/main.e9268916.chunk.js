(this["webpackJsonpzakariaelk-v2"]=this["webpackJsonpzakariaelk-v2"]||[]).push([[0],{52:function(e){e.exports=JSON.parse("{}")},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(3),n=c.n(a),i=c(29),r=c.n(i),l=c(20),o=c(22),d=c(13),j=c(8),m=c(15),u=c(30),b=c(31),h=c(35),p=c(34),x=c(23);function O(){return Object(s.jsx)("div",{id:"loader",children:Object(s.jsx)("div",{className:"loader-content"})})}function v(){var e=document.querySelector("#loader"),t=document.querySelector("html");if(console.log("Loading Page Anime"),document.querySelector(".welcome-statement")){var c=document.querySelector(".welcome-statement"),s=document.querySelector(".discover"),a=document.querySelector(".side-visual");console.log("Home Animated"),x.a.timeline({duration:250}).add({targets:e,complete:function(){e.classList.add("off")}}).add({targets:t,complete:function(){t.classList.remove("no-scroll")}}).add({targets:a,begin:function(){a.classList.add("on")}}).add({targets:c,complete:function(){c.classList.add("on")}}).add({targets:s,complete:function(){s.style.opacity=1}})}else if(document.querySelector(".banner-txt")){var n=document.querySelector(".banner-txt"),i=document.querySelector(".banner-visual"),r=x.a.timeline({duration:250});console.log("Work Animated"),r.add({targets:e,complete:function(){e.classList.add("off")}}).add({targets:t,complete:function(){t.classList.remove("no-scroll")}}).add({targets:n,begin:function(){n.classList.add("on")}}).add({targets:i,begin:function(){i.classList.add("on")}})}else{var l=x.a.timeline({duration:250});console.log("Default Animated"),l.add({targets:e,complete:function(){e.classList.add("off")}}).add({targets:t,complete:function(){t.classList.remove("no-scroll")}})}}var g=function(e){Object(h.a)(c,e);var t=Object(p.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&(window.scrollTo(0,0),v())}},{key:"render",value:function(){return Object(s.jsx)(n.a.Fragment,{})}}]),c}(a.Component),f=Object(j.o)(g);function k(e){e.preventDefault();var t=this.getAttribute("href"),c=document.querySelector(t);if(c){var s,a=(s=c,Math.floor(s.getBoundingClientRect().top));window.scrollBy({top:a,left:0,behavior:"smooth"});setInterval((function(){window.innerHeight,window.pageYOffset,document.body.offsetHeight}),2e3)}}function N(){function e(){var e=document.querySelector("body").getBoundingClientRect().top,t=document.querySelector("header"),c=document.querySelector(".nav-wrapper"),s=document.querySelector(".bottom-part"),a=document.querySelector(".scroll-indic");e<0?(t.classList.add("scrolled"),s.classList.add("scrolled"),c.classList.add("scrolled")):(t.classList.remove("scrolled"),s.classList.remove("scrolled"),c.classList.remove("scrolled")),a&&(e<0?a.classList.add("scrolled"):a.classList.remove("scrolled"))}return Object(a.useEffect)((function(){window.addEventListener("scroll",e),document.querySelectorAll('a[href^="#"]').forEach((function(e){return e.onclick=k}))})),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"top-header",children:[Object(s.jsx)("div",{className:"logo-link",children:Object(s.jsxs)("a",{href:"/",children:[Object(s.jsx)("span",{className:"top-part",children:"Zakaria Elk."}),Object(s.jsx)("span",{className:"bottom-part",children:"UX/Web Designer, Frontend Developer, SEO Strategist"})]})}),Object(s.jsx)("nav",{role:"nav",className:"nav-wrapper",children:Object(s.jsx)("div",{className:"nav-container",children:Object(s.jsx)("div",{className:"nav-menu",children:Object(s.jsxs)("a",{href:"mailto:work@zakariaelk.com",target:"_blank",children:["get in touch",Object(s.jsxs)("svg",{className:"chevron",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{className:"chevron-stroke",d:"M1.01026 10.322V8.27H9.12826V10.322H1.01026ZM1.01026 14.192V12.14H9.12826V14.192H1.01026ZM11.1545 7.208L19.5065 10.898V11.564L11.1545 15.254V13.13L15.6185 11.222L11.1545 9.314V7.208Z",fill:"black"}),Object(s.jsx)("path",{className:"chevron-bg",d:"M0.941406 14.1901V8.27502H11.3785L16.1662 11.1978L11.7615 14.1901H0.941406Z",fill:"black"}),Object(s.jsx)("path",{className:"chevron-triangle",d:"M19.7747 11.1538L11.183 5.76117V16.5464L19.7747 11.1538Z",fill:"black"})]})]})})})})]})})})}function w(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)("div",{className:"about-container",children:[Object(s.jsxs)("div",{className:"intro",children:["I find great value in ",Object(s.jsx)("span",{className:"mark",children:" bringing impact "})," through design and code.\xa0",Object(s.jsx)("br",{}),"Outside work, I enjoy ",Object(s.jsx)("span",{className:"mark",children:"running and playing the guitar."})," ",Object(s.jsx)("div",{className:"guitar"})]}),Object(s.jsxs)("div",{className:"contact-info",children:[Object(s.jsx)("a",{href:"mailto:work@zakariaelk.com",className:"email",children:"work@zakariaelk.com"}),Object(s.jsxs)("div",{className:"social",children:[Object(s.jsx)("a",{href:"https://www.linkedin.com/in/zakaria-elkhachia-8334aa35",className:"linkedin",target:"_blank",children:Object(s.jsx)("img",{src:"/img/svg/linkedin.svg",alt:"zakaria elkhachia linkedin"})}),Object(s.jsx)("a",{href:"https://www.zakariaelk.com/media/zakaria-elkhachia_resume.pdf",className:"cv",target:"_blank",download:"zakaria-elkhachia_resume.pdf",children:Object(s.jsx)("img",{src:"/img/svg/cv.svg",alt:"zakaria elkhachia cv"})})]})]})]})})})}var y=c(17),L=c.n(y);c(51);function S(){return Object(a.useEffect)((function(){!function(){var e,t=document.querySelector(".side-visual"),c=(new Date).getHours();if(e=c>6&&c<16?"05":"04",t){var s=L()(window).width();L()(window).width()<768?(s=400,L()(".side-visual").ripples("updateSize")):(s=360,L()(".side-visual").ripples("updateSize")),L()(".side-visual").ripples({dropRadius:20,perturbance:.03,resolution:s,imageUrl:"img/png/water-shape-".concat(e,".png")}),setInterval((function(){var e=L()(".side-visual"),t=Math.random()*e.outerWidth(),c=Math.random()*e.outerHeight();e.ripples("drop",t,c,20,.01)}),400)}}(),function(){var e=document.querySelector(".dynamic-welcome span"),t=(new Date).getHours();e&&(e.innerHTML=t>6&&t<12?"Best of the morning to you!":t>=12&&t<17?"Having a great afternoon?":"How's your evening going?")}(),v()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("aside",{className:"side-visual",style:{}}),Object(s.jsx)("div",{className:"ripple-overlay"}),Object(s.jsx)("section",{id:"home-welcome",children:Object(s.jsx)("div",{className:"welcome-content boxed",children:Object(s.jsxs)("div",{className:"welcome-statement",children:[Object(s.jsx)("div",{className:"dynamic-welcome",children:Object(s.jsx)("span",{})}),Object(s.jsx)("div",{className:"static-welcome",children:Object(s.jsx)("span",{children:"Welcome to my UX/Web design portfolio"})}),Object(s.jsx)("a",{href:"#work-list",className:"discover scroll",children:"discover."})]})})})]})}function q(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"project-container ".concat(e.id%2!==0?"inverted":""),children:[Object(s.jsx)("figure",{className:"project-visual",children:Object(s.jsxs)(d.Link,{to:"/work/".concat(e.project.slug),slug:e.project.slug,children:[Object(s.jsx)("img",{className:"img-1",src:"img/jpg/".concat(e.project.image1)}),Object(s.jsx)("img",{className:"img-2",src:"img/jpg/".concat(e.project.image2)})]})}),Object(s.jsxs)("div",{className:"project-text",children:[Object(s.jsx)("h3",{className:"project-title",children:e.project.title}),Object(s.jsx)("div",{className:"project-tags",children:e.project.tags.map((function(t,c){return c===e.project.tags.length-1?Object(s.jsxs)("span",{children:[t," "]},c):Object(s.jsxs)("span",{children:[t,", "]},c)}))}),Object(s.jsx)("p",{className:"desc",children:e.project.excerpt}),Object(s.jsx)(d.Link,{to:"/work/".concat(e.project.slug),slug:e.project.slug,className:"project-action dark",children:"learn more"})]})]})})}c(52);function z(e){[].forEach.call(e,(function(e){e.getBoundingClientRect().top>900||e.classList.add("on")}))}function E(e){return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){var e=document.querySelectorAll(".project-visual a"),t=document.querySelectorAll(".project-text"),c=document.querySelectorAll(".visual-figure img");return z(e),z(t),z(c),function(){window.removeEventListener("scroll")}}))})),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("section",{id:"work-list",className:"home-work-list",children:Object(s.jsx)("div",{className:"boxed-wide",children:e.projects.map((function(e,t){return Object(s.jsx)(q,{id:t,project:e},t)}))})})})}var F=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{id:"home",children:[Object(s.jsx)(S,{}),Object(s.jsx)(E,{projects:e.projects})]})})};function H(){return Object(a.useEffect)((function(){v()}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"error-wrapper",children:Object(s.jsx)("div",{className:"boxed",children:Object(s.jsxs)("h1",{className:"error-txt",children:["Whoops! There must be a better option => ",Object(s.jsx)(d.Link,{to:"/",children:" here"})]})})})})}var I=c(33),A=c.n(I);function V(){var e=document.querySelector("#loader"),t=document.querySelector(".banner-txt"),c=document.querySelector(".banner-visual");e&&t&&c&&(e.classList.remove("off"),t.classList.remove("on"),c.classList.remove("on"))}function B(e){var t=e.projects,c=e.match,n=Object.entries(t).filter((function(e,t){if(e[1].slug===c.params.id)return e})),i=e.location.pathname,r=Object(a.useState)({projectUrl:i}),l=Object(o.a)(r,2);l[0],l[1];Object(a.useEffect)((function(){V(),v()}),[]),Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){return z(document.querySelectorAll(".visual-figure img")),function(){window.removeEventListener("scroll")}}))}),[]),0===n.length&&window.location.replace("/");var j=n[0][0],m=n[0][1],u=t[parseInt(j)+1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{id:"work",children:[Object(s.jsx)("section",{id:"project-hero",children:Object(s.jsxs)("div",{className:"hero-content boxed-wide",children:[Object(s.jsxs)("div",{className:"container-l",children:[Object(s.jsxs)("div",{className:"col-4 banner-txt",children:[Object(s.jsx)("h1",{children:m.title}),Object(s.jsx)("p",{className:"desc",children:m.excerpt})]}),Object(s.jsx)("div",{className:"col-8 banner-visual",children:Object(s.jsx)("img",{src:"../../img/jpg/".concat(m.image2),alt:m.title})})]}),Object(s.jsx)("i",{className:"scroll-indic",children:">"})]})}),Object(s.jsx)("section",{id:"project-info",children:Object(s.jsx)("div",{className:"info-content boxed-wide",children:Object(s.jsxs)("div",{className:"container-l",children:[Object(s.jsx)("div",{className:"col-4 info-title",children:Object(s.jsx)("h2",{children:"Context"})}),Object(s.jsxs)("div",{className:"col-8 info-details",children:[Object(s.jsx)("div",{className:"info-intro",children:m.intro}),Object(s.jsxs)("div",{className:"info-list-container",children:[Object(s.jsxs)("div",{className:"info-list",children:[Object(s.jsx)("span",{className:"list-title",children:"services"}),Object(s.jsx)("div",{className:"list-details",children:Object(s.jsx)("ul",{children:m.categories.map((function(e,t){return Object(s.jsx)("li",{children:e},t)}))})})]}),Object(s.jsxs)("div",{className:"info-list",children:[Object(s.jsx)("span",{className:"list-title",children:"year"}),Object(s.jsxs)("div",{className:"list-details",children:[m.year," "]})]}),Object(s.jsxs)("div",{className:"info-list",children:[Object(s.jsx)("span",{className:"list-title",children:"take a look"}),Object(s.jsx)("div",{className:"list-details site-link",children:Object(s.jsx)("a",{href:"".concat(m.site),target:"_blank",children:m.site})})]})]})]})]})})}),Object(s.jsx)("section",{id:"project-visuals",children:Object(s.jsx)("div",{className:"visual-content boxed",children:m.visuals.map((function(e,t){return Object(s.jsx)("figure",{className:"visual-figure",children:Object(s.jsx)("img",{src:"../../img/jpg/".concat(e)})},t)}))})}),parseInt(n[0][0])===t.length-1?Object(s.jsxs)(d.Link,{className:"next-post-nav",to:"/",onClick:V,children:[Object(s.jsx)("div",{className:"next-link","data-label":"more work",children:"back to"}),Object(s.jsx)("div",{className:"next-label","data-label":"see here",children:"work"})]}):Object(s.jsx)(d.Link,{className:"next-post-nav",to:"/work/".concat(u.slug),children:Object(s.jsxs)(A.a,{delay:500,to:"/work/".concat(u.slug),clickAction:V,replace:!1,className:"next-post-nav",children:[Object(s.jsx)("div",{className:"next-link","data-label":"more work",children:"up next"}),Object(s.jsx)("div",{className:"next-label","data-label":"see here",children:u.title})]})})]})})}c.p,c.p,c.p,c.p,c(53),c.p,c.p,c.p;var M=function(){localStorage.getItem("projects");var e={apiKey:"AIzaSyCV96Bp-JVn11VFaTSJiaNgrgaLXFl8zR4",authDomain:"zakariaelk-portfolio.firebaseapp.com",projectId:"zakariaelk-portfolio",storageBucket:"zakariaelk-portfolio.appspot.com",messagingSenderId:"185022383867",appId:"1:185022383867:web:6dd3dc380b8251001e525e",measurementId:"G-FNG39Z67V0"},t=Object(a.useState)({projects:[],isFetching:!1}),c=Object(o.a)(t,2),n=c[0],i=c[1],r=function(e){var t=e.val();i({projects:t,isFetching:!1}),localStorage.setItem("projects",JSON.stringify(t))},u=function(e){console.log(e),i({projects:n.projects,isFetching:!1})};return Object(a.useEffect)((function(){!function(){m.a.apps.length||m.a.initializeApp(e);var t=m.a.database().ref("projects");i({projects:n.projects,isFetching:!0}),t.once("value",r,u)}()}),[]),0===n.projects.length?Object(s.jsx)(O,{}):Object(s.jsxs)(d.BrowserRouter,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(f,{}),Object(s.jsxs)("div",{className:"site-wrapper",children:[Object(s.jsx)(N,{}),Object(s.jsx)("main",{className:"page-content",children:Object(s.jsxs)(j.g,{children:[Object(s.jsx)(j.d,{path:"/",exact:!0,render:function(e){return Object(s.jsx)(F,Object(l.a)(Object(l.a)({},e),{},{projects:n.projects}))}}),Object(s.jsx)(j.d,{path:"/work/:id",exact:!0,render:function(e){return Object(s.jsx)(B,Object(l.a)(Object(l.a)({},e),{},{projects:n.projects}))}}),Object(s.jsx)(j.d,{component:H})]})}),Object(s.jsx)(w,{})]})]})};r.a.render(Object(s.jsx)(M,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e9268916.chunk.js.map