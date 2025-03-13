import { news } from "./news.js"

document.querySelector('.home-sticker').addEventListener('click',()=>{
  window.location.href='main.html'
})

document.querySelector('.about-us-sticker').addEventListener('click',()=>{
  window.location.href='about-us.html'
})

document.querySelector('.our-team-sticker').addEventListener('click',()=>{
  window.location.href='our-team.html'
})

document.querySelector('.dropdown-items').addEventListener('click',()=>{
  window.location.href='our-team.html'
})

document.querySelector('.news-sticker').addEventListener('click',()=>{
  window.location.href='news.html'
})

document.querySelector('.contact-us-sticker').addEventListener('click',()=>{
  window.location.href='contact-us.html'
})

document.querySelector('.practice-areas-sticker').addEventListener('click',()=>{
  window.location.href='Practice.html'
})

document.querySelector('.dropdown').addEventListener('click',()=>{
  window.location.href='Practice.html'
})

let addinghtml=''

news.forEach((newsitem)=>{
  addinghtml+= `<div class="news" style="background-color:${newsitem.color};">
          ${newsitem.topic}
          <br>
          <br>
          <a class="news-href" href="../HTML/News/news${newsitem.id}.html">Read more...</a>
        </div>
      </div>`
})

document.querySelector('.js-news-div').innerHTML=addinghtml



