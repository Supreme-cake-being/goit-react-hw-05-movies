"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[740],{740:function(n,r,t){t.r(r),t.d(r,{default:function(){return h}});var e,a,u=t(439),c=t(791),i=t(689),s=t(87),o=t(168),f=t(686),p=f.Z.h1(e||(e=(0,o.Z)(["\n  margin-bottom: 24px;\n"]))),v=f.Z.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  list-style: none;\n"]))),d=t(184),m=function(n){var r=n.films,t=(0,i.TH)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{children:"Trending movies"}),(0,d.jsx)(v,{children:r.map((function(n){var r=n.id,e=n.title;return(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:"movies/".concat(r),state:{from:t},children:e})},r)}))})]})},l=t(690),h=function(){var n=(0,c.useState)([]),r=(0,u.Z)(n,2),t=r[0],e=r[1];return(0,c.useEffect)((function(){(0,l.Tg)().then(e)}),[t]),(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(m,{films:t})})}},690:function(n,r,t){t.d(r,{Bt:function(){return v},Tg:function(){return s},Y5:function(){return f},vw:function(){return o},y:function(){return p}});var e=t(861),a=t(687),u=t.n(a),c=t(243),i="84acf63cced10e4fb48b321130e5907f";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day",{params:{api_key:i}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{params:{api_key:i,query:r}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=740.d27030a6.chunk.js.map