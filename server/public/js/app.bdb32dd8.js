(function(e){function t(t){for(var s,i,c=t[0],u=t[1],a=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05a5":function(e,t,n){},"0614":function(e,t,n){"use strict";var s=n("f727"),r=n.n(s);r.a},"10b4":function(e,t,n){},"2ae3":function(e,t,n){"use strict";var s=n("bb4e"),r=n.n(s);r.a},"2bfc":function(e,t,n){"use strict";var s=n("2f4c"),r=n.n(s);r.a},"2f4c":function(e,t,n){},3131:function(e,t,n){},"449d":function(e,t,n){"use strict";var s=n("10b4"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={},c=i,u=(n("cf25"),n("2877")),a=Object(u["a"])(c,r,o,!1,null,null,null),l=a.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home page"},[n("h1",[e._v("Musculoskeletal Exam Preparation")]),n("p",[e._v("Created for the medical students of Omdurman Islamic University - Batch 28")]),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("label",{attrs:{for:"name"}},[e._v("Please enter your name (Arabic or English)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name",name:"name",placeholder:"Your Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("p",[e._v("This is only for statistical purposes")]),n("p",[e._v("If you have provided your name before, you don't have to do it again. just click on the button below to continue")])]),n("router-link",{attrs:{to:"/discipline"}},[n("button",{staticClass:"route-btn",on:{click:function(t){return e.storeName(e.name)}}},[e._v("Get Started")])]),n("footer",[e._v(" Created by Mosaab Emam ")])],1)},d=[],h=n("2f62"),b={name:"Home",data:function(){return{name:""}},methods:Object(h["b"])(["storeName"])},m=b,v=(n("92eb"),Object(u["a"])(m,p,d,!1,null,"780a6386",null)),g=v.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discipline page"},[n("h1",[e._v("Choose Discipline:")]),n("ul",e._l(e.disciplines,(function(t){return n("li",{key:t.name},[n("router-link",{attrs:{to:"/lessons"}},[n("button",{staticClass:"route-btn",on:{click:function(n){return e.chooseDiscipline(t)}}},[e._v(" "+e._s(t)+" ")])])],1)})),0)])},_=[],w=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(w["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"Practice",data:function(){return{disciplines:["anatomy"]}},methods:j({},Object(h["b"])(["setDiscipline"]),{chooseDiscipline:function(e){this.setDiscipline(e)}})},Q=x,S=(n("2ae3"),Object(u["a"])(Q,O,_,!1,null,"10414be2",null)),P=S.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lessons page"},[n("h1",[e._v("Choose a lesson in "),n("span",[e._v(e._s(e.getDiscipline))])]),n("ul",e._l(e.filteredLessons,(function(t){return n("li",{key:t.name},[n("router-link",{attrs:{to:"/sets"}},[n("button",{staticClass:"route-btn",on:{click:function(n){return e.setLesson(t.name)}}},[e._v(" "+e._s(t.name)+" ")])])],1)})),0)])},C=[];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(w["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={name:"Lessons",data:function(){return{lessons:[{discipline:"anatomy",name:"Upper limb"}]}},methods:Object(h["b"])(["setLesson"]),computed:A({},Object(h["c"])(["getDiscipline"]),{filteredLessons:function(){var e=this,t=this.lessons.filter((function(t){return t.discipline.toLowerCase()===e.getDiscipline}));return t}})},I=E,N=(n("80dd"),Object(u["a"])(I,k,C,!1,null,null,null)),L=N.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sets page"},[n("h1",[e._v("Choose a set of questions")]),e.getLoading?n("Loader"):n("ul",[n("li",[n("router-link",{attrs:{to:"/exam"}},[n("button",{staticClass:"route-btn"},[e._v(" All Questions ("+e._s(e.allQuestions.length)+") ")])])],1),e._l(e.chunkArray,(function(t,s){return n("li",{key:t[0].text},[n("router-link",{attrs:{to:"/exam"}},[n("button",{staticClass:"route-btn",on:{click:function(t){return e.chooseSet(e.chunkArray[s])}}},[e._v(" Questions ("+e._s(s+1+10*s-s)+" - "+e._s(10*(s+1))+") ")])])],1)}))],2)],1)},$=[],M=(n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"},[n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64",viewBox:"0 0 16 16"}},[n("path",{attrs:{fill:"#21bf73",d:"M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z"}})])])}),B=[],F={name:"Loader"},R=F,T=(n("449d"),Object(u["a"])(R,M,B,!1,null,null,null)),W=T.exports;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(w["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U={name:"Sets",components:{Loader:W},methods:J({},Object(h["b"])(["fetchQuestions","chooseSet"])),computed:J({},Object(h["c"])(["getLoading","allQuestions"]),{chunkArray:function(){var e=this.allQuestions,t=10,n=0,s=e.length,r=[];for(n=0;n<s;n+=t){var o=e.slice(n,n+t);r.push(o)}return r}}),created:function(){this.fetchQuestions()}},Y=U,G=(n("2bfc"),Object(u["a"])(Y,q,$,!1,null,null,null)),H=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exam"},[n("ProgressBar"),n("Question")],1)},V=[],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question page"},[n("h2",{domProps:{textContent:e._s(e.selectedQuestion.text)}}),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("ul",e._l(e.selectedQuestion.choices,(function(t,s){return n("li",{key:s},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.chosen,expression:"chosen"}],attrs:{type:"radio",name:"choice",id:"choice_"+s},domProps:{value:t.text,checked:e._q(e.chosen,t.text)},on:{change:function(n){e.chosen=t.text}}}),n("label",{attrs:{for:"choice_"+s},domProps:{textContent:e._s(t.text)}})])})),0),e.nextActive?n("button",{staticClass:"route-btn",on:{click:function(t){return e.saveAndNext(e.selectedQuestion)}}},[e._v("Next Question")]):n("button",{staticClass:"route-btn",on:{click:function(t){return e.saveAndFinish(e.selectedQuestion)}}},[e._v("Finish Exam")])])])},Z=[],ee=(n("7db0"),n("bc3a")),te=n.n(ee);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){Object(w["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={name:"Question",data:function(){return{chosen:""}},methods:se({},Object(h["b"])(["correctAnswer","wrongAnswer","nextQuestion"]),{saveAnswer:function(e){var t=this,n=function(){return e.choices.find((function(e){return 1==e.correct}))};e.choices.find((function(e){return e.text===t.chosen}))["chosen"]=!0,this.chosen==n().text?this.correctAnswer(e):this.wrongAnswer(e)},saveAndNext:function(e){this.saveAnswer(e),this.nextQuestion()},saveAndFinish:function(e){this.saveAnswer(e),this.getName&&te.a.post("/api/students/".concat(this.getName)),this.$router.push("finish")}}),computed:Object(h["c"])(["getName","selectedQuestion","nextActive"])},oe=re,ie=(n("0614"),Object(u["a"])(oe,X,Z,!1,null,"4bbe30b9",null)),ce=ie.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress-container"},[n("div",{staticClass:"progress-bar",style:"width: "+(e.getProgress+1)+"%"}),0!==e.getSelectedSet.length?[e._v(" "+e._s(e.getSelectedQuestionIndex+1)+"/"+e._s(e.getSelectedSet.length)+" ")]:[e._v(" "+e._s(e.getSelectedQuestionIndex+1)+"/"+e._s(e.allQuestions.length)+" ")]],2)},ae=[],le={name:"ProgressBar",computed:Object(h["c"])(["allQuestions","getSelectedSet","getSelectedQuestionIndex","getProgress"])},fe=le,pe=(n("9889"),Object(u["a"])(fe,ue,ae,!1,null,null,null)),de=pe.exports,he={name:"Exam",components:{Question:ce,ProgressBar:de}},be=he,me=Object(u["a"])(be,K,V,!1,null,null,null),ve=me.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result page"},[n("h1",[e._v("Your practice is finished")]),n("ul",[n("li",[e._v(" Answered questions: "+e._s(0!==e.getSelectedSet.length?e.getSelectedSet.length:e.allQuestions.length)+" ")]),n("li",[e._v(" Correct Questions: "+e._s(e.correctQuestions.length)+" ")]),n("li",[e._v(" Wrong Questions: "+e._s(e.wrongQuestions.length)+" ")]),0!==e.getSelectedSet.length?n("li",[e._v(" Status: "),e.correctQuestions.length>=e.getSelectedSet.length/2?n("span",[e._v("Passed")]):n("span",[e._v("Failed")])]):n("li",[e._v(" Status: "),e.correctQuestions.length>=e.allQuestions.length/2?n("span",[e._v("Passed")]):n("span",[e._v("Failed")])]),0!==e.getSelectedSet.length?n("li",[e._v(" Score: "+e._s(Math.round(100*e.correctQuestions.length/e.getSelectedSet.length))+"% ")]):n("li",[e._v(" Score: "+e._s(Math.round(100*e.correctQuestions.length/e.allQuestions.length))+"% ")])]),e.getName?n("p",[e._v("Thank you "+e._s(e.getName)+" for using this web application.")]):e._e(),n("router-link",{attrs:{to:"/review"}},[n("button",{staticClass:"route-btn"},[e._v("Review your answers")])]),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"route-btn",on:{click:function(t){return e.reset()}}},[e._v("Back to home")])])],1)},Oe=[],_e={name:"Finish",methods:Object(h["b"])(["reset"]),computed:Object(h["c"])(["getName","getSelectedSet","allQuestions","correctQuestions","wrongQuestions"])},we=_e,ye=(n("f59b"),Object(u["a"])(we,ge,Oe,!1,null,null,null)),je=ye.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"review page"},[n("h1",[e._v("Review your answers")]),e._l(e.getSelectedSet,(function(t,s){return n("div",{key:t._id,staticClass:"question"},[n("h3",[e._v(e._s(s+1)+". "+e._s(t.text))]),n("ol",e._l(t.choices,(function(t){return n("li",{key:t.text,class:t.chosen&&t.correct?"correct":t.chosen&&!t.correct?"wrong":"",domProps:{textContent:e._s(t.text)}})})),0)])})),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"route-btn",on:{click:function(t){return e.reset()}}},[e._v("Back to home")])])],2)},Qe=[],Se={name:"Review",computed:Object(h["c"])(["getSelectedSet","correctQuestions"])},Pe=Se,ke=(n("f429"),Object(u["a"])(Pe,xe,Qe,!1,null,null,null)),Ce=ke.exports;s["a"].use(f["a"]);var De=[{path:"/",name:"home",component:g},{path:"/discipline",name:"discipline",component:P},{path:"/lessons",name:"lessons",component:L},{path:"/sets",name:"sets",component:H},{path:"/exam",name:"exam",component:ve},{path:"/finish",name:"finish",component:je},{path:"/review",name:"review",component:Ce}],Ae=new f["a"]({mode:"history",base:"",routes:De}),Ee=Ae,Ie=(n("99af"),n("b0c0"),n("96cf"),n("1da1"));s["a"].use(h["a"]);var Ne=new h["a"].Store({state:{name:"",loading:!0,questions:[],selectedSet:[],correctQuestions:[],wrongQuestions:[],selectedQuestionIndex:0,nextActive:!0,discipline:"",lesson:"",progress:0},getters:{getName:function(e){return e.name},getLoading:function(e){return e.loading},allQuestions:function(e){return e.questions},getSelectedSet:function(e){return e.selectedSet},correctQuestions:function(e){return e.correctQuestions},wrongQuestions:function(e){return e.wrongQuestions},getSelectedQuestionIndex:function(e){return e.selectedQuestionIndex},selectedQuestion:function(e){return 0!==e.selectedSet.length?e.selectedSet[e.selectedQuestionIndex]:e.questions[e.selectedQuestionIndex]},nextActive:function(e){return e.nextActive},getDiscipline:function(e){return e.discipline},getProgress:function(e){return e.progress}},actions:{fetchQuestions:function(e){var t=this,n=e.commit;return Object(Ie["a"])(regeneratorRuntime.mark((function e(){var s,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.state,r=s.discipline,o=s.lesson,e.next=3,te.a.get("/api/questions/".concat(r,"/").concat(o)).then((function(e){n("populateQuestions",e.data),n("toggleLoading")}));case 3:case"end":return e.stop()}}),e)})))()},storeName:function(e,t){var n=e.commit;""!==t&&n("setName",t)},chooseSet:function(e,t){var n=e.commit;n("chooseSet",t)},correctAnswer:function(e,t){var n=e.commit;n("addCorrectQuesiton",t)},wrongAnswer:function(e,t){var n=e.commit;n("addWrongQuestion",t)},nextQuestion:function(e){var t=e.commit;t("nextQuestion")},setDiscipline:function(e,t){var n=e.commit;n("setDiscipline",t)},setLesson:function(e,t){var n=e.commit;n("setLesson",t)},reset:function(e){var t=e.commit;t("reset")}},mutations:{setName:function(e,t){return e.name=t},populateQuestions:function(e,t){return e.questions=t},chooseSet:function(e,t){return e.selectedSet=t},addCorrectQuesiton:function(e,t){return e.correctQuestions.push(t)},addWrongQuestion:function(e,t){return e.wrongQuestions.push(t)},nextQuestion:function(e){0!==e.selectedSet.length?(e.selectedQuestionIndex==e.selectedSet.length-2&&(e.nextActive=!1),e.selectedQuestionIndex!=e.selectedSet.length-1&&(e.selectedQuestionIndex+=1),e.progress=(e.selectedQuestionIndex+1)/e.selectedSet.length*100):(e.selectedQuestionIndex==e.questions.length-2&&(e.nextActive=!1),e.selectedQuestionIndex!=e.questions.length-1&&(e.selectedQuestionIndex+=1),e.progress=(e.selectedQuestionIndex+1)/e.questions.length*100)},setDiscipline:function(e,t){return e.discipline=t},setLesson:function(e,t){return e.lesson=t},toggleLoading:function(e){return e.loading=!e.loading},reset:function(e){e.questions=[],e.selectedSet=[],e.correctQuestions=[],e.wrongQuestions=[],e.selectedQuestionIndex=0,e.nextActive=!0,e.discipline="",e.lesson="",e.progress=0}}});n("05a5");s["a"].config.productionTip=!1,new s["a"]({router:Ee,store:Ne,render:function(e){return e(l)}}).$mount("#app")},"607c":function(e,t,n){},"6a5f":function(e,t,n){},"80dd":function(e,t,n){"use strict";var s=n("607c"),r=n.n(s);r.a},"92eb":function(e,t,n){"use strict";var s=n("ad1a"),r=n.n(s);r.a},9889:function(e,t,n){"use strict";var s=n("eae7"),r=n.n(s);r.a},ad1a:function(e,t,n){},bb4e:function(e,t,n){},cf25:function(e,t,n){"use strict";var s=n("fea6"),r=n.n(s);r.a},eae7:function(e,t,n){},f429:function(e,t,n){"use strict";var s=n("6a5f"),r=n.n(s);r.a},f59b:function(e,t,n){"use strict";var s=n("3131"),r=n.n(s);r.a},f727:function(e,t,n){},fea6:function(e,t,n){}});
//# sourceMappingURL=app.bdb32dd8.js.map