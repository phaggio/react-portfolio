(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"name":"resume","link":"https://docs.google.com/gview?url=https://github.com/phaggio/resume/raw/master/Richard%20Wang%20dev%202020.07.09.pdf&embedded=true","download":"https://github.com/phaggio/resume/raw/master/Richard%20Wang%20dev%202020.07.09.pdf"}]')},19:function(e){e.exports=JSON.parse('[{"heading":"About Me","paragraph":"I am a product manager, full-stack developer, and team player."},{"heading":"Background","paragraph":"I studied economics and finance in school, where I learned about resource allocation and general finance in business. After school, I worked in insurance where I learned about managing and estimating risk. Afterward, I moved to retail e-commerce, where I conducted financial planning and analysis. Then I transitioned to tech, semi-conductor industry, where I helped taking new tech products to the market. Two years ago, I joined a casual mobile game company, where I led new feature development for the organization. If there\'s anything in common in my past, it would be that I enjoy constantly learning!"},{"heading":"Hobbies & Interests","paragraph":"I\'m a car enthusiast, watching car review and trend is probably where I spend most of my time on YouTube. I\'m a huge movie buff, I go deep in movie details, symbolism, background, and quotes!"},{"heading":"Skills","paragraph":"HTML, CSS, SQL, Javascript"}]')},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),c=(a(26),a(6)),s=a(5),l=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm sticky-top navbar-dark bg-dark",role:"navigation"},r.a.createElement(c.b,{className:"navbar-brand",to:"/"},"Richard Wang"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("div",{className:"navbar-nav ml-auto",role:"navigation"},r.a.createElement(c.b,{className:"nav-item nav-link text-light",to:"/"},"Home"),r.a.createElement(c.b,{className:"nav-item nav-link text-light",to:"/portfolio/"},"Portfolio"),r.a.createElement(c.b,{className:"nav-item nav-link text-light",to:"/resume/"},"Resume"))))},m=function(){return r.a.createElement("nav",{className:"navbar fixed-bottom navbar-dark bg-dark justify-content-between"},r.a.createElement("small",{className:"text-light"},"react portfolio by phaggio"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("a",{className:"nav-item nav-link p-0 ml-2",href:"https://github.com/phaggio/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-github-square fa-2x"})),r.a.createElement("a",{className:"nav-item nav-link p-0 ml-2",href:"https://www.linkedin.com/in/richard-c-wang/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))))},p=a(19),u=function(e){var t=e.fluid,a=e.other,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":""," \n        ").concat(a||"")},n)},d=function(e){var t=e.fluid,a=e.rowCols,n=e.other,o=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"","\n      ").concat(a?a.split(" ").map((function(e){return"row-cols-".concat(e)})).join(" "):"","\n      ").concat(n||"","\n      ")},o)},h=function(e){var t=e.size,a=e.px,n=e.mx,o=e.py,i=e.my,c=e.other,s=e.children;return r.a.createElement("div",{className:"".concat(t.split(" ").map((function(e){return"col-".concat(e)})).join(" "),"\n        ").concat(a?a.split(" ").map((function(e){return"px-".concat(e)})).join(" "):"","\n        ").concat(n?n.split(" ").map((function(e){return"mx-".concat(e)})).join(" "):"","\n        ").concat(o?o.split(" ").map((function(e){return"py-".concat(e)})).join(" "):"","\n        ").concat(i?i.split(" ").map((function(e){return"my-".concat(e)})).join(" "):"","\n        ").concat(c||"")},s)},g=function(){return r.a.createElement(u,null,r.a.createElement(h,{size:"12"},p.map((function(e){return r.a.createElement(d,{key:e.heading},r.a.createElement("div",{className:"paragraph"},r.a.createElement("h3",null,e.heading),r.a.createElement("p",null,e.paragraph)))}))))},b=a(20),f={width:"10rem"},v=function(e){return r.a.createElement("button",{type:"button",className:"m-1 btn btn-dark btn-block",onClick:function(){return e.pressed(e.index)}},r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("h6",{className:"d-flex justify-content-center align-items-center",style:f},e.name),r.a.createElement("small",{className:"d-none d-sm-none d-md-none d-lg-block text-left"},e.subtitle)))},E={height:"100%",width:"100%"},w=function(e){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(d,null,r.a.createElement(h,{size:"12"},r.a.createElement("div",{className:"display-4 text-center"},e.project.name),r.a.createElement("small",{className:""},e.project.subtitle),r.a.createElement("p",{className:"mt-2"},e.project.description),r.a.createElement("div",{className:"w-100 d-flex justify-content-center"},r.a.createElement("img",{style:E,alt:"app screenshot",src:"/react-portfolio"+e.project.imgURL})),r.a.createElement("hr",null))),r.a.createElement(d,null,r.a.createElement(h,{size:"12 sm-6"},r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("a",{className:"my-1 btn btn-primary w-75",rel:"noopener noreferrer",href:e.project.link,target:"_blank"},"Application"),r.a.createElement("a",{className:"my-1 btn btn-info w-75",rel:"noopener noreferrer",href:e.project.github,target:"_blank"},"GitHub Page")),r.a.createElement("hr",{className:"d-block d-sm-none"})),r.a.createElement(h,{size:"12 sm-6"},r.a.createElement("h5",{className:"text-center"},"Technologies"),r.a.createElement("ul",{className:"list-group list-group-flush"},e.project.technologies?e.project.technologies.map((function(e){return r.a.createElement("li",{className:"list-group-item bg-light",key:e},e)})):"")))))},k=a(9),y={maxHeight:"75vh",overflowX:"auto",overflowY:"auto"},N=function(){var e=Object(n.useState)(k[0]),t=Object(b.a)(e,2),a=t[0],o=t[1],i=function(e){var t=k[e];o(t)};return r.a.createElement("div",null,r.a.createElement(u,{other:"mt-1",style:y},r.a.createElement(d,{other:"border border-primary rounded p-2"},r.a.createElement(h,{size:"sm-12 md-12 lg-4 xl-3",other:"border border-warning rounded",py:"2",my:"2"},r.a.createElement("div",{className:"d-flex justify-content-center justify-content-lg-start"},r.a.createElement("label",{className:"text-dark font-weight-bold"},"Projects:")),r.a.createElement("div",{className:"d-flex flex-sm-row flex-md-row flex-lg-column align-items-center",style:y},k.map((function(e,t){return r.a.createElement(v,{key:e.name,index:t,name:e.name,subtitle:e.subtitle,pressed:i})})))),r.a.createElement(h,{size:"sm-12 md-12 lg-8 xl-9",other:"border border-danger rounded mh-50",py:"2",my:"2"},r.a.createElement(w,{project:a})))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-warning m-1",onClick:function(){return console.log(k)}},"print projects"),r.a.createElement("button",{className:"btn btn-warning m-1",onClick:function(){return console.log(a)}},"print selectedProject")))},j=a(13),x={height:"80vh",width:"100%"},S=function(){return r.a.createElement("div",{className:"mt-2"},r.a.createElement(u,{other:"vh-75"},r.a.createElement("div",{className:"embed-responsive embed-responsive-4by3 z-depth-1-half",style:x},r.a.createElement("iframe",{className:"embed-responsive-item",src:j[0].link,title:"Richard Wang"})),r.a.createElement("a",{className:"btn btn-primary mt-1",href:j[0].download},"Download")))};var I=function(){return console.log("".concat("/react-portfolio")),r.a.createElement(c.a,null,r.a.createElement(l,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:g}),r.a.createElement(s.a,{exact:!0,path:"/portfolio",component:N}),r.a.createElement(s.a,{exact:!0,path:"/resume",component:S})),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('[{"name":"Weather Dashboard","subtitle":"A single-page application that shows weather condition.","description":"This is a single page web, where user can look up weather for a city or user\'s current location. It shows current weather conditipon, 3-hour interval forecast for the next 3 days or 5 days","link":"https://phaggio.github.io/weather-dashboard/","github":"https://github.com/phaggio/weather-dashboard","imgURL":"/assets/images/projects/weather-dashboard.png","technologies":["JavaScript","jQuery","Moment.js","Bootstrap","Google Font"]},{"name":"Code Quiz","subtitle":"A single-page application that tests user\'s programming knowledge.","description":"This repository creates a timed muitiple-choice question quiz that tests user\'s Javascript knowledge. There are 10 multiple choice questions and user is given 200 seconds to answer them.","link":"https://phaggio.github.io/code-quiz/","github":"https://github.com/phaggio/code-quiz","imgURL":"/assets/images/projects/code-quiz.png","technologies":["JavaScript","Bootstrap","HTML","CSS"]},{"name":"Project Tracker","subtitle":"A full-stack application for tracking project development.","description":"This is a web application where teams can track their project development progress, issues, etc.","link":"https://the-best-project-manager.herokuapp.com/","github":"https://github.com/maximilianc88/Project-Planner-Application","imgURL":"/assets/images/projects/project-tracker.png","technologies":["JavaScript","jQuery","mySQL","Express.js","Sequelize","Font Awesome"]},{"name":"Burger app","subtitle":"A single-page application that shows simple MVC design pattern.","description":"This is a simple burger logger app that demonstrate the use of MVC design pattern.","link":"https://phaggio-burger.herokuapp.com/","github":"https://github.com/phaggio/burger","imgURL":"/assets/images/projects/burger-app.png","technologies":["JavaScript","Express.js","MySQL","jQuery","Bootstrap"]},{"name":"Employee Tracker","subtitle":"A CLI application where user can communicate with local mysql database.","description":"This is a sample CLI application that user can add/edit/remove employees, roles, and teams from a database within the organization.","link":"https://github.com/phaggio/employee-tracker","github":"https://github.com/phaggio/employee-tracker","imgURL":"/assets/images/projects/employee-tracker.png","technologies":["JavaScript","console.table","inquirer","MySQL"]},{"name":"Order Up","subtitle":"A full-stack application for restaurant owner and employees.","description":"This is a full-stack application, using the MERN stack (MongoDB, Express.js, React, Node.js). Restaurant owner can add/edit/remove restaurant employees, menu items, and inventories. Employees such as servers and chefs can use the front end UI to take customer orders, pass them to chef for preparation, and check off the orders once they\'re made.","link":"https://order-up-jkrtr.herokuapp.com/","github":"https://github.com/phaggio/order-up","imgURL":"/assets/images/projects/order-up.png","technologies":["JavaScript","console.table","inquirer","MySQL"]}]')}},[[21,1,2]]]);
//# sourceMappingURL=main.b5982bdf.chunk.js.map