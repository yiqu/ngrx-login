"use strict";(self.webpackChunklogin_ngrx=self.webpackChunklogin_ngrx||[]).push([[142],{7142:(St,R,a)=>{a.r(R),a.d(R,{CoreModule:()=>jt});var I=a(8583),m=a(5987),E=a(9765),e=a(7716),oe=a(9308),re=a(9667),u=a(3065);const ae=(0,u.ZF)("myRouter"),{selectQueryParam:le,selectRouteParam:ce}=re.Ug(ae);var o=a(5990);const C=(0,a(273).H)({selectId:function(s){return s.id}}),fe=C.getInitialState({loading:!1,fbError:!1,allIssuesLastFetched:0}),me=(0,u.Lq)(fe,(0,u.on)(o.Ow,(s,{data:t})=>C.addOne(t,Object.assign(Object.assign({},s),{loading:!0,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.dO,(s,{data:n})=>C.updateOne(n,Object.assign(Object.assign({},s),{loading:!0,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.vU,(s,{data:n,errMsg:t})=>C.removeOne(n.id,Object.assign(Object.assign({},s),{loading:!1,fbError:!0,fbErrorMsg:t}))),(0,u.on)(o.Cx,s=>Object.assign(Object.assign({},s),{loading:!1,fbError:!1,fbErrorMsg:null})),(0,u.on)(o.bX,(s,{errorMsg:n})=>Object.assign(Object.assign({},s),{loading:!1,fbError:!0,fbErrorMsg:n})),(0,u.on)(o.Yt,(s,{searchTerm:t,showLoadMask:i})=>{let r;return r=i,Object.assign(Object.assign({},s),{issuesRefreshingLoading:r,searchTerm:t,loading:!0,fbError:!1,fbErrorMsg:null})}),(0,u.on)(o.Ur,(s,{data:n,updatedTime:t})=>C.setAll(n,Object.assign(Object.assign({},s),{allIssuesLastFetched:t,issuesRefreshingLoading:!1,loading:!1,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.gh,(s,{errMsg:n})=>Object.assign(Object.assign({},s),{issuesRefreshingLoading:!1,loading:!1,fbError:!0,fbErrorMsg:n})),(0,u.on)(o.IM,(s,{data:n})=>C.updateOne({id:n.id,changes:{open:!1,loading:!0}},Object.assign(Object.assign({},s),{loading:!0,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.rc,(s,{data:n})=>C.updateOne({id:n.id,changes:{loading:!1}},Object.assign(Object.assign({},s),{loading:!1,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.CG,(s,{data:n,errMsg:t})=>C.updateOne({id:n.id,changes:{open:!0,loading:!1}},Object.assign(Object.assign({},s),{loading:!1,fbError:!0,fbErrorMsg:t}))),(0,u.on)(o.NM,(s,{data:n})=>C.updateOne({id:n.id,changes:{open:!0,loading:!0}},Object.assign(Object.assign({},s),{loading:!0,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.TU,(s,{data:n})=>C.updateOne({id:n.id,changes:{loading:!1}},Object.assign(Object.assign({},s),{loading:!1,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.S7,(s,{data:n,errMsg:t})=>C.updateOne({id:n.id,changes:{open:!1,loading:!1}},Object.assign(Object.assign({},s),{loading:!1,fbError:!0,fbErrorMsg:t}))),(0,u.on)(o.hP,(s,{issueId:n})=>Object.assign(Object.assign({},s),{selectedIssueId:n})),(0,u.on)(o.po,(s,{inEditMode:n})=>Object.assign(Object.assign({},s),{issueEditMode:n})),(0,u.on)(o.mi,(s,{issue:n})=>(console.log(n),C.removeOne(n.id,Object.assign(Object.assign({},s),{loading:!0,fbError:!1,fbErrorMsg:null})))),(0,u.on)(o.Z1,(s,{})=>Object.assign(Object.assign({},s),{loading:!1,fbError:!1,fbErrorMsg:null})),(0,u.on)(o.$L,(s,{issue:n,errMsg:t})=>C.addOne(n,Object.assign(Object.assign({},s),{loading:!1,fbError:!0,fbErrorMsg:t}))),(0,u.on)(o.LP,(s,{updates:n})=>C.updateOne(n,Object.assign(Object.assign({},s),{loading:!0,fbError:!1,fbErrorMsg:null}))),(0,u.on)(o.yV,(s,{issue:n})=>{const i={id:n.id+"",changes:Object.assign(Object.assign({},n.changes),{loading:!1})};return C.updateOne(i,Object.assign(Object.assign({},s),{loading:!1,fbError:!1,fbErrorMsg:null}))}),(0,u.on)(o.lE,(s,{time:n})=>Object.assign(Object.assign({},s),{lastRefreshAllRequest:n})));function he(s,n){return me(s,n)}const b=(0,u.ZF)("issues"),N=((0,u.P1)(b,C.getSelectors().selectIds),(0,u.P1)(b,C.getSelectors().selectEntities)),G=(0,u.P1)(b,C.getSelectors().selectAll),z=(0,u.P1)(b,C.getSelectors().selectTotal),B=((0,u.P1)(b,s=>s.ids?s.ids.length:0),s=>(0,u.P1)(N,n=>s?n[s]:void 0)),W=(0,u.P1)(G,s=>s.reduce((n,t)=>{let i=n;return t.open&&(i+=1),i},0)),Ce=(0,u.P1)(z,W,(s,n)=>s-n),be=(0,u.P1)(b,s=>s.loading),ye=(0,u.P1)(b,s=>s.selectedIssueId),Ze=(0,u.P1)(ye,N,(s,n)=>{if(s)return n[s]}),Te=(0,u.P1)(b,s=>s.issueEditMode),Oe=(0,u.P1)(b,s=>s.lastRefreshAllRequest),_e=(0,u.P1)(b,s=>s.issuesRefreshingLoading),xe=(0,u.P1)(b,s=>s.searchTerm&&""===s.searchTerm.trim()?null:s.searchTerm),P="issues";let y=(()=>{class s{constructor(t,i,r){this.store=t,this.router=i,this.route=r,this.getQueryParamById$=this.store.select(le("newIssuePane")),this.getAllIssues$=this.store.select(G),this.openIssueCount$=this.store.select(W),this.closedIssueCount$=this.store.select(Ce),this.totalIssueCount$=this.store.select(z),this.getIssueCounterNumber=d=>this.store.select((s=>(0,u.P1)(B(s),n=>null==n?void 0:n.issueNumber))(d)),this.getIssueById=d=>this.store.select(B(d)),this.getIssueByParamId=d=>this.store.select((s=>(0,u.P1)(ce(s),N,(n,t)=>{if(n)return t[n]}))(d)),this.getIssueBySelectedId$=this.store.select(Ze),this.issueOverallLoading$=this.store.select(be),this.getIssueEditMode$=this.store.select(Te),this.refreshAllIssuesRequest$=this.store.select(Oe),this.issuesRefreshLoading$=this.store.select(_e),this.getUserSearchTerm$=this.store.select(xe),this.currentIssueCounter=1,this.totalIssueCount$.subscribe(d=>{this.currentIssueCounter=d+1}),this.refreshAllIssuesRequest$.subscribe(d=>{d&&(console.log("refreshing all issues:",d),this.getAllIssues(null,!0))})}toggleNewIssuePane(t){this.store.dispatch(oe.Y({open:t}))}getAllIssues(t,i=!1){this.store.dispatch(o.Yt({url:P,searchTerm:t,showLoadMask:i}))}toggleOpenCloseIssue(t){this.store.dispatch(t.open?o.IM({data:t}):o.NM({data:t}))}setSelectedIssueId(t){this.store.dispatch(o.hP({issueId:t}))}toggleIssueEditMode(t){this.store.dispatch(o.po({inEditMode:t}))}deleteIssue(t,i){this.store.dispatch(o.mi({issue:t,url:i}))}goBackToIssuesPage(){this.router.navigate(["/","issues"])}goToIssueDetailView(t){this.router.navigate(["/issues",t])}editIssue(t,i){this.store.dispatch(o.LP({updates:t,url:P+"/"+t.id,issue:i}))}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(u.yh),e.LFG(m.F0),e.LFG(m.gz))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),Ae=(()=>{class s{constructor(t,i,r,d){this.cs=t,this.router=i,this.route=r,this.store=d,this.compDest$=new E.xQ}ngOnInit(){}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(y),e.Y36(m.F0),e.Y36(m.gz),e.Y36(u.yh))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core"]],decls:2,vars:0,consts:[[1,"container","mb-3"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"router-outlet"),e.qZA())},directives:[m.lC],styles:[""]}),s})();var T=a(6782),x=a(105),A=a(2238),V=a(1095);let Me=(()=>{class s{constructor(t,i){this.dialogRef=t,this.data=i}ngOnInit(){}onNoClick(){this.dialogRef.close(!1)}onYesClick(){this.dialogRef.close(!0)}ngOnDestroy(){}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(A.so),e.Y36(A.WI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-shared-dialog"]],decls:10,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Confirmation"),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"p"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"button",3),e.NdJ("click",function(){return i.onNoClick()}),e._uU(7,"No"),e.qZA(),e.TgZ(8,"button",4),e.NdJ("click",function(){return i.onYesClick()}),e._uU(9,"Yes"),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.hij("Are you sure you want to ",null==i.data?null:i.data.actionName,""))},directives:[A.uh,A.xY,A.H8,V.lW],styles:[""]}),s})();var U=a(7343),De=a(2178),j=a(6627),w=a(7746),H=a(8341),Y=a(4762),k=a(9254),L=a(9510);class O{transform(n){let t="prior-";switch(n){case L.q.Low:t+="low";break;case L.q.Medium:t+="medium";break;case L.q.High:t+="high"}return t}}O.\u0275fac=function(n){return new(n||O)},O.\u0275pipe=e.Yjl({name:"priorToCssClass",type:O,pure:!0}),(0,Y.gn)([(0,k.Z)()],O.prototype,"transform",null);class M{transform(n){return n?"issue-open":"issue-closed"}}M.\u0275fac=function(n){return new(n||M)},M.\u0275pipe=e.Yjl({name:"openToCssClass",type:M,pure:!0}),(0,Y.gn)([(0,k.Z)()],M.prototype,"transform",null);class F{transform(n){return n?"":"loading-bg"}}F.\u0275fac=function(n){return new(n||F)},F.\u0275pipe=e.Yjl({name:"createdToCssClass",type:F,pure:!0}),(0,Y.gn)([(0,k.Z)()],F.prototype,"transform",null);let Ee=(()=>{class s{transform(t,i){return t?i?"opened":"open":"closed"}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275pipe=e.Yjl({name:"issueOpenStatusDisplay",type:s,pure:!0}),s})(),Pe=(()=>{class s{transform(t){return t?(t+"").trim().length:0}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275pipe=e.Yjl({name:"getValueCountDisplay",type:s,pure:!0}),s})();var X=a(837);function we(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).onEditToggle()}),e._uU(1),e.ALo(2,"async"),e.qZA()}if(2&s){const t=e.oxw(2);e.xp6(1),e.hij(" ",e.lcZ(2,1,t.cs.getIssueEditMode$)?"Cancel edit":"Edit issue"," ")}}function Fe(s,n){if(1&s){const t=e.EpF();e.ynx(0),e.YNc(1,we,3,3,"button",7),e.TgZ(2,"button",8),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteIssue()}),e._uU(3,"Delete issue"),e.qZA(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",null==t.issue?null:t.issue.open)}}function $e(s,n){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",10),e.NdJ("click",function(){return e.CHM(t),e.oxw().onOpenCloseToggleIssue()}),e._uU(2),e.qZA(),e.BQk()}if(2&s){const t=e.oxw();e.xp6(2),e.hij(" ",null!=t.issue&&t.issue.open?"Close issue":"Reopen issue"," ")}}function je(s,n){1&s&&(e.ynx(0),e.TgZ(1,"div",11),e.TgZ(2,"div",12),e._UZ(3,"mat-progress-bar",13),e.qZA(),e.qZA(),e.BQk())}function Le(s,n){if(1&s&&(e.ynx(0),e.TgZ(1,"div",14),e.TgZ(2,"div",12),e.TgZ(3,"div",15),e.TgZ(4,"mat-icon",16),e.ALo(5,"priorToCssClass"),e._uU(6,"error_outline"),e.qZA(),e._uU(7),e.TgZ(8,"span",17),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",18),e.TgZ(11,"div",12),e.TgZ(12,"div",19),e.TgZ(13,"mat-chip-list",20),e.TgZ(14,"mat-chip",21),e.ALo(15,"openToCssClass"),e._uU(16),e.ALo(17,"issueOpenStatusDisplay"),e.qZA(),e.qZA(),e.TgZ(18,"div",22),e._uU(19),e.ALo(20,"dateDisplay"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(21,"hr"),e.BQk()),2&s){const t=e.oxw();e.xp6(4),e.Tol(e.lcZ(5,10,null==t.issue||null==t.issue.priority?null:t.issue.priority.id)),e.Q6J("title","Priority: "+(null==t.issue||null==t.issue.priority?null:t.issue.priority.display)),e.xp6(3),e.hij(" ",null==t.issue?null:t.issue.title," "),e.xp6(2),e.hij(" #",null==t.issue?null:t.issue.issueNumber," "),e.xp6(5),e.Tol(e.lcZ(15,12,null==t.issue?null:t.issue.open)),e.xp6(2),e.hij(" ",e.xi3(17,14,null==t.issue?null:t.issue.open,!1)," "),e.xp6(3),e.AsE(" ",null==t.issue?null:t.issue.author," created this issue on ",e.xi3(20,17,null==t.issue?null:t.issue.dateCreated,"FULLANDFROMNOW")," ")}}const Se=function(){return["/","issues"]};function Ne(s,n){1&s&&(e.ynx(0),e.TgZ(1,"div",14),e.TgZ(2,"div",23),e._uU(3," This issue does not exist anymore. "),e.TgZ(4,"a",24),e._uU(5,"Go back"),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&s&&(e.xp6(4),e.Q6J("routerLink",e.DdM(1,Se)))}function Ue(s,n){if(1&s&&(e.YNc(0,Ne,6,2,"ng-container",3),e.ALo(1,"async")),2&s){const t=e.oxw();e.Q6J("ngIf",!e.lcZ(1,1,t.cs.issueOverallLoading$))}}let Ye=(()=>{class s{constructor(t,i,r,d,c,l){this.router=t,this.route=i,this.cs=r,this.store=d,this.crs=c,this.dialog=l,this.compDest$=new E.xQ,this.issue=void 0,this.editMode=!1}ngOnInit(){x.H5("action-row"),this.cs.getIssueBySelectedId$.pipe((0,T.R)(this.compDest$)).subscribe(t=>{this.issue=t}),this.route.paramMap.pipe((0,T.R)(this.compDest$)).subscribe(t=>{this.cs.setSelectedIssueId(t.get("id"))}),this.cs.getIssueEditMode$.pipe((0,T.R)(this.compDest$)).subscribe(t=>{this.editMode=t})}goBackToAll(){this.router.navigate(["/","issues"],{relativeTo:this.route})}onOpenCloseToggleIssue(){var t;if(this.issue){const i=(null===(t=this.issue)||void 0===t?void 0:t.open)?"close":"reopen";this.openConfirmDialog(i).subscribe(r=>{r&&this.issue&&this.cs.toggleOpenCloseIssue(this.issue)})}}openConfirmDialog(t){return this.dialog.open(Me,{minWidth:"300px",data:{actionName:t+" this issue?"}}).afterClosed().pipe((0,T.R)(this.compDest$))}onEditToggle(){this.router.navigate(this.editMode?["./","view"]:["./","edit"],{relativeTo:this.route})}deleteIssue(){this.openConfirmDialog("delete").subscribe(t=>{t&&this.issue&&this.cs.deleteIssue(this.issue,P)})}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(m.F0),e.Y36(m.gz),e.Y36(y),e.Y36(u.yh),e.Y36(U.I),e.Y36(A.uw))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core-issue-display-detail"]],decls:14,vars:7,consts:[["id","action-row",1,"row","my-3","py-1"],[1,"col-6","col-lg-10"],["type","button",1,"btn","btn-outline-primary","mr-2","mb-2",3,"click"],[4,"ngIf"],[1,"col-6","col-lg-2"],[4,"ngIf","ngIfElse"],["issueDoesNotExist",""],["type","button","class","btn btn-warning mr-2 mb-2",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger","mr-2","mb-2",3,"click"],["type","button",1,"btn","btn-warning","mr-2","mb-2",3,"click"],["type","button",1,"btn","btn-success","float-right",3,"click"],[1,"row","mb-2"],[1,"col-lg-12"],["mode","indeterminate"],[1,"row"],[1,"title"],["mat-list-icon","",3,"title"],[1,"count"],[1,"row","mt-2"],[1,"meta"],[1,"mr-2"],["color","primary","selected",""],[1,"v-center"],[1,"col-lg-12","if","fs-18","f-w-700"],[3,"routerLink"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return i.goBackToAll()}),e._uU(3,"Back"),e.qZA(),e.YNc(4,Fe,4,1,"ng-container",3),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,$e,3,1,"ng-container",3),e.qZA(),e.qZA(),e._UZ(7,"hr"),e.YNc(8,je,4,0,"ng-container",3),e.ALo(9,"async"),e.YNc(10,Le,22,20,"ng-container",5),e._UZ(11,"router-outlet"),e.YNc(12,Ue,2,3,"ng-template",null,6,e.W1O)),2&t){const r=e.MAs(13);e.xp6(4),e.Q6J("ngIf",i.issue),e.xp6(2),e.Q6J("ngIf",i.issue),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,5,i.cs.issueOverallLoading$)),e.xp6(2),e.Q6J("ngIf",i.issue)("ngIfElse",r)}},directives:[I.O5,m.lC,De.pW,j.Hw,w.Nh,H.qn,H.HS,m.yS],pipes:[I.Ov,O,M,Ee,X.o],styles:[".action-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.title[_ngcontent-%COMP%]{font-size:32px;font-weight:400;min-height:35px;line-height:33px;word-break:break-word}.count[_ngcontent-%COMP%]{color:#6a737d;min-height:35px;font-weight:100}.meta[_ngcontent-%COMP%]{font-size:14px;color:#586069;display:flex}.desc[_ngcontent-%COMP%]{font-size:23px}mat-chip.issue-open[_ngcontent-%COMP%]{background-color:#28a745!important}mat-chip.issue-closed[_ngcontent-%COMP%]{background-color:#888!important}p.desc[_ngcontent-%COMP%]{font-size:14px;color:#24292e}"]}),s})();var ke=a(4395),Qe=a(7519),qe=a(91),D=a(8295),K=a(3166),v=a(3679),ee=a(2458),te=a(8030),Je=a(4885);function Re(s,n){1&s&&(e.TgZ(0,"div",8),e._UZ(1,"mat-spinner",9),e._uU(2," Loading... "),e.qZA())}function Ge(s,n){if(1&s&&(e.TgZ(0,"div",10),e._uU(1),e.ALo(2,"async"),e.ALo(3,"dateDisplay"),e.qZA()),2&s){const t=e.oxw().ngIf,i=e.oxw();e.xp6(1),e.lnq(" #",e.lcZ(2,3,i.cs.getIssueCounterNumber(null==t?null:t.id))," created ",e.xi3(3,5,null==t?null:t.dateCreated,"FROMNOW")," by ",null==t?null:t.author," ")}}const ze=function(s,n,t){return{"issue-open":s,"issue-closed":n,"loading-bg":t}};function Be(s,n){if(1&s){const t=e.EpF();e.ynx(0),e.TgZ(1,"mat-list-item",1),e.TgZ(2,"mat-icon",2),e.ALo(3,"priorToCssClass"),e._uU(4,"error_outline"),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.NdJ("click",function(){return e.CHM(t),e.oxw().onIssueClick()}),e._uU(7),e.qZA(),e.YNc(8,Re,3,0,"div",5),e.qZA(),e.TgZ(9,"div",6),e._uU(10),e.qZA(),e.YNc(11,Ge,4,8,"div",7),e.qZA(),e.BQk()}if(2&s){const t=n.ngIf;e.xp6(1),e.Q6J("ngClass",e.kEZ(11,ze,null==t?null:t.open,!(null!=t&&t.open),!(null!=t&&t.created))),e.xp6(1),e.Tol(e.lcZ(3,9,null==t||null==t.priority?null:t.priority.id)),e.Q6J("title","Priority: "+(null==t||null==t.priority?null:t.priority.display)),e.xp6(5),e.AsE(" ",null==t?null:t.title," ",null!=t&&t.created?"":"(creating...)"," "),e.xp6(1),e.Q6J("ngIf",null==t?null:t.loading),e.xp6(2),e.hij(" ",null==t?null:t.description," "),e.xp6(1),e.Q6J("ngIf",null==t?null:t.created)}}let We=(()=>{class s{constructor(t,i,r){this.cs=t,this.router=i,this.route=r}ngOnInit(){}onIssueClick(){var t,i;(null===(t=this.issue)||void 0===t?void 0:t.id)&&this.router.navigate(["../",null===(i=this.issue)||void 0===i?void 0:i.id],{relativeTo:this.route})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(y),e.Y36(m.F0),e.Y36(m.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core-issue-display-issue"]],inputs:{issue:"issue"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"issue-border",3,"ngClass"],["mat-list-icon","",3,"title"],["mat-line","",1,"issue-title"],["mat-line","",1,"text",3,"click"],["class","d-flex",4,"ngIf"],["mat-line","",1,"issue-desc","mb-1"],["mat-line","","class","issue-meta",4,"ngIf"],[1,"d-flex"],["color","primary","diameter","20",1,"mr-2"],["mat-line","",1,"issue-meta"]],template:function(t,i){1&t&&e.YNc(0,Be,12,15,"ng-container",0),2&t&&e.Q6J("ngIf",i.issue)},directives:[I.O5,w.Tg,I.mk,te.oO,j.Hw,w.Nh,ee.X2,Je.$g],pipes:[O,I.Ov,X.o],styles:[".issue-border[_ngcontent-%COMP%]{border-right:1px solid #e1e4e8;border-bottom:1px solid #e1e4e8}.mat-line.issue-desc[_ngcontent-%COMP%]{color:#666;font-size:13px!important;line-height:22px}.mat-line.issue-title[_ngcontent-%COMP%]{font-weight:600;font-size:16px;display:flex;justify-content:space-between}.mat-line.issue-meta[_ngcontent-%COMP%]{font-size:13px!important;color:#888}.mat-line.issue-title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]:hover{cursor:pointer;color:#33f}"]}),s})();var Ve=a(3617);function He(s,n){if(1&s&&(e.ynx(0),e._UZ(1,"app-core-issue-display-issue",10),e.BQk()),2&s){const t=n.$implicit;e.xp6(1),e.Q6J("issue",t)}}function Xe(s,n){if(1&s&&(e.ynx(0),e.YNc(1,He,2,1,"ng-container",9),e.BQk()),2&s){const t=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",t)}}function Ke(s,n){if(1&s&&(e.ynx(0),e.YNc(1,Xe,2,1,"ng-container",5),e.BQk()),2&s){const t=n.ngIf;e.oxw(2);const i=e.MAs(17);e.xp6(1),e.Q6J("ngIf",t&&t.length>0)("ngIfElse",i)}}function et(s,n){if(1&s&&(e.ynx(0),e.YNc(1,Ke,2,2,"ng-container",8),e.ALo(2,"async"),e.BQk()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.cs.getAllIssues$))}}const tt=function(){return["./"]},st=function(){return{newIssuePane:"open"}};function nt(s,n){1&s&&(e.TgZ(0,"div",11),e._UZ(1,"img",12),e.qZA(),e.TgZ(2,"div",13),e._uU(3," No isses were found. "),e.qZA(),e.TgZ(4,"div",14),e.TgZ(5,"a",15),e._uU(6," Would you like to create a new issue? "),e.qZA(),e.qZA()),2&s&&(e.xp6(5),e.Q6J("routerLink",e.DdM(2,tt))("queryParams",e.DdM(3,st)))}function it(s,n){1&s&&(e.TgZ(0,"div",16),e._UZ(1,"app-shared-loading"),e.qZA())}let ot=(()=>{class s{constructor(t){this.cs=t,this.compDest$=new E.xQ}ngOnInit(){}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core-issue-display"]],decls:20,vars:13,consts:[[1,"issues-header"],["mat-line","",1,"d-flex"],[1,"open"],[3,"title"],[1,"closed"],[4,"ngIf","ngIfElse"],["noIssuesReturned",""],["issueLoading",""],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"issue"],[1,"lg-img-parent","mt-5","mb-3"],["src","assets/banner/empty-cb.png","alt","logo",1,"lg-img","d-inline-block"],[1,"no-issues","if","mb-3"],[1,"no-issues","if"],[3,"routerLink","queryParams"],[1,"my-5"]],template:function(t,i){if(1&t&&(e.TgZ(0,"mat-list"),e.TgZ(1,"mat-list-item",0),e.TgZ(2,"div",1),e.TgZ(3,"mat-icon",2),e._uU(4,"error_outline"),e.qZA(),e.TgZ(5,"div",3),e.ALo(6,"async"),e._uU(7),e.ALo(8,"async"),e.qZA(),e.TgZ(9,"mat-icon",4),e._uU(10,"check_circle_outline"),e.qZA(),e.TgZ(11,"div"),e._uU(12),e.ALo(13,"async"),e.qZA(),e.qZA(),e.qZA(),e.YNc(14,et,3,3,"ng-container",5),e.ALo(15,"async"),e.qZA(),e.YNc(16,nt,7,4,"ng-template",null,6,e.W1O),e.YNc(18,it,2,0,"ng-template",null,7,e.W1O)),2&t){const r=e.MAs(19);e.xp6(5),e.Q6J("title",e.lcZ(6,5,i.cs.totalIssueCount$)+" total issues"),e.xp6(2),e.hij(" ",e.lcZ(8,7,i.cs.openIssueCount$)," Open "),e.xp6(5),e.hij(" ",e.lcZ(13,9,i.cs.closedIssueCount$)," Closed"),e.xp6(2),e.Q6J("ngIf",!e.lcZ(15,11,i.cs.issuesRefreshLoading$))("ngIfElse",r)}},directives:[w.i$,w.Tg,ee.X2,j.Hw,I.O5,I.sg,We,m.yS,Ve.N],pipes:[I.Ov],styles:[".issues-header[_ngcontent-%COMP%]{background-color:#f6f8fa;border:1px solid #e1e4e8}.mat-line[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:15px}.mat-line[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:5px}mat-list-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{border-radius:15px;color:#fff}mat-list-item[_ngcontent-%COMP%]   .mat-icon.open[_ngcontent-%COMP%]{background-color:#28a745}mat-list-item[_ngcontent-%COMP%]   .mat-icon.closed[_ngcontent-%COMP%]{background-color:#888}.no-issues[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:22px;font-weight:400}"]}),s})();function se(s){const n=s.value;if(!n||""===(""+n).trim())return{fieldRequired:!0}}function rt(s){const n=s.value;if(!(n&&""!==(""+n).trim()&&(n+"").trim().length<=256))return{fieldTooLong:!0}}var at=a(5917);let ne=(()=>{class s{confirm(t){const i=window.confirm(t||"Is it OK?");return(0,at.of)(i)}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var _=a(3738),ut=a(6109),ie=a(2613);const lt=["titleInput"];function ct(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"mat-card-header"),e._UZ(1,"div",6),e.TgZ(2,"mat-card-title",7),e.TgZ(3,"div"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"mat-card-subtitle",8),e.TgZ(6,"div"),e._uU(7),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().onIssueCancel()}),e._uU(10,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=e.oxw();e.xp6(4),e.hij(" Add Issue ",null!=t.issueFg&&t.issueFg.pristine?"":"*"," "),e.xp6(3),e.hij(" #",t.cos.currentIssueCounter," ")}}function dt(s,n){if(1&s&&(e.TgZ(0,"mat-radio-button",19),e.ALo(1,"priorToCssClass"),e.TgZ(2,"span",20),e._uU(3),e.qZA(),e.qZA()),2&s){const t=n.$implicit;e.Tol(e.lcZ(1,4,t.id)),e.Q6J("value",t),e.xp6(3),e.Oqu(t.display)}}function gt(s,n){if(1&s&&(e.TgZ(0,"div"),e.TgZ(1,"form",10),e.TgZ(2,"mat-form-field",11),e.TgZ(3,"mat-label"),e._uU(4,"Title"),e.qZA(),e._UZ(5,"input",12,13),e.TgZ(7,"mat-hint",14),e._uU(8),e.ALo(9,"getValueCountDisplay"),e.qZA(),e.qZA(),e.TgZ(10,"mat-form-field",15),e.TgZ(11,"mat-label"),e._uU(12,"Description"),e.qZA(),e._UZ(13,"textarea",16),e.qZA(),e.TgZ(14,"mat-radio-group",17),e.YNc(15,dt,4,6,"mat-radio-button",18),e.qZA(),e.qZA(),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.issueFg),e.xp6(7),e.hij("",e.lcZ(9,5,null==t.titleValue?null:t.titleValue.value)," / 256"),e.xp6(5),e.Q6J("cdkTextareaAutosize",!0)("cdkAutosizeMinRows",3),e.xp6(2),e.Q6J("ngForOf",t.priorityList)}}function pt(s,n){if(1&s){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().onFormReset()}),e._uU(1,"Reset"),e.qZA()}}const ft=function(s,n){return{"mat-elevation-z0":s,"mat-elevation-z5":n}};let Q=(()=>{class s{constructor(t,i,r,d,c,l){this.fb=t,this.cs=i,this.router=r,this.route=d,this.cos=c,this.confirmService=l,this.issueData=void 0,this.isEditMode=!1,this.priorityList=x.h2,this.issueFg=void 0,this.createInitIssueFg()}unloadNotification(t){return!!this.changesSaved}get titleValue(){if(this.issueFg&&this.issueFg.get("title"))return this.issueFg.get("title")}get changesSaved(){var t;return null===(t=this.issueFg)||void 0===t?void 0:t.pristine}ngOnChanges(){this.createIssueFg(this.issueData)}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>{var t;null===(t=this.titleInput)||void 0===t||t.nativeElement.focus()},300)}createIssueFg(t){if(t){const i=this.priorityList.find(r=>{var d;return r.id===(null===(d=t.priority)||void 0===d?void 0:d.id)});this.issueFg.patchValue(Object.assign(Object.assign({},t),{priority:i}))}}onFormReset(){this.issueData&&this.createIssueFg(this.issueData)}onSubmit(){var t,i,r,d;let c=null===(t=this.issueFg)||void 0===t?void 0:t.value;if(null===(i=this.issueFg)||void 0===i?void 0:i.valid)if(this.isEditMode&&this.issueData){const l={id:null===(r=this.issueData)||void 0===r?void 0:r.id,changes:Object.assign(Object.assign({},c),{loading:!0})};this.cos.editIssue(l,this.issueData)}else{const l=this.createFullIssueObject(c);this.cs.addNewIssue(l,"issues/"+l.id),this.onIssueCancel()}null===(d=this.issueFg)||void 0===d||d.markAsPristine()}createFullIssueObject(t){return Object.assign(Object.assign({},t),{dateCreated:(new Date).getTime(),id:this.cs.createDocId(),open:!0,author:"Tester",reactions:0,created:!1,loading:!0,issueNumber:this.cos.currentIssueCounter})}onIssueCancel(){this.router.navigate(["./"])}createInitIssueFg(){this.issueFg=this.fb.group({title:x.j2(null,!1,[se,rt]),description:x.j2(null,!1,[se]),priority:x.j2(this.priorityList[1],!1,[v.kI.required])})}ngOnDestroy(){}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(v.qu),e.Y36(U.I),e.Y36(m.F0),e.Y36(m.gz),e.Y36(y),e.Y36(ne))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core-issue-creator"]],viewQuery:function(t,i){if(1&t&&e.Gf(lt,5),2&t){let r;e.iGM(r=e.CRH())&&(i.titleInput=r.first)}},hostBindings:function(t,i){1&t&&e.NdJ("beforeunload",function(d){return i.unloadNotification(d)},!1,e.Jf7)},inputs:{issueData:"issueData",isEditMode:"isEditMode"},features:[e.TTD],decls:12,vars:17,consts:[[1,"creator-card",3,"ngClass"],[4,"ngIf"],[1,"mt-2"],[1,"actions"],["type","button",1,"btn","btn-success",3,"disabled","click"],["type","button","class","btn btn-info",3,"click",4,"ngIf"],["mat-card-avatar","",1,"creator-header-image"],[1,"if","f-w-700"],[1,"title-parent"],["type","button",1,"btn","btn-info",3,"click"],[1,"issue-form",3,"formGroup"],[1,"full-w"],["matInput","","placeholder","Add NgRx to app...","formControlName","title"],["titleInput",""],["align","end"],[1,"full-w","mb-2"],["matInput","","placeholder","Install latest NgRx...","cdkTextareaAutosize","","formControlName","description",3,"cdkTextareaAutosize","cdkAutosizeMinRows"],["formControlName","priority",1,"priority-radio"],["color","primary",3,"value","class",4,"ngFor","ngForOf"],["color","primary",3,"value"],[1,"priority-val"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-card",0),e.ALo(1,"async"),e.ALo(2,"async"),e.YNc(3,ct,11,2,"mat-card-header",1),e.ALo(4,"async"),e.TgZ(5,"mat-card-content",2),e.YNc(6,gt,16,7,"div",1),e.qZA(),e.TgZ(7,"mat-card-actions",3),e.TgZ(8,"button",4),e.NdJ("click",function(){return i.onSubmit()}),e._uU(9),e.ALo(10,"async"),e.qZA(),e.YNc(11,pt,2,0,"button",5),e.qZA(),e.qZA()),2&t&&(e.Q6J("ngClass",e.WLB(14,ft,e.lcZ(1,6,i.cos.getIssueEditMode$),!e.lcZ(2,8,i.cos.getIssueEditMode$))),e.xp6(3),e.Q6J("ngIf",!e.lcZ(4,10,i.cos.getIssueEditMode$)),e.xp6(3),e.Q6J("ngIf",i.issueFg),e.xp6(2),e.Q6J("disabled",null==i.issueFg?null:i.issueFg.invalid),e.xp6(1),e.hij(" ",e.lcZ(10,12,i.cos.getIssueEditMode$)?"Save edits":"Submit new issue"," "),e.xp6(2),e.Q6J("ngIf",!(null!=i.issueFg&&i.issueFg.pristine)))},directives:[_.a8,I.mk,te.oO,I.O5,_.dn,_.hq,_.dk,_.kc,_.n5,_.$j,v._Y,v.JL,v.sg,D.KE,D.hX,K.Nt,v.Fj,v.JJ,v.u,D.bx,ut.IC,ie.VQ,I.sg,ie.U0],pipes:[I.Ov,Pe,O],styles:['.creator-card[_ngcontent-%COMP%]{width:100%}.creator-header-image[_ngcontent-%COMP%]{background-image:url(/assets/banner/resolved2.png);background-size:95%;background-repeat:no-repeat}.issue-form[_ngcontent-%COMP%]{width:100%}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.priority-val[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:19px}.title-parent[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.btn.btn-info[_ngcontent-%COMP%]{font-family:"Roboto"}mat-card-subtitle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:15px}']}),s})();function ht(s,n){if(1&s&&(e.TgZ(0,"div",8),e.TgZ(1,"div",9),e._UZ(2,"app-core-issue-creator",10),e.qZA(),e.qZA()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("issueData",t.newIssue)}}function It(s,n){if(1&s&&(e.ynx(0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"p",3),e._uU(4),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&s){const t=e.oxw();e.xp6(4),e.hij(" ",null==t.issue?null:t.issue.description," ")}}function bt(s,n){if(1&s&&(e.ynx(0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"app-core-issue-creator",3),e.ALo(4,"async"),e.qZA(),e.qZA(),e.BQk()),2&s){const t=n.ngIf,i=e.oxw();e.xp6(3),e.Q6J("issueData",t)("isEditMode",e.lcZ(4,2,i.cs.getIssueEditMode$))}}const Zt=[{path:"",component:Ae,children:[{path:"",redirectTo:"all",pathMatch:"full"},{path:"all",component:(()=>{class s{constructor(t,i,r,d){this.cs=t,this.router=i,this.route=r,this.ims=d,this.compDest$=new E.xQ,this.showIssueCreatePane=!1,this.newIssue=void 0,this.searchCtrl=x.j2(null,!1)}ngOnInit(){this.cs.getQueryParamById$.pipe((0,T.R)(this.compDest$)).subscribe(t=>{this.showIssueCreatePane=!!t}),this.searchCtrl.valueChanges.pipe((0,ke.b)(500),(0,Qe.x)((t,i)=>t===i),(0,T.R)(this.compDest$)).subscribe(t=>{this.searchForIssues(t)}),this.cs.getUserSearchTerm$.pipe((0,T.R)(this.compDest$)).subscribe(t=>{this.searchCtrl.setValue(t,{emitEvent:!1})})}onInputActionClick(){this.searchCtrl.pristine?this.searchForIssues(this.searchCtrl.value):this.searchCtrl.reset()}searchForIssues(t){let i=null;t&&""!==t.trim()&&(i=t.trim()),this.cs.getAllIssues(i)}onNewIssue(){this.router.navigate(["./"],{queryParams:{newIssuePane:"open"}}),this.newIssue=void 0}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(y),e.Y36(m.F0),e.Y36(m.gz),e.Y36(qe.l))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core-all-issues"]],decls:17,vars:5,consts:[[1,"row","mt-3"],[1,"col-lg-12"],[1,"actions"],["matInput","","placeholder","NgRx upgrade",3,"formControl","keyup.enter"],["mat-button","","matSuffix","","mat-icon-button","",3,"click"],[1,"btn-parent"],["type","button",1,"btn","btn-success",3,"click"],["class","row my-3",4,"ngIf"],[1,"row","my-3"],[1,"offset-lg-1","col-lg-10"],[3,"issueData"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div"),e.TgZ(4,"mat-form-field"),e.TgZ(5,"mat-label"),e._uU(6,"Search issues.."),e.qZA(),e.TgZ(7,"input",3),e.NdJ("keyup.enter",function(){return i.searchForIssues(i.searchCtrl.value)}),e.qZA(),e.TgZ(8,"button",4),e.NdJ("click",function(){return i.onInputActionClick()}),e.TgZ(9,"mat-icon"),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",5),e.TgZ(12,"button",6),e.NdJ("click",function(){return i.onNewIssue()}),e._uU(13,"New issue"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(14,ht,3,1,"div",7),e._UZ(15,"hr"),e._UZ(16,"app-core-issue-display")),2&t&&(e.xp6(3),e.Tol(i.ims.mediaQList.matches?"":"input-parent-min-width"),e.xp6(4),e.Q6J("formControl",i.searchCtrl),e.xp6(3),e.hij(" ",i.searchCtrl.pristine?"search":"clear"," "),e.xp6(4),e.Q6J("ngIf",i.showIssueCreatePane))},directives:[D.KE,D.hX,K.Nt,v.Fj,v.JJ,v.oH,V.lW,D.R9,j.Hw,I.O5,ot,Q],styles:[".row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.actions[_ngcontent-%COMP%]   .btn-parent[_ngcontent-%COMP%]{display:flex;align-items:center}.mat-form-field[_ngcontent-%COMP%]{width:100%}.input-parent-min-width[_ngcontent-%COMP%]{min-width:500px}button.issue[_ngcontent-%COMP%]{background-color:#2ea44f;color:#fff}"]}),s})()},{path:":id",component:Ye,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"view",component:(()=>{class s{constructor(t,i,r,d){this.store=t,this.router=i,this.route=r,this.cs=d,this.compDest$=new E.xQ,this.issue=void 0}ngOnInit(){this.cs.getIssueBySelectedId$.pipe((0,T.R)(this.compDest$)).subscribe(t=>{this.issue=t})}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u.yh),e.Y36(m.F0),e.Y36(m.gz),e.Y36(y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core-issue-detail-view"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-lg-12"],[1,"desc"]],template:function(t,i){1&t&&e.YNc(0,It,5,1,"ng-container",0),2&t&&e.Q6J("ngIf",i.issue)},directives:[I.O5],styles:[""]}),s})()},{path:"edit",component:(()=>{class s{constructor(t){this.cs=t,this.cs.toggleIssueEditMode(!0)}ngOnInit(){}ngOnDestroy(){this.cs.toggleIssueEditMode(!1)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-core-issue-detail-edit"]],viewQuery:function(t,i){if(1&t&&e.Gf(Q,5),2&t){let r;e.iGM(r=e.CRH())&&(i.issueCreator=r.first)}},decls:2,vars:3,consts:[[4,"ngIf"],[1,"row"],[1,"col-lg-12"],[3,"issueData","isEditMode"]],template:function(t,i){1&t&&(e.YNc(0,bt,5,4,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,i.cs.getIssueBySelectedId$))},directives:[I.O5,Q],pipes:[I.Ov],styles:[""]}),s})(),canDeactivate:[(()=>{class s{constructor(t){this.cs=t}canDeactivate(t,i,r){return!(!t.issueCreator||!t.issueCreator.changesSaved)||this.cs.confirm("There are unsaved changes, would you like to navigate away?")}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(ne))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()]}]}]}];let Tt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[m.Bz.forChild(Zt)],m.Bz]}),s})();var Ot=a(5716),g=a(5358),S=a(9773),_t=a(8002),xt=a(3190),q=a(7479),J=a(3342),At=a(4612),Z=a(6556),Mt=a(755);const Pt=[(()=>{class s{constructor(t,i,r,d){this.actions$=t,this.ts=i,this.cs=r,this.cos=d,this.onAddIssue$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.Ow),(0,S.zg)(c=>{const l=c.data,h=c.url;return this.cs.createDocument(l,h).then(p=>{const f=(new Date).getTime();return o.dO({data:{id:l.id,changes:{created:!0,loading:!1}},dateFinished:f,url:h})},p=>{console.log("err: ",p);const f=Z.S(p);return o.vU({errMsg:f,data:l})})}))),this.onSuccessfullyIssueAdded$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.dO),(0,S.zg)(c=>this.cs.updatePartialDocument(c.data,c.url).then(l=>o.Cx(),l=>{const h=Z.S(l);return o.bX({errorMsg:h})})))),this.onSuccessfullyCleanup$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.Cx),(0,_t.U)(()=>(this.ts.getSnackbar("Issue created successfully"),o.Yt({url:P,searchTerm:null,showLoadMask:!1}))))),this.loadAllIssues$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.Yt),(0,xt.w)(c=>this.cs.readCollections(c.url,c.searchTerm).then(p=>{let f=[];const $=(new Date).getTime();return p.docs.forEach(Lt=>{f.push(Lt.data())}),o.Ur({data:f,updatedTime:$})},p=>{const f=Z.S(p);return o.gh({errMsg:f})})))),this.closeAIssue$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.IM),(0,q.z)(c=>{const l=c.data;return this.cs.updatePartialDocument({id:l.id,changes:{open:!1,loading:!0}},"issues/"+l.id).then(p=>o.rc({data:l}),p=>{const f=Z.S(p);return o.CG({data:l,errMsg:f})})}))),this.closeAIssueSuccess$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.rc),(0,S.zg)(c=>{const l=c.data;return this.cs.updatePartialDocument({id:l.id,changes:{loading:!1}},"issues/"+l.id).then(p=>{this.ts.getSnackbar("Issue closed successfully!")},p=>{const f=Z.S(p);this.ts.getError("Error occured closing issue. "+f)})})),{dispatch:!1}),this.openAIssue$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.NM),(0,q.z)(c=>{const l=c.data;return this.cs.updatePartialDocument({id:l.id,changes:{open:!0,loading:!0}},"issues/"+l.id).then(p=>o.TU({data:l}),p=>{const f=Z.S(p);return o.S7({data:l,errMsg:f})})}))),this.openAIssueSuccess$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.TU),(0,S.zg)(c=>{const l=c.data;return this.cs.updatePartialDocument({id:l.id,changes:{loading:!1}},"issues/"+l.id).then(p=>{this.ts.getSnackbar("Issue reopened successfully!")},p=>{const f=Z.S(p);this.ts.getError("Error occured closing issue. "+f)})})),{dispatch:!1}),this.onFailedCleanup$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.bX),(0,J.b)(()=>{this.ts.getSnackbar("Error occured creating the issue")})),{dispatch:!1}),this.onDeleteIssue$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.mi),(0,q.z)(c=>{const l=c.issue;return this.cs.deleteDocument(l,c.url).then(p=>o.Z1({issue:l}),p=>{const f=Z.S(p);return o.$L({issue:l,errMsg:f})})}))),this.onDeleteIssueSuccess$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.Z1),(0,J.b)(c=>{this.ts.getSnackbar("Issue #"+c.issue.issueNumber+" was deleted successfully"),this.cos.goBackToIssuesPage()})),{dispatch:!1}),this.onEditIssue$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.LP),(0,At.b)(c=>{const l=c.issue,h=c.updates;let p=function(s,n){return{id:n,changes:Object.assign(Object.assign({},s.changes),{loading:!1})}}(c.updates,c.issue.id);return this.cs.updatePartialDocument(p,c.url).then(f=>o.yV({issue:h}),f=>{const $=Z.S(f);return o.BY({errMsg:$,issue:l})})}))),this.onEditIssueSuccess$=(0,g.GW)(()=>this.actions$.pipe((0,g.l4)(o.yV),(0,J.b)(c=>{this.ts.getSnackbar("Issue #"+c.issue.changes.issueNumber+" was edited"),this.cos.goToIssueDetailView(c.issue.id)})),{dispatch:!1})}ngrxOnInitEffects(){return o.Yt({url:P,searchTerm:null,showLoadMask:!0})}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(g.eX),e.LFG(Mt.M),e.LFG(U.I),e.LFG(y))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})()];var wt=a(7462),Ft=a(8418),$t=a(61);let jt=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[],imports:[[I.ez,v.UX,v.u5,Ot.p,u.Aw.forFeature("issues",he),g.sQ.forFeature(Pt),wt.d,Ft.n,$t.I,Tt]]}),s})()}}]);