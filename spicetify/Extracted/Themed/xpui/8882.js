"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8882],{36664:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(30758),a=n(73891),i=n(86070);const s=({children:e,innerRef:t,...n})=>{const s=(0,r.useRef)(null),l=t??s;return(0,a.g)(l),(0,i.jsx)("li",{ref:l,role:"listitem",...n,children:e})}},88882:(e,t,n)=>{n.d(t,{g:()=>Ot});var r=n(30758),a=n(93523),i=n(75671),s=n(12662),l=n(31417),o=n(99701),c=n(26639),u=n(44481),d=n(24610),h=n(77567),m=n(17763),g=n(51414);var p=n(78464),f=n(39795),x=n(87621),y=n(33329),v=n(86070);const C=({spec:e})=>{const t=(0,y.s)();return(0,v.jsx)(x.S,{placeholder:l.Ru.get("web-player.aligned-curation.search-placeholder"),fullWidth:!0,alwaysExpanded:!0,onFilter:()=>{t.logInteraction(e.textFilterInputFieldFactory().keyStrokeFilter())},onClear:()=>{t.logInteraction(e.textFilterClearButtonFactory().hitClearFilter())},onActivate:()=>(t.logInteraction(e.textFilterInputFieldFactory().hitFocusInputField()),!0)})};var b=n(16273),j=n(97500),k=n.n(j),R=n(40638),S=n(22726);var I=n(90696),E=n(95089),w=n(97548),A=n(68933),D=n(86563),O=n(27163),T=n(422),N=n(28506),M=n(36646),L=n(39464),P=n(88091);const F="DquSH3YjnaIIXMZiOvwA",_="cnJ6YaknIWRMDw3dnmMW",U="XixSU8ZwGqTebpHgzKQ6",z="Sgz3pjuXbCc1XOotX1Pn",B="qISxXDflO0j7RZURLAdK",Q="EzJYnyBsM_CeBFaheU9o",H="Ag3Wh5j_CDv9I3pyKUti",Y="X5mwWAw7ijxPvQOoabzQ",X="_fXgQSvNv1uUeA96LmFb",K="rGZ6_xipMRzzUqX45tXU",q="ovCS4AiOf70DjkuziQNg",W="kU3__q1yYBoYAn9HeS68",V="LAdTOeZ2QwKXGF4XAXZ8",Z="GDbY_Uz53APNwtpujCCQ",$="OO14Jbk4k4Sfsnl3GMni",J="jFkiGjErQ20kJyxKC0AR",G="RHoNK4qVATbstzJZm5G8",ee="_iJX4yzDZzSHy_g9vp3G",te="v8g3JwlNkChF4Ph5BDA9",ne="XvgFwKtvocRdadc47KE9",re="aSq_W0q0xVhSsAVDHdip",ae="pEh4oZCtjjsplTeN2TAx",ie="HcOcWGmde1pjv6pSyupx",se="iWcofSXjs9MuRfHzkuI9",le=({onClick:e=(()=>{}),depth:t,...n})=>{const a=(0,r.useRef)(null),{handleMouseEnter:i,handleMouseMove:s,handleMouseLeave:l,handleFocus:o}=(0,M.t)(a),c=(0,r.useCallback)((t=>{t.stopPropagation(),e(t)}),[e]),u=(0,r.useCallback)((e=>{e.stopPropagation()}),[]);return(0,v.jsx)(P.u,{"data-depth":t,children:(0,v.jsx)(L.H,{className:ne,onClick:c,onFocus:o,onMouseEnter:i,onMouseMove:s,onMouseLeave:l,onContextMenu:u,ref:a,as:"button",role:"menuitem",...n})})};var oe=n(14343),ce=n(38501),ue=n(94);const de=()=>{const e=(0,ue.x)().getCapabilities().canFilterOnCurationState,t=(0,oe.NC)(ce.lFB);return e&&t};var he=n(31879),me=n(32255),ge=n(69624),pe=n(32999),fe=n(29074),xe=n(7307);const ye=({selected:e})=>e?(0,v.jsx)(E.k,{className:ie,semanticColor:"textBrightAccent",size:"small"}):(0,v.jsx)("span",{className:H}),ve=r.memo((function({index:e,playlist:t,filter:n,isSelected:a,onSelect:i,depth:s,...o}){const c=(0,fe.m)(),u=t.type===xe.c.PLAYLIST&&t.isLoading,d=de();(0,r.useEffect)((()=>{u&&c.resync(t.uri)}),[c,t.uri,u]);const h=(0,pe._)(),m=(0,r.useMemo)((()=>{if(t.type===xe.c.YOUR_EPISODES)return l.Ru.get("web-player.your-library-x.subtitle-your-episodes");const e=t.trackCount,n=t.episodeCount,r=t.bookCount;if(void 0===e&&void 0===n&&void 0===r)return l.Ru.get("tracklist-header.songs-counter",0);if(e&&n&&r)return l.Ru.get("tracklist-header.items-counter",e+n+r);return[void 0!==e&&e>=0?l.Ru.get("tracklist-header.songs-counter",e):void 0,void 0!==n&&n>=0?l.Ru.get("tracklist-header.episodes-counter",n):void 0,void 0!==r&&r>=0?l.Ru.get("tracklist-header.audiobooks-counter",r):void 0].filter((e=>e)).join(l.Ru.getSeparator())}),[t]);return(0,v.jsx)(le,{role:"menuitemcheckbox","aria-checked":a(t),onClick:n=>{n.preventDefault(),n.stopPropagation(),i(t,e)},onKeyDown:n=>{" "===n.key&&(n.preventDefault(),n.stopPropagation(),i(t,e))},depth:s,...o,children:(0,v.jsx)(w.v,{id:t.uri,className:W,title:(0,v.jsx)(A.d,{lineClamp:1,className:Z,dir:"auto",children:(0,v.jsx)(N.M,{searchWords:[n],textToHighlight:t.name})}),subtitle:d&&(0,v.jsxs)("div",{className:$,children:[(0,v.jsx)(he.g,{pinned:t.pinned,size:"xsmall"}),(0,v.jsxs)(D.j,{lineClamp:1,children:[t.fromFolder&&(0,v.jsx)(O.h,{className:ae,size:"xsmall",semanticColor:"textSubdued"}),(0,v.jsx)(T.E,{variant:"marginal",children:t.fromFolder?[t.fromFolder.name,m].join(" • "):m})]})]}),media:(0,v.jsx)(me.b,{fadeIn:!0,images:h("images"in t?t.images:[],32),shape:me.u.ROUNDED_CORNERS,size:d?ge.Qe.SIZE_40:ge.Qe.SIZE_32,iconSize:d?"small":"xsmall",type:t.type,title:t.name,className:V,color:t.color,loadingMode:"eager"}),trailing:(0,v.jsxs)("div",{className:se,children:[!d&&(0,v.jsx)(he.g,{pinned:t.pinned,size:"small"}),(0,v.jsx)(ye,{selected:a(t)})]}),variant:"naked",size:"md",hoverAnimationDuration:"0ms"},t.uri)})}));var Ce=n(47186),be=n(3956);const je=(0,r.forwardRef)((function({children:e,setIsOpen:t,onTouchStart:n,onClick:a=(()=>{}),outerRef:i,depth:s,...l},o){const{handleMouseEnter:c,handleMouseMove:u,handleMouseLeave:d,handleFocus:h}=(0,M.t)(i,t),m=(0,r.useCallback)((e=>{e.stopPropagation(),a(e)}),[a]),g=(0,r.useCallback)((e=>{e.stopPropagation()}),[]);return(0,v.jsx)(P.u,{"data-depth":s,children:(0,v.jsx)(L.H,{className:ne,onClick:m,onFocus:h,onMouseEnter:c,onMouseMove:u,onMouseLeave:d,onTouchStart:n,onContextMenu:g,ref:o,role:"menuitem",as:"button",...l,children:e})})})),ke=({component:e,placement:t="right-start",children:n,onClick:a,depth:i,...s})=>{const[l,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),u=(0,r.useCallback)((()=>{o((e=>!e))}),[]),d=document.getElementById("curation-sheet-list");return(0,v.jsx)(be.Ay,{render:()=>l?n:null,interactive:!0,visible:l,arrow:!1,animation:!1,appendTo:d||void 0,placement:t,offset:[0,0],popperOptions:{modifiers:[{name:"preventOverflow",options:{boundary:document.body,altAxis:!0,padding:10}},{name:"flip",options:{boundary:document.body}}]},children:(0,v.jsx)(je,{setIsOpen:o,onTouchStart:u,ref:c,outerRef:c,onClick:a,depth:i,...s,children:e})})};var Re=n(37178);const Se=function({folder:e,filter:t}){const n=de(),a=(0,r.useMemo)((()=>{const t=e.folderCount,n=e.playlistCount;return t||n?n&&n>0&&!t?l.Ru.get("web-player.your-library-x.rows.folder.number-of-playlists",n):t&&t>0&&!n?l.Ru.get("web-player.your-library-x.rows.folder.number-of-folders",t):[l.Ru.get("web-player.your-library-x.rows.folder.number-of-folders",t),l.Ru.get("web-player.your-library-x.rows.folder.number-of-playlists",n)].join(" • "):null}),[e]);return(0,v.jsx)(w.v,{id:e.uri,className:W,title:(0,v.jsx)(A.d,{lineClamp:1,className:Z,dir:"auto",children:(0,v.jsx)(N.M,{searchWords:[t],textToHighlight:e.name})}),subtitle:n&&(0,v.jsxs)("div",{className:$,children:[(0,v.jsx)(he.g,{pinned:e.pinned,size:"xsmall"}),(0,v.jsx)(D.j,{lineClamp:1,children:(0,v.jsx)(T.E,{variant:"marginal",children:a})})]}),media:(0,v.jsx)(me.b,{shape:me.u.ROUNDED_CORNERS,size:n?ge.Qe.SIZE_40:ge.Qe.SIZE_32,iconSize:"small",type:e.type,title:e.name,loadingMode:"eager",className:V}),trailing:(0,v.jsxs)("div",{className:se,children:[!n&&(0,v.jsx)(he.g,{pinned:e.pinned,size:"small"}),(0,v.jsx)(Ce.V,{size:"small",className:re,semanticColor:"textSubdued"})]}),variant:"naked",size:"md",hoverAnimationDuration:"0ms"},e.uri)},Ie=r.memo((function({folder:e,filter:t,id:n,children:r,depth:a,...i}){const s=(0,Re.W)();return(0,v.jsx)(ke,{component:(0,v.jsx)(Se,{folder:e,filter:t}),placement:s?"left-start":"right-start","aria-controls":n,depth:a,...i,children:r})}));var Ee=n(71217);const we=(e,t,n)=>{const r=t.closest('ul[role="menu"]'),a=t.closest('li[role="presentation"]');if(!r||!a)return t;const i=r.dataset.depth??"0",s=r.querySelectorAll(`:scope li[role="presentation"][data-depth="${i}"]`),l=Array.from(s).findIndex((e=>e===a));let o;o=n===Ee.O.UP?Math.max(0,l-1):Math.min(l+1,s.length-1);return s.item(o).querySelector('a[href], button, input[role="searchbox"], input[type="range"], [role="button"]')||t},Ae="S6v7shcJUYT21me9ejvi",De=({filter:e})=>(0,v.jsxs)("div",{className:Ae,children:[(0,v.jsx)(T.E,{variant:"bodyMediumBold",semanticColor:"textBase",children:l.Ru.get("search.empty-results-title",e)}),(0,v.jsx)(T.E,{variant:"bodySmall",semanticColor:"textBase",children:l.Ru.get("search.empty-results-text-short")})]}),Oe="O0HhMc4yyMlmf_03MiPW",Te="JOFtCYZdITXsi5Une_gc",Ne=({items:e,changes:t,onSelect:n,filter:a,depth:i})=>{const s=(0,r.useCallback)((e=>t.has(e.uri)?!e.hasCuratedItems:e.hasCuratedItems),[t]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:Oe,children:(0,v.jsx)(T.E,{variant:"bodySmallBold",semanticColor:"textSubdued",children:l.Ru.get("web-player.aligned-curation.saved-in.title")})}),e.map(((e,t)=>e&&e.type!==xe.c.FOLDER?(0,v.jsx)(ve,{index:t,playlist:e,filter:a,isSelected:s,onSelect:n,depth:i},`${e.uri}`):null))]})};var Me=n(62021);const Le=()=>{const[e,t]=(0,Me.x)("ac-sort-order-id",null);return{selectedSortOrderId:e,setSelectedSortOrderId:t}},Pe=({depth:e})=>{const t=(0,ue.x)(),n=(0,r.useMemo)((()=>t.getAvailableSortOrders()),[t]),{selectedSortOrderId:a,setSelectedSortOrderId:i}=Le(),s=(0,r.useMemo)((()=>n.find((e=>e.id===a))??n.at(0)),[n,a]),o=(0,r.useCallback)((()=>{if(s){const e=(n.indexOf(s)+1)%n.length;i(n[e].id)}}),[n,s,i]);return(0,v.jsx)(P.u,{"data-depth":e,children:(0,v.jsx)(L.H,{role:"menuitem",as:"div",children:(0,v.jsx)("button",{className:k()(Oe,Te),onClick:o,"aria-label":l.Ru.get("drop_down.sort_by"),children:(0,v.jsx)(T.E,{semanticColor:"textSubdued",variant:"bodySmallBold",children:s?.name??l.Ru.get("drop_down.sort_by")})})})})},Fe=({title:e,className:t})=>e?(0,v.jsx)("div",{className:k()(z,t),children:(0,v.jsx)(T.E,{variant:"marginalBold",className:Q,children:e})}):null;var _e=n(85387),Ue=n(60623),ze=n(30493);const Be="RnO0XyiOPcJFcNlmVHbQ",Qe=r.memo((function({hideCurationSheet:e,uri:t,folderUri:n,saveChanges:a,onCreate:i,depth:s,...o}){const{createPlaylistFromTracks:c}=(0,ze.A)(),u=(0,_e.Zp)(),d=(0,r.useCallback)((async()=>{const r=n?{after:{uri:n}}:{before:"start"};a();let s=null;try{s=await c([t],r);const n=(0,S.o_h)(s);n&&u(n.toURLPath(!0)),e()}finally{i(s)}}),[c,n,e,u,i,a,t]);return(0,v.jsx)(le,{role:"menuitem",onClick:d,depth:s,...o,children:(0,v.jsx)(w.v,{id:"new-playlist",className:Be,title:l.Ru.get("web-player.aligned-curation.button.new-playlist"),media:(0,v.jsx)(Ue.u,{size:"small"}),variant:"naked",size:"md",hoverAnimationDuration:"0ms"})})}));var He=n(36664);const Ye=({height:e,...t})=>(0,v.jsx)(He.c,{className:q,style:{height:e},...t});var Xe=n(45917);var Ke=n(88308),qe=n(13295);const We=({uri:e,folderUri:t,filter:n,depth:a})=>{const i=(0,ue.x)(),s=de(),{selectedSortOrderId:l}=Le(),o=0===a?18e5:3e5,{hasItems:c,getItems:u,nrValidItems:d,getPageQueriesData:h,invalidateCache:m}=function({id:e,params:t,fetch:n,limit:a,getPageQueryOptions:i}){const s=(0,Ke.lB)((()=>t),[t]),l=(0,Ke.lB)((()=>["react-query-items-cache",e,s]),[e,a,s]),o=(0,r.useCallback)(((e,t)=>[...l,{offset:e,limit:t}]),[l]),c=(0,b.jE)(),u=(0,r.useCallback)((async(e,t)=>{const r=i?.(s,e,t),a=r?.gcTime,l=r?.staleTime;return void 0!==r||void 0!==l||void 0!==a?c.fetchQuery({...r,queryKey:o(e,t),queryFn:()=>n(s,e,t),staleTime:l,gcTime:a}):n(s,e,t)}),[n,i,o,s,c]),{invalidateCache:d,...h}=(0,qe.E)({nrItems:a,fetch:u,limit:a});return{...h,invalidateCache:(0,r.useCallback)((()=>{c.invalidateQueries({queryKey:l}),d()}),[d,c,l]),getPageQueriesData:(0,r.useCallback)((e=>c.getQueriesData({...e,queryKey:l,predicate:t=>{const n=t.queryKey,r=n?.[2],a=n?.[3];return e?.predicate?.(r,a)??!0}})),[l,c])}}({id:"curation-list",params:{curatedItemUri:e,folderUri:t,textFilter:n,curationStateFilter:s?Xe.F.ONLY_UNCURATED:Xe.F.NONE,sortOrder:l??void 0},fetch:(0,r.useCallback)(((e,t,n)=>i.getCurationContexts({...e,offset:t,limit:n})),[i]),limit:50,getPageQueryOptions:(0,r.useCallback)(((e,t,n)=>0===t?{staleTime:0,cacheTime:o}:void 0),[o])});return{hasItems:c,getItems:u,nrValidItems:d,getPageQueriesData:h,invalidateCache:m}};let Ve=function(e){return e.ADD="add",e.REMOVE="remove",e}({});var Ze=n(53866),$e=n(48486),Je=n(33689),Ge=n(58306),et=n(78119);const tt=r.memo((function e({title:t,folderUri:n,uri:a,changes:i,saveChanges:s,toggleChange:o,hideCurationSheet:c,depth:u=0,filter:d="",id:h,spec:m}){const g=(0,y.s)(),p=de(),f=(0,r.useRef)(""),x=(0,r.useRef)(null),C=(0,r.useRef)(null),j=(0,Ze.y)(x),E=(0,b.jE)(),w=0===u,A=(0,r.useMemo)((()=>m.curationContextListFactory({uri:n??""})),[n,m]),D=(({uri:e,folderUri:t,filter:n})=>{const a=(0,ue.x)(),i=de(),[s,l]=(0,r.useState)([]),o=(0,r.useCallback)((async()=>{const r=(await a.getCurationContexts({curatedItemUri:e,folderUri:t,textFilter:n,flatten:!0,curationStateFilter:Xe.F.ONLY_CURATED,offset:0,limit:50})).items.filter((e=>null!==e));l(r)}),[a,n,t,e]);return(0,r.useEffect)((()=>{i&&o()}),[o,i]),s})({uri:a,folderUri:n,filter:d}),{hasItems:O,getItems:T,nrValidItems:N,getPageQueriesData:M,invalidateCache:L}=We({uri:a,folderUri:n,filter:d,depth:u}),P=""!==d&&d===f.current&&!O&&0===D.length;f.current=d,(0,et.L)((0,R.YQ)(L,200,{leading:!0,trailing:!0,maxWait:1e3}));const U=O&&!d?N:M({predicate:e=>e.folderUri===n&&!e.textFilter}).sort((([e],[t])=>(E.getQueryState(t)?.dataUpdatedAt??0)-(E.getQueryState(e)?.dataUpdatedAt??0))).at(0)?.[1]?.totalLength;let z;O?z=N+1:void 0!==U&&(z=U+1);const Q=(0,r.useCallback)((e=>i.has(e.uri)?!e.hasCuratedItems:!!e.hasCuratedItems),[i]),H=(0,r.useCallback)(((e,t)=>{const n=A.curationContextItemFactory({uri:e.uri,position:t});o(e.uri,{type:e.hasCuratedItems?Ve.REMOVE:Ve.ADD,name:e.name,image:"images"in e&&e.images.at(0)?.url||""}),g.logInteraction(Q(e)?n.hitDeselectEntityInList({entityToBeDeselected:e.uri}):n.hitSelectEntityInList({entityToBeSelected:e.uri}))}),[Q,A,g,o]),Y=(0,r.useCallback)((e=>{g.logInteraction(A.createPlaylistButtonFactory({uri:e??""}).hitCreatePlaylist())}),[A,g]),q=(0,r.useCallback)(((e,t,n,r)=>(0,v.jsx)(Ye,{height:e,"aria-posinset":r,"aria-setsize":n},t)),[]),W=(0,r.useCallback)(((t,n)=>T(t,n).map(((n,r)=>{const l=t+r,h=l+2;if(!n)return q("56px",l,z,h);const g=`curation-folder-submenu-${(0,S.o_h)(n.uri)?.id}`;return n.type===xe.c.FOLDER?(0,v.jsx)(Ie,{folder:n,filter:d,id:g,"aria-setsize":z,"aria-posinset":h,depth:u,children:(0,v.jsx)(e,{title:n.name,folderUri:n.uri,uri:a,toggleChange:o,changes:i,saveChanges:s,hideCurationSheet:c,depth:u+1,id:g,spec:m})},`${n.uri}`):(0,v.jsx)(ve,{index:l,playlist:n,filter:d,isSelected:Q,onSelect:H,depth:u,"aria-setsize":z,"aria-posinset":h},`${n.uri}`)}))),[T,q,z,a,o,i,s,c,u,d,m,Q,H]);(0,r.useLayoutEffect)((()=>{w||void 0===U||function(e){const t=e?.closest("[data-tippy-root]");if(t&&"_tippy"in t){const e=t._tippy;e?.popperInstance?.forceUpdate()}}(C.current)}),[w,U]);const V=w?$e.e:Je.Q;return(0,v.jsxs)(V,{"aria-label":l.Ru.get("web-player.aligned-curation.add-to-playlist-menu"),depth:u,className:k()(J,{[F]:!w,[_]:!w}),id:h,ref:w?null:C,...w&&{onFocusVerticalItem:we},children:[(0,v.jsx)(Fe,{title:t,className:B}),(0,v.jsx)(Qe,{hideCurationSheet:c,uri:a,folderUri:n,saveChanges:s,onCreate:Y,className:k()(ne,G,{[te]:j,[ee]:0!==U}),"aria-setsize":z,"aria-posinset":1,depth:u}),P?(0,v.jsx)(De,{filter:d}):(0,v.jsx)(I.a,{onInstanceCreated:e=>{x.current=e.elements().viewport},className:X,style:{height:56*(U??(w?7:1))+(p?36:0)+"px"},children:(0,v.jsxs)("div",{className:K,children:[p&&D.length>0&&(0,v.jsx)(Ne,{items:D,changes:i,onSelect:H,filter:d,depth:u}),p&&O&&(0,v.jsx)(Pe,{depth:u}),(0,v.jsx)(Ge.L,{renderRows:W,nrRows:N,rowHeight:56,scrollNodeRef:x,renderPlaceholder:q})]})})]})}));var nt=n(53133);function rt(){const{enqueueSnackbar:e}=(0,nt.d)();return(0,r.useCallback)((()=>{e("Something went wrong")}),[e])}var at=n(59088),it=n(63096);var st=n(77141),lt=n(20817),ot=n(35163),ct=n(50671),ut=n(21549);const dt=({uri:e,onChangesSaved:t,onHasChanges:n,onHide:i})=>{const{changes:s,toggleChange:o,saveChanges:c}=((e,t)=>{const n=(0,ue.x)(),a=(0,fe.m)(),i=(0,at.W)(),s=rt(),[o,c]=(0,r.useState)(new Map),u=(0,r.useCallback)(((e,t)=>{c((n=>{const r=new Map(n);return r.has(e)?r.delete(e):r.set(e,t),r}))}),[c]),d=(0,r.useCallback)((async(e,t)=>{let n=l.Ru.get("web-player.aligned-curation.feedback.changes-saved"),r=!1;if(1===e.length&&0===t.length){const t=o.get(e[0]);if(n=l.Ru.get("web-player.aligned-curation.feedback.added",t?.name),r=t?.image,!r&&(0,S.nuB)(e[0])){const t=await Promise.race([a.getMetadata(e[0]).then((({images:e})=>e)),new Promise((e=>setTimeout((()=>e([])),1e3)))]);r=(0,it.g)(t,{desiredSize:24})?.url}}else if(0===e.length&&1===t.length){const e=o.get(t[0]);n=l.Ru.get("web-player.aligned-curation.feedback.removed",e?.name),r=e?.image}i({message:n,imageSrc:r})}),[o,i,a]),h=(0,r.useCallback)((async()=>{if(0===o.size)return;const r=[],a=[];for(const[e,t]of o)t.type===Ve.ADD?r.push(e):t.type===Ve.REMOVE&&a.push(e);try{const i=await(n?.curateItems(e,r,a));d(r,a),t?.(i,e,o)}catch{s()}}),[o,n,e,d,t,s]);return{changes:o,toggleChange:u,saveChanges:h}})(e,t),{setFilter:m,filter:p}=(0,r.useContext)(f.g);(0,r.useEffect)((()=>()=>m("")),[m]),(0,r.useEffect)((()=>{n?.(s.size>0)}),[s,n]);const{spec:x,logger:y}=(0,ut.r)(d.c,{data:{uri:e}}),b=(0,ct.t)(x),j=(0,r.useMemo)((()=>x.filterContainerFactory()),[x]),k=(0,r.useMemo)((()=>x.doneButtonFactory()),[x]),R=(0,r.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),s.size&&(c(),i(),y.logInteraction(k.hitUiHide()),Array.from(s).forEach((([t,n])=>{const r=t===lt.BP||t===lt.Xn,a=n.type===Ve.ADD;let i;i=r?a?k.hitLike({itemToBeLiked:e}):k.hitRemoveLike({itemNoLongerLiked:e}):a?k.hitAddToPlaylist({playlist:t,itemToBeAdded:e}):k.hitRemoveItemFromPlaylist({playlist:t,itemToBeRemovedFromPlaylist:e}),y.logInteraction(i)})))}),[s,k,y,i,c,e]);return(0,v.jsx)(st.s,{focusTrapOptions:{allowOutsideClick:!0},children:(0,v.jsxs)("form",{className:F,style:{"--placeholder-image":`url(${(0,h.b)("images/ac-row-placeholder.png")})`},onClick:e=>{e.stopPropagation()},onSubmit:R,onKeyDownCapture:e=>{"Enter"===e.key&&e.metaKey&&R(e)},ref:b,children:[(0,v.jsx)(Fe,{title:l.Ru.get("web-player.aligned-curation.title")}),(0,v.jsx)("div",{className:U,children:(0,v.jsx)(C,{spec:j})}),(0,v.jsx)(g.R,{children:(0,v.jsx)(tt,{uri:e,toggleChange:o,changes:s,saveChanges:c,hideCurationSheet:i,depth:0,filter:p,id:"curation-sheet-list",spec:x})}),(0,v.jsxs)("div",{className:Y,children:[(0,v.jsx)(a.H,{type:"button",semanticColor:"textSubdued",size:"small",onClick:()=>{i(),y.logInteraction(x.cancelButtonFactory().hitUiHide())},condensed:!0,children:l.Ru.get("web-player.aligned-curation.button.cancel")}),0===s.size?null:(0,v.jsx)(u.$,{type:"submit",colorSet:"invertedLight",size:"small",children:l.Ru.get("web-player.aligned-curation.button.done")})]})]})})},ht=r.memo((function({...e}){return(0,v.jsx)(p.s,{onError:e=>{(0,ot.Jy)(e,"CurationSheet")},children:(0,v.jsx)(f.s,{uri:"spotify:internal:aligned-curation",children:(0,v.jsx)(dt,{...e})})})})),mt=e=>{const t=(0,m.Oj)();return(()=>{const e=(0,m.Oj)();(0,r.useEffect)((()=>{const t=t=>{"Escape"===t.key&&e({type:"close"})};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}}),[e])})(),(0,v.jsx)(ht,{...e,onHide:()=>t({type:"close"})})},gt=({uri:e,placement:t,onChangesSaved:n,onShow:a,children:i})=>{const s=(0,r.useRef)(!1),l=(0,r.useCallback)((e=>{s.current=e}),[]),o=(0,r.useCallback)((e=>{s.current||e()}),[]);return(0,v.jsx)(c.t,{menu:(0,v.jsx)(mt,{uri:e,onChangesSaved:n,onHasChanges:l}),onClickOutside:o,onShow:a,snapshotReferenceElementPositionWhileOpen:!0,autoUpdate:!1,placement:t,children:i})};var pt=n(87101),ft=n(5590),xt=n(38916),yt=n(69261),vt=n(19610),Ct=n(63301),bt=n(93240),jt=n(70427);function kt(){const e=(0,jt.h)();return{closeSnackbar:(0,r.useCallback)((t=>{t instanceof RegExp?e.current.forEach((e=>{t.test(`${e}`)&&(0,bt.mk)(e)})):(0,bt.mk)(t)}),[e]),closeSnackbarWithKeyPrefix:(0,r.useCallback)((t=>{e.current.forEach((e=>{`${e}`.startsWith(t)&&(0,bt.mk)(e)}))}),[e])}}var Rt=n(96789);var St=n(95264),It=n(86568),Et=n(28389),wt=n(60393),At=n(81058),Dt=n(8732);const Ot=(0,r.memo)((function({uri:e,size:t="small",className:n,condensed:c=!0,labelPlacement:u,menuPlacement:d}){const h=(0,Et.i)(e),m=(0,r.useRef)(h);m.current=h;const g=(0,r.useRef)(null),p=(0,r.useCallback)((()=>{g.current=h}),[h]),{isCurated:f,curateDefault:x,defaultCurationContextUri:y}=function(e,t=!1){const n=(0,ue.x)(),a=(0,r.useCallback)((()=>n.isCuratedSync(e)||t),[t,n,e]),[i,s]=(0,r.useState)(a),l=(0,r.useCallback)((()=>n.curateDefault(e)),[n,e]);return(0,r.useEffect)((()=>{s(a)}),[a]),(0,r.useEffect)((()=>n.getEvents().addListener(Dt.oq.UPDATE_CURATED_ITEM,(t=>{t.data.uri===e&&s(t.data.isCurated)}),{uri:e})),[n,e]),{isCurated:i,curateDefault:l,defaultCurationContextUri:n.getDefaultCurationContextUri(e)}}(h),C=function(){const{enqueueCustomSnackbar:e}=(0,Rt.i)(),{closeSnackbarWithKeyPrefix:t}=kt();return(0,r.useCallback)((({onChangeCurationClick:n,message:r,imageSrc:a})=>(t("default-curation"),e((0,v.jsx)(pt.O,{children:(0,v.jsx)(vt.P,{leading:(0,v.jsx)(xt.w,{src:a,type:xe.c.PLAYLIST,title:r}),center:(0,v.jsx)(yt.z,{children:r}),trailing:(0,v.jsx)(ft.M,{ctaText:l.Ru.get("web-player.aligned-curation.feedback.change-button"),onCtaClick:n})})}),{autoHideDuration:Ct.r,keyPrefix:"default-curation"}))),[t,e])}(),{closeSnackbarWithKeyPrefix:b}=kt(),j=rt(),{setState:k,Icon:R}=(0,At.Q)(f?St.t.CURATED:St.t.UNCURATED,St.A),{spec:S,logger:I}=(0,ut.r)(i.S,{}),E=(0,It.d$)(e),{spec:w,logger:A}=(0,ut.r)(s.e,{data:{uri:e}});(0,r.useEffect)((()=>{E&&A.logImpression(w.impression())}),[E,A,w]);const D=(0,r.useCallback)((async(t,n)=>{t.preventDefault();const r=function(e){if(e===lt.BP)return(0,wt.zK)();if(lt.Xn)return(0,wt.dB)();return null}(y);k(St.t.CURATED);const a=y===lt.BP||y===lt.Xn;I.logInteraction(a?S.hitLike({itemToBeLiked:e}):S.hitAddToPlaylist({playlist:y,itemToBeAdded:e})),!a&&E&&A.logInteraction(w.hitAddToPlaylist({itemToBeAdded:e,playlist:lt.BP}));try{await x();const t=r?.name?l.Ru.get("web-player.aligned-curation.feedback.added",r?.name):l.Ru.get("web-player.aligned-curation.feedback.added-to-library");C({onChangeCurationClick:t=>{n?.(t),I.logInteraction(S.defaultCurationSnackbarFactory().changeCurationContextButtonFactory({uri:e}).hitUiReveal())},message:t,imageSrc:(0,it.g)(r?.images,{desiredSize:24})?.url})}catch{j()}}),[y,k,I,S,e,x,C,j,E,A,w]),O=(0,r.useCallback)(((e,t)=>{t===m.current&&!1===e&&k(St.t.UNCURATED)}),[k]),T=function(e,t){if(e)return l.Ru.get("web-player.aligned-curation.tooltips.add-to-playlist");if(t===lt.BP)return l.Ru.get("web-player.aligned-curation.tooltips.add-to-liked-songs");if(t===lt.Xn)return l.Ru.get("web-player.aligned-curation.tooltips.add-to-your-episodes");return l.Ru.get("web-player.aligned-curation.tooltips.add-to-your-library")}(f,y);return(0,v.jsx)(gt,{uri:h,placement:d,onChangesSaved:O,onShow:p,children:(e,r,i)=>(0,v.jsx)(o.Zp,{label:T,placement:u,children:(0,v.jsx)(a.H,{size:t,className:n,"aria-checked":f,"aria-label":T,condensed:c,iconOnly:R,semanticColor:f?"textBrightAccent":void 0,ref:i,onClick:t=>{e&&g.current&&g.current!==h&&(g.current=h,r(t)),f?(r(t),I.logInteraction(S.hitUiReveal()),b("default-curation")):D(t,r)}})})})}))},59088:(e,t,n)=>{n.d(t,{W:()=>d});var r=n(30758),a=n(87101),i=n(38916),s=n(69261),l=n(19610),o=n(96789),c=n(7307),u=n(86070);function d(){const{enqueueCustomSnackbar:e}=(0,o.i)();return(0,r.useCallback)((({message:t,imageSrc:n})=>{e((0,u.jsx)(a.O,{children:(0,u.jsx)(l.P,{leading:!1===n?void 0:(0,u.jsx)(i.w,{src:n,type:c.c.PLAYLIST,title:t}),center:(0,u.jsx)(s.z,{children:t})})}),{identifier:t})}),[e])}},86568:(e,t,n)=>{n.d(t,{AT:()=>l,d$:()=>o,pg:()=>s});var r=n(30758),a=n(60749);let i=function(e){return e.ADD_TO_LIBRARY_DEPRECATED="addToLibrary",e.ADD_TO_LIBRARY="1",e}({}),s=function(e){return e.ADD_TO_LIBRARY="addToLibrary",e}({});const l=()=>{const[e,t]=(0,a.ok)(),[n,l]=(0,r.useState)((e=>{const t=e.get("intent");return t===i.ADD_TO_LIBRARY||t===i.ADD_TO_LIBRARY_DEPRECATED?s.ADD_TO_LIBRARY:null})(e));return{intent:n,clear:(0,r.useCallback)((()=>{l(null),t((e=>(e.delete("intent"),e)))}),[t])}},o=e=>{const[t]=(0,a.ok)(),n=t.get("intent");if(e){const r=t.get("highlight");return n===s.ADD_TO_LIBRARY&&r===e}return n===s.ADD_TO_LIBRARY}},38916:(e,t,n)=>{n.d(t,{w:()=>o});var r=n(32255),a=n(69624),i=n(32999);const s={snackbarImage:"XTygmcBFgNjoo0ckBBll"};var l=n(86070);function o({src:e,title:t,type:n}){const o=(0,i.dZ)();return(0,l.jsx)(r.b,{fadeIn:!0,images:e?[{url:o(e,24)}]:[],title:t,type:n,size:a.Qe.SIZE_24,shape:r.u.ROUNDED_CORNERS,iconSize:"xsmall",className:s.snackbarImage})}},31879:(e,t,n)=>{n.d(t,{g:()=>l});var r=n(95420),a=n(31417),i=n(7015),s=n(86070);const l=({pinned:e,size:t="xsmall"})=>e?(0,s.jsx)(r.H,{semanticColor:"textBrightAccent",size:t,title:a.Ru.get("web-player.your-library-x.pinned"),className:i.A.icon}):null},58306:(e,t,n)=>{n.d(t,{L:()=>h});var r=n(30758),a=n(99644);const i="main-rootlist-wrapper",s="main-rootlist-topSentinel",l="main-rootlist-bottomSentinel";var o=n(66530),c=n(86070);const u=(e,t)=>(0,c.jsx)("div",{style:{height:e}},t),d=()=>"undefined"!=typeof window&&"requestIdleCallback"in window,h=({renderRows:e,nrRows:t,rowHeight:n,scrollNodeRef:h,nrRowsOverscan:m=10,renderPlaceholder:g=u})=>{const p=(0,o.a)(),f=(0,r.useRef)(null),x=(0,r.useRef)(null),y=(0,r.useRef)(null),v=(0,r.useRef)(0),[C,b]=(0,r.useState)(d()?0:m),[j,k]=(0,r.useState)(null),[R,S]=(0,r.useState)(0),I=(0,r.useCallback)((()=>{const e=h.current;if(!e)return;const t=Math.ceil(e.offsetHeight/n)+2;S(t)}),[h,n]),E=(0,r.useCallback)((()=>{const e=h.current;if(!e)return;const t=Math.floor((e.scrollTop-v.current-1)/n);k(t)}),[n,h]);(0,r.useEffect)((()=>{d()&&window.requestIdleCallback((()=>{p()&&b(m)}))}),[p,m]),(0,r.useLayoutEffect)((()=>{const e=y.current,t=h.current;e&&t&&(v.current=e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop)}),[h,y.current?.offsetTop]),(0,r.useEffect)((()=>{if(!window.IntersectionObserver)return()=>{};const e=new window.IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&E()}))}));return f.current&&e.observe(f.current),x.current&&e.observe(x.current),()=>{e.disconnect()}}),[E,j,R,t]),(0,r.useLayoutEffect)((()=>{I(),E()}),[I,E]),(0,a.w)({refOrElement:h,observeOnly:"height",onResize:I});const w=(j??0)-C,A=Math.min(null!==j?w+2*C+R-1:-1,t-1),D=Math.max(w,0),O=Math.max(A,-1),T=Math.min(R>0?t*n:0,Math.max(n*(C-2),0)),N=n*D,M=n*t,L=M-n*Math.max(t-(O+1),0);return(0,c.jsxs)("div",{ref:y,className:i,style:{height:`${M}px`,"--row-height":`${n}px`},role:"presentation",children:[(0,c.jsxs)("div",{ref:f,"data-testid":"top-sentinel",className:s,style:{height:`${N+T}px`},role:"presentation",children:[g(`calc(100% - ${T}px)`,"top-sentinel"),(0,c.jsx)("div",{style:{height:`${T}px`},role:"presentation"})]}),(0,c.jsx)("div",{style:{transform:`translateY(${N}px)`},role:"presentation",children:e(D,O)}),(0,c.jsxs)("div",{ref:x,"data-testid":"bottom-sentinel",className:l,style:{height:`calc(100% - ${L}px + ${T}px)`},role:"presentation",children:[(0,c.jsx)("div",{style:{height:`${T}px`},role:"presentation"}),g(`calc(100% - ${T}px)`,"bottom-sentinel")]})]})}},70427:(e,t,n)=>{n.d(t,{h:()=>i});var r=n(30758),a=n(19616);function i(){return(0,r.useContext)(a.J)}},53866:(e,t,n)=>{n.d(t,{y:()=>i});var r=n(30758);function a(e){return!!e.current?.scrollTop}function i(e){const[t,n]=(0,r.useState)((()=>a(e)));return(0,r.useEffect)((()=>{const t=e.current;if(!t)return()=>{};const r=()=>{n(a(e))};return t.addEventListener("scroll",r,{passive:!0}),()=>{t.removeEventListener("scroll",r)}}),[e]),t}},13295:(e,t,n)=>{n.d(t,{E:()=>l});var r=n(30758);const a=(e,t=0,n={items:[],invalid:!0,id:0})=>({fetchedId:e.fetchedId,items:Array.from({length:e.totalLength}).map(((r,a)=>{const i=n.invalid?void 0:n.items[a]?.value;return{value:a-t in e.items?e.items[a-t]:i,index:a}})),invalid:!1,id:n.id}),i=e=>e.filter((e=>null!==e.value)),s=e=>{e.invalid=!0,e.id++};function l({initialItems:e,nrItems:t,fetch:n,limit:l=0,cacheAllOnInvalidation:o=!1,cacheAllLimit:c=t}){const u=(0,r.useRef)(!1),d=(0,r.useRef)(a({totalLength:t,items:e??[]})),h=(0,r.useRef)(!0),[,m]=(0,r.useState)(0);(0,r.useMemo)((()=>{h.current||s(d.current)}),[n,t]),(0,r.useMemo)((()=>{0===e?.length||h.current||s(d.current)}),[e]);const g=(0,r.useCallback)((async(r,i=l,s=!0,o=!1)=>{if(u.current&&!o&&!d.current.invalid)return;const c=d.current.id;if(n){const e=d.current.invalid;d.current.invalid=!1,u.current=!0;const t=await n(r,i);if(u.current=!1,c!==d.current.id)return;if(0===t.items.length&&0!==t.totalLength&&t.totalLength===d.current.items.length)return;d.current=a(t,r,{...d.current,invalid:e}),t.onCacheSuccess?.(),s&&m((e=>e+1))}else d.current=a({totalLength:t,items:e??[]}),s&&t<=(e?.length??0)&&setTimeout((()=>m((e=>e+1))),0)}),[n,e,l,t]),p=(0,r.useCallback)(((e,t,n)=>{const r=i(d.current.items).slice(e,t+1),a=r.filter((e=>d.current.invalid||void 0===e.value)),s=a.at(0)?.index??(d.current.invalid?e:void 0),o=a.at(-1)?.index??(d.current.invalid?t:void 0);return void 0===s||void 0===o||n?.cachedOnly||g(o===t?s:s===e?Math.max(o-l+1,0):s),r.map((e=>e.value))}),[g,l]),f=(0,r.useCallback)(((e,t)=>{const n=i(d.current.items),r=!d.current.invalid&&void 0!==n.at(e)?.value,a=!d.current.invalid&&void 0!==n.at(e+1)?.value;return r||t?.cachedOnly||g(a?Math.max(e-l+1,0):e),n.at(e)?.value}),[g,l]),x=(0,r.useRef)(!1),y=(0,r.useRef)(!1),v=(0,r.useCallback)((async(e=!1)=>{y.current||(x.current?y.current=!0:(x.current=!0,await g(0,c,e,!0),y.current&&await g(0,c,e,!0),y.current=!1,x.current=!1))}),[c,g]);(0,r.useEffect)((()=>{let e;return o&&(e=setTimeout(v,1e3)),()=>{clearTimeout(e)}}),[v,o]);const C=(0,r.useCallback)((()=>{o?v(!0):(s(d.current),m((e=>e+1)))}),[v,o]);h.current=!1;let b=i(d.current.items).length;return d.current.invalid&&0===b&&(b=t>0?1:0),{fetchedId:d.current.fetchedId,getItems:p,getItem:f,invalidateCache:C,hasItems:i(d.current.items).some((e=>!!e.value)),nrValidItems:b,cacheAll:v}}},94:(e,t,n)=>{n.d(t,{x:()=>i});var r=n(45917),a=n(30157);function i(){return(0,a.N)(r.p)}},7015:(e,t,n)=>{n.d(t,{A:()=>r});const r={imageContainer:"rV3vzuPrOk04pq0xRjLV",entityImage:"GSgVaqJa8VEp5mKoIN0b",pulse:"jf7uliBDj0R3ZjKTPEg_",link:"oaKRK4WllExdXORQIlFZ",subtitleText:"NVHSG1CguVgjg5bJ64_Z",subtitle:"iKNK2nAjtbavMKjPPJtJ",titleLink:"UZYGjsTEkEen6hFQe194",icon:"cSWBDsMjkH62GXIXo6mQ",subtitleLeadingWrapper:"Gxl7UDkumVYX3WtQEnb8"}}}]);
//# sourceMappingURL=8882.js.map