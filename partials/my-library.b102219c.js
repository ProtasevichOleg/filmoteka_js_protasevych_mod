!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire930e;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequire930e=a);var c=a("bpxeT"),s=a("2TvXO"),o=a("dIxxU"),i=a("9VC5X"),l=document.querySelector(".empty-wrapper"),p=document.querySelector(".secondary"),u=document.querySelector(".lib-btn.current"),d=document.querySelector(".btn-clear-all"),f=document.querySelector(".film-list");u.addEventListener("click",(function(){if(u.classList.contains("current"))return;f.innerHTML="",p.classList.toggle("current"),u.classList.toggle("current"),S(),location.replace(location.href)})),p.addEventListener("click",(function(){if(p.classList.contains("current"))return;f.innerHTML="",p.classList.toggle("current"),u.classList.toggle("current"),T()})),d.addEventListener("click",(function(){if(u.classList.contains("current"))return localStorage.removeItem("wathced"),f.innerHTML="",void(l.style.display="flex");localStorage.removeItem("queue"),f.innerHTML="",l.style.display="flex"})),a("1Gwk9"),a("cDXQO");var h=a("kvC6y"),v=document.querySelector(".empty-wrapper"),m=document.querySelector(".film-list"),g=JSON.parse(localStorage.getItem("wathced")),b=JSON.parse(localStorage.getItem("queue")),y="https://api.themoviedb.org/3/movie/",w="352708f90836dd2b75b209ae082e91df";function x(e){var t=JSON.parse(localStorage.getItem("".concat(e)));!localStorage.getItem("".concat(e))||t.length<1?v.style.display="flex":v.style.display="none"}function L(e){return k.apply(this,arguments)}function k(){return(k=e(c)(e(s).mark((function t(n){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(0,h.showPreloader)(),e.next=4,o.default.get("".concat(y).concat(n,"?api_key=").concat(w,"&language=en-US"));case 4:return r=e.sent.data,(0,h.hidePreloader)(),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function S(){return _.apply(this,arguments)}function _(){return(_=e(c)(e(s).mark((function t(){var n,r,a,c,o,i,l,p,u,d,f;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.innerHTML="",x("wathced"),n=!0,r=!1,a=void 0,e.prev=3,c=g[Symbol.iterator]();case 5:if(n=(o=c.next()).done){e.next=21;break}return i=o.value,l="",e.next=10,L(i);case 10:p=e.sent,u=Number.parseInt(p.release_date||p.first_air_date),d="https://image.tmdb.org/t/p/w300".concat(p.poster_path),"https://shop-cdn1.vigbo.tech/shops/48947/products/18863233/images/2-be392e7cfe9a0fa843b29c1e22be8909.jpg",f=[],p.genres.forEach((function(e){f.push(e.name)})),l+=' <li class ="film-item">\n                <a id=\''.concat(p.id,"' class=\"film-card\" href=\"#\">\n                  <div class='thumb'>\n                  <img\n                      class = 'poster'\n                      src= \"").concat(p.poster_path?d:"https://shop-cdn1.vigbo.tech/shops/48947/products/18863233/images/2-be392e7cfe9a0fa843b29c1e22be8909.jpg",'"\n                      alt="').concat(p.title,'"\n                      loading="lazy"\n                    /></div>\n                    <div class=\'film-data\'>\n                      <h2 class="title-film">').concat(p.title,"</h2>\n                      <p>\n                        <span class='info-film'>").concat(f.join(", ")," | ").concat(u,'</span>\n                        <span class ="rating">IMDB:<br>').concat(p.vote_average.toFixed(1),"</span>\n                      </p>\n                    </div>\n                  </a>\n              </li>"),m.insertAdjacentHTML("beforeend",l);case 18:n=!0,e.next=5;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(3),r=!0,a=e.t0;case 27:e.prev=27,e.prev=28,n||null==c.return||c.return();case 30:if(e.prev=30,!r){e.next=33;break}throw a;case 33:return e.finish(30);case 34:return e.finish(27);case 35:case"end":return e.stop()}}),t,null,[[3,23,27,35],[28,,30,34]])})))).apply(this,arguments)}function T(){return q.apply(this,arguments)}function q(){return(q=e(c)(e(s).mark((function t(){var n,r,a,c,o,i,l,p,u,d,f;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.innerHTML="",x("queue"),n=!0,r=!1,a=void 0,e.prev=3,c=b[Symbol.iterator]();case 5:if(n=(o=c.next()).done){e.next=21;break}return i=o.value,l="",e.next=10,L(i);case 10:p=e.sent,u=Number.parseInt(p.release_date||p.first_air_date),d="https://image.tmdb.org/t/p/w300".concat(p.poster_path),"https://shop-cdn1.vigbo.tech/shops/48947/products/18863233/images/2-be392e7cfe9a0fa843b29c1e22be8909.jpg",f=[],p.genres.forEach((function(e){f.push(e.name)})),l+=' <li class ="film-item">\n              <a id=\''.concat(p.id,"' class=\"film-card\" href=\"#\">\n                <div class='thumb'>\n                <img\n                    class = 'poster'\n                    src= \"").concat(p.poster_path?d:"https://shop-cdn1.vigbo.tech/shops/48947/products/18863233/images/2-be392e7cfe9a0fa843b29c1e22be8909.jpg",'"\n                    alt="').concat(p.title,'"\n                    loading="lazy"\n                  /></div>\n                  <div class=\'film-data\'>\n                    <h2 class="title-film">').concat(p.title,"</h2>\n                    <p>\n                      <span class='info-film'>").concat(f.join(", ")," | ").concat(u,'</span>\n                      <span class ="rating">IMDB:<br>').concat(p.vote_average.toFixed(1),"</span>\n                    </p>\n                  </div>\n                </a>\n            </li>"),m.insertAdjacentHTML("beforeend",l);case 18:n=!0,e.next=5;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(3),r=!0,a=e.t0;case 27:e.prev=27,e.prev=28,n||null==c.return||c.return();case 30:if(e.prev=30,!r){e.next=33;break}throw a;case 33:return e.finish(30);case 34:return e.finish(27);case 35:case"end":return e.stop()}}),t,null,[[3,23,27,35],[28,,30,34]])})))).apply(this,arguments)}(0,h.hidePreloader)(),S();var M=document.querySelector(".btn-scroll");window.addEventListener("scroll",(function(){window.scrollY>100?M.style.display="block":M.style.display="none"})),M.addEventListener("click",(function(){window.scroll({top:0,left:0,behavior:"smooth"})})),(0,i.addDarkClassToHTML)()}();
//# sourceMappingURL=my-library.b102219c.js.map
