(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{284:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c}));var r={green:"🟩",blue:"🟦",brown:"🟫",orange:"🟧",purple:"🟪",red:"🟥",yellow:"🟨"},o="⬛",c="⬜"},298:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(137).default)("0242604b",content,!0,{sourceMap:!1})},321:function(e,t,n){"use strict";n(298)},322:function(e,t,n){var r=n(136)(!1);r.push([e.i,".settings[data-v-2c9100b8]{top:60px;bottom:0;left:0;right:0;max-width:500px;margin:0 auto;z-index:600;padding:10px;position:fixed;background:var(--color-background)}.settings[data-v-2c9100b8]:not(.active){display:none}.close-button[data-v-2c9100b8]{position:absolute;top:10px;right:10px;cursor:pointer}.settings-group[data-v-2c9100b8]{display:flex;height:70px;border-bottom:1px solid var(--color-border-empty);align-items:center}.settings-group div[data-v-2c9100b8]{flex:1 1 auto;display:flex;flex-direction:column}.settings-group div .title[data-v-2c9100b8]{font-size:1.3em}.settings-group div .subtitle[data-v-2c9100b8]{font-size:.8em;opacity:.6}.settings-group label[data-v-2c9100b8]{flex:0 1 auto}.settings-group select[data-v-2c9100b8]{flex:1 1 auto}",""]),e.exports=r},357:function(e,t,n){"use strict";n.r(t);n(31),n(22),n(26),n(9),n(42),n(25),n(43);var r=n(15),o=(n(109),n(62)),c=n(284);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{settings:v({},this.$store.state.settings.settings),colors:c.a,active:!1,boundOpenListener:null}},computed:v(v({},Object(o.c)({gameOver:"game/gameOver",game:"game/getCurrentGame"})),{},{inGame:function(){return!this.gameOver&&0!==this.game.currentRow}}),watch:{settings:{deep:!0,handler:function(){this.save()}}},mounted:function(){this.settings=v({},this.$store.state.settings.settings),this.boundOpenListener=this.openListener.bind(this),this.$root.$on("open:settings",this.boundOpenListener)},destroyed:function(){this.$root.$off("open:settings",this.boundOpenListener)},methods:v(v({},Object(o.b)({reset:"game/reset",saveSettings:"settings/save"})),{},{save:function(){this.saveSettings(this.settings),this.saveThemeConfig()},saveThemeConfig:function(){var e=[];this.settings.lightTheme&&e.push("light"),this.settings.megathrob&&e.push("megathrob"),"yellow"!==this.settings.presentColor&&e.push("present-"+this.settings.presentColor),"green"!==this.settings.correctColor&&e.push("correct-"+this.settings.correctColor),localStorage.setItem("theme",e.join(" ")),window.setTheme()},openListener:function(){this.active=!this.active}})},h=(n(321),n(52)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["settings",e.active?"active":""]},[n("h1",{staticClass:"center"},[e._v("\n    Settings\n  ")]),e._v(" "),n("div",{staticClass:"close-button",on:{click:function(t){return t.preventDefault(),e.openListener.apply(null,arguments)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[n("path",{attrs:{fill:"var(--color-text)",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}})])]),e._v(" "),n("div",{staticClass:"settings-wrapper"},[n("div",{staticClass:"settings-group"},[e._m(0),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.hardMode,expression:"settings.hardMode"}],staticClass:"input",attrs:{type:"checkbox",disabled:e.inGame},domProps:{checked:Array.isArray(e.settings.hardMode)?e._i(e.settings.hardMode,null)>-1:e.settings.hardMode},on:{change:function(t){var n=e.settings.hardMode,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&e.$set(e.settings,"hardMode",n.concat([null])):c>-1&&e.$set(e.settings,"hardMode",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.settings,"hardMode",o)}}}),e._v(" "),e._m(1)])]),e._v(" "),n("div",{staticClass:"settings-group"},[e._m(2),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.lightTheme,expression:"settings.lightTheme"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings.lightTheme)?e._i(e.settings.lightTheme,null)>-1:e.settings.lightTheme},on:{change:function(t){var n=e.settings.lightTheme,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&e.$set(e.settings,"lightTheme",n.concat([null])):c>-1&&e.$set(e.settings,"lightTheme",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.settings,"lightTheme",o)}}}),e._v(" "),e._m(3)])]),e._v(" "),n("div",{staticClass:"settings-group"},[e._m(4),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.settings.presentColor,expression:"settings.presentColor"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.settings,"presentColor",t.target.multiple?n:n[0])}}},e._l(e.colors,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v("\n          "+e._s(t)+" "+e._s(r)+"\n        ")])})),0)]),e._v(" "),n("div",{staticClass:"settings-group"},[e._m(5),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.settings.correctColor,expression:"settings.correctColor"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.settings,"correctColor",t.target.multiple?n:n[0])}}},e._l(e.colors,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v("\n          "+e._s(t)+" "+e._s(r)+"\n        ")])})),0)]),e._v(" "),n("div",{staticClass:"settings-group"},[e._m(6),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.mentionFreedle,expression:"settings.mentionFreedle"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings.mentionFreedle)?e._i(e.settings.mentionFreedle,null)>-1:e.settings.mentionFreedle},on:{change:function(t){var n=e.settings.mentionFreedle,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&e.$set(e.settings,"mentionFreedle",n.concat([null])):c>-1&&e.$set(e.settings,"mentionFreedle",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.settings,"mentionFreedle",o)}}}),e._v(" "),e._m(7)])]),e._v(" "),n("div",{staticClass:"settings-group"},[e._m(8),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.megathrob,expression:"settings.megathrob"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings.megathrob)?e._i(e.settings.megathrob,null)>-1:e.settings.megathrob},on:{change:function(t){var n=e.settings.megathrob,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&e.$set(e.settings,"megathrob",n.concat([null])):c>-1&&e.$set(e.settings,"megathrob",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.settings,"megathrob",o)}}}),e._v(" "),e._m(9)])]),e._v(" "),n("div",{staticClass:"settings-group"},[e._m(10),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.golf,expression:"settings.golf"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings.golf)?e._i(e.settings.golf,null)>-1:e.settings.golf},on:{change:function(t){var n=e.settings.golf,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&e.$set(e.settings,"golf",n.concat([null])):c>-1&&e.$set(e.settings,"golf",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.settings,"golf",o)}}}),e._v(" "),e._m(11)])]),e._v(" "),e.settings.golf?n("div",{staticClass:"settings-group"},[e._m(12),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.niceCock,expression:"settings.niceCock"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings.niceCock)?e._i(e.settings.niceCock,null)>-1:e.settings.niceCock},on:{change:function(t){var n=e.settings.niceCock,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&e.$set(e.settings,"niceCock",n.concat([null])):c>-1&&e.$set(e.settings,"niceCock",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.settings,"niceCock",o)}}}),e._v(" "),e._m(13)])]):e._e(),e._v(" "),n("div",{staticClass:"settings-group"},[e._m(14),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.invertResultsTheme,expression:"settings.invertResultsTheme"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings.invertResultsTheme)?e._i(e.settings.invertResultsTheme,null)>-1:e.settings.invertResultsTheme},on:{change:function(t){var n=e.settings.invertResultsTheme,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&e.$set(e.settings,"invertResultsTheme",n.concat([null])):c>-1&&e.$set(e.settings,"invertResultsTheme",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.settings,"invertResultsTheme",o)}}}),e._v(" "),e._m(15)])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Hard Mode")]),e._v(" "),n("span",{staticClass:"subtitle"},[e._v("Any revealed hints must be used in subsequent guesses")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggle-wrapper"},[t("span",{staticClass:"selector"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Light Theme")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggle-wrapper"},[t("span",{staticClass:"selector"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Present Color")]),e._v(" "),n("span",{staticClass:"subtitle"},[e._v("When the guess is in the word, but the wrong place")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Correct Color")]),e._v(" "),n("span",{staticClass:"subtitle"},[e._v("When the guess is in the word, and in the right place")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Mention Freedle")]),e._v(" "),n("span",{staticClass:"subtitle"},[e._v("When on, mentions Freedle in the shared results instead of Wordle")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggle-wrapper"},[t("span",{staticClass:"selector"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Megathrob")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggle-wrapper"},[t("span",{staticClass:"selector"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Golf Mode")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggle-wrapper"},[t("span",{staticClass:"selector"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Nice Cock!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggle-wrapper"},[t("span",{staticClass:"selector"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"title"},[e._v("Invert Results Theme")]),e._v(" "),n("span",{staticClass:"subtitle"},[e._v("When copying results, gives you black squares when on light theme, and vice versa")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggle-wrapper"},[t("span",{staticClass:"selector"})])}],!1,null,"2c9100b8",null);t.default=component.exports}}]);