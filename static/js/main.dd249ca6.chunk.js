(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{36:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(20),r=n.n(i),s=(n(47),n(15)),l=n(16),o=n(19),d=n(18),m=n(61),b=n(57),h=n(60),j=n(21),u=n(1),p=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getClassName=function(e){return"/"===e?"dark-blur":"/about"===e?"bg-dark":"dark-blur"},a.state={style:a.getClassName(window.location.pathname)},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)(m.a,{collapseOnSelect:!0,expand:"md",variant:"dark",className:"pt-1 pb-1 "+this.state.style,children:Object(u.jsxs)(b.a,{fluid:!0,children:[Object(u.jsx)(m.a.Brand,{as:j.b,to:"/",className:"align-content-center",children:Object(u.jsx)("img",{alt:"",height:"25",src:"/am_logo_white.png"})}),Object(u.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(m.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(h.a,{className:"ms-auto",children:[Object(u.jsx)(h.a.Link,{as:j.b,to:"/",className:"ms-3 me-3",onClick:function(){return e.setState({style:e.getClassName("/")})},children:"Home"}),Object(u.jsx)(h.a.Link,{as:j.b,to:"/portfolio",className:"ms-3 me-3",onClick:function(){return e.setState({style:e.getClassName("/portfolio")})},children:"Portfolio"}),Object(u.jsx)(h.a.Link,{as:j.b,to:"/about",className:"ms-3 me-3",onClick:function(){return e.setState({style:e.getClassName("/about")})},children:"About"}),Object(u.jsx)(h.a.Link,{as:j.b,to:"/contact",className:"ms-3 me-3",onClick:function(){return e.setState({style:e.getClassName("/contact")})},children:"Contact"})]})})]})})}}]),n}(c.a.Component),x=n(58),f=n(59),g=(n(35),n(36),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).printResume=function(){var e=document.createElement("iframe");e.style.visibility="hidden",e.style.display="none",e.src="/resume.pdf",document.body.appendChild(e),e.contentWindow.print()},e.downloadResume=function(){var e=document.createElement("a");e.href="/resume.pdf",e.download="Andrew Miner - Resume.pdf",e.click()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,overflowY:"auto"},children:[Object(u.jsx)("div",{style:{flexGrow:12,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("div",{style:{display:"inline-block"},children:Object(u.jsx)("div",{style:{backgroundColor:"rgb(198,202,187)",display:"flex",borderRadius:"50%",width:"106px",height:"106px",alignItems:"center",backdropFilter:"blur(6px)",WebkitBoxShadow:"0 3px 8px rgba(0, 0, 0, 1)",MozBoxShadow:"0 2px 8px rgba(0, 0, 0, 1)",boxShadow:"0 3px 8px rgba(0, 0, 0, 1)"},children:Object(u.jsx)("img",{alt:"",height:"45",src:"/am_badge_black.png",className:"m-3"})})}),Object(u.jsx)("div",{style:{color:"rgb(230,230,230)",WebkitTextStroke:"1px black"},className:"ps-2 pe-2 mt-3",children:Object(u.jsx)("h1",{className:"mb-0",children:"Andrew Miner"})}),Object(u.jsx)("div",{id:"home-center-text",className:"ps-2 pe-2",children:Object(u.jsx)("p",{className:"m-1",children:"B.S. In Computer Science"})})]})}),Object(u.jsx)("div",{style:{flexGrow:1,backgroundColor:"rgba(33,37,41, 0.85)",backdropFilter:"blur(6px)",color:"rgb(230,230,230)"},className:"mt-0 pt-0",children:Object(u.jsx)(b.a,{fluid:!0,className:"p-0 h-100 d-flex align-items-center",children:Object(u.jsxs)(x.a,{className:"m-0",children:[Object(u.jsx)(f.a,{lg:3,className:"d-none d-lg-block",children:Object(u.jsx)("div",{id:"intro-title",className:"w-100 d-flex flex-row-reverse",style:{fontSize:"13px"},children:"INTRODUCTION"})}),Object(u.jsx)(f.a,{lg:6,children:Object(u.jsx)("p",{id:"intro-p",className:"m-0",children:"Hi, I'm Andrew. I am a Cal State Northridge graduate and a Software Engineer. Or, I'm trying to be one; I'm currently looking for an entry-level Software Engineer position. I'm excited to enter the field professionally and am particularly interested in working with the C++ programming language. Although, I am familiar with quite a few others. I have a real passion for Computer Science. From algorithmic time complexity to full-stack web dev to VTable function hooking, I've enjoyed it all."})}),Object(u.jsx)(f.a,{lg:3,className:"d-flex align-items-center justify-content-center",children:Object(u.jsx)("div",{className:"mt-3 mb-3",children:Object(u.jsxs)(b.a,{fluid:!0,children:[Object(u.jsx)(x.a,{className:"pb-2 justify-content-center",children:Object(u.jsxs)("span",{id:"resume-link",onClick:this.printResume,style:{cursor:"pointer"},children:[Object(u.jsx)("img",{alt:"",src:"/print_icon.svg",height:"32"})," ","Print Resume"]})}),Object(u.jsx)(x.a,{className:"pt-2",children:Object(u.jsxs)("span",{id:"resume-link",onClick:this.downloadResume,style:{cursor:"pointer"},children:[Object(u.jsx)("img",{alt:"",src:"/pdf_icon.svg",height:"32"})," ","Download Resume"]})})]})})})]})})})]})}}]),n}(c.a.Component)),O=g;function y(e){return Object(u.jsx)("div",{style:{backgroundColor:"rgb(198,202,187)",display:"flex",borderRadius:"50%",width:void 0===e.size?"106px":e.size,height:void 0===e.size?"106px":e.size,alignItems:"center",backdropFilter:"blur(6px)",WebkitBoxShadow:"0 3px 8px rgba(0, 0, 0, 1)",MozBoxShadow:"0 2px 8px rgba(0, 0, 0, 1)",boxShadow:"0 3px 8px rgba(0, 0, 0, 1)",backgroundImage:"url(".concat("/selfie.jpg",")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}})}var w=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{style:{backgroundColor:"rgba(33, 37, 41, 0.85)",backdropFilter:"blur(6px)",width:"100%",height:"100%",overflowY:"auto"},children:Object(u.jsxs)(b.a,{fluid:!0,className:"h-100",children:[Object(u.jsxs)(x.a,{children:[Object(u.jsx)(f.a,{md:3,className:"d-none d-md-block"}),Object(u.jsx)(f.a,{md:9,lg:12,className:"d-none d-md-flex justify-content-center",children:Object(u.jsx)("h1",{style:{color:"rgb(230,230,230)"},className:"mb-0 ps-2 pe-2 mt-5 pt-5",children:"About Me"})}),Object(u.jsx)(f.a,{className:"mb-0 ps-2 pe-2 mt-5 pt-5 d-flex d-md-none justify-content-center",children:Object(u.jsx)(y,{size:"150px"})})]}),Object(u.jsxs)(x.a,{className:"align-items-center",children:[Object(u.jsx)(f.a,{className:"d-flex d-md-none justify-content-center",children:Object(u.jsx)("h1",{style:{color:"rgb(230,230,230)"},className:"mb-0 ps-2 pe-2 mt-2 pt-2",children:"About Me"})}),Object(u.jsx)(f.a,{md:3,className:"d-none d-md-flex justify-content-center",children:Object(u.jsx)(y,{className:"me-5",size:"200px"})}),Object(u.jsxs)(f.a,{md:9,lg:6,children:[Object(u.jsx)("p",{id:"intro-p",style:{color:"white"},children:"Hey, I'm Andrew Miner."}),Object(u.jsx)("p",{id:"about-p",children:"I was born and raised in California and currently live in the Los Angeles area. I recently graduated with a Bachelor of Science degree in Computer Science and I have a passion for everything computers. As a result, I've tried to study a wide array of different topics surrounding the subject. I've always enjoyed studying algorithms and data structures the most, which is part of the reason why I love the C++ programming language as much as I do."}),Object(u.jsx)("p",{id:"about-p",children:"I'm currently looking for a job as an entry-level Software Engineer. Unfortunately, I haven't had any relevant professional experience. I was going after a couple of different internships but then the Covid-19 Pandemic hit and foiled all of my plans. However, what I lack in experience I make up for with my love of learning and passion for Computer Science. I can't wait to join a team of experience developers and begin my career!"}),Object(u.jsx)("p",{id:"about-p",children:'Computer Science isn\'t my only interest though. I\'m a huge fan of video games and film. Both industries push technology forward in new and interesting ways and they\'re also extremely entertaining. My favorite franchise is probably "Halo". Playing "Halo 3" back in 08-09 when I was ~12 is actually what convinced me to go into Computer Science. I remember thinking about how incredible the game was and how its developers were like magicians. They were somehow capable of creating whole new worlds in my console. I always wanted to demystify that magic, to understand how they could achieve such incredible feats, and now I do!'})]}),Object(u.jsx)(f.a,{md:3,className:"d-none d-lg-block"})]})]})})}}]),n}(c.a.Component),v=w;function k(){function e(e){var t=document.createElement("a");t.href=e,t.target="_blank",t.click()}return Object(u.jsx)(b.a,{fluid:!0,className:"h-100",children:Object(u.jsx)(x.a,{className:"h-100 align-items-center",children:Object(u.jsx)(f.a,{className:"d-flex justify-content-center",children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{id:"contact-center-div",className:"p-3",style:{maxWidth:"600px"},children:[Object(u.jsx)("h1",{style:{color:"rgb(230,230,230)",textAlign:"center"},className:"",children:"Contact Info"}),Object(u.jsx)("div",{className:"d-flex justify-content-center mt-3 mb-5",children:Object(u.jsx)("p",{children:"Please feel free to reach out to me for any open positions. I am still seeking full-time opportunities as a Software Engineer."})}),Object(u.jsxs)("p",{className:"mb-3 mb-sm-0",children:[Object(u.jsx)("b",{children:"Phone:"})," +1-818-439-8058"]}),Object(u.jsxs)("p",{className:"mb-3 mb-sm-0 white-hover",style:{cursor:"pointer"},onClick:function(){return e("mailto:andrew.miner3@gmail.com")},children:[Object(u.jsx)("b",{children:"Email:"})," andrew.miner3@gmail.com"]}),Object(u.jsxs)("p",{className:"mb-3 mb-sm-0 white-hover",style:{cursor:"pointer"},onClick:function(){return e("https://github.com/Andrew-Miner")},children:[Object(u.jsx)("b",{children:"Github:"})," github.com/Andrew-Miner"]}),Object(u.jsxs)("p",{className:"mb-3 mb-sm-0 white-hover",style:{cursor:"pointer"},onClick:function(){return e("https://linkedin.com/in/andrew-miner-932a67220")},children:[Object(u.jsx)("b",{children:"LinkedIn:"})," linkedin.com/in/andrew-miner-932a67220"]})]})})})})})}function N(){return Object(u.jsx)(b.a,{fluid:!0,className:"h-100",children:Object(u.jsx)(x.a,{className:"h-100 align-items-center",children:Object(u.jsx)(f.a,{className:"d-flex justify-content-center",children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{id:"contact-center-div",className:"p-2",children:[Object(u.jsx)("h1",{style:{color:"rgb(230,230,230)",textAlign:"center"},className:"",children:"Coming Soon"}),Object(u.jsxs)("p",{className:"mb-3 mb-sm-0 white-hover",style:{cursor:"pointer"},onClick:function(){return function(e){var t=document.createElement("a");t.href=e,t.target="_blank",t.click()}("https://github.com/Andrew-Miner")},children:["For now please check out my Github! ",Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"Github:"})," github.com/Andrew-Miner"]})]})})})})})}var C=n(5),I=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).printResume=function(){var e=document.createElement("iframe");e.style.visibility="hidden",e.style.display="none",e.src="/resume.pdf",document.body.appendChild(e),e.contentWindow.print()},e.downloadResume=function(){var e=document.createElement("a");e.href="/resume.pdf",e.download="Andrew Miner - Resume.pdf",e.click()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"app",children:[Object(u.jsx)("div",{id:"bg-image"}),Object(u.jsx)("div",{id:"content",style:{display:"flex",flexDirection:"column",height:"100%"},children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(p,{path:window.location.pathname}),Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{exact:!0,path:"/",children:Object(u.jsx)(O,{})}),Object(u.jsx)(C.a,{path:"/portfolio",children:Object(u.jsx)(N,{})}),Object(u.jsx)(C.a,{path:"/about",children:Object(u.jsx)(v,{})}),Object(u.jsx)(C.a,{path:"/contact",children:Object(u.jsx)(k,{})})]})]})})]})})}}]),n}(c.a.Component),S=I,A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),A()}},[[55,1,2]]]);
//# sourceMappingURL=main.dd249ca6.chunk.js.map