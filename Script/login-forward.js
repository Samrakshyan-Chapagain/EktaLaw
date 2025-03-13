import { clients } from "./clients.js";


document.querySelector('.login-button').addEventListener('click',()=>{
  const username=document.querySelector('.username-input').value
  const password=document.querySelector('.password-input').value
  const id=(document.querySelector('.id-input').value)
  const found=clients.some((client)=>{
    return username===client.username && password===client.password && id===client.id 
  })
  if (found===true){
    window.location.href='main.html'
    document.querySelector('.username-input').value=''
    document.querySelector('.password-input').value=''
    document.querySelector('.id-input').value=''

  } else{
    document.querySelector('.error-message').innerHTML = "Something went wrong";
  }
})

