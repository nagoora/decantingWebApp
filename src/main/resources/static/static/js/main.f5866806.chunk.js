(this.webpackJsonpdecant=this.webpackJsonpdecant||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(0),i=a.n(r),l=a(10),s=a.n(l),o=(a(88),a(89),a(11)),c=a(63),u=a(64),d=a(69),m=a(68),j=a(161),b=a(152),h=a(155),g=a(153),p=a(158),O=a(159),x=a(160),v=a(163),f=a(112),I=a(48),C=a(41),S=a.n(C),T=i.a.createContext(),P=a(32),L=a.n(P);var y=function(e){var t=e.onLodnumStateChange,a=Object(r.useState)({errorState:!1,errorText:"",onChange:!1,pristine:!0,touched:!1,value:null}),l=Object(I.a)(a,2),s=l[0],c=l[1],u=Object(r.useRef)(null),d=i.a.useContext(T),m=function(e){S.a.get("/ws/cws/tosgGetInventoryIdentifierDetails?srclpn="+e,{headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},withCredentials:!0,credentials:"include"}).then((function(a){if(console.log("8080 response "+JSON.stringify(a)),a.data.data.lodnum===e){var n=Object(o.a)(Object(o.a)({},s),{},{errorState:!1,errorText:"",onChange:!1,pristine:!1,touched:!0,value:a.data.data.lodnum});c(n),t(n)}else{var r=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Source Pallet LPN",onChange:!0,pristine:!1,touched:!0,value:e});c(r),t(r)}})).catch((function(a){if(a.response){var n=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Source Pallet LPN",onChange:!0,pristine:!1,touched:!0,value:e});c(n),t(n),L.a.set("user","loginfalse"),401===a.response.status&&(d.setAuth(!1),L.a.remove("user"))}}))};return Object(n.jsx)(j.a,{id:"srclpn",label:"Source Pallet LPN",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onBlur:function(e){m(e.target.value)},error:s.errorState,helperText:s.errorText,required:!0,ref:u})};var w=function(e){console.log("PROPS "+e);var t=e.onItemStateChange,a=Object(r.useState)({errorState:!1,errorText:"",onChange:!1,pristine:!0,touched:!1,value:null,itemDescription:"",itemImage:"",untcas:"",totalUnits:""}),l=Object(I.a)(a,2),s=l[0],c=l[1],u=i.a.useContext(T),d=function(a){S.a.get("ws/cws/tosgGetItemQtyOnLodnum?lodnum="+e.lodnum+"&prtnum="+a+"&wh_id=WIAW",{headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},withCredentials:!0,credentials:"include"}).then((function(e){if(e.data.data[0].prtnum===a){console.log(e.data.data[0]);var n=Object(o.a)(Object(o.a)({},s),{},{errorState:!1,errorText:"",onChange:!1,pristine:!1,touched:!0,value:e.data.data[0].prtnum,itemDescription:e.data.data[0].item_description,itemImage:e.data.data[0].img_src,untcas:e.data.data[0].untcas,totalUnits:e.data.data[0].total_units});c(n),t(n)}else{console.log("ERROR ELSE PART");var r=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Item",onChange:!0,pristine:!1,touched:!0,value:a,itemDescription:"",untcas:"",totalUnits:""});c(r),t(r)}})).catch((function(e){console.log("ERROR CATCH PART"+e);var n=Object(o.a)(Object(o.a)({},s),{},{errorState:!0,errorText:"Invalid Item",onChange:!0,pristine:!1,touched:!0,value:a,itemDescription:"",untcas:"",totalUnits:""});c(n),t(n),e.response&&(L.a.set("user","loginfalse"),401===e.response.status&&(u.setAuth(!1),L.a.remove("user")))}))};return Object(n.jsx)(j.a,{id:"item",label:"Item",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",required:!0,onBlur:function(e){d(e.target.value)},error:s.errorState,helperText:s.errorText})},k=a(162),W=a(150),A=a(156),D=a(151),E=a(154),U=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleLodnumStateChange=function(e){console.log("updatedState: ",e),n.setState(Object(o.a)(Object(o.a)({},n.state),{},{lodnum:e.value,lodnumError:e.error})),console.log(n.state.lodnum)},n.handleItemStateChange=function(e){console.log("updatedState for the ITEM STATE: ",e),n.setState(Object(o.a)(Object(o.a)({},n.state),{},{itemError:e.error,item:e.value,itemDescription:e.itemDescription,itemImage:e.itemImage,untcas:e.untcas,totalUnits:e.totalUnits}))},n.state={lodnum:"",lodnumError:!1,item:"",itemError:!1,itemDescription:"",itemImage:"",ustcas:"",totalUnits:""},n}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(g.a,{item:!0,xs:10,children:Object(n.jsx)(y,{onLodnumStateChange:this.handleLodnumStateChange})}),Object(n.jsxs)(g.a,{container:!0,spacing:3,children:[Object(n.jsx)(g.a,{item:!0,xs:2,children:Object(n.jsx)(p.a,{m:1,pt:1,children:Object(n.jsx)(E.a,{width:"250",height:"250",component:"img",src:this.state.itemImage})})}),Object(n.jsxs)(g.a,{item:!0,xs:3,children:[Object(n.jsx)(w,Object(o.a)(Object(o.a)({},this.state),{},{onItemStateChange:this.handleItemStateChange})),Object(n.jsx)(j.a,{id:"item-description",label:"Item Description",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:this.state.itemDescription,disabled:!0}),Object(n.jsx)(j.a,{id:"pick-zone",label:"Designated Pick Zone",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(n.jsx)(j.a,{id:"wrapping-type",label:"Wrapping Type",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"})]}),Object(n.jsxs)(g.a,{item:!0,xs:3,children:[Object(n.jsx)(j.a,{id:"total-units",label:"Total Units",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:this.state.totalUnits,disabled:!0}),Object(n.jsx)(j.a,{id:"num-of-lbls",label:"Number of Labels To Print",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(n.jsxs)(W.a,{variant:"outlined",style:{margin:8,minWidth:270},children:[Object(n.jsx)(D.a,{id:"suggested-tote-label",children:"Suggested Tote"}),Object(n.jsxs)(A.a,{labelId:"suggested-tote-label",id:"suggested-tote",label:"Suggested Tote*",required:!0,children:[Object(n.jsx)(k.a,{value:"",children:Object(n.jsx)("em",{children:"None"})}),Object(n.jsx)(k.a,{value:10,children:"Tote1"}),Object(n.jsx)(k.a,{value:20,children:"Tote2"}),Object(n.jsx)(k.a,{value:30,children:"Tote3"})]})]}),Object(n.jsx)(j.a,{id:"actual-tote-wt",label:"Actual Tote Weight",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"})]}),Object(n.jsxs)(g.a,{item:!0,xs:2,children:[Object(n.jsx)(j.a,{id:"untcas",label:"Units Per Case",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",value:this.state.untcas,disabled:!0}),Object(n.jsx)(p.a,{m:1,pt:1,children:Object(n.jsx)(h.a,{variant:"outlined",color:"primary",size:"large",children:"Print"})}),Object(n.jsx)(p.a,{m:1.7}),Object(n.jsx)(j.a,{id:"units-per-tote",label:"Suggested Units Per Tote",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),Object(n.jsx)(f.a,{component:"legend",children:"Tote Level"}),Object(n.jsxs)(x.a,{row:!0,"aria-label":"Tote Level",name:"tote-level",children:[Object(n.jsx)(v.a,{value:"0",control:Object(n.jsx)(O.a,{color:"primary"}),label:"Partial"}),Object(n.jsx)(v.a,{value:"1",control:Object(n.jsx)(O.a,{color:"primary"}),label:"Full"})]})]})]}),Object(n.jsxs)(g.a,{container:!0,spacing:3,children:[Object(n.jsxs)(g.a,{item:!0,xs:8,children:[Object(n.jsx)(j.a,{id:"destination-lpn",label:"Destination Pallet LPN",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",multiline:!0,required:!0}),Object(n.jsx)(j.a,{id:"decanting-instructions",label:"Decanting Instructions",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",multiline:!0}),Object(n.jsx)(j.a,{id:"special-instructions",label:"Special Instructions",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",multiline:!0})]}),Object(n.jsx)(g.a,{item:!0,xs:2,children:Object(n.jsx)(p.a,{m:1,pt:1,children:Object(n.jsx)(h.a,{variant:"outlined",color:"primary",size:"large",children:"Confirm"})})})]})]})}}]),a}(r.Component);var R=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(U,{})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,166)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),i(e),l(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),N()},88:function(e,t,a){},89:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.f5866806.chunk.js.map