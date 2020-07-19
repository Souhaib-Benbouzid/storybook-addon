(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1497:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(75),c=t(204),i=t(488),l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.pop();return function(e){var t=n.map((function(n){return n(e)}));return r.apply(void 0,Object(c.a)(t).concat([e]))}},u=function(e){return e.currentTheme},d=function(e){return e.themesList},m=l(u,d,(function(e,n){return n?n[e]:void 0})),s=l(d,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,n){return{name:Object(i.themeName)(e,n),theme:e}}))})),f=l(u,s,(function(e,n){return n?n[e]:void 0})),p=l(m,(function(e,n){var t=n.selectedValue;if(t){var r=t.name,a=t.namespace,o=t.type,c=a.reduce((function(e,n){return e[n]}),e);return{name:r,namespace:a,value:c[r],type:o}}})),g=t(489),h=t(30),v=t(2),y=t(490);function E(){var e=Object(h.a)(["\n  margin-left: 6px;\n  font-size: ",";\n  font-weight: ",";\n"]);return E=function(){return e},e}function b(){var e=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return e},e}function O(){var e=Object(h.a)(["\n  position: relative;\n  width: ",";\n  height: ",";\n  margin: 16px;\n"]);return O=function(){return e},e}function S(){var e=Object(h.a)(["\n  border: 1px solid ",";\n  ","\n  border-radius: ","px;\n  background-color: ",";\n  margin: ","px 0px;\n  padding: 0px;\n  width: 100%;\n  cursor: pointer;\n\n  :hover {\n    border: 1px solid ",";\n  }\n\n  display: flex;\n  flex-direction: ",";\n  justify-content: flex-start;\n  align-items: center;\n"]);return S=function(){return e},e}function x(){var e=Object(h.a)(["\n  overflow: auto;\n  height: 1px;\n  flex-grow: 1;\n  padding: ","px;\n"]);return x=function(){return e},e}function C(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n"]);return C=function(){return e},e}var I=Object(y.createSwatch)(v.styled),T=Object(v.styled)(o.Block)(C()),j=v.styled.div(x(),(function(e){return e.theme.layoutMargin})),_=v.styled.button(S(),(function(e){return e.theme.background.app}),(function(e){var n=e.current,t=e.theme;return n?"border-color: ".concat(t.color.secondary,";"):null}),(function(e){return e.theme.appBorderRadius}),(function(e){return e.theme.background.app}),(function(e){var n=e.theme;return Math.floor(n.layoutMargin/2)}),(function(e){return e.theme.appBorderColor}),(function(e){return e.single?"column":"row"})),w=v.styled.div(O(),(function(e){return e.single?"120px":"36px"}),(function(e){return e.single?"120px":"36px"})),A=v.styled.div(b()),k=v.styled.h4(E(),(function(e){return e.single?"32px":"16px"}),(function(e){return e.single?"bold":"normal"}));function R(){var e=Object(h.a)(["\n  background-color: ",";\n\n  padding: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]);return R=function(){return e},e}var B=v.styled.div(R(),(function(e){var n=e.theme;return e.footer?"#f3f3f3":n.background.app}),(function(e){return e.footer?"6px 8px":"4px 8px"})),L=function(e){var n=e.children,t=e.footer;return a.a.createElement(B,{footer:t},n)};L.__docgenInfo={description:"",methods:[],displayName:"Toolbar"};var M=L;function V(){var e=Object(h.a)(["\n  font-size: 12px;\n  margin: 0 4px;\n  font-weight: 600;\n  text-transform: capitalize;\n"]);return V=function(){return e},e}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/manager/UI/Toolbar.js"]={name:"Toolbar",docgenInfo:L.__docgenInfo,path:"src/manager/UI/Toolbar.js"});var Y=v.styled.h3(V()),N=function(e){var n=e.children;return a.a.createElement(Y,null,n)};N.__docgenInfo={description:"",methods:[],displayName:"Caption"};var D=N;function z(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  border: none;\n  border-radius: 2px;\n  padding: 0;\n  background-color: unset;\n  height: 20px;\n  width: 20px;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n  :hover {\n    background-color: white;\n    svg {\n      stroke: #eeeeee;\n    }\n  }\n"]);return z=function(){return e},e}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/manager/UI/Caption.js"]={name:"Caption",docgenInfo:N.__docgenInfo,path:"src/manager/UI/Caption.js"});var K=v.styled.button(z()),H={copy:a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}))},U=function(e){var n=e.onClick,t=e.title,r=e.icon,o=H[r];return a.a.createElement(K,{onClick:n,title:t},o)};U.__docgenInfo={description:"",methods:[],displayName:"IconButton"};var P=U;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/manager/UI/IconButton.js"]={name:"IconButton",docgenInfo:U.__docgenInfo,path:"src/manager/UI/IconButton.js"});var J=function(e){var n=e.themeInfoList,t=e.themeInd,r=e.setCurrent;if(!n)return"No themes info";var o=n.length,c=o>1,i=o<=1;return a.a.createElement(T,{size:300},a.a.createElement(M,null,a.a.createElement(D,null,c?"".concat(o," themes"):"Single Theme")),a.a.createElement(j,null,a.a.createElement("ul",null,n.map((function(e,n){var o,c,l=e.name,u=e.theme;u.palette&&u.palette.primary&&u.palette.primary.main?o={main:[(c=u.palette).primary.main,c.primary.light,c.primary.dark],text:[c.text.secondary],accent:[c.secondary.main,c.secondary.light,c.secondary.dark],background:[c.text.primary]}:o=Object(g.flattenTheme)(u).flattenColors.map((function(e){return e.original}));return a.a.createElement("li",{key:l},a.a.createElement(_,{onClick:function(){return r(n)},current:n===t,single:i},a.a.createElement(w,{single:i},a.a.createElement(A,null,a.a.createElement(I,{theme:o}))),a.a.createElement(k,{single:i},l)))})))),a.a.createElement(M,{footer:!0},a.a.createElement(P,{title:"download"})))};J.__docgenInfo={description:"",methods:[],displayName:"SelectTheme"};var Z=J;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/manager/components/SelectTheme.js"]={name:"SelectTheme",docgenInfo:J.__docgenInfo,path:"src/manager/components/SelectTheme.js"});var F=t(491),G=t.n(F);function W(){var e=Object(h.a)(["\n  background-color: #f6f9fc;\n  padding: 12px;\n  margin-top: 4px;\n  font-size: 16px;\n"]);return W=function(){return e},e}function $(){var e=Object(h.a)(["\n  background-color: unset;\n  border: none;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 35px;\n  height: 20px;\n  cursor: pointer;\n  opacity: 0.6;\n  :hover {\n    opacity: 1;\n  }\n"]);return $=function(){return e},e}function q(){var e=Object(h.a)(["\n  height: auto;\n  overflow: auto;\n  flex-grow: 1;\n  label: ThemeHolder;\n"]);return q=function(){return e},e}function Q(){var e=Object(h.a)(["\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  label: Container;\n"]);return Q=function(){return e},e}var X=Object(v.styled)(o.Block)(Q()),ee=v.styled.div(q());v.styled.button($(),"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyVjF6bTMgNEg4Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDExYzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bTAgMTZIOFY3aDExdjE0eiIvPjwvc3ZnPg="),v.styled.div(W());function ne(){var e=Object(h.a)(["\n  margin-left: 10px;\n"]);return ne=function(){return e},e}var te=v.styled.span(ne()),re=function(e){var n=e.children;return a.a.createElement(te,null,n)};re.__docgenInfo={description:"",methods:[],displayName:"Text"};var ae=re;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/manager/UI/Text.js"]={name:"Text",docgenInfo:re.__docgenInfo,path:"src/manager/UI/Text.js"});var oe=function(e){return function(){var n=window.document.createElement("textarea");n.value=e,window.document.body.appendChild(n),n.select(),window.document.execCommand("copy"),window.document.body.removeChild(n)}},ce=function(e){var n=e.theme,t=e.themeInfo,r=e.selectValue,o=function(e){if(!e)return"select value";try{var n=e.namespace,t=e.name,r=n.join("."),a="".concat(r,".").concat(t);return"${({ theme }) => theme.".concat(a,"}")}catch(e){return"try to select value"}}(e.selectedValue);return a.a.createElement(X,null,a.a.createElement(M,null,a.a.createElement(D,null,t.name)),a.a.createElement(ee,null,a.a.createElement(G.a,{src:n,onSelect:r,name:null})),a.a.createElement(M,{footer:!0},o&&a.a.createElement(P,{icon:"copy",title:"copy to clipboard",onClick:oe(o)}),a.a.createElement(ae,null,o)))};ce.__docgenInfo={description:"",methods:[],displayName:"ThemeBrowser"};var ie=ce;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/manager/components/ThemeBrowser.js"]={name:"ThemeBrowser",docgenInfo:ce.__docgenInfo,path:"src/manager/components/ThemeBrowser.js"}),Object(o.setConfig)({addonId:"theming",panelTitle:"Theming"});var le=t(492);function ue(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: hsla(0, 0%, 50%, 0.35);\n  height: 1px;\n  flex-grow: 1;\n"]);return ue=function(){return e},e}function de(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  overflow: auto;\n  label: Container;\n"]);return de=function(){return e},e}var me=Object(v.styled)(o.Block)(de()),se=v.styled.div(ue()),fe=function(e){var n=e.selectedValue,t=e.onChange,r=n||{},o=r.value,c=r.name,i="color"===r.type;return a.a.createElement(me,{size:250},a.a.createElement(M,null,a.a.createElement(D,null,c||"Select color")),a.a.createElement(se,null,i&&a.a.createElement(le.ChromePicker,{color:o,onChangeComplete:function(e){var n=e.hex;t(n)}})),a.a.createElement(M,{footer:!0},a.a.createElement(P,{icon:"copy",title:"copy to clipboard",onClick:oe(o)}),a.a.createElement(ae,null,o)))};fe.__docgenInfo={description:"",methods:[],displayName:"ColorDetails"};var pe=fe;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/manager/components/ColorDetails.js"]={name:"ColorDetails",docgenInfo:fe.__docgenInfo,path:"src/manager/components/ColorDetails.js"});var ge=t(206),he=function(e,n){return Object(ge.a)({},e,{currentTheme:n})},ve=function(e,n){var t=n.name,r=n.namespace,a=n.type;return Object(ge.a)({},e,{selectedValue:{name:t,namespace:r,type:a}})},ye=function(e,n){var t=p(e);if(!t)return e;var r=t.name,a=t.namespace,o=m(e),i=u(e),l=JSON.parse(JSON.stringify(o));return function(e,n,t,r){n.reduce((function(e,n){return e[n]}),e)[t]=r}(l,a,r,n),function(e,n,t){var r=e.themesList,a=Object(c.a)(r);return a[n]=t,Object(ge.a)({},e,{themesList:a})}(e,i,l)};Object(o.register)({themeInfoList:s,theme:m,themeInfo:f,themeInd:u,selectedValue:p},(function(e){var n=e.global;return{setCurrent:n(he),selectValue:n(ve),changeSelectedColor:n(ye)}}))((function(e){var n=e.theme,t=e.themeInd,r=e.themeInfoList,c=e.themeInfo,i=e.selectedValue,l=e.setCurrent,u=e.selectValue,d=e.changeSelectedColor;return e.isFirstDataReceived?a.a.createElement(o.Layout,{name:"adk-tmp"},a.a.createElement(Z,{themeInfoList:r,themeInd:t,setCurrent:l}),a.a.createElement(ie,{theme:n,themeInfo:c,selectValue:u,selectedValue:i}),a.a.createElement(pe,{selectedValue:i,onChange:d})):a.a.createElement("p",null,"Waiting for data")}));t(1463),t(1494)},494:function(e,n,t){t(495),t(667),e.exports=t(1497)},570:function(e,n){}},[[494,1,2]]]);