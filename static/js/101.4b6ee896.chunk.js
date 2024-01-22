"use strict";(self.webpackChunkrent_car_app=self.webpackChunkrent_car_app||[]).push([[101],{101:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,o,i=r(3433),a=r(9439),l=r(7205),c=r(168),s=r(5216),u=s.ZP.div(t||(t=(0,c.Z)(["\n  padding: 150px 0;\n"]))),d=r(9434),p=r(7740),x=r(4137),g=r(4164),h=r(1607),f=r(184),m=document.querySelector("#loadermodal-root");function Z(){return(0,g.createPortal)((0,f.jsx)(x.g4,{height:"60",width:"60",radius:"9",color:h.w.colors.blue,wrapperStyle:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"".concat(h.w.colors.overlayBcg),zIndex:10,display:"flex",alignItems:"center",justifyContent:"center"},ariaLabel:"three-dots-loading",wrapperClassName:"",visible:!0}),m)}var b,w,v,k,j,C,P,y,F=s.ZP.div(o||(o=(0,c.Z)(["\n  font-size: 24px;\n  color: red;\n  text-align: center;\n"]))),S=r(5451),z=r(5667),T=r(2791),B=r(5103),L=s.ZP.button(b||(b=(0,c.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n  text-decoration-line: underline;\n  background-color: transparent;\n  border: none;\n  margin: 100px auto 0;\n  cursor: pointer;\n  transition: color 250ms ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),h.w.colors.blue,h.w.animation.cubicBezier,h.w.colors.darkblue),I=function(n){var e=n.isLoading,r=n.onClick;return(0,f.jsx)(L,{type:"button",disabled:e,onClick:r,children:"Load more"})},R=r(1413),E=s.ZP.div(w||(w=(0,c.Z)(["\n  display: flex;\n  align-items: start;\n  justify-content: left;\n  flex-direction: column;\n  column-gap: 18px;\n  row-gap: 12px;\n  padding-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    padding-bottom: 50px;\n  }\n"]))),N=s.ZP.label(v||(v=(0,c.Z)(["\n  display: block;\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: calc(18 / 14);\n  margin-bottom: 8px;\n"])),h.w.colors.grey),H=s.ZP.div(k||(k=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),W=s.ZP.div(j||(j=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n"]))),_="\n\tdisplay: flex;\n\twidth: 160px;\n\theight: 48px;\n\tpadding: 14px 93px 14px 24px;\n\talign-items: center;\n\tflex-shrink: 0;  \n  border: none;\n  background-color: ".concat(h.w.colors.darkwhite,";\n  padding-left: 24px;  \n  \n\t&:focus {\n    outline-color: rgba(138, 138, 137, 0.2);\n  }\n\n\t&::placeholder{\n\t\tcolor: ").concat(h.w.colors.black,";\n\t\tfont-size: 18px;\n\t\tfont-weight: 500;\n\t\tline-height: calc(20 / 18);\n\t}\n"),M=s.ZP.input(C||(C=(0,c.Z)(["\n  ","\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n"])),_),O=s.ZP.input(P||(P=(0,c.Z)(["\n  ","\n  border-radius: 0px 14px 14px 0px;\n"])),_),Y=s.ZP.button(y||(y=(0,c.Z)(["\n  width: 136px;\n  padding: 14px;\n  margin-top: auto;\n  margin-bottom: 0;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 14);\n  border: transparent;\n  border-radius: 12px;\n  background-color: ",";\n  cursor: pointer;\n  transition: background-color 250ms ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),h.w.colors.white,h.w.colors.blue,h.w.animation.cubicBezier,h.w.colors.darkblue),$=r(5842),V=r(5653),q=function(){return{rentalPrice:(0,d.v9)(V.Dm),mileageFrom:(0,d.v9)(V.B9),mileageTo:(0,d.v9)(V.mp),selectedBrand:(0,d.v9)(V.RM)}},D=function(n){for(var e=n.brands,r=n.onFilterChange,t=(0,d.I0)(),o=q().selectedBrand,i=(0,T.useState)(null),l=(0,a.Z)(i,2),c=l[0],s=l[1],u=(0,T.useState)(""),p=(0,a.Z)(u,2),x=p[0],g=p[1],m=(0,T.useState)(""),Z=(0,a.Z)(m,2),b=Z[0],w=Z[1],v=(0,T.useState)(""),k=(0,a.Z)(v,2),j=k[0],C=k[1],P=e.map((function(n){return{value:n,label:n}})),y=[],F=30;F<=500;F+=10)y.push({value:F,label:"".concat(F)});return(0,f.jsxs)(E,{children:[(0,f.jsxs)(H,{children:[(0,f.jsx)(N,{htmlFor:"selectBrand",children:"Car brand"}),(0,f.jsx)($.ZP,{inputId:"selectBrand",placeholder:"Enter the text",isClearable:!0,onChange:function(n){return t((0,V.RR)(n))},options:P,styles:{control:function(n){return(0,R.Z)((0,R.Z)({},n),{},{width:"224px",border:"none",borderRadius:"14px",margin:0,fontSize:"18px",backgroundColor:"".concat(h.w.colors.darkwhite),appearance:"none",fontWeight:500,lineHeight:"calc(20 / 18)"})},input:function(n){return(0,R.Z)((0,R.Z)({},n),{},{margin:0,padding:"14px 18px 14px 18px"})},valueContainer:function(n){return(0,R.Z)((0,R.Z)({},n),{},{margin:0,padding:0})},placeholder:function(n){return(0,R.Z)((0,R.Z)({},n),{},{color:"".concat(h.w.colors.black),margin:0,paddingLeft:"18px"})},singleValue:function(n){return(0,R.Z)((0,R.Z)({},n),{},{margin:0,paddingLeft:"18px"})},menu:function(n){return(0,R.Z)((0,R.Z)({},n),{},{width:"224px",padding:"14px 8px 14px 18px"})},option:function(n,e){var r=e.isFocused;return(0,R.Z)((0,R.Z)({},n),{},{color:"".concat(r?h.w.colors.black:h.w.colors.grey)})}},components:{IndicatorSeparator:function(){return null}}})]}),(0,f.jsxs)(H,{children:[(0,f.jsx)(N,{htmlFor:"selectPrice",children:"Price/ 1 hour"}),(0,f.jsx)($.ZP,{inputId:"selectPrice",placeholder:"To $",value:c?{value:c,label:x}:null,onChange:function(n){s(n.value),g(n.label)},options:y,styles:{control:function(n){return(0,R.Z)((0,R.Z)({},n),{},{width:"125px",border:"none",borderRadius:"14px",margin:0,fontSize:"18px",backgroundColor:"".concat(h.w.colors.darkwhite),appearance:"none",fontWeight:500,lineHeight:1.11})},input:function(n){return(0,R.Z)((0,R.Z)({},n),{},{margin:0,padding:"14px 18px 14px 18px"})},valueContainer:function(n){return(0,R.Z)((0,R.Z)({},n),{},{margin:0,padding:0})},placeholder:function(n){return(0,R.Z)((0,R.Z)({},n),{},{color:"".concat(h.w.colors.black),margin:0,paddingLeft:"18px"})},singleValue:function(n){return(0,R.Z)((0,R.Z)({},n),{},{margin:0,paddingLeft:"18px"})},menu:function(n){return(0,R.Z)((0,R.Z)({},n),{},{width:"125px",padding:"14px 8px 14px 18px"})},option:function(n,e){var r=e.isFocused;return(0,R.Z)((0,R.Z)({},n),{},{color:"".concat(r?h.w.colors.black:h.w.colors.grey)})}},components:{IndicatorSeparator:function(){return null}}})]}),(0,f.jsxs)(H,{children:[(0,f.jsx)(N,{htmlFor:"inputMileage",children:"Car mileage / km"}),(0,f.jsxs)(W,{children:[(0,f.jsx)(M,{type:"text",id:"inputMileage",placeholder:"From",value:b,onChange:function(n){return w(n.target.value)}}),(0,f.jsx)(O,{type:"text",placeholder:"To",value:j,onChange:function(n){return C(n.target.value)}})]})]}),(0,f.jsx)(Y,{onClick:function(){r({brand:o,rentalPrice:c,mileageFrom:b,mileageTo:j})},children:"Search"})]})},A=r(681).Container,G=function(){var n=(0,T.useState)(!1),e=(0,a.Z)(n,2),r=e[0],t=e[1],o=(0,T.useState)(1),c=(0,a.Z)(o,2),s=c[0],x=c[1],g={cars:(0,d.v9)(p.Wz),isLoading:(0,d.v9)(p.NH),isError:(0,d.v9)(p.ad)},h=g.cars,m=g.isLoading,b=g.isError,w=(0,d.I0)(),v=q(),k=v.rentalPrice,j=v.mileageFrom,C=v.mileageTo,P=v.selectedBrand;(0,T.useEffect)((function(){w((0,B.c)({page:s,limit:12}))}),[w,s]);var y=(0,i.Z)(new Set(h.map((function(n){return n.make})))),L=((h||[]).filter((function(n){var e=!P||n.make===P.value,r=!k||parseFloat(n.rentalPrice.replace("$",""))>=parseFloat(k)&&parseFloat(n.rentalPrice.replace("$",""))<parseFloat(k)+10,t=!j||parseFloat(n.mileage)>=parseFloat(j),o=!C||parseFloat(n.mileage)<=parseFloat(C);return e&&r&&t&&o}))||[]).slice(12*(s-1),12*s);return(0,f.jsxs)(A,{onWheel:function(){var n=window.scrollY||document.documentElement.scrollTop;t(n>300)},children:[(0,f.jsxs)(u,{children:[(0,f.jsx)(D,{brands:y,onFilterChange:function(n){x(1),w((0,V.Tv)(n))}}),L.length>0?(0,f.jsx)(l.H,{filteredCars:L}):(0,f.jsx)(F,{children:"No cars yet"}),h.length%12||0===h.length?null:(0,f.jsx)(I,{isLoading:m,onClick:function(){x((function(n){return n+1})),z.NY.scrollToBottom()}})]}),m&&(0,f.jsx)(Z,{}),b&&!m&&(0,f.jsx)(F,{children:(0,f.jsx)("p",{children:"OOPS! There was an ERROR!"})}),r&&(0,f.jsx)(S.t,{onClick:function(){z.NY.scrollToTop(),t(!1)}})]})}}}]);
//# sourceMappingURL=101.4b6ee896.chunk.js.map