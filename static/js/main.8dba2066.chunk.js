(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"heading":"About Me","paragraph":"I am a product manager, full-stack developer, and team player."},{"heading":"Background","paragraph":"I studied economics and finance in school, where I learned about resource allocation and general finance in business. After school, I worked in insurance where I learned about managing and estimating risk. Afterward, I moved to retail e-commerce, where I conducted financial planning and analysis. Then I transitioned to tech, semi-conductor industry, where I helped taking new tech products to the market. Two years ago, I joined a casual mobile game company, where I led new feature development for the organization. If there\'s anything in common in my past, it would be that I enjoy constantly learning!"},{"heading":"Hobbies & Interests","paragraph":"I\'m a car enthusiast, watching car review and trend is probably where I spend most of my time on YouTube. I\'m a huge movie buff, I go deep in movie details, symbolism, background, and quotes!"},{"heading":"Skills","paragraph":"HTML, CSS, SQL, Javascript"}]')},18:function(e){e.exports=JSON.parse('[{"name":"Weather app","subtitle":"A single-page application that shows weather condition.","description":"This is a single page weather app, where user can look up weather for a city or user\'s current city. It shows current weather conditipon, 3-hour interval forecast for the next 3 days or 5 days","link":"https://phaggio.github.io/weather-dashboard/","github":"https://github.com/phaggio/weather-dashboard","imgURL":"/assets/images/projects/weather-dashboard.png"},{"name":"Code Quiz","subtitle":"A single-page application that tests user\'s programming knowledge.","description":"This repository creates a timed muitiple-choice question quiz that tests user\'s Javascript knowledge. There are 10 multiple choice questions and user is given 200 seconds to answer them.","link":"https://phaggio.github.io/code-quiz/","github":"https://github.com/phaggio/code-quiz","imgURL":"/assets/images/projects/code-quiz.png"},{"name":"Project Tracker","subtitle":"A full-stack application for tracking project development.","description":"This is a web application where teams can track their project development progress, issues, etc.","link":"https://the-best-project-manager.herokuapp.com/","github":"https://github.com/maximilianc88/Project-Planner-Application","imgURL":"/assets/images/projects/project-tracker.png"},{"name":"Burger app","subtitle":"A single-page application that shows simple MVC design pattern.","description":"This is a simple burger logger app that demonstrate the use of MVC design pattern.","link":"https://phaggio-burger.herokuapp.com/","github":"https://github.com/phaggio/burger","imgURL":"/assets/images/projects/burger-app.png"},{"name":"Employee Tracker","subtitle":"A CLI application that allows user to communicate with local mysql database.","description":"This is a sample CLI application that user can add/edit/remove employees, roles, and teams from a database within the organization.","link":"https://github.com/phaggio/employee-tracker","github":"https://github.com/phaggio/employee-tracker","imgURL":"/assets/images/projects/employee-tracker.png"}]')},19:function(e,a,t){e.exports=t(31)},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),o=t.n(i),s=(t(24),t(6)),c=t(5),l=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm  sticky-top navbar-dark bg-dark",role:"navigation"},r.a.createElement(s.b,{className:"navbar-brand",href:"/"},"Richard Wang"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("div",{className:"navbar-nav ml-auto",role:"navigation"},r.a.createElement(s.b,{className:"nav-item nav-link",to:"/"},"Home"),r.a.createElement(s.b,{className:"nav-item nav-link",to:"/portfolio/"},"Portfolio"),r.a.createElement(s.b,{className:"nav-item nav-link",to:"/resume/"},"Resume"))))},m=function(){return r.a.createElement("nav",{className:"footer navbar navbar-expand fixed-bottom navbar-dark bg-dark",role:"navigation"},r.a.createElement("div",{className:"navbar-nav",role:"navigation"},r.a.createElement("a",{className:"nav-item nav-link text-center",href:"https://github.com/phaggio/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-github-square fa-2x"})),r.a.createElement("a",{className:"nav-item nav-link text-center",href:"https://www.linkedin.com/in/richard-c-wang/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))))},p=t(17);function u(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"container".concat(a?"-fluid":"")},t)}function g(e){var a=e.fluid,t=e.children;return r.a.createElement("div",{className:"row".concat(a?"-fluid":"")},t)}function h(e){var a=e.size,t=e.children;return r.a.createElement("div",{className:a.split(" ").map((function(e){return"col-".concat(e)})).join(" ")},t)}var d=function(){return r.a.createElement(u,null,r.a.createElement(h,{size:"12"},p.map((function(e){return r.a.createElement(g,{key:e.heading},r.a.createElement("div",{className:"paragraph"},r.a.createElement("h3",null,e.heading),r.a.createElement("p",null,e.paragraph)))}))))},b=(t(30),function(e){return r.a.createElement("div",{className:"card h-100"},r.a.createElement("img",{src:e.imgURL,className:"card-img-top",alt:e.name}),r.a.createElement("div",{className:"card-body d-flex flex-column"},r.a.createElement("h4",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},e.subtitle),r.a.createElement("div",{className:"text-center mt-auto"},r.a.createElement("a",{href:e.github,className:"btn btn-primary mx-1 my-1",rel:"noopener noreferrer",target:"_blank"},"GitHub page"),r.a.createElement("a",{href:e.link,className:"btn btn-primary mx-1 my-1",rel:"noopener noreferrer",target:"_blank"},"Application"))))}),f=t(18),v=function(){return r.a.createElement("div",{className:"background"},r.a.createElement(u,null,r.a.createElement(g,null,f.map((function(e){return r.a.createElement(h,{size:"sm-12 md-6 lg-4",key:e.name},r.a.createElement(b,{name:e.name,subtitle:e.subtitle,description:e.description,imgURL:"/react-portfolio"+e.imgURL,github:e.github,link:e.link}))})))))},k=function(){return r.a.createElement("iframe",{className:"",src:"https://docs.google.com/gview?url=https://raw.githubusercontent.com/phaggio/resume/master/RichardWangResume.pdf&embedded=true",width:"100%",height:"800px",title:"Richard Wang"})};var w=function(){return console.log("".concat("/react-portfolio")),r.a.createElement(s.a,{basename:"/"},r.a.createElement(l,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:d}),r.a.createElement(c.a,{exact:!0,path:"/portfolio",component:v}),r.a.createElement(c.a,{exact:!0,path:"/resume",component:k})),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8dba2066.chunk.js.map