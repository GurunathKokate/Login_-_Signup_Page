//^  Here i have return the login page functioanlity 

let loginForm = document.querySelector('.subLogin');
let LoginUser = document.querySelector('.loginUsername');
let Loginpassword = document.querySelector('.loginPassword')


let dataFetch = (e)=>{

    e.preventDefault();

  let username =  localStorage.getItem('Name')
  let password = localStorage.getItem('Password')

  if(username == LoginUser.value && password == Loginpassword.value)
  {
    alert(" LOGIN SUCCESSFULL ")
    window.open('./Home.html','_self')
  }
  else{
    alert("Sorry enter the correct Name and Password")
  }
}

loginForm.addEventListener('submit',dataFetch)