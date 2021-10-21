(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{48:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r,c,a,o,i,s,l,b=t(0),u=t.n(b),d=t(15),j=t.n(d),m=t(6),f=t(23),p=t(21),O=function(e){return e.contacts.items},x=function(e){return e.contacts.filter},h=function(e){var n=O(e),t=x(e).toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},g=t(7),v=t(24),y=t.n(v),C={addContact:Object(g.b)("contact/add",(function(e){return{payload:{name:e.name,number:e.number,id:y.a.generate()}}})),removeContact:Object(g.b)("contact/remove"),filterChange:Object(g.b)("contact/filterChange")},w=t(2),k=t(3),T=k.a.form(r||(r=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),z=k.a.label(c||(c=Object(w.a)(["\n  font-weight: 700;\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryText})),A=k.a.input(a||(a=Object(w.a)(["\n  border-radius: 5px;\n  margin-left: 10px;\n"]))),S=k.a.button(o||(o=Object(w.a)(["\n  margin: 10px;\n  border: ",";\n  border-radius: 23px;\n  cursor: pointer;\n  padding: 12px 24px;\n  color: ",";\n  transition: all 250ms ease-in;\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(e){return"1px solid ".concat(e.theme.colors.secondaryText)}),(function(e){return"".concat(e.theme.colors.black)})),L=t(1);function J(){var e=Object(b.useState)(""),n=Object(p.a)(e,2),t=n[0],r=n[1],c=Object(b.useState)(""),a=Object(p.a)(c,2),o=a[0],i=a[1],s=Object(m.c)(O),l=Object(m.b)(),u=function(e){var n=e.target,t=n.name,c=n.value;switch(t){case"name":r(c);break;case"number":i(c)}},d=function(){r(""),i("")};return Object(L.jsxs)(T,{onSubmit:function(e){if(e.preventDefault(),s.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return d(),void alert("".concat(t," is already in contacts"));l(C.addContact({name:t,number:o})),d()},children:[Object(L.jsxs)(z,{children:["Name:",Object(L.jsx)(A,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:u,value:t,required:!0})]}),Object(L.jsxs)(z,{children:["Phone:",Object(L.jsx)(A,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440, \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +.",onChange:u,value:o,required:!0})]}),Object(L.jsx)(S,{type:"submit",children:"Add"})]})}var Z,q,B,E,F,M,P=k.a.li(i||(i=Object(w.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 5px;\n  /* border: ","; */\n"])),(function(e){return"1px solid ".concat(e.theme.colors.secondaryText)})),D=k.a.span(s||(s=Object(w.a)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.2;\n  color: ",";\n"])),(function(e){return"".concat(e.theme.colors.primaryText)})),H=k.a.button(l||(l=Object(w.a)(["\n  margin: 10px;\n  border: 1px solid grey;\n  border-radius: 23px;\n  padding: 12px 24px;\n  color: ",";\n  transition: all 250ms ease-in;\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(e){return"".concat(e.theme.colors.black)})),I=function(e){var n=e.name,t=e.number,r=e.remove;return Object(L.jsxs)(P,{children:[Object(L.jsx)(D,{children:n}),Object(L.jsx)(D,{children:t}),Object(L.jsx)(H,{type:"button",onClick:r,children:"remove"})]})},K=k.a.ul(Z||(Z=Object(w.a)(["\n  padding: 0;\n  margin: 0;\n"]))),N=function(){var e=Object(m.c)(h),n=Object(m.b)();return Object(L.jsx)(K,{children:e.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(L.jsx)(I,{id:t,name:r,number:c,remove:function(){return function(e){return n(C.removeContact(e))}(t)}},t)}))})},R=k.a.section(q||(q=Object(w.a)(["\n  margin: 0 auto;\n  align-items: center;\n  text-align: center;\n  padding: 10vh 0;\n  border: ",";\n"])),(function(e){return"1px solid ".concat(e.theme.colors.secondaryText)})),$=k.a.h2(B||(B=Object(w.a)(["\n  padding: 5px;\n  font-weight: 900;\n  font-size: 16px;\n  line-height: 1.36;\n  letter-spacing: 0.06em;\n  color: ",";\n  text-transform: uppercase;\n"])),(function(e){return"".concat(e.theme.colors.primaryText)})),G=function(e){var n=e.children,t=e.title;return Object(L.jsxs)(R,{children:[Object(L.jsx)($,{children:t}),n]})},Q=k.a.label(E||(E=Object(w.a)(["\n  font-weight: 700;\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryText})),U=k.a.input(F||(F=Object(w.a)(["\n  border-radius: 5px;\n  margin-left: 10px;\n"]))),V=function(){var e=Object(m.c)(x),n=Object(m.b)();return Object(L.jsxs)(Q,{children:["Filter:",Object(L.jsx)(U,{type:"text",value:e,onChange:function(e){return n(C.filterChange(e.target.value))}})]})},W=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(G,{title:"Phonebook",children:Object(L.jsx)(J,{})}),Object(L.jsxs)(G,{title:"Contacts",children:[Object(L.jsx)(V,{}),Object(L.jsx)(N,{})]})]})},X=t(17),Y=t(18),_=t(4),ee=Object(g.c)([].concat([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),(M={},Object(Y.a)(M,C.addContact,(function(e,n){var t=n.payload;return[].concat(Object(X.a)(e),[t])})),Object(Y.a)(M,C.removeContact,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),M)),ne=Object(g.c)("",Object(Y.a)({},C.filterChange,(function(e,n){return n.payload}))),te=Object(_.b)({items:ee,filter:ne}),re=t(25),ce=t.n(re),ae=t(8),oe=t(26),ie={key:"contacts",storage:t.n(oe).a,blacklist:["filter"]},se=[].concat(Object(X.a)(Object(g.d)({serializableCheck:{ignoredActions:[ae.a,ae.f,ae.b,ae.c,ae.d,ae.e]}})),[ce.a]),le=Object(g.a)({reducer:{contacts:Object(ae.g)(ie,te)},middleware:se,devTools:!1}),be=Object(ae.h)(le),ue=(t(48),t(49),t(51)),de=Object.freeze({colors:{white:"#ffffff",black:"#010101",green:"#4caf50",red:"#f44336",blue:"#2196f3",primaryText:"#212121",secondaryText:"#757575"},spacing:function(e){return"".concat(4*e,"px")}});j.a.render(Object(L.jsx)(u.a.StrictMode,{children:Object(L.jsx)(m.a,{store:le,children:Object(L.jsx)(f.a,{loading:null,persistor:be,children:Object(L.jsx)(ue.b,{theme:de,children:Object(L.jsx)(W,{})})})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.401e9cb6.chunk.js.map