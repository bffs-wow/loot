"use strict";(self.webpackChunksynergy_loot=self.webpackChunksynergy_loot||[]).push([[225],{6225:(b,d,s)=>{s.r(d),s.d(d,{ZoneModule:()=>H});var u=s(6895),l=s(1791),f=s(801),x=s(591),A=s(6053),a=s(4850),h=s(2198),T=s(2994),S=s(7545),y=s(7224),n=s(5062),C=s(842),L=s(8222),U=s(734),v=s(3868),I=s(6557),P=s(3457);function z(e,i){if(1&e){const o=n.EpF();n.TgZ(0,"span",17),n.NdJ("click",function(){const g=n.CHM(o).$implicit,m=n.oxw(4);return n.KtG(m.sourceChosen(g))}),n.TgZ(1,"a"),n._uU(2),n.qZA()()}if(2&e){const o=i.$implicit,t=n.oxw().ngIf;n.ekj("is-primary",t.name===o.name),n.xp6(2),n.Oqu(o.name||o.category)}}function $(e,i){if(1&e&&(n.TgZ(0,"div",15),n.YNc(1,z,3,3,"span",16),n.ALo(2,"async"),n.qZA()),2&e){const o=n.oxw(3);n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,o.zoneItemSources$))}}function F(e,i){if(1&e&&(n.TgZ(0,"div",12),n.YNc(1,$,3,3,"div",14),n.ALo(2,"async"),n.qZA()),2&e){const o=n.oxw(2);n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,o.chosenSource$))}}function J(e,i){if(1&e&&(n.TgZ(0,"small",27)(1,"abbr",28),n._UZ(2,"fa-icon",7),n._uU(3," Unlisted "),n.qZA()()),2&e){const o=n.oxw(5);n.xp6(2),n.Q6J("icon",o.faExclamationTriangle)}}const N=function(e){return["/raider",e]};function O(e,i){if(1&e&&(n.TgZ(0,"span",29)(1,"a",30),n._uU(2),n.qZA(),n._uU(3," \xa0 "),n.qZA()),2&e){const o=i.$implicit;n.xp6(1),n.Q6J("routerLink",n.VKq(2,N,o.raiderName)),n.xp6(1),n.hij(" ",o.raiderName," ")}}function Q(e,i){if(1&e&&(n.ynx(0),n._uU(1," \xa0 "),n.YNc(2,J,4,1,"small",24),n._uU(3," \xa0 "),n.TgZ(4,"div",25),n.YNc(5,O,4,4,"span",26),n.qZA(),n.BQk()),2&e){const o=i.ngIf,t=n.oxw(4);n.xp6(2),n.Q6J("ngIf",t.noneListed(o)),n.xp6(3),n.Q6J("ngForOf",o)}}function Y(e,i){1&e&&(n.TgZ(0,"small"),n._uU(1,"No Rankings."),n.qZA())}const M=function(e){return["/item",e]};function j(e,i){if(1&e&&(n.TgZ(0,"article",19)(1,"div",20)(2,"div",21)(3,"a",22),n._uU(4),n.qZA(),n._uU(5,"\xa0\xa0 "),n.YNc(6,Q,6,2,"ng-container",0),n.ALo(7,"async"),n.YNc(8,Y,2,0,"ng-template",null,23,n.W1O),n.qZA()()()),2&e){const o=i.$implicit,t=n.MAs(9),r=n.oxw(3);n.xp6(3),n.Q6J("appWowheadTooltip",o)("routerLink",n.VKq(7,M,o.parent_item_id||o.item_id)),n.xp6(1),n.Oqu(o.name),n.xp6(2),n.Q6J("ngIf",n.lcZ(7,5,r.getNextRecipient(o)))("ngIfElse",t)}}function w(e,i){if(1&e&&(n.TgZ(0,"div",12)(1,"p",5)(2,"strong"),n._uU(3),n.qZA(),n._uU(4," Loot "),n.qZA(),n.YNc(5,j,10,9,"article",18),n.ALo(6,"async"),n.qZA()),2&e){const o=i.ngIf,t=n.oxw(2);n.xp6(3),n.Oqu(o.name),n.xp6(2),n.Q6J("ngForOf",n.lcZ(6,2,t.getSourceLoot(o)))}}function B(e,i){if(1&e&&(n.TgZ(0,"div")(1,"section",2)(2,"div",3)(3,"div",4)(4,"h1",5)(5,"a",6),n._uU(6),n._UZ(7,"fa-icon",7),n.qZA()()()()(),n.TgZ(8,"section",8),n.YNc(9,F,3,3,"div",9),n.ALo(10,"async"),n.TgZ(11,"div",10)(12,"div",11),n.YNc(13,w,7,4,"div",9),n.ALo(14,"async"),n.qZA(),n.TgZ(15,"div",11)(16,"div",12),n._UZ(17,"app-loot-feed",13),n.ALo(18,"async"),n.qZA()()()()()),2&e){const o=i.ngIf,t=n.oxw();n.xp6(5),n.Q6J("href","https://tbc.wowhead.com/zone="+o.zoneId,n.LSH)("appWowheadTooltip",o),n.xp6(1),n.hij("",o.name," "),n.xp6(1),n.Q6J("icon",t.faExternalLinkAlt),n.xp6(2),n.Q6J("ngIf",n.lcZ(10,8,t.zoneItemSources$).length>1),n.xp6(4),n.Q6J("ngIf",n.lcZ(14,10,t.chosenSource$)),n.xp6(4),n.Q6J("zone",o)("source",n.lcZ(18,12,t.chosenSource$))}}function E(e,i){1&e&&(n.TgZ(0,"h1",5),n._uU(1,"Zone not found"),n.qZA())}const R=[{path:":slug",component:(()=>{class e{constructor(o,t,r,g,m){this.router=o,this.route=t,this.itemService=r,this.zoneService=g,this.lootListFacade=m,this.faExternalLinkAlt=f.Xjp,this.faExclamationTriangle=f.eHv,this.zone$=this.route.params.pipe((0,a.U)(c=>c.slug),(0,a.U)(c=>this.zoneService.getZone(c))),this.allSource="All",this.zoneItemSources$=this.zone$.pipe((0,h.h)(c=>!!c),(0,a.U)(c=>c.itemSources.length>1?[this.allSource,...c.itemSources]:[...c.itemSources])),this._chosenSource$=new x.X(this.allSource),this.chosenSource$=(0,A.aj)([this.zoneItemSources$,this.route.queryParams]).pipe((0,T.b)(([c,_])=>{if(_.boss){let p=c.find(X=>X===_.boss);p||(p=this.allSource),this._chosenSource$.next(p)}}),(0,S.w)(()=>this._chosenSource$.asObservable()))}ngOnInit(){}sourceChosen(o){this._chosenSource$.next(o),this.router.navigate([],{relativeTo:this.route,queryParams:{boss:o},queryParamsHandling:"merge"})}getSourceLoot(o){return this.zone$.pipe((0,a.U)(t=>this.itemService.getBySource(t,o)))}getNextRecipient(o){return this.lootListFacade.getRankedLootGroups(o.item_name).pipe((0,y.P)(),(0,a.U)(t=>t.length?t[0]:null),(0,h.h)(t=>null!==t),(0,a.U)(t=>t.rankings.length?t.rankings:null))}noneListed(o){return!1}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(l.F0),n.Y36(l.gz),n.Y36(C.e),n.Y36(L.b),n.Y36(U.X))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-zone-page"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["notFound",""],[1,"hero","is-small","is-black"],[1,"hero-body"],[1,"container"],[1,"title"],["title","Open Wowhead","target","_blank",3,"href","appWowheadTooltip"],[3,"icon"],[1,"section"],["class","box",4,"ngIf"],[1,"columns"],[1,"column"],[1,"box"],[3,"zone","source"],["class","tags",4,"ngIf"],[1,"tags"],["class","tag is-black is-medium",3,"is-primary","click",4,"ngFor","ngForOf"],[1,"tag","is-black","is-medium",3,"click"],["class","media",4,"ngFor","ngForOf"],[1,"media"],[1,"media-content"],[1,"content"],[3,"appWowheadTooltip","routerLink"],["noRankings",""],["class","is-size-6 has-text-warning",4,"ngIf"],[1,"tags","pt-1"],["class","tag is-black",4,"ngFor","ngForOf"],[1,"is-size-6","has-text-warning"],["title","All of these raiders did not list the item, but are still eligible."],[1,"tag","is-black"],[3,"routerLink"]],template:function(o,t){if(1&o&&(n.YNc(0,B,19,14,"div",0),n.ALo(1,"async"),n.YNc(2,E,2,0,"ng-template",null,1,n.W1O)),2&o){const r=n.MAs(3);n.Q6J("ngIf",n.lcZ(1,2,t.zone$))("ngIfElse",r)}},dependencies:[u.sg,u.O5,v.BN,l.yS,I.D,P.G,u.Ov],changeDetection:0}),e})()}];let W=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(R),l.Bz]}),e})();var k=s(6090),q=s(9941),Z=s(4719);let H=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,Z.u5,Z.UX,v.uH,q.A0,W,k.q]}),e})()}}]);