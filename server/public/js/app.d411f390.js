(function(t){function e(e){for(var r,s,c=e[0],a=e[1],u=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05a5":function(t,e,n){},"0ee6":function(t,e,n){t.exports=n.p+"img/Microbiology.3cbd8536.jpg"},"10b4":function(t,e,n){},1853:function(t,e,n){},"18dd":function(t,e,n){},"2ae3":function(t,e,n){"use strict";var r=n("bb4e"),i=n.n(r);i.a},"2fbd":function(t,e,n){"use strict";var r=n("38ca"),i=n.n(r);i.a},3131:function(t,e,n){},3466:function(t,e,n){"use strict";var r=n("e5db"),i=n.n(r);i.a},"35ae":function(t,e,n){"use strict";var r=n("e536"),i=n.n(r);i.a},"38ca":function(t,e,n){},"407d":function(t,e,n){t.exports=n.p+"img/Physiology.7fa2bc4b.jpg"},4145:function(t,e,n){t.exports=n.p+"img/Anatomy.cba44041.jpg"},"449d":function(t,e,n){"use strict";var r=n("10b4"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={},c=s,a=(n("cf25"),n("2877")),u=Object(a["a"])(c,i,o,!1,null,null,null),l=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home page"},[t._m(0),n("div",{staticClass:"underline"}),n("div",{staticClass:"disciplines"},t._l(t.disciplines,(function(t){return n("DisciplineCard",{key:t.title,attrs:{title:t.title,imageUrl:t.imageUrl}})})),1)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("div",[t._v("Revise")]),n("div",[t._v("Like a Pro")])])}],g=n("cffa"),v=n("bc3a"),h=n.n(v),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"discipline",on:{click:function(e){return t.toLessons(t.title)}}},[r("img",{attrs:{src:n("b5a1")("./"+t.title+".jpg"),alt:""}}),r("div",{staticClass:"title",domProps:{textContent:t._s(t.title)}})])},b=[],y=(n("99af"),n("b0c0"),n("96cf"),n("1da1")),O=n("2f62");r["a"].use(O["a"]);var _=new O["a"].Store({state:{name:"",loading:!0,noData:!1,selectedSet:[],correctQuestions:[],wrongQuestions:[],selectedQuestionIndex:0,nextActive:!0,discipline:"",practice:{},set:[],progress:0,data:{}},getters:{getData:function(t){return t.data},noData:function(t){return t.noData},getName:function(t){return t.name},getLoading:function(t){return t.loading},allQuestions:function(t){return t.questions},getSelectedSet:function(t){return t.selectedSet},correctQuestions:function(t){return t.correctQuestions},wrongQuestions:function(t){return t.wrongQuestions},getSelectedQuestionIndex:function(t){return t.selectedQuestionIndex},getSelectedQuestion:function(t){return t.set[t.selectedQuestionIndex]},nextActive:function(t){return t.nextActive},getDiscipline:function(t){return t.discipline},getPractice:function(t){return t.practice},getSet:function(t){return t.set},getProgress:function(t){return t.progress}},actions:{setData:function(t){var e=this,n=t.commit;return Object(y["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/api/questions/".concat(e.state.discipline.toLowerCase()));case 2:r=t.sent,0===r.data.length?n("noData"):n("setData",r.data),n("toggleLoading");case 5:case"end":return t.stop()}}),t)})))()},fetchQuestions:function(t){var e=this,n=t.commit;return Object(y["a"])(regeneratorRuntime.mark((function t(){var r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,i=r.discipline,o=r.lesson,t.next=3,h.a.get("/api/questions/".concat(i,"/").concat(o)).then((function(t){n("populateQuestions",t.data),n("toggleLoading")}));case 3:case"end":return t.stop()}}),t)})))()},storeName:function(t,e){var n=t.commit;""!==e&&n("setName",e)},chooseSet:function(t,e){var n=t.commit;n("chooseSet",e)},correctAnswer:function(t,e){var n=t.commit;n("addCorrectQuesiton",e)},wrongAnswer:function(t,e){var n=t.commit;n("addWrongQuestion",e)},setDiscipline:function(t,e){var n=t.commit;n("setDiscipline",e)},reset:function(t){var e=t.commit;e("reset")}},mutations:{setData:function(t,e){t.data=e},setName:function(t,e){return t.name=e},populateQuestions:function(t,e){return t.questions=e},chooseSet:function(t,e){return t.selectedSet=e},addCorrectQuesiton:function(t,e){return t.correctQuestions.push(e)},addWrongQuestion:function(t,e){return t.wrongQuestions.push(e)},nextQuestion:function(t){0!==t.set.length&&(t.selectedQuestionIndex==t.set.length-2&&(t.nextActive=!1),t.selectedQuestionIndex!=t.set.length-1&&(t.selectedQuestionIndex+=1),t.progress=(t.selectedQuestionIndex+1)/t.set.length*100)},setDiscipline:function(t,e){return t.discipline=e},setPractice:function(t,e){t.practice.topic=e.topic,t.practice.practice=e.practice},setSet:function(t,e){return t.set=e},noData:function(t){return t.noData=!t.noData},toggleLoading:function(t){return t.loading=!t.loading},reset:function(t){t.questions=[],t.selectedSet=[],t.correctQuestions=[],t.wrongQuestions=[],t.selectedQuestionIndex=0,t.nextActive=!0,t.discipline="",t.lesson="",t.progress=0}}}),j={name:"DisciplineCard",props:{title:{type:String}},methods:{toLessons:function(t){_.commit("setDiscipline",t),this.$router.push("/practice")}}},w=j,x=(n("ec40"),Object(a["a"])(w,m,b,!1,null,"3f96c764",null)),P=x.exports,S={name:"Home",components:{DisciplineCard:P},data:function(){return{disciplines:[{title:"Anatomy"},{title:"Physiology"},{title:"Pathology"},{title:"Microbiology"}]}},created:function(){h()("https://api.ipify.org?format=json").then((function(t){h.a.post("/api/ip/".concat(t.data.ip))}))},mounted:function(){g["a"].to("h1 div",{y:0,opacity:1,duration:.5,stagger:.25}),g["a"].from(".underline",{width:0,delay:1.5}),g["a"].to(".discipline",{y:0,opacity:1,delay:2,stagger:.25})}},C=S,D=(n("35ae"),Object(a["a"])(C,p,d,!1,null,"49fc7791",null)),Q=D.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discipline page"},[n("h1",[t._v("Choose Discipline:")]),n("ul",t._l(t.disciplines,(function(e){return n("li",{key:e.name},[n("router-link",{attrs:{to:"/lessons"}},[n("button",{staticClass:"route-btn",on:{click:function(n){return t.chooseDiscipline(e)}}},[t._v(" "+t._s(e)+" ")])])],1)})),0)])},E=[],$=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object($["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var q={name:"Practice",data:function(){return{disciplines:["anatomy"]}},methods:L({},Object(O["b"])(["setDiscipline"]),{chooseDiscipline:function(t){this.setDiscipline(t)}})},M=q,N=(n("2ae3"),Object(a["a"])(M,k,E,!1,null,"10414be2",null)),I=N.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"practice page"},[n("h1",[n("div",[t._v(t._s(t.getDiscipline))]),n("div",[t._v("practice")])]),n("div",{staticClass:"underline"}),t.getLoading?n("Loader"):t.noData?n("h3",[t._v("There are no questions available in "+t._s(t.getDiscipline)+" right now, but they will be added soon.")]):t._l(t.getData,(function(e,r){return[n("h3",{key:e.topic,domProps:{textContent:t._s(e.topic+":")}}),n("div",{key:r,staticClass:"qboxes"},[n("QBox",{key:e.title,attrs:{topic:e.topic,title:e.title,questions:e.questions.length}})],1)]}))],2)},R=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("svg",{attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"4rem",height:"4rem",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[n("path",{attrs:{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),n("path",{attrs:{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n    C22.32,8.481,24.301,9.057,26.013,10.047z"}},[n("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}})],1)])])},F=[],U={name:"Loader"},z=U,W=(n("449d"),Object(a["a"])(z,T,F,!1,null,null,null)),H=W.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qbox",on:{click:function(e){return t.toSets()}}},[n("div",{staticClass:"number"},[n("div",{staticClass:"figure",domProps:{textContent:t._s(t.questions)}}),n("div",{staticClass:"text"},[t._v("Questions")]),n("div",{staticClass:"title",domProps:{textContent:t._s(t.title)}})])])},Y=[],G=(n("a9e3"),{name:"Qbox",props:{topic:{type:String},title:{type:String},questions:{type:Number}},mounted:function(){g["a"].to(".qbox",{y:0,opacity:1,duration:.5,stagger:.25})},methods:{toSets:function(){_.commit("setPractice",{topic:this.topic,practice:this.title}),this.$router.push("sets")}}}),K=G,V=(n("e44f"),Object(a["a"])(K,J,Y,!1,null,"9f6fddfc",null)),X=V.exports;function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){Object($["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var et={name:"Lessons",components:{Loader:H,QBox:X},methods:tt({},Object(O["b"])(["setData"])),computed:tt({},Object(O["c"])(["getDiscipline","getData","getLoading","noData"])),created:function(){this.setData()},mounted:function(){g["a"].to("h1 div",{y:0,opacity:1,duration:.5,stagger:.25}),g["a"].from(".underline",{width:0,duration:.5,delay:.5}),g["a"].to(".loader",{y:0,opacity:1,duration:.5,delay:1})},destroyed:function(){_.commit("noData"),_.commit("toggleLoading")}},nt=et,rt=(n("2fbd"),Object(a["a"])(nt,B,R,!1,null,"22549b27",null)),it=rt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sets page"},[t._m(0),n("div",{staticClass:"underline"}),n("div",{staticClass:"setboxes"},t._l(t.chunkArray,(function(t,e){return n("SetBox",{key:e,attrs:{set:t,title:"Set "+(e+1),range:10*e+1+"-"+(10*e+10)}})})),1)])},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("div",[t._v("Choose")]),n("div",[t._v("a set")])])}],ct=(n("7db0"),n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setbox",on:{click:function(e){return t.toExam()}}},[n("div",{staticClass:"number"},[n("div",{staticClass:"text"},[t._v("Questions")]),n("div",{staticClass:"range",domProps:{textContent:t._s(t.range)}}),n("div",{staticClass:"title",domProps:{textContent:t._s(t.title)}})])])}),at=[],ut={name:"SetBox",props:{title:{type:String},range:{type:String},set:{type:Array}},methods:{toExam:function(){_.commit("setSet",this.set),this.$router.push("/exam")}}},lt=ut,ft=(n("3466"),Object(a["a"])(lt,ct,at,!1,null,"e33027f0",null)),pt=ft.exports;function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(n),!0).forEach((function(e){Object($["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var vt={name:"Sets",components:{SetBox:pt},mounted:function(){g["a"].to("h1 div",{y:0,opacity:1,duration:.5,stagger:.25}),g["a"].from(".underline",{width:0,delay:.5}),g["a"].to(".setbox",{y:0,opacity:1,delay:1,stagger:.25})},methods:gt({},Object(O["b"])(["fetchQuestions","chooseSet"]),{isTen:function(t,e){return!(t[e].length<10)}}),computed:gt({},Object(O["c"])(["getLoading","getData","getPractice"]),{chunkArray:function(){var t=this,e=this.getData.find((function(e){return e.topic===t.getPractice.topic&&e.title===t.getPractice.practice})),n=e.questions,r=10,i=0,o=n.length,s=[];for(i=0;i<o;i+=r){var c=n.slice(i,i+r);s.push(c)}return s}}),created:function(){}},ht=vt,mt=(n("c302"),Object(a["a"])(ht,ot,st,!1,null,"3b1a2124",null)),bt=mt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exam page"},[n("ProgressBar"),n("div",{staticClass:"questions"},[n("Question")],1)],1)},Ot=[],_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question"},[n("h2",{domProps:{textContent:t._s(t.getSelectedQuestion.text)}}),n("div",{staticClass:"underline"}),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("ol",{ref:"list"},t._l(t.getSelectedQuestion.choices,(function(e,r){return n("li",{key:r},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.chosen,expression:"chosen"}],attrs:{type:"radio",name:"choice",id:"choice_"+r},domProps:{value:e.text,checked:t._q(t.chosen,e.text)},on:{change:function(n){t.chosen=e.text}}}),n("label",{attrs:{for:"choice_"+r},domProps:{textContent:t._s(e.text)},on:{click:function(e){return t.indicateSelection(e)}}}),n("div",{staticClass:"overlay"})])})),0),t.nextActive?n("button",{on:{click:function(e){return t.saveAndNext(t.getSelectedQuestion)}}},[t._v("Next Question")]):n("button",{on:{click:function(e){return t.saveAndFinish(t.getSelectedQuestion)}}},[t._v("Finish Practice")])])])},jt=[];function wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?wt(Object(n),!0).forEach((function(e){Object($["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Pt={name:"Question",data:function(){return{chosen:""}},mounted:function(){g["a"].to("h2",{y:0,opacity:1,duration:.5}),g["a"].from(".underline",{width:0,delay:.5}),g["a"].to("ol li",{y:0,opacity:1,delay:1,stagger:.25})},methods:xt({},Object(O["b"])(["correctAnswer","wrongAnswer","nextQuestion"]),{indicateSelection:function(t){this.$refs.list.children.forEach((function(t){return t.classList.remove("selected")})),t.path[1].classList.add("selected")},saveAnswer:function(t){var e=this,n=function(){return t.choices.find((function(t){return 1==t.correct}))};t.choices.find((function(t){return t.text===e.chosen}))["chosen"]=!0,this.chosen==n().text?this.correctAnswer(t):this.wrongAnswer(t)},saveAndNext:function(t){this.$refs.list.children.forEach((function(t){return t.classList.remove("selected")})),this.saveAnswer(t),_.commit("nextQuestion",t)},saveAndFinish:function(t){this.saveAnswer(t),this.$router.push("finish")}}),computed:Object(O["c"])(["getSelectedQuestion","nextActive"])},St=Pt,Ct=(n("6817"),Object(a["a"])(St,_t,jt,!1,null,"af2f3ec6",null)),Dt=Ct.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-container"},[n("div",{staticClass:"progress-bar",style:"width: "+(t.getProgress+1)+"%"}),t._v(" "+t._s(t.getSelectedQuestionIndex+1)+"/"+t._s(t.getSet.length)+" ")])},kt=[],Et={name:"ProgressBar",computed:Object(O["c"])(["allQuestions","getSet","getSelectedQuestionIndex","getProgress"])},$t=Et,At=(n("9889"),Object(a["a"])($t,Qt,kt,!1,null,null,null)),Lt=At.exports,qt={name:"Exam",components:{Question:Dt,ProgressBar:Lt},computed:Object(O["c"])(["getSet"])},Mt=qt,Nt=Object(a["a"])(Mt,yt,Ot,!1,null,null,null),It=Nt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result page"},[t._m(0),n("div",{staticClass:"underline"}),n("ul",[n("li",[t._m(1),t._v(" "),n("div",[n("span",[t._v(t._s(t.correctQuestions.length)+" / "+t._s(t.getSet.length))])])]),n("li",[t._m(2),t._v(" "),n("div",[n("span",[t._v(t._s(t.wrongQuestions.length)+" / "+t._s(t.getSet.length))])])]),n("li",[t._m(3),n("div",[t.correctQuestions.length>=t.getSet.length/2?n("span",[t._v("Passed")]):n("span",[t._v("Failed")]),n("span",[t._v("("+t._s(Math.round(100*t.correctQuestions.length/t.getSet.length))+"%)")])])])]),n("router-link",{attrs:{to:"/review"}},[n("button",[t._v("Review your answers")])])],1)},Rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("div",[t._v("Your practice")]),n("div",[t._v("is finished")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Correct Questions")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Wrong Questions")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("Status")])])}],Tt={name:"Finish",mounted:function(){g["a"].to("h1 div",{y:0,opacity:1,duration:.5,stagger:.25}),g["a"].from(".underline",{width:0,delay:.5}),g["a"].to("ul",{y:0,opacity:1,delay:1}),g["a"].to("ul li div span",{x:0,opacity:1,delay:1.5,stagger:.25})},methods:Object(O["b"])(["reset"]),computed:Object(O["c"])(["getSet","correctQuestions","wrongQuestions"])},Ft=Tt,Ut=(n("f59b"),Object(a["a"])(Ft,Bt,Rt,!1,null,null,null)),zt=Ut.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"review page"},[t._m(0),n("div",{staticClass:"underline"}),t._l(t.getSet,(function(e,r){return n("div",{key:e._id,staticClass:"question"},[n("h3",[t._v(t._s(r+1)+". "+t._s(e.text))]),n("ol",t._l(e.choices,(function(e){return n("li",{key:e.text,class:e.chosen&&!e.correct?"wrong":e.correct?"correct":""},[t._v(" "+t._s(e.text)+" "),n("div",{staticClass:"overlay"})])})),0)])})),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"route-btn",on:{click:function(e){return t.reset()}}},[t._v("Back to Home")])])],2)},Ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("div",[t._v("Review")]),n("div",[t._v("your answers")])])}];function Jt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Yt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Jt(Object(n),!0).forEach((function(e){Object($["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Gt={name:"Review",mounted:function(){g["a"].to("h1 div",{y:0,opacity:1,duration:.5,stagger:.25}),g["a"].from(".underline",{width:0,delay:.5}),g["a"].to("h3",{y:0,opacity:1,delay:1}),g["a"].to("ol li",{y:0,opacity:1,delay:1.25,stagger:.25}),g["a"].to("ol li.correct, ol li.wrong",{color:"white",delay:2.5}),g["a"].to("ol li .overlay",{width:"calc(100% + 2rem)",delay:2.5})},methods:Object(O["b"])(["reset"]),computed:Yt({},Object(O["c"])(["getSet","correctQuestions"]))},Kt=Gt,Vt=(n("f429"),Object(a["a"])(Kt,Wt,Ht,!1,null,null,null)),Xt=Vt.exports;r["a"].use(f["a"]);var Zt=[{path:"/",name:"home",component:Q},{path:"/discipline",name:"discipline",component:I},{path:"/practice",name:"practice",component:it},{path:"/sets",name:"sets",component:bt},{path:"/exam",name:"exam",component:It},{path:"/finish",name:"finish",component:zt},{path:"/review",name:"review",component:Xt}],te=new f["a"]({mode:"history",base:"",routes:Zt}),ee=te;n("05a5");r["a"].config.productionTip=!1,new r["a"]({router:ee,store:_,render:function(t){return t(l)}}).$mount("#app")},6817:function(t,e,n){"use strict";var r=n("6bf2"),i=n.n(r);i.a},"6a5f":function(t,e,n){},"6bf2":function(t,e,n){},9889:function(t,e,n){"use strict";var r=n("eae7"),i=n.n(r);i.a},a012:function(t,e,n){t.exports=n.p+"img/Pathology.1df6af6a.jpg"},b5a1:function(t,e,n){var r={"./Anatomy.jpg":"4145","./Microbiology.jpg":"0ee6","./Pathology.jpg":"a012","./Physiology.jpg":"407d"};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id="b5a1"},bb4e:function(t,e,n){},c302:function(t,e,n){"use strict";var r=n("ef2f"),i=n.n(r);i.a},cf25:function(t,e,n){"use strict";var r=n("fea6"),i=n.n(r);i.a},e44f:function(t,e,n){"use strict";var r=n("1853"),i=n.n(r);i.a},e536:function(t,e,n){},e5db:function(t,e,n){},eae7:function(t,e,n){},ec40:function(t,e,n){"use strict";var r=n("18dd"),i=n.n(r);i.a},ef2f:function(t,e,n){},f429:function(t,e,n){"use strict";var r=n("6a5f"),i=n.n(r);i.a},f59b:function(t,e,n){"use strict";var r=n("3131"),i=n.n(r);i.a},fea6:function(t,e,n){}});
//# sourceMappingURL=app.d411f390.js.map