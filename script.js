let Username = document.querySelector(".name")
let UserAge = document.querySelector('.age')
let UserLoc = document.querySelector('.location')
let UserPassword = document.querySelector('.password')
let submit = document.querySelector('.subtn')

let forms = document.querySelector('.sub')

//! This whole thin is writen for the sign up page funtionality 
let save =(e)=>{
    e.preventDefault();
    localStorage.setItem('Name', Username.value)
    localStorage.setItem('Age', UserAge.value)
    localStorage.setItem('location', UserLoc.value)
    localStorage.setItem('Password', UserPassword.value)
    alert("Hey " + Username.value + " You have registered Successfully")
    window.open('./Login.html','_self')
}

forms.addEventListener('submit',save)














