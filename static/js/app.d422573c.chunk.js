(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{239:function(e,t,n){e.exports=n.p+"static/media/avatar.f7471b37.jpg"},276:function(e,t,n){"use strict";n(320);var a=n(0),r=n.n(a),o=n(237),i=n(473),c=n(472),l=n(5),s=n(4);n(158),n(218),n(219),n(255),n(277),n(83),n(239);s.a.create({drawerContent:{flex:1},userInfoSection:{paddingLeft:20},title:{fontSize:16,marginTop:3,fontWeight:"bold"},caption:{fontSize:14,lineHeight:14},row:{marginTop:20,flexDirection:"row",alignItems:"center"},section:{flexDirection:"row",alignItems:"center",marginRight:15},paragraph:{fontWeight:"bold",marginRight:3},drawerSection:{marginTop:15},bottomDrawerSection:{marginBottom:15,borderTopColor:"#f4f4f4",borderTopWidth:1},preference:{flexDirection:"row",justifyContent:"space-between",paddingVertical:12,paddingHorizontal:16}}),n(104);var g=n(17),f=n.n(g),m=n(18),d=n(38),u=n(36),p=n(44),y=n(117),b=n(102),h=n(155),E=n(278),x=n(233),S=function(e){var t=e.navigation,o=Object(x.a)().colors,i=Object(a.useState)(!1),c=f()(i,2);c[0],c[1];return r.a.createElement(l.a,{style:I.container},r.a.createElement(u.a,{backgroundColor:"#009387",barStyle:"light-content"}),r.a.createElement(l.a,{style:I.header},r.a.createElement(b.a,{animation:"bounceIn",duraton:"1500",source:n(460),style:I.logo,resizeMode:"stretch"}),r.a.createElement(m.a,{style:[I.title,{color:o.text}]},"FIRE Calculator"),r.a.createElement(m.a,{style:{fontSize:15,marginTop:-20,textAlign:"center",justifyContent:"center"}},"\n","FINANCIAL INDEPENDENCE","\n","RETIRE EARLY")),r.a.createElement(b.b,{style:[I.footer,{backgroundColor:o.background}],animation:"fadeInUpBig"},r.a.createElement(m.a,{style:{fontSize:15,color:o.text,textAlign:"center",marginTop:-20}},"By clicking continue, you accept the following Terms and Conditions:"),r.a.createElement(p.a,null,r.a.createElement(m.a,{style:I.text},"\u2022 This is a model and not a prediction. The results are based cased on the limited information that you have provided and assumptions made about the future. \n\u2022 The amounts projected are estimates only and are not guaranteed. \n\u2022 Do not rely solely on this calculator to make decisions about your retirement. \n\u2022 There may be other factors to take into account. Consider your own needs, financial situation and investment objectives. \n\u2022 You may wish to get advice from a licensed financial adviser. ")),r.a.createElement(l.a,{style:I.button},r.a.createElement(y.a,{onPress:function(){return t.navigate("SignInScreen")}},r.a.createElement(h.a,{colors:["#f57576","#a23425"],style:I.signIn},r.a.createElement(m.a,{style:I.textSign},"Continue"),r.a.createElement(E.a,{name:"navigate-next",color:"#fff",size:20}))))))},C=.28*d.a.get("screen").height,I=s.a.create({container:{flex:1,backgroundColor:"#FFF"},header:{flex:2,justifyContent:"center",alignItems:"center"},footer:{flex:1,backgroundColor:"#fff",borderTopLeftRadius:30,borderTopRightRadius:30,paddingVertical:50,paddingHorizontal:30},logo:{width:C,height:C},title:{color:"#05375a",fontSize:40,fontWeight:"bold"},text:{fontSize:10,color:"grey",marginTop:5},innerText:{fontWeight:"bold"},button:{alignItems:"center",marginTop:30},signIn:{width:150,height:40,justifyContent:"center",alignItems:"center",borderRadius:50,flexDirection:"row"},textSign:{color:"white",fontWeight:"bold"}}),j=n(3),T=n.n(j),w=n(51),O=n(12),k=n(279),v=n(119);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){T()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.navigation,n=Object(x.a)().colors,a=r.a.useState({email:"",password:"",check_textInputChange:!1,secureTextEntry:!0}),o=f()(a,2),i=o[0],c=o[1];return r.a.createElement(l.a,{style:D.container},r.a.createElement(u.a,{backgroundColor:"#009387",barStyle:"light-content"}),r.a.createElement(l.a,{style:D.header},r.a.createElement(m.a,{style:D.text_header},"Login")),r.a.createElement(b.b,{style:[D.footer,{backgroundColor:n.background}],animation:"fadeInUpBig"},r.a.createElement(m.a,{style:D.text_footer},"Email"),r.a.createElement(l.a,{style:D.action},r.a.createElement(k.a,{style:{marginRight:10},name:"user-o",color:"#05375a",size:20}),r.a.createElement(w.a,{placeholder:"Email address",style:D.textInput,autoCapitalize:"none",onChangeText:function(e){return function(e){0!=e.length?c(R(R({},i),{},{email:e,check_textInputChange:!0})):c(R(R({},i),{},{email:e,check_textInputChange:!1}))}(e)}}),i.check_textInputChange?r.a.createElement(b.b,{animation:"bounceIn"},r.a.createElement(v.a,{style:{marginLeft:10},name:"check-circle",color:"green",size:20})):null),r.a.createElement(m.a,{style:[D.text_footer,{marginTop:35}]},"Password"),r.a.createElement(l.a,{style:D.action},r.a.createElement(v.a,{style:{marginRight:10},name:"lock",color:"#05375a",size:20}),r.a.createElement(w.a,{placeholder:"Password",secureTextEntry:!!i.secureTextEntry,style:D.textInput,autoCapitalize:"none",onChangeText:function(e){return function(e){c(R(R({},i),{},{password:e}))}(e)}}),r.a.createElement(y.a,{onPress:function(){c(R(R({},i),{},{secureTextEntry:!i.secureTextEntry}))}},i.secureTextEntry?r.a.createElement(v.a,{style:{marginLeft:10},name:"eye-off",color:"grey",size:20}):r.a.createElement(v.a,{style:{marginLeft:10},name:"eye",color:"grey",size:20}))),r.a.createElement(l.a,{style:D.button},r.a.createElement(h.a,{colors:["#08d4c4","#01ab9d"],style:D.signIn},r.a.createElement(m.a,{style:[D.textSign,{color:"#fff"}]}," Sign In"))),r.a.createElement(y.a,{onPress:function(){return t.navigate("SignUpScreen")},style:[D.signIn,{borderColor:"#009387",borderWidth:1,marginTop:15}]},r.a.createElement(m.a,{style:[D.textSign,{color:"#009387"}]},"Sign Up"))))},D=s.a.create({container:{flex:1,backgroundColor:"#fff"},header:{flex:1,justifyContent:"flex-end",paddingHorizontal:20,paddingBottom:50,textAlign:"center"},footer:{flex:3,backgroundColor:"#fff",borderTopLeftRadius:30,borderTopRightRadius:30,paddingHorizontal:20,paddingVertical:30},text_header:{color:"#000",fontWeight:"bold",fontSize:50},text_footer:{color:"#05375a",fontSize:18},action:{flexDirection:"row",marginTop:10,borderBottomWidth:1,borderBottomColor:"#f2f2f2",paddingBottom:5},actionError:{flexDirection:"row",marginTop:10,borderBottomWidth:1,borderBottomColor:"#FF0000",paddingBottom:5},textInput:{flex:1,marginTop:"ios"===O.a.OS?0:-12,paddingLeft:20,color:"#05375a"},errorMsg:{color:"#FF0000",fontSize:14},button:{alignItems:"center",marginTop:50},signIn:{width:"100%",height:50,justifyContent:"center",alignItems:"center",borderRadius:10},textSign:{fontSize:18,fontWeight:"bold"}}),B=n(47),W=function(){return r.a.createElement(l.a,{style:L.container},r.a.createElement(m.a,null,"SignUp Screen"),r.a.createElement(B.a,{title:"Click here",onPress:function(){return alert("Button clicked!")}}))},L=s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),F=Object(i.a)(),_=function(e){e.navigation;return r.a.createElement(F.Navigator,{headerMode:"none"},r.a.createElement(F.Screen,{name:"SplashScreen",component:S}),r.a.createElement(F.Screen,{name:"SignInScreen",component:P}),r.a.createElement(F.Screen,{name:"SignUpScreen",component:W}))};s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),s.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),Object(c.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),Object(i.a)(),t.a=function(){return r.a.createElement(o.a,null,r.a.createElement(_,null))}},319:function(e,t,n){e.exports=n(463)},460:function(e,t,n){e.exports=n.p+"static/media/favicon.fe8d62f5.png"}},[[319,1,2]]]);
//# sourceMappingURL=app.d422573c.chunk.js.map