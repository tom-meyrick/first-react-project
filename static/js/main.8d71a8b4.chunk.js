(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[0],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),i=(a(93),a(31)),s=a(15),u=(a(94),a(8)),o=a(9),m=a(11),h=a(10),d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children;return l.a.createElement("header",{className:"jumbotron"},l.a.createElement("h1",null,"Hello ",e))}}]),a}(n.Component),p=function(e){var t=e.children;return l.a.createElement("article",{className:"col-md-6"},l.a.createElement("p",null,t||"Hello World"))},b=a(7),f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={isGreen:!0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({isGreen:!this.state.isGreen})}},{key:"render",value:function(){var e=this.state.isGreen?"green":this.props.color;return l.a.createElement("figure",null,l.a.createElement("div",{onClick:this.handleClick,style:{background:e,width:200,height:200}}))}}]),a}(n.Component);f.defaultProps={color:"green"};var v=f,E=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.names;return e?l.a.createElement("ul",{onClick:function(){return console.log("Hello World")},className:"list-group"},e.map((function(e,t){return l.a.createElement("li",{className:"list-group-item",key:t},e)}))):l.a.createElement("p",null,"Nothing to see here")}}]),a}(n.Component),k=function(e){var t=e.items;return l.a.createElement(l.a.Fragment,null,t.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.price.toFixed(2)))})))},C=function(e){var t=e.items;return l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Item"),l.a.createElement("th",{scope:"col"},"Price"))),l.a.createElement("tbody",null,l.a.createElement(k,{items:t})))},j=[{name:"Coffee",price:2.1},{name:"Bananas",price:3.5},{name:"Milk",price:250.65},{name:"The Great Milk Shortage by Simon Schama",price:12.99}],O=function(e){var t=e.square;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null,"Tom"),l.a.createElement(p,null,"That's All Folks"),t?l.a.createElement(v,{color:"hotpink"}):null,l.a.createElement(E,{names:["Jim","Mike","Angela"]}),l.a.createElement(C,{items:j}))};O.defaultProps={square:!0};var g=O,y=function(){return l.a.createElement("h1",{className:"col-md-12"},"My App")},N=function(){return l.a.createElement("aside",{className:"col-md-4"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior."),l.a.createElement("img",{class:"img-thumbnail",src:"https://64.media.tumblr.com/ea3884f17979500c2406fd4d21891195/tumblr_mr4humiiCH1r4xjo2o1_250.gif"}))},S=[1,2,3,4],w=function(){return l.a.createElement("ul",{className:"list-group"},S.map((function(e,t){return l.a.createElement("li",{className:"list-group-item",key:t},e)})))},x=[1,2,3,4],T=function(){return l.a.createElement("ul",{className:"pagination mt-4"},x.map((function(e,t){return l.a.createElement("li",{className:"page-item",key:t},l.a.createElement("a",{className:"page-link",href:"/page/"+e},e))})))},D=function(){return l.a.createElement("main",{className:"col-md-8"},l.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huius, Lyco, oratione locuples, rebus ipsis ielunior."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),l.a.createElement(w,null),l.a.createElement(T,null))},F=function(){return l.a.createElement("body",{className:"mt-4"},l.a.createElement(y,null),l.a.createElement("div",{className:"row"},l.a.createElement(N,null),l.a.createElement(D,null)))},L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={clicked:!1},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({clicked:!this.state.clicked})}},{key:"render",value:function(){return l.a.createElement("header",{onClick:this.handleClick,className:"jumbotron"},this.state.clicked?"Clicked":"Not Clicked")}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={initial:!0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({initial:!this.state.initial})}},{key:"render",value:function(){var e=this.state.initial?this.props.initial:this.props.alternate;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,e),l.a.createElement("button",{onClick:this.handleClick},"Click here"))}}]),a}(n.Component),G=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={counter:n.props.initial},n.plus=n.plus.bind(Object(b.a)(n)),n.minus=n.minus.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"plus",value:function(){this.state.counter<this.props.max&&this.setState({counter:this.state.counter+1})}},{key:"minus",value:function(){this.state.counter>0&&this.setState({counter:this.state.counter-1})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,this.state.counter),l.a.createElement("button",{onClick:this.plus},"+"),l.a.createElement("button",{onClick:this.minus},"-"))}}]),a}(n.Component),H=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={counter:0},n.plus=n.plus.bind(Object(b.a)(n)),n.minus=n.minus.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"plus",value:function(){this.state.counter<this.props.max&&this.setState({counter:this.state.counter+this.props.step})}},{key:"minus",value:function(){this.state.counter>0&&this.setState({counter:this.state.counter-this.props.step})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,this.state.counter),l.a.createElement("button",{onClick:this.plus},"+"),l.a.createElement("button",{onClick:this.minus},"-"))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={position:0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({position:this.state.position+this.props.jump})}},{key:"render",value:function(){var e=this.state.position;return l.a.createElement("button",{onClick:this.handleClick,style:{marginTop:e}},"Jump")}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={currentIndex:0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({currentIndex:(this.state.currentIndex+1)%this.props.names.length})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,this.props.names[this.state.currentIndex]),l.a.createElement("button",{onClick:this.handleClick},"Next"))}}]),a}(n.Component),P=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={count:0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleClick)}},{key:"handleClick",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){return l.a.createElement("p",{onClick:this.handleClick},this.state.count)}}]),a}(n.Component),W=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={value1:1,value2:1},n.handle1=n.handle1.bind(Object(b.a)(n)),n.handle2=n.handle2.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title=this.state.value1+this.state.value2}},{key:"componentDidUpdate",value:function(){document.title=this.state.value1+this.state.value2}},{key:"handle1",value:function(){this.setState({value1:this.state.value1+1})}},{key:"handle2",value:function(){this.setState({value2:this.state.value2+1})}},{key:"render",value:function(){var e=this.state.value1,t=this.state.value2;return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("p",null,l.a.createElement("button",{onClick:this.handle1,className:"btn btn-lg btn-danger"},"+"),l.a.createElement("span",{className:"alert alert-danger mr-2 ml-2"},e)),l.a.createElement("p",null,l.a.createElement("button",{onClick:this.handle2,className:"btn btn-lg btn-success"},"+"),l.a.createElement("span",{className:"alert alert-success mr-2 ml-2"},t)))}}]),a}(n.Component),J=(a(95),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={input:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({input:e.currentTarget.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"text",value:this.state.input,onChange:this.handleChange}),l.a.createElement("p",null,this.state.input.length))}}]),a}(n.Component)),B=a(82),q=a(19),U=a(28),_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={input:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleColor=n.handleColor.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({input:e.currentTarget.value})}},{key:"handleColor",value:function(e){var t;return e>0&&e<=9?t="red":e>9&&e<=16?t="orange":e>16&&(t="green"),t}},{key:"render",value:function(){var e=this.state.input,t=this.handleColor(e.length);return l.a.createElement("div",{className:"form-group",style:{background:t}},l.a.createElement(q.a.Group,{controlId:"formBasicPassword"},l.a.createElement(q.a.Label,null,"Password"),l.a.createElement(q.a.Control,{className:"text",type:"password",value:e,onChange:this.handleChange})),l.a.createElement(U.a,{variant:"primary"},"Password length ",l.a.createElement(B.a,{variant:"light"},e.length)))}}]),a}(n.Component),$=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={fahrenheit:0,celsius:0},n.handleF=n.handleF.bind(Object(b.a)(n)),n.handleC=n.handleC.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleF",value:function(e){this.setState({fahrenheit:e.currentTarget.value,celsius:5*(+e.currentTarget.value-32)/9})}},{key:"handleC",value:function(e){this.setState({celsius:e.currentTarget.value,fahrenheit:9*+e.currentTarget.value/5+32})}},{key:"render",value:function(){var e=this.state,t=e.fahrenheit,a=e.celsius;return l.a.createElement(q.a.Group,null,l.a.createElement(q.a.Label,{for:"fahrenheit"},"Fahrenheit"),l.a.createElement(q.a.Control,{className:"form-control",type:"number",value:t,onChange:this.handleF,name:"fahrenheit"}),l.a.createElement(q.a.Label,{for:"celsius"},"Celsius"),l.a.createElement(q.a.Control,{className:"form-control",type:"number",value:a,onChange:this.handleC,name:"celsius"}))}}]),a}(n.Component),z=a(49),K=a(70),Q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={todo:"",list:[]},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({todo:e.currentTarget.value})}},{key:"handleClick",value:function(e){e.preventDefault(),this.setState({todo:"",list:[].concat(Object(z.a)(this.state.list),[this.state.todo])})}},{key:"render",value:function(){var e=this.state,t=e.todo,a=e.list;return l.a.createElement("div",{className:"form-group"},l.a.createElement(K.a,{as:"ul"},a.map((function(e,t){return l.a.createElement(K.a.Item,{as:"li",key:t},e)}))),l.a.createElement(q.a.Group,null,l.a.createElement(q.a.Control,{type:"text",className:"form-control",placeholder:"Add todo",value:t,onChange:this.handleChange}),l.a.createElement(U.a,{onClick:this.handleClick},"Add")))}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={number:0,list:[]},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({number:e.currentTarget.value})}},{key:"handleClick",value:function(e){e.preventDefault(),this.setState({number:0,list:[].concat(Object(z.a)(this.state.list),[this.state.number])})}},{key:"render",value:function(){var e=this.state,t=e.number,a=e.list;return l.a.createElement("div",{className:"form-group"},l.a.createElement("ul",null,a.map((function(e,t){return l.a.createElement("li",{key:t},e)}))),l.a.createElement("form",null,l.a.createElement("input",{type:"number",className:"form-control",placeholder:"Add",value:t,onChange:this.handleChange}),l.a.createElement("button",{onClick:this.handleClick},"Add")),l.a.createElement("p",null,a.reduce((function(e,t){return+e+ +t}),0)))}}]),a}(n.Component),V=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={number:0},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({number:e.currentTarget.value})}},{key:"render",value:function(){var e=this.state.number,t=this.props.transform;return l.a.createElement("div",null,l.a.createElement("p",null,t(e)),l.a.createElement("input",{className:"form-control",type:"number",value:e,onChange:this.handleChange,name:"fahrenheit"}))}}]),a}(n.Component),X=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("li",{className:"list-group-item"},l.a.createElement(i.b,{to:"/first"},"First")),l.a.createElement("li",{className:"list-group-item"},l.a.createElement(i.b,{to:"/second"},"Second")),l.a.createElement("li",{className:"list-group-item"},l.a.createElement(i.b,{to:"/third"},"Third")))}}]),a}(n.Component),Y=function(){return l.a.createElement("p",null,"Page not found")},Z=a(87),ee=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={progress:0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({progress:this.state.progress+10})}},{key:"render",value:function(){var e=this.state.progress;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Z.a,{now:e,label:"".concat(e,"%")}),l.a.createElement(U.a,{variant:"primary",onClick:this.handleClick,disabled:100===e},"More"))}}]),a}(n.Component),te=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={position:0},n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(){this.setState({position:this.state.position+this.props.jump})}},{key:"render",value:function(){var e=this.state.position;return l.a.createElement(U.a,{variant:"warning",onClick:this.handleClick,style:{marginTop:e}},"Jump")}}]),a}(n.Component),ae=a(67),ne=a.n(ae),le=a(86),re=a(66),ce=a.n(re),ie=(a(104),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleChangeOne=function(e){n.setState({firstDate:e})},n.handleChangeTwo=function(e){n.setState({secondDate:e})},n.state={firstDate:new Date,secondDate:new Date},n.handleChangeOne=n.handleChangeOne.bind(Object(b.a)(n)),n.handleChangeTwo=n.handleChangeTwo.bind(Object(b.a)(n)),n}return Object(o.a)(a,[{key:"calculateDays",value:function(e,t){return e=ce()(e),(t=ce()(t)).diff(e,"days")}},{key:"render",value:function(){var e=this.state,t=e.firstDate,a=e.secondDate,n=(e.days,this.calculateDays(t,a));return l.a.createElement(l.a.Fragment,null,l.a.createElement(ne.a,{selected:this.state.firstDate,onChange:this.handleChangeOne}),l.a.createElement(ne.a,{selected:this.state.secondDate,onChange:this.handleChangeTwo}),l.a.createElement(le.a,{variant:"primary"},"".concat(n," days")))}}]),a}(l.a.Component)),se=["Dave","Ariel","Sheila","Nigel","Peter"],ue=function(e){return e*e},oe=function(e){return+e+ +e},me=function(){return l.a.createElement(i.a,null,l.a.createElement(ie,null),l.a.createElement(te,{jump:100}),l.a.createElement(ee,null),l.a.createElement(g,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(V,{transform:oe}),l.a.createElement(V,{transform:ue}),l.a.createElement(R,null),l.a.createElement(Q,null)),l.a.createElement(s.a,{path:"/first"},l.a.createElement($,null),l.a.createElement(_,null),l.a.createElement(J,null)),l.a.createElement(s.a,{path:"/second"},l.a.createElement(W,null),l.a.createElement(P,null),l.a.createElement(I,{jump:100}),l.a.createElement(L,null)),l.a.createElement(s.a,{path:"/third"},l.a.createElement(A,{initial:"Hello",alternate:"World"}),l.a.createElement(G,{initial:50,max:100}),l.a.createElement(H,{step:5,max:100}),l.a.createElement(M,{names:se}),l.a.createElement(F,null)),l.a.createElement(s.a,{path:"/square/:color",render:function(e){var t=e.match;return l.a.createElement(v,{color:t.params.color})}}),l.a.createElement(s.a,{path:"/steps/:max/:step",render:function(e){var t=e.match;return l.a.createElement(H,{max:+t.params.max,step:+t.params.step})}}),l.a.createElement(Y,null)),l.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(160)},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.8d71a8b4.chunk.js.map