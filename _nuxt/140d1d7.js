(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{267:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},281:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));var n={green:"🟩",blue:"🟦",brown:"🟫",orange:"🟧",purple:"🟪",red:"🟥",yellow:"🟨",white:"⬜",black:"⬛"},o="⬛",c="⬜"},308:function(t,e,r){var content=r(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(137).default)("643a3628",content,!0,{sourceMap:!1})},349:function(t,e,r){"use strict";var n=r(6),o=r(0),c=r(3),l=r(53),f=r(267),v=r(193),d=r(4),h=o.RangeError,m=o.String,y=Math.floor,_=c(v),w=c("".slice),x=c(1..toFixed),O=function(t,e,r){return 0===e?r:e%2==1?O(t,e-1,r*t):O(t*t,e/2,r)},C=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=y(n/1e7)},S=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=y(r/t),r=r%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!d((function(){x({})}))},{toFixed:function(t){var e,r,n,o,c=f(this),v=l(t),data=[0,0,0,0,0,0],d="",y="0";if(v<0||v>20)throw h("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return m(c);if(c<0&&(d="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*O(2,69,1))-69)<0?c*O(2,-e,1):c/O(2,e,1),r*=4503599627370496,(e=52-e)>0){for(C(data,0,r),n=v;n>=7;)C(data,1e7,0),n-=7;for(C(data,O(10,n,1),0),n=e-1;n>=23;)S(data,1<<23),n-=23;S(data,1<<n),C(data,1,1),S(data,2),y=j(data)}else C(data,0,r),C(data,1<<-e,0),y=j(data)+_("0",v);return y=v>0?d+((o=y.length)<=v?"0."+_("0",v-o)+y:w(y,0,o-v)+"."+w(y,o-v)):d+y}})},350:function(t,e,r){"use strict";r(308)},351:function(t,e,r){var n=r(136)(!1);n.push([t.i,".modal-contents[data-v-83c26e0a]{height:500px!important}h1[data-v-83c26e0a]{text-align:center;font-size:1.25rem;opacity:.9}.stat-counter[data-v-83c26e0a]{display:flex;justify-content:center;margin:5px 0}.stat-counter .stat[data-v-83c26e0a]{display:flex;flex-direction:column;text-align:center;margin:0 10px}.stat-counter .stat .value[data-v-83c26e0a]{font-size:3em}.stat-counter .stat .label[data-v-83c26e0a]{font-size:.8em}.guesses[data-v-83c26e0a]{display:grid;grid-template-columns:10px 1fr;grid-gap:5px;max-width:400px;margin:0 auto;align-items:center}.guesses .guess-bar[data-v-83c26e0a]{background:var(--color-absent);text-align:right;padding:2px 7px;font-weight:700}.guesses .guess-bar.current[data-v-83c26e0a]{background:var(--color-correct)}.button.correct[data-v-83c26e0a]{margin:20px 0}",""]),t.exports=n},361:function(t,e,r){"use strict";r.r(e);r(31),r(22),r(26),r(42),r(25),r(43),r(45),r(38),r(46),r(32),r(23),r(47),r(48),r(33);var n=r(15),o=(r(349),r(78),r(109),r(9),r(62)),c=r(281);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{active:!1,boundOpenListener:null}},computed:d(d({},Object(o.c)({stats:"statistics/stats",settings:"settings/settings",game:"game/getCurrentGame"})),{},{winPercent:function(){return(this.stats.gamesWon/this.stats.gamesPlayed*100).toFixed(0)},maxScore:function(){for(var t=0,i=1;i<=6;i++)this.stats.guesses[i]>t&&(t=this.stats.guesses[i]);return t}}),mounted:function(){this.boundOpenListener=this.openListener.bind(this,!0),this.$root.$on("open:stats",this.boundOpenListener)},destroyed:function(){this.$root.$off("open:stats",this.boundOpenListener)},methods:d(d({},Object(o.b)({addToast:"game/addToast"})),{},{openListener:function(t){this.active="boolean"==typeof t?t:!this.active},getWidth:function(t){var e=this.stats.guesses[t],r=Math.round(e/this.maxScore*100);return{width:Math.max(7,r)+"%"}},getClass:function(t){return{"guess-bar":!0,current:this.stats.lastScore===t}},copyResults:function(){var t=c.a[this.settings.presentColor],e=c.a[this.settings.correctColor],r=this.settings.lightTheme?c.c:c.b;this.settings.invertResultsTheme&&(r=r===c.c?c.b:c.c);var n=this.game.day,o=[],f=this.settings.mentionFreedle?"Freedle":"Wordle";o.push("".concat(f," ").concat(n," ").concat(this.stats.lastScore,"/6").concat(this.settings.hardMode?"*":"")),o.push("");var v,d=l(this.game.rows);try{for(d.s();!(v=d.n()).done;){var h,m=v.value,y=[],_=l(m);try{for(_.s();!(h=_.n()).done;){var w=h.value;"correct"===w.score?y.push(e):"present"===w.score?y.push(t):y.push(r)}}catch(t){_.e(t)}finally{_.f()}var line=y.join("");if(o.push(line),m.every((function(t){return"correct"===t.score})))break}}catch(t){d.e(t)}finally{d.f()}navigator.clipboard.writeText(o.join("\n")),this.addToast({text:"Copied results to clipboard"})}})},m=(r(350),r(52)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["modal",t.active?"active":""]},[r("div",{staticClass:"modal-contents"},[r("h1",[t._v("STATISTICS")]),t._v(" "),r("div",{staticClass:"stat-counter"},[r("div",{staticClass:"stat"},[r("span",{staticClass:"value"},[t._v(t._s(t.stats.gamesPlayed))]),t._v(" "),r("span",{staticClass:"label"},[t._v("Played")])]),t._v(" "),r("div",{staticClass:"stat"},[r("span",{staticClass:"value"},[t._v(t._s(t.winPercent))]),t._v(" "),r("span",{staticClass:"label"},[t._v("Win %")])]),t._v(" "),r("div",{staticClass:"stat"},[r("span",{staticClass:"value"},[t._v(t._s(t.stats.currentStreak))]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"stat"},[r("span",{staticClass:"value"},[t._v(t._s(t.stats.maxStreak))]),t._v(" "),t._m(1)])]),t._v(" "),r("h1",[t._v("GUESS DISTRIBUTION")]),t._v(" "),r("div",{staticClass:"guesses"},[t._l(6,(function(i){return[r("div",{key:i+"-guess",staticClass:"guess"},[t._v("\n          "+t._s(i)+"\n        ")]),t._v(" "),r("div",{key:i+"-guess-bar",class:t.getClass(i),style:t.getWidth(i)},[t._v("\n          "+t._s(t.stats.guesses[i])+"\n        ")])]}))],2),t._v(" "),r("button",{staticClass:"button correct",on:{click:function(e){return e.preventDefault(),t.copyResults.apply(null,arguments)}}},[t._v("\n      SHARE\n      "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[r("path",{attrs:{fill:"white",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}})])]),t._v(" "),r("div",{staticClass:"close-button",on:{click:function(e){return e.preventDefault(),t.openListener.apply(null,arguments)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[r("path",{attrs:{fill:"var(--color-text)",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}})])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"label"},[t._v("Current"),r("br"),t._v("Streak")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"label"},[t._v("Max"),r("br"),t._v("Streak")])}],!1,null,"83c26e0a",null);e.default=component.exports}}]);