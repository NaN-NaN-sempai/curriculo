import{s as u,c,y as _,u as m,g as p,d}from"./scheduler.9f63a26f.js";import{S as h,i as g,g as v,h as y,j as b,f,k as r,a as S,d as T,t as j}from"./index.3c5c5b64.js";function k(n){let t,i,a;const o=n[2].default,s=c(o,n,n[1],null);return{c(){t=v("span"),s&&s.c(),this.h()},l(e){t=y(e,"SPAN",{class:!0});var l=b(t);s&&s.l(l),l.forEach(f),this.h()},h(){r(t,"class",i=_(n[0]?"name":"")+" svelte-yggsbp")},m(e,l){S(e,t,l),s&&s.m(t,null),a=!0},p(e,[l]){s&&s.p&&(!a||l&2)&&m(s,o,e,e[1],a?d(o,e[1],l,null):p(e[1]),null),(!a||l&1&&i!==(i=_(e[0]?"name":"")+" svelte-yggsbp"))&&r(t,"class",i)},i(e){a||(T(s,e),a=!0)},o(e){j(s,e),a=!1},d(e){e&&f(t),s&&s.d(e)}}}function q(n,t,i){let{$$slots:a={},$$scope:o}=t,{name:s=!1}=t;return n.$$set=e=>{"name"in e&&i(0,s=e.name),"$$scope"in e&&i(1,o=e.$$scope)},[s,o,a]}class E extends h{constructor(t){super(),g(this,t,q,k,u,{name:0})}}export{E as default};