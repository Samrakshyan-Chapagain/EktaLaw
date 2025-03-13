import { news } from "../news.js"

document.querySelector('.home-sticker').addEventListener('click',()=>{
  window.location.href = `../HTML/main.html`;
})

document.querySelector('.about-us-sticker').addEventListener('click',()=>{
  window.location.href='../HTML/about-us.html'
})

document.querySelector('.our-team-sticker').addEventListener('click',()=>{
  window.location.href='../HTML/our-team.html'
})

document.querySelector('.dropdown-items').addEventListener('click',()=>{
  window.location.href='../HTML/our-team.html'
})

document.querySelector('.news-sticker').addEventListener('click',()=>{
  window.location.href='../HTMl/news.html'
})

document.querySelector('.practice-areas-sticker').addEventListener('click',()=>{
  window.location.href='../HTMl/Practice.html'
})

document.querySelector('.dropdown').addEventListener('click',()=>{
  window.location.href='../HTML/Practice.html'
})

document.querySelector('.news-1-div').innerHTML=`
        <div style="font-size: 30px; font-weight: 700; width: 1000px; margin-left: 100px;">
          ${news[0].topic}
        </div>
        <div style="font-size: 25px; font-weight: 500; width: 1000px; margin-left: 100px; margin-top: 40px;">
          ${news[0].text}
        </div>`
