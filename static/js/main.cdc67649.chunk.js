(this["webpackJsonpapp-vacinas"]=this["webpackJsonpapp-vacinas"]||[]).push([[0],{102:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(12),o=a.n(s),c=(a(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))},d=a(39),u=a(11),h=a(7),p=a(160),j=a(158),b=a(159),v=a(47),g=a(166),f=a(161),m=a(183),O=a(155),x=a(167),w=a(2),k=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},buttonProgress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"}}}));var S=function(){var e=k(),t=Object(u.f)(),a=i.a.useState(!1),s=Object(h.a)(a,2),o=s[0],c=s[1],r=i.a.useState(),l=Object(h.a)(r,2),d=l[0],O=l[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("login"),a=localStorage.getItem("token");e&&a&&t.push("/cadastros")}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(j.a,{position:"static",children:Object(w.jsx)(b.a,{children:Object(w.jsx)(v.a,{variant:"h6",className:e.title,children:"Vacina SM"})})}),Object(w.jsxs)(p.a,{children:[Object(w.jsx)(f.a,{}),Object(w.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var a=e.target.elements.user.value,n=e.target.elements.password.value;if(O(null),!o){c(!0);var i=new URLSearchParams;i.append("login",a),i.append("password",n),i.append("type","doLogin"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:i}).then((function(e){return e.json().then((function(e){console.log(e),c(!1),e.success?(localStorage.setItem("login",a),localStorage.setItem("token",e.token),t.push("/cadastros")):O(e.message)}))})).catch((function(e){console.log(e),c(!1),alert("N\xe3o foi poss\xedvel conectar ao servidor.")}))}},children:[Object(w.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"user",label:"Usu\xe1rio",name:"user",autoComplete:"user",autoFocus:!0,error:!!d}),Object(w.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",id:"password",autoComplete:"current-password",error:!!d,helperText:d||""}),Object(w.jsxs)("div",{className:e.wrapper,children:[Object(w.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:o,className:e.submit,children:"Entrar"}),o&&Object(w.jsx)(x.a,{size:24,className:e.buttonProgress})]})]})]})]})},C=a(46),y=a(185),N=a(172),D=a(182),P=a(184),L=a(171),T=a(164),A=a(181),R=a(120),_=a(168),U=a(169),E=a(170),W=Object(O.a)((function(e){return{title:{flexGrow:1}}}));var I=function(e){var t=W(),a=Object(n.useState)(!1),i=Object(h.a)(a,2),s=i[0],o=i[1],c=Object(n.useState)(!1),r=Object(h.a)(c,2),l=r[0],d=r[1],p=Object(u.f)();return Object(n.useEffect)((function(){e.backButton&&o(!0),e.logoutButton&&d(!0)}),[e.backButton,e.logoutButton]),Object(w.jsx)(j.a,{position:"static",children:Object(w.jsxs)(b.a,{children:[s?Object(w.jsx)(_.a,{edge:"start",color:"inherit","aria-label":"voltar",onClick:function(){p.goBack()},children:Object(w.jsx)(U.a,{})}):null,Object(w.jsx)(v.a,{variant:"h6",className:t.title,children:"Vacina SM"}),l?Object(w.jsx)("div",{children:Object(w.jsx)(_.a,{edge:"end",color:"inherit","aria-label":"sair",onClick:function(){localStorage.removeItem("token"),p.push("/")},children:Object(w.jsx)(E.a,{})})}):null]})})},B=Object(O.a)((function(e){return{stepper:{position:"fixed",bottom:0,width:"100%"},buttons:{position:"fixed",bottom:100,right:20},formControl:{margin:e.spacing(1),minWidth:200},buttonConfirmar:{position:"fixed",bottom:100,left:"50%",width:120,"margin-left":"-60px"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));var $=function(e){var t=B(),a=i.a.useState(0),s=Object(h.a)(a,2),o=s[0],c=s[1],r=["Selecione o grupo","Selecione a vacina","Selecione o lote"],l=i.a.useState(""),d=Object(h.a)(l,2),j=d[0],b=d[1],v=i.a.useState(""),m=Object(h.a)(v,2),O=m[0],k=m[1],S=i.a.useState(""),_=Object(h.a)(S,2),U=_[0],E=_[1],W=i.a.useState([]),$=Object(h.a)(W,2),F=$[0],Y=$[1],z=i.a.useState([]),G=Object(h.a)(z,2),V=G[0],X=G[1],Z=i.a.useState([]),H=Object(h.a)(Z,2),K=H[0],M=H[1],q=i.a.useState(!1),Q=Object(h.a)(q,2),J=Q[0],ee=Q[1],te=[j,O,U],ae=Object(u.f)();Object(n.useEffect)((function(){var e=localStorage.getItem("token");if(e){ee(!0);var t=new URLSearchParams;t.append("token",e),t.append("type","getGrupoVacinaLote"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:t}).then((function(e){return e.json().then((function(e){console.log(e),ee(!1),e.success?(Y(e.grupos),X(e.vacinas),M(e.lotes)):(localStorage.removeItem("token"),ae.push("/"))}))})).catch((function(e){console.log(e),ee(!1),alert("N\xe3o foi poss\xedvel conectar ao servidor.")}))}else ae.push("/")}),[]);var ne=function(e){b(e.target.value)},ie=function(e){k(e.target.value)},se=function(e){E(e.target.value)};return Object(w.jsxs)("div",{children:[Object(w.jsx)(R.a,{className:t.backdrop,open:J,children:Object(w.jsx)(x.a,{color:"inherit"})}),Object(w.jsx)(f.a,{}),Object(w.jsx)(I,{logoutButton:!0}),o===r.length?Object(w.jsxs)(p.a,{children:[Object(w.jsxs)("p",{children:["Grupo: ",j]}),Object(w.jsxs)("p",{children:["Vacina: ",O]}),Object(w.jsxs)("p",{children:["Lote: ",U]}),Object(w.jsx)("div",{className:t.centerDiv,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.buttonConfirmar,onClick:function(e){ae.push("/listavacinados",{grupo:j,vacina:O,lote:U})},children:"Confirmar"})})]}):Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{style:{textAlign:"center"},children:function(e){switch(e){case 0:return Object(w.jsxs)(T.a,{className:t.formControl,children:[Object(w.jsx)(P.a,{id:"grupo-select-label",children:"Grupo"}),Object(w.jsx)(A.a,{labelId:"grupo-select-label",id:"grupo-select",value:j,onChange:ne,children:F.map((function(e){return Object(w.jsx)(L.a,{value:e,children:e},e)}))})]});case 1:return Object(w.jsxs)(T.a,{className:t.formControl,children:[Object(w.jsx)(P.a,{id:"vacina-select-label",children:"Vacina"}),Object(w.jsx)(A.a,{labelId:"vacina-select-label",id:"vacina-select",value:O,onChange:ie,children:V.map((function(e){return Object(w.jsx)(L.a,{value:e,children:e},e)}))})]});case 2:return Object(w.jsxs)(T.a,{className:t.formControl,children:[Object(w.jsx)(P.a,{id:"lote-select-label",children:"Lote"}),Object(w.jsx)(A.a,{labelId:"lote-select-label",id:"lote-select",value:U,onChange:se,children:K.map((function(e){return Object(w.jsx)(L.a,{value:e,children:e},e)}))})]});default:return"Unknown step"}}(o)}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(g.a,{disabled:0===o,onClick:function(){c((function(e){return e+-1}))},children:"Voltar"}),Object(w.jsx)(g.a,{disabled:""===te[o],variant:"contained",color:"primary",onClick:function(){c((function(e){return e+1}))},children:"Pr\xf3ximo"})]})]}),Object(w.jsx)("div",{className:t.stepper,children:Object(w.jsx)(y.a,{activeStep:o,children:r.map((function(e,t){return Object(w.jsx)(N.a,Object(C.a)(Object(C.a)({},{}),{},{children:Object(w.jsx)(D.a,{children:e})}),e)}))})})]})},F=a(173),Y=a(165),z=a(119),G=a(174),V=Object(O.a)((function(e){return{card:{marginTop:"20px"},buttonDiv:{position:"fixed",bottom:20,textAlign:"center",width:"100%"},buttonAdd:{width:"100px"},listDiv:{paddingBottom:"40px"},list:{maxHeight:"80vh",overflow:"auto"},progress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));var X=function(e){var t=V(),a=Object(n.useState)(),i=Object(h.a)(a,2),s=i[0],o=i[1],c=Object(n.useState)(),r=Object(h.a)(c,2),l=r[0],d=r[1],p=Object(n.useState)(),j=Object(h.a)(p,2),b=j[0],m=j[1],O=Object(n.useState)([]),k=Object(h.a)(O,2),S=k[0],C=k[1],y=Object(n.useState)(!1),N=Object(h.a)(y,2),D=N[0],P=N[1],L=Object(u.f)();return Object(n.useEffect)((function(){var t=localStorage.getItem("token");if(t)if(e.location.state){P(!0),o(e.location.state.grupo),d(e.location.state.vacina),m(e.location.state.lote);var a=new URLSearchParams;a.append("token",t),a.append("grupo",e.location.state.grupo),a.append("vacina",e.location.state.vacina),a.append("lote",e.location.state.lote),a.append("type","getListGrupoVacinaLote"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:a}).then((function(e){return e.json().then((function(e){console.log(e),P(!1),e.success?C(e.vacinacoesPaciente):(localStorage.removeItem("token"),L.push("/"))}))})).catch((function(e){console.log(e),P(!1),alert("N\xe3o foi poss\xedvel conectar ao servidor.")}))}else L.push("/selecao");else L.push("/")}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(f.a,{}),Object(w.jsx)(I,{backButton:!0,logoutButton:!0}),Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{variant:"h6",children:["Grupo: ",s]}),Object(w.jsxs)(v.a,{variant:"h6",children:["Vacina: ",l]}),Object(w.jsxs)(v.a,{variant:"h6",children:["Lote: ",b]})]}),Object(w.jsx)(F.a,{variant:"middle"}),Object(w.jsxs)("div",{className:t.listDiv,children:[Object(w.jsx)(v.a,{variant:"h6",children:"Registros de vacina\xe7ao"}),Object(w.jsx)(Y.a,{dense:!0,className:t.list,children:S.map((function(e){return Object(w.jsx)(z.a,{button:!0,divider:!0,onClick:function(){return t=e[7],void L.push("/vacinar",{grupo:s,vacina:l,lote:b,cpf:t});var t},children:Object(w.jsx)(G.a,{primary:e[8],secondary:"CPF: "+(t=e[7],t.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1"))})},e[7]);var t}))}),D&&Object(w.jsx)(x.a,{size:24,className:t.progress})]}),Object(w.jsx)("div",{className:t.buttonDiv,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.buttonAdd,onClick:function(){L.push("/vacinar",{grupo:s,vacina:l,lote:b})},children:"Adicionar"})})]})},Z=a(122),H=a(77),K=a.n(H),M=a(42),q=Object(O.a)((function(e){return{divCenter:{width:"100%",textAlign:"center"},tfCpf:{width:"90%"},button:{marginTop:"20px"},pacienteDiv:{paddingLeft:"20px"},buttonProgress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},wrapper:{margin:e.spacing(1),position:"relative"},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var Q=function(e){var t=q(),a=Object(u.f)(),s=i.a.useState(!1),o=Object(h.a)(s,2),c=o[0],r=o[1],l=i.a.useState(!1),d=Object(h.a)(l,2),p=d[0],j=d[1],b=i.a.useState(!1),O=Object(h.a)(b,2),k=O[0],S=O[1],C=i.a.useState(),y=Object(h.a)(C,2),N=y[0],D=y[1],P=i.a.useState(),L=Object(h.a)(P,2),T=L[0],A=L[1],R=i.a.useState(),_=Object(h.a)(R,2),U=_[0],E=_[1],W=i.a.useState(),B=Object(h.a)(W,2),$=B[0],Y=B[1],z=i.a.useState(),G=Object(h.a)(z,2),V=G[0],X=G[1],H=i.a.useState(),Q=Object(h.a)(H,2),J=Q[0],ee=Q[1],te=i.a.useState(),ae=Object(h.a)(te,2),ne=ae[0],ie=ae[1],se=i.a.useState(),oe=Object(h.a)(se,2),ce=oe[0],re=oe[1],le=i.a.useState(),de=Object(h.a)(le,2),ue=de[0],he=de[1],pe=i.a.useState(),je=Object(h.a)(pe,2),be=je[0],ve=je[1],ge=new Date,fe=i.a.useState(!1),me=Object(h.a)(fe,2),Oe=me[0],xe=me[1],we=i.a.useState(""),ke=Object(h.a)(we,2),Se=ke[0],Ce=ke[1],ye=i.a.useState(!1),Ne=Object(h.a)(ye,2),De=Ne[0],Pe=Ne[1];Object(n.useEffect)((function(){var t=localStorage.getItem("token"),n=localStorage.getItem("login");t&&n?(ve(n),e.location.state?(ie(e.location.state.grupo),re(e.location.state.vacina),he(e.location.state.lote),e.location.state.cpf&&Le(null,e.location.state.cpf)):a.push("/selecao")):a.push("/")}),[]);var Le=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a?t=a:(e.preventDefault(),t=e.target.elements.cpf.value.replace(/\D/g,"")),!p){j(!0),S(!1);var n=new URLSearchParams;n.append("cpf",t),n.append("type","getPaciente"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:n}).then((function(e){return e.json().then((function(e){console.log(e),e.success?(D(e.paciente[0]),A(e.paciente[1]),E(e.paciente[2]),Y(e.paciente[3]),X(e.dose1[0]),ee(e.dose2[0]),r(!0)):S(!0),j(!1)}))}))}},Te=function(){xe(!0)},Ae=function(){xe(!1)},Re=Object(w.jsxs)("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},className:t.paper,children:[Object(w.jsxs)("h2",{id:"simple-modal-title",children:["Cadastrar ",Se,"\xaa dose"]}),Object(w.jsxs)("div",{id:"simple-modal-description",children:[Object(w.jsxs)("p",{children:["Grupo: ",ne]}),Object(w.jsxs)("p",{children:["Vacina: ",ce]}),Object(w.jsxs)("p",{children:["Lote: ",ue]}),Object(w.jsxs)("p",{children:["Data: ",ge.toLocaleDateString()]}),Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,disabled:De,onClick:function(){if(!De){Pe(!0);var e=new URLSearchParams;e.append("login",be),e.append("cpf",N),e.append("time",ge),e.append("grupo",ne),e.append("vacina",ce),e.append("lote",ue),e.append("dose",Se),e.append("type","setVacinacao"),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:e}).then((function(e){return e.json().then((function(e){console.log(e),e.success?(1===Se?X([be,N,ge,ne,ce,ue]):2===Se&&ee([be,N,ge,ne,ce,ue]),Ae()):alert("Erro no cadastro"),Pe(!1),j(!1)}))})).catch((function(e){console.log(e.message);var t=new M.a("Vacinas");t.version(1).stores({vacinacoes:"login, cpf, time, grupo, vacina, lote, dose"}),t.vacinacoes.add({login:be,cpf:N,time:ge,grupo:ne,vacina:ce,lote:ue,dose:Se}).then((function(e){"serviceWorker"in navigator&&"SyncManager"in window?navigator.serviceWorker.ready.then((function(e){return e.sync.register("sendVacinacao")})).catch((function(){alert("Erro no envio do registro de vacina\xe7\xe3o")})):alert("Erro no envio do registro de vacina\xe7\xe3o")}))}))}},children:"Confirmar"})})]})]});return Object(w.jsxs)("div",{children:[Object(w.jsx)(f.a,{}),Object(w.jsx)(I,{backButton:!0,logoutButton:!0}),Object(w.jsxs)("div",{className:t.divCenter,children:[Object(w.jsx)(v.a,{variant:"h6",children:"Buscar paciente"}),Object(w.jsxs)("form",{onSubmit:Le,children:[Object(w.jsx)(m.a,{className:t.tfCpf,id:"cpf",label:"CPF",name:"cpf",inputProps:{maxLength:14},error:k,helperText:k?"CPF n\xe3o encontrado.":"",onChange:function(e){e.target.value=e.target.value.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1")}}),Object(w.jsxs)("div",{className:t.wrapper,children:[Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,startIcon:Object(w.jsx)(K.a,{}),disabled:p,type:"submit",children:"Buscar"}),p&&Object(w.jsx)(x.a,{size:24,className:t.buttonProgress})]})]})]}),c?Object(w.jsxs)("div",{className:t.pacienteDiv,children:[Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Nome: ",T]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Data de nascimento: ",U]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Sexo: ",$]}),Object(w.jsx)(F.a,{}),Object(w.jsx)(v.a,{variant:"h6",children:"1\xaa Dose"}),V?Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Data: ",new Date(V[2]).toLocaleDateString()]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Grupo: ",V[3]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Vacina: ",V[4]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Lote: ",V[5]]})]}):Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){Ce(1),Te()},children:"Cadastrar 1\xaa Dose"})}),Object(w.jsx)(F.a,{}),Object(w.jsx)(v.a,{variant:"h6",children:"2\xaa Dose"}),J?Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Data: ",new Date(J[2]).toLocaleDateString()]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Grupo: ",J[3]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Vacina: ",J[4]]}),Object(w.jsxs)(v.a,{variant:"subtitle1",children:["Lote: ",J[5]]})]}):Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:t.button,onClick:function(){Ce(2),Te()},children:"Cadastrar 2\xaa Dose"})})]}):null,Object(w.jsx)(Z.a,{open:Oe,onClose:Ae,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Re})]})},J=a(175),ee=a(176),te=a(177),ae=a(178),ne=a(179),ie=a(180),se=function(e){return e.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1")},oe=function(e){return e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{2})(\d)/,"$1/$2").replace(/(\d{4})\d+?$/,"$1")},ce=function e(t){return t instanceof e?t:this instanceof e?void(this._wrapped=t):new e(t)};function re(e,t){var a=new Image;a.onload=function(){t.cxt.clearRect(0,0,this.width,this.height),t.cxt.drawImage(a,0,0)},a.src=e}(ce.Canvas=function(e,t){this.canvas=e,this.cxt=e.getContext("2d"),this.cxt.lineCap="round",this.cxt.lineJoin="round",this.lineWidth=t||3,this.width=e.width,this.height=e.height,this.drawing=!1,this.handwritingX=[],this.handwritingY=[],this.trace=[],this.options={},this.step=[],this.redo_step=[],this.redo_trace=[],this.allowUndo=!1,this.allowRedo=!1,e.addEventListener("mousedown",this.mouseDown.bind(this)),e.addEventListener("mousemove",this.mouseMove.bind(this)),e.addEventListener("mouseup",this.mouseUp.bind(this)),e.addEventListener("touchstart",this.touchStart.bind(this)),e.addEventListener("touchmove",this.touchMove.bind(this)),e.addEventListener("touchend",this.touchEnd.bind(this)),this.callback=void 0,this.recognize=ce.recognize}).prototype.set_Undo_Redo=function(e,t){this.allowUndo=e,this.allowRedo=!!e&&t,this.allowUndo||(this.step=[],this.redo_step=[],this.redo_trace=[])},ce.Canvas.prototype.setLineWidth=function(e){this.lineWidth=e},ce.Canvas.prototype.setCallBack=function(e){this.callback=e},ce.Canvas.prototype.setOptions=function(e){this.options=e},ce.Canvas.prototype.mouseDown=function(e){this.cxt.lineWidth=this.lineWidth,this.handwritingX=[],this.handwritingY=[],this.drawing=!0,this.cxt.beginPath();var t=this.canvas.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top;this.cxt.moveTo(a,n),this.handwritingX.push(a),this.handwritingY.push(n)},ce.Canvas.prototype.mouseMove=function(e){if(this.drawing){var t=this.canvas.getBoundingClientRect(),a=e.clientX-t.left,n=e.clientY-t.top;this.cxt.lineTo(a,n),this.cxt.stroke(),this.handwritingX.push(a),this.handwritingY.push(n)}},ce.Canvas.prototype.mouseUp=function(){var e=[];e.push(this.handwritingX),e.push(this.handwritingY),e.push([]),this.trace.push(e),this.drawing=!1,this.allowUndo&&this.step.push(this.canvas.toDataURL())},ce.Canvas.prototype.touchStart=function(e){e.preventDefault(),this.cxt.lineWidth=this.lineWidth,this.handwritingX=[],this.handwritingY=[];var t=document.documentElement,a=this.canvas.getBoundingClientRect(),n=a.top+window.pageYOffset-t.clientTop,i=a.left+window.pageXOffset-t.clientLeft,s=e.changedTouches[0],o=s.pageX-i,c=s.pageY-n;this.handwritingX.push(o),this.handwritingY.push(c),this.cxt.beginPath(),this.cxt.moveTo(o,c)},ce.Canvas.prototype.touchMove=function(e){e.preventDefault();var t=e.targetTouches[0],a=document.documentElement,n=this.canvas.getBoundingClientRect(),i=n.top+window.pageYOffset-a.clientTop,s=n.left+window.pageXOffset-a.clientLeft,o=t.pageX-s,c=t.pageY-i;this.handwritingX.push(o),this.handwritingY.push(c),this.cxt.lineTo(o,c),this.cxt.stroke()},ce.Canvas.prototype.touchEnd=function(e){var t=[];t.push(this.handwritingX),t.push(this.handwritingY),t.push([]),this.trace.push(t),this.allowUndo&&this.step.push(this.canvas.toDataURL())},ce.Canvas.prototype.undo=function(){!this.allowUndo||this.step.length<=0||(1===this.step.length?this.allowRedo&&(this.redo_step.push(this.step.pop()),this.redo_trace.push(this.trace.pop()),this.cxt.clearRect(0,0,this.width,this.height)):(this.allowRedo?(this.redo_step.push(this.step.pop()),this.redo_trace.push(this.trace.pop())):(this.step.pop(),this.trace.pop()),re(this.step.slice(-1)[0],this)))},ce.Canvas.prototype.redo=function(){!this.allowRedo||this.redo_step.length<=0||(this.step.push(this.redo_step.pop()),this.trace.push(this.redo_trace.pop()),re(this.step.slice(-1)[0],this))},ce.Canvas.prototype.erase=function(){this.cxt.clearRect(0,0,this.width,this.height),this.step=[],this.redo_step=[],this.redo_trace=[],this.trace=[]},ce.recognize=function(e,t,a){ce.Canvas&&this instanceof ce.Canvas?(e=this.trace,t=this.options,a=this.callback):t||(t={});var n=JSON.stringify({options:"enable_pre_space",requests:[{writing_guide:{writing_area_width:t.width||this.width||void 0,writing_area_height:t.height||this.width||void 0},ink:e,language:t.language||"zh_TW"}]}),i=new XMLHttpRequest;i.addEventListener("readystatechange",(function(){if(4===this.readyState)switch(this.status){case 200:var e,n=JSON.parse(this.responseText);1===n.length?a(void 0,new Error(n[0])):e=n[1][0][1],t.numOfWords&&(e=e.filter((function(e){return e.length===t.numOfWords}))),t.numOfReturn&&(e=e.slice(0,t.numOfReturn)),a(e,void 0);break;case 403:a(void 0,new Error("access denied"));break;case 503:a(void 0,new Error("can't connect to recognition server"));break;default:console.log("Status inv\xe1lido")}})),i.open("POST","https://www.google.com.tw/inputtools/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8"),i.setRequestHeader("content-type","application/json"),i.send(n)};var le=ce,de=Object(O.a)((function(e){return{btGroup:{marginTop:"10px"},canvas:{display:"block",width:"300px",height:"300px",border:"2px solid",cursor:"crosshair",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}}}));var ue=function(e){var t=de(),a=i.a.useRef(),s=i.a.useRef(),o=function(e,t){if(t)throw t;console.log(e)};return Object(n.useEffect)((function(){s.current=new le.Canvas(a.current),s.current.setLineWidth(3),s.current.setOptions({language:"pt_BR"}),s.current.setCallBack(o),e.setCanvas(a)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)("canvas",{ref:a,className:t.canvas,width:300,height:300}),Object(w.jsx)(g.a,{onClick:function(e){s.current.erase()},variant:"outlined",color:"primary",className:t.btGroup,children:"Apagar"})]})},he=a(78),pe=a.n(he),je=(a(114),function(e){var t,a=0;if("00000000000"===(e=e.replace(/\D/g,"")))return!1;for(var n=1;n<=9;n++)a+=parseInt(e.substring(n-1,n))*(11-n);if(10!==(t=10*a%11)&&11!==t||(t=0),t!==parseInt(e.substring(9,10)))return!1;a=0;for(var i=1;i<=10;i++)a+=parseInt(e.substring(i-1,i))*(12-i);return 10!==(t=10*a%11)&&11!==t||(t=0),t===parseInt(e.substring(10,11))}),be=function(e){if(!/^\d\d\/\d\d\/\d\d\d\d$/.test(e))return!1;var t=e.split("/").map((function(e){return parseInt(e,10)}));t[1]-=1;var a=new Date(t[2],t[1],t[0]);return a.getMonth()===t[1]&&a.getDate()===t[0]&&a.getFullYear()===t[2]},ve=Object(O.a)((function(e){return{divCenter:{width:"100%",textAlign:"center"},btGroup:{paddingTop:"10px"},textField:{display:"block",width:"90%",maxWidth:"500px",marginLeft:"auto",marginRight:"auto"},canvas:{display:"block",width:"300px",height:"300px",border:"2px solid",cursor:"crosshair",marginTop:"10px",marginLeft:"auto",marginRight:"auto"},buttons:{position:"absolute",bottom:10,left:"50%",width:200,"margin-left":"-100px"},stepper:{width:"100%"},keyboard:{position:"absolute",width:"100%",bottom:0},kbTheme:{fontSize:"23px"},error:{color:"red"},progress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));var ge=function(e){var t=ve(),a=Object(u.f)(),s=i.a.useState(""),o=Object(h.a)(s,2),c=o[0],r=o[1],l=i.a.useState(""),d=Object(h.a)(l,2),p=d[0],j=d[1],b=i.a.useState(""),f=Object(h.a)(b,2),O=f[0],k=f[1],S=i.a.useState(!1),P=Object(h.a)(S,2),L=P[0],T=P[1],A=i.a.useState(!1),R=Object(h.a)(A,2),_=R[0],U=R[1],E=i.a.useState(!1),W=Object(h.a)(E,2),B=W[0],$=W[1],F=i.a.useState(),Y=Object(h.a)(F,2),z=Y[0],G=Y[1],V=i.a.useState(),X=Object(h.a)(V,2),Z=X[0],H=X[1],K=i.a.useState(0),q=Object(h.a)(K,2),Q=q[0],ce=q[1],re=["CPF","Nome","Data de nascimento","Assinatura"],le=[p,O,c],de=i.a.useRef(),he=i.a.useState("numericCPF"),ge=Object(h.a)(he,2),fe=ge[0],me=ge[1],Oe=i.a.useState("nameInput"),xe=Object(h.a)(Oe,2),we=xe[0],ke=xe[1],Se=i.a.useState(!1),Ce=Object(h.a)(Se,2),ye=Ce[0],Ne=Ce[1],De=i.a.useState(),Pe=Object(h.a)(De,2),Le=Pe[0],Te=Pe[1],Ae=i.a.useState(!1),Re=Object(h.a)(Ae,2),_e=Re[0],Ue=Re[1],Ee=Object(J.a)("(min-height:590px)"),We=new M.a("Cadastros");We.version(1).stores({cadastros:"++id, cpf, status"}),Object(n.useEffect)((function(){var e=localStorage.getItem("token");e?Te(e):a.push("/")}),[]);var Ie=function(e){var t=e.target.value.replace(/[^A-Z\xc7 ]/g,"");j(t),de.current.setInput(t)},Be=function(e){de.current.setInput(e.target.value),e.target.value=se(e.target.value),14!==e.target.value.length||je(e.target.value)?(e.target.value.length<14||je(e.target.value))&&U(!1):U(!0),r(e.target.value)},$e=function(e){de.current.setInput(e.target.value),e.target.value=oe(e.target.value),10!==e.target.value.length||be(e.target.value)?(e.target.value.length<10||be(e.target.value))&&$(!1):$(!0),k(e.target.value)},Fe=function(){0!==Q||je(c)?1!==Q||p?2!==Q||be(O)?(0===Q?me("default"):1===Q?me("numericDn"):3===Q&&H(z.current.toDataURL("image/png").split(";base64,")[1]),ke(ze(Q+1)),ce((function(e){return e+1}))):$(!0):T(!0):U(!0)},Ye=function(){ke(ze(Q-1)),1===Q&&me("numericCPF"),2===Q&&me("default"),3===Q&&me("numericDn"),ce((function(e){return e-1}))},ze=function(e){switch(e){case 0:return"nameCpf";case 1:return"nameInput";case 2:return"nameDn"}},Ge=function(){console.log(fe);var e="default"===fe?"shift":"default";console.log(e),me(e)},Ve=function(){Ne(!1)};return Object(w.jsxs)("div",{children:[Object(w.jsx)(I,{backButton:!0,logoutButton:!0}),Ee&&Object(w.jsx)("div",{className:t.stepper,children:Object(w.jsx)(y.a,{activeStep:Q,alternativeLabel:!0,children:re.map((function(e,t){return Object(w.jsx)(N.a,Object(C.a)(Object(C.a)({},{}),{},{children:Object(w.jsx)(D.a,{children:e})}),e)}))})}),Q===re.length?Object(w.jsxs)("div",{children:[Object(w.jsxs)(v.a,{children:["CPF: ",je(c)?c:Object(w.jsx)("span",{className:t.error,children:"CPF inv\xe1lido"})]}),Object(w.jsxs)(v.a,{children:["Nome: ",p||Object(w.jsx)("span",{className:t.error,children:"N\xe3o preenchido"})]}),Object(w.jsxs)(v.a,{children:["Data de Nascimento: ",be(O)?O:Object(w.jsx)("span",{className:t.error,children:"Data inv\xe1lida"})]}),Object(w.jsxs)(v.a,{children:["Assinatura: ",!Z&&Object(w.jsx)("span",{className:t.error,children:"N\xe3o assinado"})]}),Object(w.jsx)("div",{children:Z&&Object(w.jsx)("img",{src:"data:image/png;base64,"+Z,alt:"assinatura"})}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(g.a,{disabled:_e,onClick:Ye,children:"Voltar"}),Object(w.jsx)(g.a,{disabled:_e,variant:"contained",color:"primary",className:t.button,onClick:function(){var e;p&&be(O)&&je(c)&&Z?(Ue(!0),(e="pend",We.cadastros.add({nome:p,dn:O,cpf:c,assinatura:Z,time:new Date(Date.now()).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"}),status:e,token:Le})).then((function(e){var t=new URLSearchParams;t.append("token",Le),t.append("nome",p),t.append("dn",O),t.append("cpf",c),t.append("type","setCadastro"),t.append("assinatura",Z),t.append("time",new Date(Date.now()).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})),fetch("https://script.google.com/macros/s/AKfycbxkQf1wEUKHZoB6kbYA_YPHOioUhUAPiW2ctj83G83iNhuvTT9eig_-R38xZkui8Fk_OA/exec",{method:"post",redirect:"follow",body:t}).then((function(t){t.json().then((function(t){var n;t.success?(n=e,We.cadastros.update(n,{status:"ok"}),Ue(!1),a.push("/cadastros")):alert("N\xe3o foi poss\xedvel enviar o cadastro.")}))})).catch((function(e){console.log(e),"serviceWorker"in navigator&&"SyncManager"in window?navigator.serviceWorker.ready.then((function(e){e.sync.register("sendCadastros"),Ue(!1),a.push("/cadastros")})).catch((function(e){Ue(!1),alert("N\xe3o foi poss\xedvel armazenar o cadastro no dispositivo. Sincronia em plano de fundo n\xe3o dispon\xedvel.")})):(Ue(!1),alert("N\xe3o foi poss\xedvel armazenar o cadastro no dispositivo. Service Worker n\xe3o dispon\xedvel."))}))})).catch((function(e){Ue(!1),alert("N\xe3o foi poss\xedvel armazenar o cadastro no dispositivo.")}))):Ne(!0)},children:"Confirmar"}),_e&&Object(w.jsx)(x.a,{size:24,className:t.progress})]})]}):Object(w.jsx)("div",{children:Object(w.jsx)("div",{style:{textAlign:"center"},children:function(e){switch(e){case 0:return Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(m.a,{error:_,fullWidth:!0,id:"cpfInput",className:t.textField,label:"CPF",helperText:_?"CPF inv\xe1lido.":"",inputProps:{inputMode:"none",style:{fontSize:"23px"}},onChange:Be,value:c})});case 1:return Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(m.a,{error:L,fullWidth:!0,id:"nameInput",className:t.textField,label:"Nome",helperText:L?"Nome inv\xe1lido.":"",value:p,inputProps:{inputMode:"none",style:{fontSize:"23px"}},onChange:Ie})});case 2:return Object(w.jsx)("div",{className:t.divCenter,children:Object(w.jsx)(m.a,{error:B,fullWidth:!0,id:"dnInput",className:t.textField,label:"Data de Nascimento",helperText:B?"Data inv\xe1lida.":"",inputProps:{inputMode:"none",style:{fontSize:"23px"}},onChange:$e,value:O})});case 3:return Object(w.jsxs)("div",{className:t.divCenter,children:[Object(w.jsx)(ue,{setCanvas:G}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(g.a,{disabled:0===Q,onClick:Ye,children:"Voltar"}),Object(w.jsx)(g.a,{disabled:""===le[Q],variant:"contained",color:"primary",onClick:Fe,children:"Pr\xf3ximo"})]})]});default:return"Unknown step"}}(Q)})}),Q<3&&Object(w.jsx)("div",{className:t.keyboard,children:Object(w.jsx)(pe.a,{layout:{shift:["q w e r t y u i o p","a s d f g h j k l \xe7","z x c v b n m {backspace}","{shift} {space} {prox}"],default:["Q W E R T Y U I O P","A S D F G H J K L \xc7","Z X C V B N M {backspace}","{volt} {space} {prox}"],numericCPF:["1 2 3","4 5 6","7 8 9","0 {backspace}","{prox}"],numericDn:["1 2 3","4 5 6","7 8 9","0 {backspace}","{volt} {prox}"]},display:{"{shift}":"\u21e7","{prox}":"Pr\xf3ximo","{volt}":"Voltar","{space}":" ","{backspace}":"\u232b"},buttonAttributes:[{attribute:"style",value:"flex-basis:68%",buttons:"{space} 0"}],theme:t.kbTheme+" hg-theme-default",layoutName:fe,onChange:function(e){switch(Q){case 0:var t=se(e);14!==t.length||je(t)?(t.length<14||je(t))&&U(!1):U(!0),r(t);break;case 1:j(e.replace(/[^A-Z\xc7 ]/g,""));break;case 2:var a=oe(e);10!==a.length||be(a)?(a.length<10||be(a))&&$(!1):$(!0),k(a)}},onKeyPress:function(e){switch(e){case"{prox}":Fe();break;case"{volt}":Ye();break;case"{shift}":Ge()}},keyboardRef:function(e){return de.current=e},inputName:we,useMouseEvents:!0})}),Object(w.jsxs)(ee.a,{open:ye,onClose:Ve,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(w.jsx)(te.a,{id:"alert-dialog-title",children:"Erro no cadastro"}),Object(w.jsx)(ae.a,{children:Object(w.jsx)(ne.a,{id:"alert-dialog-description",children:"Informe CPF, nome, data de nascimento e assinatura."})}),Object(w.jsx)(ie.a,{children:Object(w.jsx)(g.a,{onClick:Ve,color:"primary",children:"OK"})})]})]})},fe=a(66),me=a.n(fe),Oe=a(79),xe=Object(O.a)((function(e){return{list:{paddingBottom:"100px"},progress:{color:"blue",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},buttonDiv:{position:"fixed",bottom:20,textAlign:"center",width:"100%"}}}));var we=function(){var e=xe(),t=Object(u.f)(),a=i.a.useState([]),s=Object(h.a)(a,2),o=s[0],c=s[1],r=i.a.useState(!1),l=Object(h.a)(r,2),d=l[0],p=l[1],j=new M.a("Cadastros");j.version(1).stores({cadastros:"++id, cpf, status"}),Object(n.useEffect)((function(){b()}),[]);var b=function(){var e=Object(Oe.a)(me.a.mark((function e(){var t;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,j.cadastros.toArray();case 3:t=e.sent,c(t),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(I,{logoutButton:!0}),Object(w.jsxs)("div",{children:[Object(w.jsx)(v.a,{variant:"h6",children:"Registros"}),Object(w.jsx)(Y.a,{dense:!0,className:e.list,children:o.map((function(e){return Object(w.jsx)(z.a,{button:!0,divider:!0,children:Object(w.jsx)(G.a,{primary:e.nome,secondary:"CPF: "+e.cpf+" - "+("ok"===e.status?"Enviado":"Pendente")})},e.id)}))}),d&&Object(w.jsx)(x.a,{size:24,className:e.progress})]}),Object(w.jsx)("div",{className:e.buttonDiv,children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){t.push("/novocadastro")},children:"Adicionar"})})]})},ke=function(){return Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{path:"/",component:S,exact:!0}),Object(w.jsx)(u.a,{path:"/selecao",component:$}),Object(w.jsx)(u.a,{path:"/listavacinados",component:X}),Object(w.jsx)(u.a,{path:"/vacinar",component:Q}),Object(w.jsx)(u.a,{path:"/cadastros",component:we}),Object(w.jsx)(u.a,{path:"/novocadastro",component:ge})]})};o.a.render(Object(w.jsx)(d.a,{children:Object(w.jsx)(ke,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):r(t,e)}))}}(),l()}},[[116,1,2]]]);
//# sourceMappingURL=main.cdc67649.chunk.js.map