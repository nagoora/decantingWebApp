(this.webpackJsonpdecant=this.webpackJsonpdecant||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),i=n.n(r),l=n(10),s=n.n(l),o=(n(88),n(89),n(11)),c=n(63),u=n(64),d=n(69),m=n(68),j=n(161),b=n(152),h=n(155),p=n(153),g=n(158),O=n(159),x=n(160),v=n(163),f=n(112),I=n(48),C=n(41),S=n.n(C),T=i.a.createContext(),P=n(32),L=n.n(P);var y=function(e){var t=e.onLodnumStateChange,n=Object(r.useState)({errorState:!1,errorText:"",onChange:!1,pristine:!0,touched:!1,value:null}),l=Object(I.a)(n,2),s=l[0],c=l[1],u=Object(r.useRef)(null),d=i.a.useContext(T),m=function(e){S.a.get("/decanting/ws/cws/tosgGetInventoryIdentifierDetails?srclpn="+e,{headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Credentials":!0},withCredentials:!0,credentials:"include"}).then((function(n){if(console.log("8080 response "+n.data.response.lodnum),n.data.response.lodnum===e){var a=Object(o.a)(Object(o.a)({},s),{},{errorState:!1,errorText:"",onChange:!1,pristine:!1,touched:!0,value:n.data.response.lodnum});c(a),t(a)}else{var r=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Source Pallet LPN",onChange:!0,pristine:!1,touched:!0,value:e});c(r),t(r)}})).catch((function(n){if(n.response){var a=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Source Pallet LPN",onChange:!0,pristine:!1,touched:!0,value:e});c(a),t(a),L.a.set("user","loginfalse"),401===n.response.status&&(d.setAuth(!1),L.a.remove("user"))}}))};return Object(a.jsx)(j.a,{id:"srclpn",label:"Source Pallet LPN",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onBlur:function(e){m(e.target.value)},error:s.errorState,helperText:s.errorText,required:!0,ref:u})};var w=function(e){var t=e.onItemStateChange,n=Object(r.useState)({errorState:!1,errorText:"",onChange:!1,pristine:!0,touched:!1,value:null,itemDescription:"",itemImage:"",untcas:"",totalUnits:""}),l=Object(I.a)(n,2),s=l[0],c=l[1],u=i.a.useContext(T),d=function(n){S.a.get("/decanting/ws/cws/tosgGetItemQtyOnLodnum?lodnum="+e.lodnum+"&prtnum="+n+"&wh_id=WIAW",{headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Credentials":!0},withCredentials:!0,credentials:"include"}).then((function(e){if(console.log("response for itemjs"+e.response),e.prtnum){var a=Object(o.a)(Object(o.a)({},s),{},{errorState:!1,errorText:"",onChange:!1,pristine:!1,touched:!0,value:e.prtnum,itemDescription:e.item_description,itemImage:e.img_src,untcas:e.untcas,totalUnits:e.total_units});c(a),t(a)}else{console.log("ERROR ELSE PART");var r=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Item",onChange:!0,pristine:!1,touched:!0,value:n,itemDescription:"",untcas:"",totalUnits:""});c(r),t(r)}})).catch((function(e){console.log("ERROR CATCH PART"+e);var a=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Item",onChange:!0,pristine:!1,touched:!0,value:n,itemDescription:"",untcas:"",totalUnits:""});c(a),t(a),e.response&&(L.a.set("user","loginfalse"),401===e.response.status&&(u.setAuth(!1),L.a.remove("user")))}))};return Object(a.jsx)(j.a,{id:"item",label:"Item",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",required:!0,onBlur:function(e){d(e.target.value)},error:s.errorState,helperText:s.errorText})},k=n(162),W=n(150),A=n(156),D=n(151),E=n(154),U=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleLodnumStateChange=function(e){console.log("updatedState: ",e),a.setState(Object(o.a)(Object(o.a)({},a.state),{},{lodnum:e.value,lodnumError:e.error})),console.log(a.state.lodnum)},a.handleItemStateChange=function(e){console.log("updatedState for the ITEM STATE: ",e),a.setState(Object(o.a)(Object(o.a)({},a.state),{},{itemError:e.error,item:e.value,itemDescription:e.itemDescription,itemImage:e.itemImage,untcas:e.untcas,totalUnits:e.totalUnits}))},a.state={lodnum:"",lodnumError:!1,item:"",itemError:!1,itemDescription:"",itemImage:"",ustcas:"",totalUnits:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(b.a,{children:[Object(a.jsx)(p.a,{item:!0,xs:10,children:Object(a.jsx)(y,{onLodnumStateChange:this.handleLodnumStateChange})}),Object(a.jsxs)(p.a,{container:!0,spacing:3,children:[Object(a.jsx)(p.a,{item:!0,xs:2,children:Object(a.jsx)(g.a,{m:1,pt:1,children:Object(a.jsx)(E.a,{width:"250",height:"250",component:"img",src:this.state.itemImage})})}),Object(a.jsxs)(p.a,{item:!0,xs:3,children:[Object(a.jsx)(w,Object(o.a)(Object(o.a)({},this.state),{},{onItemStateChange:this.handleItemStateChange})),Object(a.jsx)(j.a,{id:"item-description",label:"Item Description",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:this.state.itemDescription,disabled:!0}),Object(a.jsx)(j.a,{id:"pick-zone",label:"Designated Pick Zone",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(a.jsx)(j.a,{id:"wrapping-type",label:"Wrapping Type",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"})]}),Object(a.jsxs)(p.a,{item:!0,xs:3,children:[Object(a.jsx)(j.a,{id:"total-units",label:"Total Units",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:this.state.totalUnits,disabled:!0}),Object(a.jsx)(j.a,{id:"num-of-lbls",label:"Number of Labels To Print",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(a.jsxs)(W.a,{variant:"outlined",style:{margin:8,minWidth:270},children:[Object(a.jsx)(D.a,{id:"suggested-tote-label",children:"Suggested Tote"}),Object(a.jsxs)(A.a,{labelId:"suggested-tote-label",id:"suggested-tote",label:"Suggested Tote*",required:!0,children:[Object(a.jsx)(k.a,{value:"",children:Object(a.jsx)("em",{children:"None"})}),Object(a.jsx)(k.a,{value:10,children:"Tote1"}),Object(a.jsx)(k.a,{value:20,children:"Tote2"}),Object(a.jsx)(k.a,{value:30,children:"Tote3"})]})]}),Object(a.jsx)(j.a,{id:"actual-tote-wt",label:"Actual Tote Weight",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"})]}),Object(a.jsxs)(p.a,{item:!0,xs:2,children:[Object(a.jsx)(j.a,{id:"untcas",label:"Units Per Case",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:this.state.untcas,disabled:!0}),Object(a.jsx)(g.a,{m:1,pt:1,children:Object(a.jsx)(h.a,{variant:"outlined",color:"primary",size:"large",children:"Print"})}),Object(a.jsx)(g.a,{m:1.7}),Object(a.jsx)(j.a,{id:"units-per-tote",label:"Suggested Units Per Tote",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(a.jsx)(f.a,{component:"legend",children:"Tote Level"}),Object(a.jsxs)(x.a,{row:!0,"aria-label":"Tote Level",name:"tote-level",children:[Object(a.jsx)(v.a,{value:"0",control:Object(a.jsx)(O.a,{color:"primary"}),label:"Partial"}),Object(a.jsx)(v.a,{value:"1",control:Object(a.jsx)(O.a,{color:"primary"}),label:"Full"})]})]})]}),Object(a.jsxs)(p.a,{container:!0,spacing:3,children:[Object(a.jsxs)(p.a,{item:!0,xs:8,children:[Object(a.jsx)(j.a,{id:"destination-lpn",label:"Destination Pallet LPN",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",multiline:!0,required:!0}),Object(a.jsx)(j.a,{id:"decanting-instructions",label:"Decanting Instructions",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",multiline:!0}),Object(a.jsx)(j.a,{id:"special-instructions",label:"Special Instructions",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",multiline:!0})]}),Object(a.jsx)(p.a,{item:!0,xs:2,children:Object(a.jsx)(g.a,{m:1,pt:1,children:Object(a.jsx)(h.a,{variant:"outlined",color:"primary",size:"large",children:"Confirm"})})})]})]})}}]),n}(r.Component);var R=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(U,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),i(e),l(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),N()},88:function(e,t,n){},89:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.212cd69c.chunk.js.map