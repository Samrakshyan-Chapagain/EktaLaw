import { news } from "../news.js"

document.querySelector('.home-sticker').addEventListener('click',()=>{
  window.location.href = `../main.html`;
})

document.querySelector('.about-us-sticker').addEventListener('click',()=>{
  window.location.href='../about-us.html'
})

document.querySelector('.our-team-sticker').addEventListener('click',()=>{
  window.location.href='../our-team.html'
})

document.querySelector('.dropdown-items').addEventListener('click',()=>{
  window.location.href='../our-team.html'
})

document.querySelector('.news-sticker').addEventListener('click',()=>{
  window.location.href='../news.html'
})

document.querySelector('.practice-areas-sticker').addEventListener('click',()=>{
  window.location.href='../Practice.html'
})

document.querySelector('.dropdown').addEventListener('click',()=>{
  window.location.href='../Practice.html'
})


document.querySelector('.news-4-div').innerHTML=`
        <div style="font-size: 30px; font-weight: 700; width: 1000px; margin-left: 100px;">
          ${news[3].topic}
        </div>
        <div style="font-size: 25px; font-weight: 500; width: 1000px; margin-left: 100px; margin-top: 40px;">
          ${news[3].text}
        </div>`
