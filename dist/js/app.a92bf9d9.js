(function(e){function n(n){for(var s,i,o=n[0],u=n[1],c=n[2],l=0,p=[];l<o.length;l++)i=o[l],r[i]&&p.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);d&&d(n);while(p.length)p.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],s=!0,o=1;o<t.length;o++){var u=t[o];0!==r[u]&&(s=!1)}s&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var s={},r={app:0},a=[];function i(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=s,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)i.d(t,s,function(n){return e[n]}.bind(null,s));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var d=u;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var s=t("64a9"),r=t.n(s);r.a},"06c4":function(e,n,t){"use strict";var s=t("1a36"),r=t.n(s);r.a},"1a36":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var s=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"containers-wrapper"},[t("AdminContainer",{attrs:{question:e.question,answers:e.answers},on:{changeQuestion:e.changeQuestion,changeAnswer:e.changeAnswer,removeAnswer:e.removeAnswer,addAnswer:e.addAnswer,resetApp:e.restApp}}),t("UserContainer",{attrs:{question:e.question,answers:e.answers},on:{doVote:e.doVote}}),t("GraphContainer",{attrs:{question:e.question,answers:e.answers.filter(function(e){return e.votes}),votes:e.votes}})],1)])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",[t("h1",[e._v("POLLY")])])}],i=t("cebc"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"admin-container"},[t("p",[e._v("Question")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.question,expression:"question"}],attrs:{placeholder:"Add a question"},domProps:{value:e.question},on:{input:[function(n){n.target.composing||(e.question=n.target.value)},e.changeQuestion]}}),t("div",{staticClass:"answers"},[t("p",[e._v("Answers")]),e._l(e.answers,function(n){return t("AnswerInput",{key:n.id,attrs:{answer:n},on:{changeAnswer:e.changeAnswer,removeAnswer:e.removeAnswer}})}),e.answers.length<e.maxAnswers?t("AddInput",{on:{addAnswer:e.addAnswer}}):e._e(),t("div",[t("p",[e._v(e._s(e.answers.length)+" / "+e._s(e.maxAnswers)+" possible answers")])]),t("button",{staticClass:"reset-btn",on:{click:e.resetApp}},[e._v("Reset")])],2)])},u=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"answer-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer.content,expression:"answer.content"}],staticClass:"answer",attrs:{type:"text",maxlength:"80",placeholder:"Type an answer"},domProps:{value:e.answer.content},on:{input:[function(n){n.target.composing||e.$set(e.answer,"content",n.target.value)},e.changeAnswer]}}),"a1"!==e.answer.id&&"a2"!==e.answer.id?t("button",{staticClass:"remove-btn",on:{click:e.removeAnswer}},[e._v("Remove")]):e._e()])},d=[],l={name:"AnswerInput",props:["answer"],methods:{changeAnswer:function(e){var n=e.target;this.$emit("changeAnswer",n.value,this.answer.id)},removeAnswer:function(){this.$emit("removeAnswer",this.answer.id)}}},p=l,v=(t("06c4"),t("2877")),f=Object(v["a"])(p,c,d,!1,null,"27a915b4",null),w=f.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"add-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],staticClass:"answer",attrs:{type:"text",maxlength:"80",placeholder:"Type an answer"},domProps:{value:e.answer},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.addAnswer(n)},input:function(n){n.target.composing||(e.answer=n.target.value)}}}),t("button",{staticClass:"add-btn",on:{click:e.addAnswer}},[e._v("Add")])])},m=[],g={name:"AddInput",data:function(){return{answer:""}},methods:{addAnswer:function(){this.$emit("addAnswer",this.answer),this.answer=""}}},A=g,_=(t("e38f"),Object(v["a"])(A,h,m,!1,null,"6ccc1ab5",null)),b=_.exports,C=10,y="",x=3,O=0,q=function(){return[{id:"a1",content:"Option 1"},{id:"a2",content:"Option 2"}]},$={name:"AdminContainer",components:{AnswerInput:w,AddInput:b},props:["question","answers"],computed:{maxAnswers:function(){return C}},methods:{changeQuestion:function(e){var n=e.target;this.$emit("changeQuestion",n.value)},changeAnswer:function(e,n){this.$emit("changeAnswer",e,n)},removeAnswer:function(e){this.$emit("removeAnswer",e)},addAnswer:function(e){this.$emit("addAnswer",e)},resetApp:function(){this.$emit("resetApp")}}},k=$,j=(t("6202"),Object(v["a"])(k,o,u,!1,null,"b1eed710",null)),I=j.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"user-container"},[t("p",[e._v("Question")]),t("p",{staticClass:"question"},[e._v(e._s(e.question))]),t("div",{staticClass:"answers"},[t("p",[e._v("Answers")]),e._l(e.answers,function(n){return t("div",{key:n.id,staticClass:"answer"},[t("input",{staticClass:"checkbox",attrs:{type:"radio"},domProps:{value:n.id,checked:n.id===e.optionId},on:{change:e.setOption}}),t("p",[e._v(e._s(n.content))])])}),t("button",{staticClass:"vote-btn",on:{click:e.doVote}},[e._v("Vote")])],2)])},Q=[],E={name:"UserContainer",data:function(){return{optionId:""}},props:["question","answers"],methods:{setOption:function(e){var n=e.target;this.optionId=n.value},doVote:function(){this.$emit("doVote",this.optionId),this.optionId=""}}},V=E,T=(t("597a"),Object(v["a"])(V,P,Q,!1,null,"3462519e",null)),S=T.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"user-container"},[t("p",[e._v("Question")]),t("p",{staticClass:"question"},[e._v(e._s(e.question))]),t("div",{staticClass:"graph"},e._l(e.answers,function(n){return t("div",{key:n.id,staticClass:"graph-section",style:{width:100/e.answers.length+"%"}},[t("p",[e._v(e._s(n.votes))]),t("div",{staticClass:"graph-bar",style:{height:n.votes/e.heighest*100+"%"}}),t("p",[e._v(e._s(n.content))])])}),0),e.votes?t("p",[e._v("Total votes: "+e._s(e.votes))]):e._e()])},G=[],N={name:"GraphContainer",props:["votes","answers","question"],computed:{heighest:function(){return this.answers.length?this.answers.reduce(function(e,n){return n.votes>e?n.votes:e},0):0}}},U=N,J=(t("6d02"),Object(v["a"])(U,M,G,!1,null,"abc7004e",null)),L=J.exports,R={name:"app",components:{AdminContainer:I,UserContainer:S,GraphContainer:L},data:function(){return{question:y,i:x,votes:O,answers:q()}},methods:{changeQuestion:function(e){this.question=e},changeAnswer:function(e,n){this.answers=this.answers.map(function(t){return t.id===n?Object(i["a"])({},t,{content:e}):t})},removeAnswer:function(e){this.answers=this.answers.filter(function(n){return n.id!==e})},addAnswer:function(e){this.answers=this.answers.concat({id:"a".concat(this.i),content:e}),this.i+=1},restApp:function(){this.answers=q(),this.i=x,this.question=y,this.votes=O},doVote:function(e){this.answers=this.answers.map(function(n){return n.id===e?Object(i["a"])({},n,{votes:n.votes?n.votes+1:1}):n}),this.votes+=1}}},Y=R,z=(t("034f"),Object(v["a"])(Y,r,a,!1,null,null,null)),B=z.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(B)}}).$mount("#app")},"597a":function(e,n,t){"use strict";var s=t("c302"),r=t.n(s);r.a},6202:function(e,n,t){"use strict";var s=t("e896"),r=t.n(s);r.a},"64a9":function(e,n,t){},"6d02":function(e,n,t){"use strict";var s=t("af5b"),r=t.n(s);r.a},af5b:function(e,n,t){},c302:function(e,n,t){},e38f:function(e,n,t){"use strict";var s=t("f9a1"),r=t.n(s);r.a},e896:function(e,n,t){},f9a1:function(e,n,t){}});
//# sourceMappingURL=app.a92bf9d9.js.map