(function(e){function t(t){for(var r,i,c=t[0],u=t[1],a=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05a5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={},c=i,u=n("2877"),a=Object(u["a"])(c,o,s,!1,null,null,null),l=a.exports,f=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("main",[n("h1",[e._v("Prepare For Musculoskeletal Exam")]),n("h2",[e._v("Created for the medical students of Omdurman Islamic University - Batch 28")]),n("router-link",{attrs:{to:"/descipline"}},[n("button",[e._v("Get Started")])])],1),n("footer",[e._v(" Created by Mosaab Emam ")])])},p=[],h={name:"Home"},v=h,m=(n("d98f"),Object(u["a"])(v,d,p,!1,null,"44acd92a",null)),b=m.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"descipline"},[n("h1",[e._v("Choose Descipline:")]),n("ul",e._l(e.desciplines,(function(t){return n("li",{key:t.name},[n("router-link",{attrs:{to:"/exam"}},[n("button",[e._v(" "+e._s(t.name)+" ")])])],1)})),0)])},Q=[],_={name:"Practice",data:function(){return{desciplines:[{name:"anatomy"}]}}},g=_,w=(n("b7a6"),Object(u["a"])(g,x,Q,!1,null,"5b2c5dc4",null)),O=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exam"},[n("Question")],1)},j=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("h3",{domProps:{textContent:e._s(e.selectedQuestion.text)}}),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("ul",e._l(e.selectedQuestion.choices,(function(t,r){return n("li",{key:r},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.chosen,expression:"chosen"}],attrs:{type:"radio",name:"choice",id:"choice_"+r},domProps:{value:t.text,checked:e._q(e.chosen,t.text)},on:{change:function(n){e.chosen=t.text}}}),n("label",{attrs:{for:"choice_"+r},domProps:{textContent:e._s(t.text)}})])})),0),e.nextActive?n("button",{on:{click:function(t){return e.saveAndNext(e.selectedQuestion)}}},[e._v("Next")]):n("button",{on:{click:function(t){return e.saveAndFinish(e.selectedQuestion)}}},[e._v("Finish")])])])},A=[],k=(n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),C=n("2f62");function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(k["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={name:"Question",data:function(){return{chosen:""}},methods:S({},Object(C["b"])(["correctAnswer","wrongAnswer","nextQuestion"]),{saveAnswer:function(e){var t=function(){return e.choices.find((function(e){return 1==e.correct})).text};this.chosen==t()?this.correctAnswer(e):this.wrongAnswer(e)},saveAndNext:function(e){this.saveAnswer(e),this.nextQuestion()},saveAndFinish:function(e){this.saveAnswer(e),this.$router.push("finish")}}),computed:Object(C["c"])(["selectedQuestion","nextActive"])},$=q,M=Object(u["a"])($,P,A,!1,null,null,null),D=M.exports,F={name:"Exam",components:{Question:D},methods:Object(C["b"])(["fetchQuestions"]),created:function(){this.fetchQuestions()}},I=F,N=Object(u["a"])(I,y,j,!1,null,null,null),T=N.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Congratulations")]),n("h3",[e._v("You have finished the exam")]),n("ul",[n("li",[e._v(" Number of questoins: "+e._s(e.allQuestions.length)+" ")]),n("li",[e._v(" Correct Questions: "+e._s(e.correctQuestions.length)+" ")]),n("li",[e._v(" Wrong Questions: "+e._s(e.wrongQuestions.length)+" ")]),n("li",[e._v(" Status: "),e.correctQuestions.length>=e.allQuestions.length/2?n("span",[e._v("Passed")]):n("span",[e._v("Failed")])]),n("li",[e._v(" Score: "+e._s(Math.round(100*e.correctQuestions.length/e.allQuestions.length))+"% ")])]),n("router-link",{attrs:{to:"/"}},[n("button",[e._v("Back to home")])])],1)},B=[],J={name:"Finish",computed:Object(C["c"])(["allQuestions","correctQuestions","wrongQuestions"])},R=J,G=Object(u["a"])(R,W,B,!1,null,null,null),H=G.exports;r["a"].use(f["a"]);var U=[{path:"/",name:"home",component:b},{path:"/descipline",name:"descipline",component:O},{path:"/exam",name:"exam",component:T},{path:"/finish",name:"finish",component:H}],Y=new f["a"]({mode:"history",base:"",routes:U}),z=Y,K=(n("96cf"),n("1da1")),L=n("bc3a"),V=n.n(L);r["a"].use(C["a"]);var X=new C["a"].Store({state:{questions:[],correctQuestions:[],wrongQuestions:[],selectedQuestionIndex:0,nextActive:!0},getters:{allQuestions:function(e){return e.questions},correctQuestions:function(e){return e.correctQuestions},wrongQuestions:function(e){return e.wrongQuestions},selectedQuestion:function(e){return e.questions[e.selectedQuestionIndex]},nextActive:function(e){return e.nextActive}},actions:{fetchQuestions:function(e){var t=e.commit;return Object(K["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://warm-everglades-34889.herokuapp.com/api/questions").then((function(e){t("populateQuestions",e.data)}));case 2:case"end":return e.stop()}}),e)})))()},correctAnswer:function(e,t){var n=e.commit;n("addCorrectQuesiton",t)},wrongAnswer:function(e,t){var n=e.commit;n("addWrongQuestion",t)},nextQuestion:function(e){var t=e.commit;t("nextQuestion")}},mutations:{populateQuestions:function(e,t){return e.questions=t},addCorrectQuesiton:function(e,t){return e.correctQuestions.push(t)},addWrongQuestion:function(e,t){return e.wrongQuestions.push(t)},nextQuestion:function(e){e.selectedQuestionIndex==e.questions.length-2&&(e.nextActive=!1),e.selectedQuestionIndex!=e.questions.length-1&&(e.selectedQuestionIndex+=1)}}});n("05a5");r["a"].config.productionTip=!1,new r["a"]({router:z,store:X,render:function(e){return e(l)}}).$mount("#app")},"918c":function(e,t,n){},b7a6:function(e,t,n){"use strict";var r=n("918c"),o=n.n(r);o.a},d3b0:function(e,t,n){},d98f:function(e,t,n){"use strict";var r=n("d3b0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0e43e8bc.js.map