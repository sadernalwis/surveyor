webpackJsonp([0,4],{268:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{changeRoute:function(t){return e(n.i(d.push)(t))},setIntroductionWatched:function(){return e(n.i(p.u)())}}}var l=n(6),u=l&&l.__esModule?function(){return l["default"]}:function(){return l};n.d(u,"a",u);var f=n(83),c=f&&f.__esModule?function(){return f["default"]}:function(){return f};n.d(c,"a",c);var d=n(75),s=d&&d.__esModule?function(){return d["default"]}:function(){return d};n.d(s,"a",s);var p=n(84),y=n(618),v=n(628),h=n(689),m=h&&h.__esModule?function(){return h["default"]}:function(){return h};n.d(m,"a",m),n.d(t,"IntroPage",function(){return x});var b=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),f=0;a>f;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),g=n(712),w=b(v.a,{}),x=function(e){function t(){var e,n,i,a;o(this,t);for(var l=arguments.length,u=Array(l),f=0;l>f;f++)u[f]=arguments[f];return n=i=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.openRoute=function(e){i.props.changeRoute(e)},i.toSurveyor=function(){i.props.setIntroductionWatched(),i.openRoute("/")},a=n,r(i,a)}return i(t,e),_(t,[{key:"render",value:function(){return b(y.a,{buttonAction:this.toSurveyor},void 0,w,b("div",{className:m.a.padding,dangerouslySetInnerHTML:{__html:g}}))}}]),t}(u.a.Component);t["default"]=n.i(f.connect)(null,a)(x)},615:function(e,t,n){"use strict";function o(e){var t,n=[l.a.button,e.type&&l.a[e.type]?l.a[e.type]:"",e.disabled?l.a.disabled:""];return e.disabled||(t=e.onClick),u("button",{tabindex:"0",className:n.join(" "),onClick:t},void 0,e.children)}var r=n(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(i,"a",i);var a=n(623),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(l,"a",l);var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),f=0;a>f;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},616:function(e,t,n){"use strict";function o(e){return u("div",{className:l.a.buttons},void 0,e.children)}var r=n(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(i,"a",i);var a=n(624),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(l,"a",l);var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),f=0;a>f;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},617:function(e,t,n){"use strict";function o(e){return c("footer",{className:f.a.footer+" "+e.className},void 0,c("nav",{},void 0,c("div",{className:f.a.container+" "+f.a["nav-container"]},void 0,d,s,p,y)),c("div",{className:f.a.container},void 0,v,h,m))}var r=n(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(i,"a",i);var a=n(265),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(l,"a",l);var u=n(625),f=u&&u.__esModule?function(){return u["default"]}:function(){return u};n.d(f,"a",f);var c=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),f=0;a>f;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),d=c("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/privacy-policy",target:"_blank"},void 0,"Privacy Policy"),s=c("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/rules-and-regulations",target:"_blank"},void 0,"Rules and Regulations"),p=c("a",{href:"http://www.nypl.org/policy-patron-generated-web-content",target:"_blank"},void 0,"Policy on Patron-Generated Web Content"),y=c("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/website-terms-and-conditions",target:"_blank"},void 0,"Terms and Conditions"),v=c("p",{},void 0,"A ",c("a",{href:"http://spacetime.nypl.org/"},void 0,"NYC Space/Time Directory")," project"),h=c("p",{},void 0,"© The New York Public Library, Astor, Lenox, and Tilden Foundation 2013-2016"),m=c("p",{},void 0,c("a",{href:"http://www.nypl.org"},void 0,c("img",{src:l.a})));t.a=o},618:function(e,t,n){"use strict";function o(e){return d("div",{className:c.a.container},void 0,d("article",{className:c.a.article},void 0,e.children),d(u.a,{},void 0,d(l.a,{onClick:e.buttonAction,type:"primary"},void 0,"Start Surveying!")),d(a.a,{className:c.a.footer}))}var r=n(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};n.d(i,"a",i);var a=n(617),l=n(615),u=n(616),f=n(626),c=f&&f.__esModule?function(){return f["default"]}:function(){return f};n.d(c,"a",c);var d=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),f=0;a>f;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();t.a=o},619:function(e,t,n){t=e.exports=n(263)(),t.push([e.i,"._3tez2OnhHZXdCwD81hRXzS{cursor:pointer;box-sizing:border-box;display:inline;background-color:#dededf;border-radius:2rem;color:#fff;display:inline-block;margin:.6rem;padding:.5rem 1.3rem .3rem;text-transform:uppercase;border:1px solid hsla(0,0%,100%,0)}._3tez2OnhHZXdCwD81hRXzS:not(._3ISOLl3xbvzjUffCWl1oT3):active{border-color:#fff}._371bnJ8txOs2SLokYSFtMm{background-color:#d0343a}._1rR3F0EgPd16FrJDWzWJ60{color:#d0343a;background:none}._3ISOLl3xbvzjUffCWl1oT3{background-color:#dededf;cursor:inherit}",""]),t.locals={button:"_3tez2OnhHZXdCwD81hRXzS",disabled:"_3ISOLl3xbvzjUffCWl1oT3",primary:"_371bnJ8txOs2SLokYSFtMm",secondary:"_1rR3F0EgPd16FrJDWzWJ60"}},620:function(e,t,n){t=e.exports=n(263)(),t.push([e.i,"._3F7V9M2-PAppGaYPXANKxW{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;width:100%;max-width:300px;margin:0 auto;-ms-flex-negative:0;flex-shrink:0}",""]),t.locals={buttons:"_3F7V9M2-PAppGaYPXANKxW"}},621:function(e,t,n){t=e.exports=n(263)(),t.push([e.i,"._12LGeWyqxzQ-d7QrWjWm94{width:100%;font-size:.8em;margin-top:2em;margin-bottom:2em}._12LGeWyqxzQ-d7QrWjWm94 ._1KP6vkZpft0IGd0usTiAbi{max-width:90%;margin:0 auto}._12LGeWyqxzQ-d7QrWjWm94 nav{padding-top:12px;padding-bottom:10px;width:100%;margin-bottom:1em}._2sLDfzkM1hCQd9MGqsQb19{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}._12LGeWyqxzQ-d7QrWjWm94 nav a{text-align:center;padding:0 .5em}._12LGeWyqxzQ-d7QrWjWm94 nav a,._12LGeWyqxzQ-d7QrWjWm94 nav a:visited{color:#fff}._12LGeWyqxzQ-d7QrWjWm94 nav a:focus,._12LGeWyqxzQ-d7QrWjWm94 nav a:hover{text-decoration:underline}._12LGeWyqxzQ-d7QrWjWm94 img{margin:0 auto;width:55px}._12LGeWyqxzQ-d7QrWjWm94 p{text-align:center}",""]),t.locals={footer:"_12LGeWyqxzQ-d7QrWjWm94",container:"_1KP6vkZpft0IGd0usTiAbi","nav-container":"_2sLDfzkM1hCQd9MGqsQb19"}},622:function(e,t,n){t=e.exports=n(263)(),t.push([e.i,".Bx84jMCskO46cj_SYztq{overflow-y:auto;width:100%;-ms-flex:1;flex:1}._35S30RSzYCndMCfSKaf_j8{width:760px;max-width:90%;margin:0 auto;padding-top:1em;box-sizing:border-box}._35S30RSzYCndMCfSKaf_j8 h1{text-align:center}._35S30RSzYCndMCfSKaf_j8 ol,._35S30RSzYCndMCfSKaf_j8 ul{margin:1em}._35S30RSzYCndMCfSKaf_j8 img{margin:1em 0;max-width:100%}._13H9hJkRQquROl0HbN4Fwz nav{background-color:#080808}",""]),t.locals={container:"Bx84jMCskO46cj_SYztq",article:"_35S30RSzYCndMCfSKaf_j8",footer:"_13H9hJkRQquROl0HbN4Fwz"}},623:[729,619],624:[729,620],625:[729,621],626:[729,622],628:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(6),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};n.d(l,"a",l);var u=n(113),f=u&&u.__esModule?function(){return u["default"]}:function(){return u};n.d(f,"a",f);var c=n(631),d=c&&c.__esModule?function(){return c["default"]}:function(){return c};n.d(d,"a",d);var s=n(630),p=s&&s.__esModule?function(){return s["default"]}:function(){return s};n.d(p,"a",p);var y=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),f=0;a>f;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h="https://dl.dropboxusercontent.com/u/12905316/space-time/tutorial.mp4",m=y("source",{src:h,type:"video/mp4"}),b=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),v(t,[{key:"render",value:function(){return l.a.createElement("video",{className:p.a.video,poster:d.a,ref:"video",tabindex:"0",onEnded:this.ended.bind(this),onClick:this.play.bind(this)},m)}},{key:"play",value:function(){var e=n.i(u.findDOMNode)(this.refs.video);e.play(),e.setAttribute("controls","controls")}},{key:"ended",value:function(){var e=n.i(u.findDOMNode)(this.refs.video);e.load()}}]),t}(l.a.Component);t.a=b},629:function(e,t,n){t=e.exports=n(263)(),t.push([e.i,"._3sbXm42l9uO15T-m7BM3z-{width:100%;cursor:pointer}",""]),t.locals={video:"_3sbXm42l9uO15T-m7BM3z-"}},630:[729,629],631:function(e,t,n){e.exports=n.p+"349fef84fde63225ad3c4bf09743922e.jpg"},671:function(e,t,n){t=e.exports=n(263)(),t.push([e.i,"._2eI4HaWbhXLx-zKRVf_kd-{padding-top:1em}",""]),t.locals={padding:"_2eI4HaWbhXLx-zKRVf_kd-"}},689:[729,671],712:function(e,t){e.exports="<h3>Help The New York Public Library put NYC history on the map!</h3> <p>You’ll be presented with an item from the Library’s digitized collections, use clues in the item’s metadata and the image itself to locate on a map of New York City. Some you might recognize instantly while others can require a bit of investigation. Visit the item in our <a href=digitalcollections.nypl.org>Digital Collections</a> for more clues and to view the image in high resolution. Use outside resources like <a href=https://www.wikipedia.org/ >Wikipedia</a> and <a href=https://www.google.com/maps/@40.7520018,-73.9834879,15.5z>Google Maps</a> to scout out the location.</p> <p>Click submit once you’ve identified the item’s location and you’ll have the optional step of marking the direction and angle of the view. Not sure about the location or want a different challenge? It’s always okay to skip!</p>"},729:function(e,t,n,o){var r=n(o);"string"==typeof r&&(r=[[e.i,r,""]]),n(264)(r,{}),r.locals&&(e.exports=r.locals)}});