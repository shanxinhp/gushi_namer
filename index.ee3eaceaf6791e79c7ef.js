!function(e){var n={};function t(o){if(n[o])return n[o].exports;var u=n[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.debugMode=!1,n.defaultBook="shijing",n.defaultFamilyName="李",n.nameAmount=6},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.log=void 0;var o=t(0);n.log=o.debugMode?console.log.bind(console):function(){}},function(e,n,t){e.exports=t(3)},function(e,n,t){"use strict";var o=i(t(4));t(5),t(6),t(7);var u=i(t(8)),r=t(1),a=t(0);function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return document.querySelector(e)},c=null;function f(e){if(!e)return null;var n=e.name,t=e.sentence,u=e.title,r=e.author,a=e.book,i=e.dynasty;return"\n    <li class='name-box'>\n        <h3>"+(0,o.default)('input[name="family-name"]').val()+n+"</h3>\n        <p class='sentence'>\n          <span>「</span>\n          "+t.replace(new RegExp("["+n+"]","ig"),function(e){return"<i>"+e+"</i>"})+"\n          <span>」</span>\n        </p>\n        <div class='source-row' >\n          <div class='book'>"+a+"&nbsp;•&nbsp;"+u+"</div>\n          <div class='author'>["+i+"]&nbsp;"+(r||"佚名")+"</div>\n        </div>\n      </li>"}function s(){c=setTimeout(function(){(0,o.default)(".loader").css({display:"block"})},300)}function d(){clearTimeout(c),(0,o.default)(".loader").css({display:"none"})}function v(e){var n=(0,o.default)("input[name='book']:checked").val();s(),e.loadBook(n,function(){d()})}(0,o.default)(document).ready(function(){var e=new u.default;!function(){var e=[{value:"shijing",name:"诗经",checked:!0},{value:"chuci",name:"楚辞"},{value:"tangshi",name:"唐诗"},{value:"songci",name:"宋词"},{value:"yuefu",name:"乐府诗集"},{value:"gushi",name:"古诗三百首"},{value:"cifu",name:"著名辞赋"}];a.debugMode&&e.push({value:"test",name:"测试",checked:!0}),l(".book-selector").innerHTML=function(e){return e.map(function(e){return'\n    <div class="inputGroup">\n        <input id="'+e.value+'" name="book" type="radio" value="'+e.value+'" '+(e.checked?"checked":"")+'  />\n        <label for="'+e.value+'">'+e.name+"</label>\n      </div>"}).join("")}(e)}(),v(e),function(e){(0,o.default)("input[name='book']").change(function(n){v(e)}),l(".btn-go").addEventListener("click",function(){s();for(var n=a.nameAmount,t=[],u=0;u<n;u++){var r=e.genName();t.push(f(r))}(0,o.default)(".result-container").html(t.join("")),d()},!1)}(e)}),a.debugMode&&function(){var e=function(e){(0,r.log)("'"+e+"'")},n=new u.default,t=["<p>习习谷风，以阴以雨。黾勉同心，不宜有怒。采葑采菲，无以下体？德音莫违，及尔同死。</p>"," 记得年时临上马看人眼泪汪汪","惜诵　　惜诵以致愍兮，发愤以抒情。　　所作忠而言之兮，指苍天以为正。　　令五帝使折中兮，戒六神与向服…望大河之洲渚兮，悲申徒之抗迹。　　骤谏君而不听兮，重任石之何益？　　心絓结而不解兮，思蹇产而不释。  "];(0,r.log)(n.splitSentence(t[0])),e(n.formatStr(t[0])),e(n.formatStr(t[1]))}()},function(e,n){e.exports=jQuery},function(e,n){},function(e,n){},function(e,n){},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u=t(1),r=function(e){return e&&e.__esModule?e:{default:e}}(t(9));t(0);var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.loading=!1,this.book=null}return o(e,[{key:"formatStr",value:function(e){var n=e.replace(/(\s|　|”|“){1,}|<br>|<p>|<\/p>/g,"");return n=n.replace(/\(.+\)/g,"")}},{key:"splitSentence",value:function(e){if(!e)return[];var n=this.formatStr(e),t=(n=(n=n.replace(/！|。|？|；/g,function(e){return e+"|"})).replace(/\|$/g,"")).split("|");return t=t.filter(function(e){return e.length>=2})}},{key:"cleanPunctuation",value:function(e){return e.replace(/[<>《》！*\(\^\)\$%~!@#…&%￥—\+=、。，？；‘’“”：·`]/g,"")}},{key:"cleanBadChar",value:function(e){var n="胸鬼懒禽鸟鸡我邪罪凶丑仇鼠蟋蟀淫秽妹狐鸡鸭蝇悔鱼肉苦犬吠窥血丧饥女搔父母昏狗蟊疾病痛死潦哀痒害蛇牲妇狸鹅穴畜烂兽靡爪氓劫鬣螽毛婚姻匪婆羞辱".split("");return e.split("").filter(function(e){return-1===n.indexOf(e)}).join("")}},{key:"genName",value:function(){if(!this.book)return null;try{var e=r.default.choose(this.book),n=e.content,t=e.title,o=e.author,a=e.book,i=e.dynasty;if(!n)return null;var l=this.splitSentence(n);if(!(Array.isArray(l)&&l.length>0))return null;var c=r.default.choose(l),f=this.cleanBadChar(this.cleanPunctuation(c));return f.length<=2?null:{name:this.getTwoChar(f.split("")),sentence:c,content:n,title:t,author:o,book:a,dynasty:i}}catch(e){(0,u.log)(e)}}},{key:"getTwoChar",value:function(e){for(var n=e.length,t=r.default.between(0,n),o=r.default.between(0,n),u=0;o===t&&(o=r.default.between(0,n),!(++u>100)););return t<=o?""+e[t]+e[o]:""+e[o]+e[t]}},{key:"loadBook",value:function(e,n){var t=this,o="./json/"+e+".json";this.loading=!0,$.ajax({url:o,success:function(o){(0,u.log)(e+" loaded"),t.loading=!1,t.book=o,"function"==typeof n&&n(o)},fail:function(e){return(0,u.log)(e)}})}}]),e}();n.default=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e,n){return e+Math.floor(Math.random()*(n-e))};n.default={choose:function(e){return e[o(0,e.length)]},between:o}}]);