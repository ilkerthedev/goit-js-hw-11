import{a as u,S as d,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const f="51485554-3dd35e8c19c390ae1aeb5495f",m="https://pixabay.com/api/",p=async s=>{try{return(await u.get(m,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}},c=document.querySelector(".gallery"),l=document.querySelector(".loader");console.log("The value of myLoader when the script is loaded:",l);let y=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(s){const t=s.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
        <p class="info-item"><span class="label">Likes:</span> ${e.likes}</p>
        <p class="info-item"><span class="label">Views:</span> ${e.views}</p>
        <p class="info-item"><span class="label">Comments:</span> ${e.comments}</p>
        <p class="info-item"><span class="label">Downloads:</span> ${e.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function h(){c.innerHTML=" "}function L(){l.classList.add("visible")}function b(){l.classList.remove("visible")}const v=document.querySelector(".form"),w=document.querySelector('[name="search-text"]');document.querySelector("button");v.addEventListener("submit",S);function S(s){s.preventDefault();let t=w.value.trim();if(t===""){n.error({title:"Error",message:"Please enter valid values"});return}h(),L(),p(t).then(e=>{if(e.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e),console.log(e)}).catch(e=>{console.error("Hata detayı:",e),n.error({title:"Error",message:"Something went wrong. Try again!"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
