(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,a){e.exports={todolist_container:"TodoList_todolist_container__2qPoq",title:"TodoList_title__2jbcz",todo_item:"TodoList_todo_item__3VvMs",filter_box:"TodoList_filter_box__1mOot",current_filter_item:"TodoList_current_filter_item__3JsId",filter_item:"TodoList_filter_item__1vz3n"}},16:function(e,t,a){e.exports={clock_container:"DigitalClock_clock_container__3h_D-",normal:"DigitalClock_normal__A7o26",current:"DigitalClock_current__DSuF3",clock_item:"DigitalClock_clock_item__1og1s"}},17:function(e,t,a){e.exports={home:"Home_home__1JeZt",home_content:"Home_home_content__1SXZc"}},20:function(e,t,a){e.exports={demo_detail_container:"DemoDetail_demo_detail_container__F5hOV",container_title:"DemoDetail_container_title__1os-W",left_arrow:"DemoDetail_left_arrow__3eOo5"}},21:function(e,t,a){e.exports={addtodo_box:"AddTodo_addtodo_box__2wftH",input_box:"AddTodo_input_box__1WOtc",submit_button:"AddTodo_submit_button__3I_5u"}},26:function(e,t,a){e.exports={copy_right_container:"CopyRight_copy_right_container__1fEBD",github_link:"CopyRight_github_link__3UdTp"}},27:function(e,t,a){e.exports={title:"App_title__2C-7r",app:"App_app__3BT4Y",content:"App_content__11LHs"}},4:function(e,t,a){e.exports={demo_list_container:"DemoList_demo_list_container__3WI4P",container_title:"DemoList_container_title__3ThCg",style_demo_item:"DemoList_style_demo_item__1rF4-",date:"DemoList_date__3S7UX",info:"DemoList_info__1ddhH",name:"DemoList_name__34OQT",uncompleted:"DemoList_uncompleted__2jWrP",completed:"DemoList_completed__203Ir",tags_list:"DemoList_tags_list__uBnZ-",tags_item:"DemoList_tags_item__1l1_z",desc:"DemoList_desc__37z2j",btn:"DemoList_btn__2AmhC"}},42:function(e,t,a){e.exports=a.p+"static/media/avatar.50a374e0.jpg"},48:function(e,t,a){e.exports=a(76)},53:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(18),r=a.n(o),s=(a(53),a(12)),c=a(2),u=a(4),m=a.n(u),l=a(10),d="effect",p="functional";a(39);var _=Object(l.b)((function(e){return{list:e.demoList?e.demoList:[]}}),(function(e){return{getDemoList:function(t){e({type:"REQUEST_DEMO_LIST",demoType:t})}}}))((function(e){var t=e.getDemoList,a=e.list,i=Object(c.f)().routerid;return t("effect"===i?d:p),n.a.createElement("div",{className:m.a.demo_list_container},n.a.createElement("div",{className:m.a.container_title},"effect"===i?"\u7279\u6548\u578bDEMO":"\u529f\u80fd\u578bDEMO"),a.map((function(e,t){return n.a.createElement("div",{className:m.a.style_demo_item,key:e.component},n.a.createElement("div",{className:m.a.date},e.date),n.a.createElement("div",{className:m.a.info},n.a.createElement("h3",{className:m.a.name},n.a.createElement("span",null,e.name),n.a.createElement("span",{className:e.completed?m.a.completed:m.a.uncompleted},e.completed?"\u5df2\u5b8c\u6210":"\u5f00\u53d1\u4e2d")),n.a.createElement("div",{className:m.a.tags_list},e.tags.map((function(e){return n.a.createElement("span",{className:m.a.tags_item,key:e},e)}))),n.a.createElement("div",{className:m.a.desc},e.desc),e.completed?n.a.createElement(s.b,{to:"/portfolio/".concat(i,"/").concat(e.component)},n.a.createElement("span",{className:m.a.btn},"\u6548\u679c\u5c55\u793a")):n.a.createElement("div",{className:m.a.btn},"\u8fd8\u672a\u5b8c\u6210\uff0c\u656c\u8bf7\u671f\u5f85")))})))})),v=a(20),f=a.n(v),E=a(11),g=a.n(E),S=function(e){var t=e.onClick,a=e.completed,i=e.text,o=e.deleteTodo;return n.a.createElement("li",{className:g.a.todo_item},n.a.createElement("span",{className:g.a.todo_item_content,style:{textDecoration:a?"line-through":"none"},onClick:t},i),n.a.createElement("span",{className:g.a.close_btn,onClick:o},"x"))},b=function(e){var t=e.active,a=e.children,i=e.onClick;return t?n.a.createElement("span",{className:g.a.current_filter_item},a):n.a.createElement("a",{href:"",onClick:function(e){e.preventDefault(),i()},className:g.a.filter_item},a)},h=Object(l.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(b),C=a(21),D=a.n(C),N=function(e){var t,a=e.dispatch;return n.a.createElement("div",{className:D.a.addtodo_box},n.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),t.value.trim())&&(a({type:"ADD_TODO",id:1,text:t.value}),t.value="")}},n.a.createElement("input",{ref:function(e){t=e},className:D.a.input_box,placeholder:"\u8f93\u5165\u5f85\u529e\u4e8b\u9879"}),n.a.createElement("button",{type:"submit",className:D.a.submit_button},"\u6dfb\u52a0")))},x=N=Object(l.b)()(N),L=function(e){var t=e.todos,a=e.onTodoClick,i=e.onDeleteClick;return n.a.createElement("div",{className:g.a.todolist_container},n.a.createElement(x,null),n.a.createElement("div",{className:g.a.filter_box},"\u663e\u793a: ",n.a.createElement(h,{filter:"SHOW_ALL"},"\u5168\u90e8"),", ",n.a.createElement(h,{filter:"SHOW_ACTIVE"},"\u5f85\u5b8c\u6210"),", ",n.a.createElement(h,{filter:"SHOW_COMPLETED"},"\u5df2\u5b8c\u6210")),n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement(S,Object.assign({key:t},e,{onClick:function(){return a(t)},deleteTodo:function(){return i(t)}}))}))))},T=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}))}},O=Object(l.b)((function(e){return{todos:T(e.todos,e.visibilityFilter)}}),(function(e){return{onTodoClick:function(t){e({type:"TOGGLE_TODO",index:t})},onDeleteClick:function(t){e({type:"DELETE_TODO",index:t})}}}))(L),q=a(40),y=a(41),k=a(47),A=a(46),M=a(16),J=a.n(M),j=function(e){Object(k.a)(a,e);var t=Object(A.a)(a);function a(e){var i;return Object(q.a)(this,a),(i=t.call(this,e)).getCurrentTime=function(){var e=i.state.clockArray,t=new Date,a=t.getHours();a>19&&(e[1]=[0,1,2,3]);var n=(a=a<9?"0"+a:a+"").split(""),o=t.getMinutes(),r=(o=o<9?"0"+o:o+"").split(""),s=t.getSeconds(),c=(s=s<9?"0"+s:s+"").split(""),u=n.concat(r,c);i.setState({h:n,m:r,s:c,currentTime:u,clockArray:e})},i.state={clockArray:[[0,1,2],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9]]},i}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.getCurrentTime()}),200)}},{key:"render",value:function(){var e=this.state,t=e.clockArray,a=e.currentTime,i=void 0===a?[]:a;return n.a.createElement("div",{className:J.a.clock_container},t.map((function(e,t){return n.a.createElement("div",{className:J.a.clock_item},n.a.createElement("div",{key:e[0].toString()},e.map((function(e){return n.a.createElement("div",{className:e==i[t]?J.a.current:J.a.normal,key:e},e)}))))})))}}]),a}(i.Component),H={effect:[{name:"\u52a8\u6001\u6570\u5b57\u65f6\u949f",desc:"\u4f7f\u7528css-animation\u5b9e\u73b0\u7684\u52a8\u6001\u6570\u5b57\u65f6\u949f",tags:["CSS","CSS-animation","JavaScript"],date:"May 3, 2019",component:"digitalclock",completed:!0},{name:"3D\u65cb\u8f6c\u8f6e\u64ad",desc:"\u4f7f\u7528css-animation\u5b9e\u73b0\u7684\u52a8\u6001\u6570\u5b57\u65f6\u949f",tags:["CSS","CSS-animation","JavaScript"],date:"May 3, 2019",component:"RotateSwiper",completed:!1},{name:"\u56fe\u7247\u5012\u5f71\u6548\u679c",desc:"\u56fe\u7247\u5012\u5f71\u6548\u679c\u793a\u4f8b",tags:["CSS","CSS-animation","JavaScript"],date:"May 15, 2019",component:"PhotoReflection",completed:!1},{name:"\u6d4b\u8bd5",desc:"\u56fe\u7247\u5012\u5f71\u6548\u679c\u793a\u4f8b",tags:["CSS","CSS-animation","JavaScript"],date:"May 20, 2019",component:"Test1",completed:!1},{name:"\u6d4b\u8bd52",desc:"\u56fe\u7247\u5012\u5f71\u6548\u679c\u793a\u4f8b",tags:["CSS","CSS-animation","JavaScript"],date:"May 20, 2019",component:"Test2",completed:!1}],functional:[{name:"\u5546\u57ce\u5e38\u7528\u4fc3\u9500\u63d2\u4ef6",desc:"\u5546\u57ce\u8425\u9500\u6d3b\u52a8\u7ecf\u5e38\u4f7f\u7528\u7684\u4fc3\u9500\u63d2\u4ef6\uff0c\u76ee\u524d\u5305\u542b\u5927\u8f6c\u76d8\u3001\u7ea2\u5305\u96e8\u3001\u7b7e\u5230\u3001\u4e5d\u5bab\u683c\u3001\u6253\u5730\u9f20\uff0c\u540e\u7eed\u4f1a\u6301\u7eed\u66f4\u65b0...",tags:["CSS","CSS-animation","JavaScript"],date:"Jun 3, 2019",component:"SalesComponent",completed:!1},{name:"\u5b9e\u65f6\u804a\u5929",desc:"\u5728\u7ebf\u5b9e\u65f6\u901a\u8baf\u804a\u5929demo",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"RealTimeChat",completed:!1},{name:"\u4effwindows\u684c\u9762",desc:"windows\u684c\u9762\u6a21\u4eff\uff0c\u5305\u542b\u6709\u6709\u56fe\u6807\u7684\u62d6\u62fd\u3001\u5f39\u7a97\u7b49",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"WindowsDesktop",completed:!1},{name:"\u4eff\u5c0f\u7c73\u8ba1\u7b97\u5668",desc:"\u5c0f\u7c73\u8ba1\u7b97\u5668\u7684\u529f\u80fd\u6a21\u4eff",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"XMCalculator",completed:!1},{name:"\u97f3\u4e50\u64ad\u653e\u5668",desc:"\u4e00\u4e2a\u672c\u5730\u97f3\u4e50\u64ad\u653e\u7684\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u754c\u9762\u6a21\u4eff\u7f51\u6613\u4e91",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"AudioPlayer",completed:!1},{name:"\u89c6\u9891\u64ad\u653e\u5668",desc:"\u4e00\u4e2a\u672c\u5730\u89c6\u9891\u64ad\u653e\u7684\u89c6\u9891\u64ad\u653e\u5668",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"VideoPlayer",completed:!1},{name:"TodoList",desc:"\u5b66\u4e60react-redux\u65f6\u5236\u4f5c\u7684\u4e00\u4e2atodoList Demo",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"todolist",completed:!0}]},I={digitalclock:j,todolist:O},w=Object(c.g)((function(e){var t=Object(c.f)(),a=t.routerid,i=t.demo,o={};H[a].forEach((function(e){e.component===i&&(o=e)}));var r=I[i];return n.a.createElement("div",{className:f.a.demo_detail_container},n.a.createElement("div",{className:f.a.container_title},n.a.createElement("span",{onClick:function(){return e.history.goBack()},className:f.a.left_arrow}),n.a.createElement("span",null,o.name)),n.a.createElement(r,null))})),V=a(17),W=a.n(V),P=function(){return n.a.createElement("div",{className:W.a.home},n.a.createElement("div",{className:W.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."),n.a.createElement("div",{className:W.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."),n.a.createElement("div",{className:W.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."))},R=a(9),Q=a.n(R),B=a(42),F=a.n(B),z=function(){return n.a.createElement("div",{className:Q.a.left_nav},n.a.createElement("div",{className:Q.a.left_nav_title},n.a.createElement("img",{src:F.a,className:Q.a.avatar}),n.a.createElement("div",{className:Q.a.title},"\u4f5c\u54c1\u96c6")),n.a.createElement("div",{className:Q.a.left_nav_content},n.a.createElement(s.b,{to:"/",exact:!0,activeClassName:Q.a.nav_item_selected},n.a.createElement("div",{className:Q.a.nav_item},"\u9996\u9875")),n.a.createElement(s.b,{to:"/effect",activeClassName:Q.a.nav_item_selected},n.a.createElement("div",{className:Q.a.nav_item},"\u7279\u6548\u578b")),n.a.createElement(s.b,{to:"/functional",activeClassName:Q.a.nav_item_selected},n.a.createElement("div",{className:Q.a.nav_item},"\u529f\u80fd\u578b"))))},G=a(26),U=a.n(G),Z=function(){return n.a.createElement("div",{className:U.a.copy_right_container},"CopyRight \xa9 2020 ",n.a.createElement("a",{href:"https://github.com/Snail-Lu/react-project-template",className:U.a.github_link},"Snail-Lu"))},X=a(27),Y=a.n(X),K=function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:Y.a.app},n.a.createElement(z,null),n.a.createElement("div",{className:Y.a.content},n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/:routerid",exact:!0},n.a.createElement(_,null)),n.a.createElement(c.a,{path:"/:routerid/:demo",exact:!0},n.a.createElement(w,null)),n.a.createElement(c.a,{path:"/",exact:!0},n.a.createElement(P,null))),n.a.createElement(Z,null))))},$=a(45),ee=a(13);var te=Object(ee.combineReducers)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object($.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e,a){return a===t.index?Object.assign({},e,{completed:!e.completed}):e}));case"DELETE_TODO":return e.filter((function(e,a){return a!==t.index}));default:return e}},demoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_DEMO_LIST":return H[t.demoType];default:return e}}}),ae=a(43),ie=a(44),ne=[ae.a],oe=Object(ie.composeWithDevTools)({}),re=Object(ee.createStore)(te,oe(ee.applyMiddleware.apply(void 0,ne)));r.a.render(n.a.createElement(l.a,{store:re},n.a.createElement(K,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={left_nav:"LeftNav_left_nav__1G4TJ",left_nav_title:"LeftNav_left_nav_title__3hAwB",avatar:"LeftNav_avatar__OZU4q",title:"LeftNav_title__2nf-F",left_nav_content:"LeftNav_left_nav_content__3qZnf",nav_item:"LeftNav_nav_item__3QgB3",nav_item_selected:"LeftNav_nav_item_selected__3c8_X"}}},[[48,1,2]]]);
//# sourceMappingURL=main.4160f64c.chunk.js.map