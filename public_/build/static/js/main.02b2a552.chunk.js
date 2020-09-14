(this["webpackJsonpexpensetrack-ts"]=this["webpackJsonpexpensetrack-ts"]||[]).push([[0],{18:function(e,t,n){e.exports=n(35)},23:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(16),o=n.n(c);n(23);var i=function(){return r.a.createElement("div",{"data-testid":"heading",style:{fontSize:"20px"}},"Expense Tracker Project with TypeScript")},l=function(){return r.a.createElement("h3",null,"Calculate your Expenses Dynamically")},s=n(8),u=n(17),d=n(13),m=function(e,t){switch(t.type){case"delete":return{transactions:e.transactions.filter((function(e){return e.id!==t.id}))};case"add":return Object(d.a)(Object(d.a)({},e),{},{transactions:[t.transaction].concat(Object(u.a)(e.transactions))});default:return e}},f={transactions:[{id:1,title:"IPhone",amount:450}],deleteTransaction:function(e){},addTransaction:function(e){}},p=Object(a.createContext)(f),v=function(e){var t=e.children,n=Object(a.useReducer)(m,f),c=Object(s.a)(n,2),o=c[0],i=c[1];return r.a.createElement(p.Provider,{value:{transactions:o.transactions,deleteTransaction:function(e){i({type:"delete",id:e})},addTransaction:function(e){i({type:"add",transaction:e})}}},t)},h=function(){var e=Object(a.useContext)(p).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",{className:"balance"},r.a.createElement("h4",null,"Balance:"),r.a.createElement("h1",{"data-testid":"blnc"},"$",e))},E=function(){var e=Object(a.useContext)(p).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",null,r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{"data-testid":"income",className:"money plus"},"$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{"data-testid":"expense",className:"money minus"},"$",n))))},b=function(e){var t=e.id,n=e.title,c=e.amount,o=Object(a.useContext)(p).deleteTransaction,i=c>0?"+":"-";return r.a.createElement("div",null,r.a.createElement("li",{className:c>0?"plus":"minus"},n,r.a.createElement("span",null,i,"$",Math.abs(c)),r.a.createElement("button",{onClick:function(){return o(t)},className:"delete-btn"},"x")))};var g=function(){var e=Object(a.useContext)(p).transactions;return r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{"data-testid":"list",className:"list"},e.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,title:e.title,amount:e.amount})}))))},w=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(a.useContext)(p).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),title:n,amount:+l};d(t)},"data-testid":"transaction-form"},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,"data-testid":"name",onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:l,onChange:function(e){return u(Number(e.target.value))},"data-testid":"amount",placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))},x=(n(24),n(12)),k=n.n(x);k.a.initializeApp({apiKey:"AIzaSyCPvRWF7a5zwiUsVUTwWDDDbg_wn_DruOE",authDomain:"expense-tracker-5cb9b.firebaseapp.com",databaseURL:"https://expense-tracker-5cb9b.firebaseio.com",projectId:"expense-tracker-5cb9b",storageBucket:"expense-tracker-5cb9b.appspot.com",messagingSenderId:"842076845859",appId:"1:842076845859:web:f1da178edc54c6d3993e96"});var y=k.a;var j=function(){var e=y.messaging();return e.requestPermission().then((function(){return e.getToken()})).then((function(e){alert(e),prompt("token",e),console.log("token",e)})),r.a.createElement(v,null,r.a.createElement(i,null),r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(E,null),r.a.createElement(g,null),r.a.createElement(w,null)),r.a.createElement(l,null))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.02b2a552.chunk.js.map