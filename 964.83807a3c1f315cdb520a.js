"use strict";(self.webpackChunklogin_ngrx=self.webpackChunklogin_ngrx||[]).push([[964],{7964:(Gt,M,r)=>{r.r(M),r.d(M,{TodoModule:()=>kt});var p=r(8583),P=r(3679),g=r(5358),s=r(3065),H=r(61),Q=r(7462),J=r(8418),K=r(3190),Z=r(4612),F=r(8002),B=r(5304);const I=(0,s.PH)("[Todo/API] Load todo items start",(0,s.Ky)()),D=(0,s.PH)("[Todo/API] Load todo items success",(0,s.Ky)()),U=(0,s.PH)("[Todo/API] Load todo items failed",(0,s.Ky)()),x=((0,s.PH)("[Todo/API] Save todo items start",(0,s.Ky)()),(0,s.PH)("[Todo/API] Save todo items success",(0,s.Ky)()),(0,s.PH)("[Todo/API] Save todo items failed",(0,s.Ky)()),(0,s.PH)("[Todo/API] Edit todo items start",(0,s.Ky)())),v=(0,s.PH)("[Todo/API] Edit todo items success",(0,s.Ky)()),L=(0,s.PH)("[Todo/API] Edit todo items failed",(0,s.Ky)()),j=(0,s.PH)("[Todo/UI] Toggle select a todo item",(0,s.Ky)()),O=(0,s.PH)("[Todo/UI] Execute mark as items action");var _=r(6556),nt=r(5758),st=r(5917),t=r(7716),ct=r(755),it=r(273),h=(()=>{return(e=h||(h={})).ALL="ALL",e.NONE="NONE",h;var e})();const m=(0,it.H)({selectId:function(e){return e.id},sortComparer:function(e,n){return e.dateCreated&&n.dateCreated?e.dateCreated===n.dateCreated?e.title>n.title?1:-1:e.dateCreated>n.dateCreated?1:-1:1}}),lt=m.getInitialState({apiLoading:!1,editLoading:!1,selectedIds:{},lastFetched:0,itemsToUpdate:[]}),dt=(0,s.Lq)(lt,(0,s.on)(I,(e,{})=>Object.assign(Object.assign({},e),{apiLoading:!0})),(0,s.on)(D,(e,{data:n,fetchTime:o})=>m.setAll(n,Object.assign(Object.assign({},e),{apiLoading:!1,errMsg:void 0,error:!1,lastFetched:o}))),(0,s.on)(U,(e,{errMsg:n})=>Object.assign(Object.assign({},e),{apiLoading:!1,errMsg:n,error:!0})),(0,s.on)(j,(e,{ids:n,toggle:o})=>{const c={};return o?o===h.ALL&&e.ids.forEach(i=>{c[i]=!0}):n&&n.length>0&&n.forEach(i=>{c[i]=!0}),Object.assign(Object.assign({},e),{selectedIds:c})}),(0,s.on)(x,(e,{item:n})=>m.updateOne(n,Object.assign(Object.assign({},e),{editLoading:!0}))),(0,s.on)(v,(e,{})=>Object.assign(Object.assign({},e),{editLoading:!1,error:!1,errMsg:void 0})),(0,s.on)(L,(e,{errMsg:n})=>Object.assign(Object.assign({},e),{editLoading:!1,errMsg:n,error:!0})),(0,s.on)(O,e=>{const n=e.ids.map(i=>{var a;return Object.assign(Object.assign({},e.entities[i]),{selected:null!==(a=e.selectedIds[i])&&void 0!==a&&a})}),o=n.some(i=>i.selected&&!i.isFinished),c=[];return n.forEach(i=>{i.selected&&c.push({id:i.id,changes:{isFinished:o}})}),m.updateMany(c,Object.assign(Object.assign({},e),{itemsToUpdate:c}))}));function gt(e,n){return dt(e,n)}const f=(0,s.ZF)("todo"),$=(0,s.P1)(f,m.getSelectors().selectIds),ut=((0,s.P1)(f,m.getSelectors().selectEntities),(0,s.P1)(f,m.getSelectors().selectAll)),mt=((0,s.P1)(f,m.getSelectors().selectTotal),(0,s.P1)(f,e=>e.apiLoading)),C=(0,s.P1)(f,e=>e.selectedIds),N=(0,s.P1)(ut,C,(e,n)=>e.map(c=>{var i;return Object.assign(Object.assign({},c),{selected:null!==(i=n[c.id])&&void 0!==i&&i})})),ft=(0,s.P1)(f,e=>{var n;return null!==(n=e.lastFetched)&&void 0!==n?n:0}),S=(0,s.P1)(C,e=>e?Object.keys(e).length:0),ht=(0,s.P1)($,S,(e,n)=>0!==n&&n!==e.length&&n>0&&n<e.length),pt=(0,s.P1)($,S,(e,n)=>n===e.length),At=(0,s.P1)(N,e=>e.some(o=>o.selected&&!o.isFinished)),Ct=(0,s.P1)(f,e=>{var n;return null!==(n=e.itemsToUpdate)&&void 0!==n?n:[]});var It=r(9337);let k=(()=>{class e{constructor(o,c){this.afs=o,this.store=c,this.todoCollection=this.afs.collection("todoList"),this.allTodoItems$=this.store.select(N),this.selectedIds$=this.store.select(C),this.lastFetchedTime$=this.store.select(ft),this.isItemSelectedById=i=>this.store.select((e=>(0,s.P1)(C,n=>!!e&&n[e]))(i)),this.isLoading$=this.store.select(mt),this.isToggleIndeterminate$=this.store.select(ht),this.isToggleAllChecked$=this.store.select(pt),this.shouldToggleActionExecuteDone$=this.store.select(At),this.currentSelectedLength$=this.store.select(S),this.itemsToUpdate$=this.store.select(Ct)}updateItemsSelection(o,c){this.store.dispatch(j({ids:o,toggle:c}))}editItem(o,c){const i={id:o,changes:Object.assign({},c)};this.store.dispatch(x({item:i}))}createFakeItems(){for(let o=0;o<5;o++){const c=this.afs.createId();this.todoCollection.doc(c).set({id:c,content:"Get this done soon!",dateCreated:(new Date).getTime(),isFinished:!1,title:"Item #"+o})}}onMarkActionClick(){this.store.dispatch(O())}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(It.ST),t.LFG(s.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var xt=r(7343);const G="todoList",vt=[(()=>{class e{constructor(o,c,i,a){this.actions$=o,this.ts=c,this.tds=i,this.crs=a,this.getAllTodoItems$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(I),(0,K.w)(T=>this.crs.readCollections("todoList",null).then(d=>{const l=[];return d.docs.forEach(A=>{l.push(A.data())}),D({data:l,fetchTime:(new Date).getTime()})}).catch(d=>{console.log(d);const l=_.S(d);return U({errMsg:l})})))),this.editItem$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(x),(0,Z.b)(T=>{const u=T.item;return this.crs.updatePartialDocument(u,G+"/"+u.id).then(l=>v({time:(new Date).getTime()})).catch(l=>{console.log(l);const A=_.S(l);return L({errMsg:A})})}))),this.effectName$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(O),(0,g.IC)(()=>this.tds.itemsToUpdate$),(0,F.U)(T=>{const d={};return T[1].forEach(l=>{d[l.id]=this.crs.updatePartialDocument(l,G+"/"+l.id)}),d}),(0,Z.b)(T=>(0,nt.D)(T).pipe((0,F.U)(u=>v({time:(new Date).getTime()})),(0,B.K)(u=>{console.log(u);const d=_.S(u);return(0,st.of)(L({errMsg:d}))})))))}ngrxOnInitEffects(){return I({params:void 0})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eX),t.LFG(ct.M),t.LFG(k),t.LFG(xt.I))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})()];var y=r(5987),E=r(5618),b=r(7746),Lt=r(7539),Ot=r(1095),_t=r(8030),St=r(3617),yt=r(837);function Et(e,n){1&e&&(t.ynx(0),t._uU(1," Mark as done "),t.BQk())}function Mt(e,n){1&e&&t._uU(0," Mark as undone ")}function Pt(e,n){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"button",13),t.NdJ("click",function(){return t.CHM(o),t.oxw(3).onMarkClick()}),t.YNc(2,Et,2,0,"ng-container",3),t.ALo(3,"async"),t.YNc(4,Mt,1,0,"ng-template",null,14,t.W1O),t.qZA(),t.TgZ(6,"button",11),t._uU(7,"Delete"),t.qZA(),t.BQk()}if(2&e){const o=t.MAs(5),c=t.oxw(3);t.xp6(2),t.Q6J("ngIf",t.lcZ(3,2,c.ts.shouldToggleActionExecuteDone$))("ngIfElse",o)}}const Zt=function(e){return{item:!0,finished:e}};function Ft(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"div",15),t.TgZ(2,"div",16),t._UZ(3,"mat-list-option",17),t.TgZ(4,"div",18),t.TgZ(5,"div",19),t.TgZ(6,"div",20),t._uU(7),t.qZA(),t.TgZ(8,"div",21),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",22),t._uU(11),t.ALo(12,"dateDisplay"),t.qZA(),t.qZA(),t.BQk()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("ngClass",t.VKq(11,Zt,o.isFinished)),t.xp6(2),t.Q6J("selected",o.selected)("checkboxPosition","before")("color","primary")("value",o),t.xp6(4),t.hij(" ",o.title," "),t.xp6(2),t.hij(" ",o.content," "),t.xp6(2),t.hij(" ",t.xi3(12,8,o.dateCreated,"FULLANDFROMNOW")," ")}}function Dt(e,n){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"mat-selection-list",6,7),t.NdJ("selectionChange",function(i){return t.CHM(o),t.oxw(2).onSelectionChange(i)}),t.TgZ(3,"div",8),t.TgZ(4,"div",9),t.TgZ(5,"mat-checkbox",10),t.NdJ("change",function(i){return t.CHM(o),t.oxw(2).onToggleAllChange(i)}),t.ALo(6,"async"),t.ALo(7,"async"),t.qZA(),t.qZA(),t.TgZ(8,"button",11),t._uU(9,"Refresh"),t.qZA(),t.YNc(10,Pt,8,4,"ng-container",5),t.ALo(11,"async"),t.qZA(),t._UZ(12,"hr"),t.YNc(13,Ft,13,13,"ng-container",12),t.qZA(),t.BQk()}if(2&e){const o=n.ngIf,c=t.oxw(2);t.xp6(1),t.Q6J("multiple",!0),t.xp6(4),t.Q6J("color","accent")("checked",!!t.lcZ(6,6,c.ts.isToggleAllChecked$))("indeterminate",t.lcZ(7,8,c.ts.isToggleIndeterminate$)),t.xp6(5),t.Q6J("ngIf",t.lcZ(11,10,c.ts.currentSelectedLength$)),t.xp6(3),t.Q6J("ngForOf",o)}}function Ut(e,n){if(1&e&&(t.ynx(0),t.YNc(1,Dt,14,12,"ng-container",5),t.ALo(2,"async"),t.BQk()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.ts.allTodoItems$))}}function jt(e,n){1&e&&(t.TgZ(0,"div",23),t._UZ(1,"app-shared-loading"),t.qZA())}const $t=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-todo"]],decls:2,vars:0,consts:[[1,"container","pb-5"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA())},directives:[y.lC],styles:[""]}),e})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class e{constructor(o){this.ts=o,this.selectAllCheckValue={id:"selectedAll"}}ngOnInit(){}trackByFn(o,c){return c.id}onSelectionChange(o){let c=[];o.source.selectedOptions.selected&&(c=o.source.selectedOptions.selected.map(i=>{var a;return null===(a=i.value)||void 0===a?void 0:a.id})),this.ts.updateItemsSelection(c)}onToggleAllChange(o){this.ts.updateItemsSelection([],o.checked?h.ALL:h.NONE)}onToggleComplete(o){console.log(o),this.ts.editItem(o.id,{isFinished:!o.isFinished})}onMarkClick(){this.ts.onMarkActionClick()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(k))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-todo-core"]],decls:8,vars:4,consts:[["fxLayout","column","fxLayoutGap","15px","fxLayoutAlign","start start",1,"mt-3"],[1,"main","title"],[1,"w-100"],[4,"ngIf","ngIfElse"],["isLoading",""],[4,"ngIf"],[3,"multiple","selectionChange"],["todoList",""],["fxLayout","row","fxLayoutGap","15px","fxLayoutAlign","start center",1,"action-row"],[1,"toggle-all"],[3,"color","checked","indeterminate","change"],["mat-button",""],[4,"ngFor","ngForOf"],["mat-button","",3,"click"],["displayUndone",""],["fxLayout","row","fxLayoutAlign","space-between center",3,"ngClass"],["fxLayout","row","fxLayoutAlign","start center"],[3,"selected","checkboxPosition","color","value"],["fxLayout","column","fxLayoutAlign","center start"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","5px"],[1,"title"],[1,"ml-3"],[1,"text-muted"],[1,"my-5"]],template:function(o,c){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2," Todo List with optimistic state update "),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,Ut,3,3,"ng-container",3),t.ALo(5,"async"),t.qZA(),t.qZA(),t.YNc(6,jt,2,0,"ng-template",null,4,t.W1O)),2&o){const i=t.MAs(7);t.xp6(4),t.Q6J("ngIf",!1===t.lcZ(5,2,c.ts.isLoading$))("ngIfElse",i)}},directives:[E.xw,E.SQ,E.Wh,p.O5,b.Ub,Lt.oG,Ot.lW,p.sg,p.mk,_t.oO,b.vS,St.N],pipes:[p.Ov,yt.o],styles:[".main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:15px;text-decoration:underline}button.mat-button[_ngcontent-%COMP%]{color:#666}.toggle-all[_ngcontent-%COMP%]{margin-top:6px}.action-row[_ngcontent-%COMP%]{padding-left:16px}.done-status[_ngcontent-%COMP%]{margin-bottom:5px;height:13px}.done-status[_ngcontent-%COMP%]   mat-icon.mat-icon[_ngcontent-%COMP%]{font-size:17px!important}.item[_ngcontent-%COMP%]{padding-right:10px}.item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:80px}.item.finished[_ngcontent-%COMP%]{background-color:#cccccc7a}"]}),e})()}]}];let Nt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[y.Bz.forChild($t)],y.Bz]}),e})(),kt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[p.ez,P.u5,P.UX,Q.d,J.n,s.Aw.forFeature("todo",gt),g.sQ.forFeature(vt),H.I,Nt]]}),e})()}}]);