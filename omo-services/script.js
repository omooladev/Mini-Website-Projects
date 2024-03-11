// const Signup=document.querySelector(".signup")
const Logininbutton=document.querySelector(".loginin")
const Logoutbutton=document.querySelector(".signup")


const Login1container=document.querySelector(".login-div")
const signup1container=document.querySelector(".signup-div")
const signupmaincontainer=document.querySelector(".signuped-div")
const loginincontainer=document.querySelector(".loginin-div")
// Signup.addEventListener("click",SIGNUP)

Logininbutton.addEventListener("click",LOGININ)
Logoutbutton.addEventListener("click",LOGOUT)

// function SIGNUP(e){
//     signup1.classList.toggle("active")
//     Loginin.classList.toggle("inactive")
//     signuped.classList.toggle("active")
//     // loginin.classList.toggle("active")
//     console.log("signup clicked")
//     e.preventDefault()
// }

function LOGININ(){
    Login1container.classList.remove("inactive")
    Login1container.classList.toggle("active")
    signup1container.classList.remove("inactive")
    signup1container.classList.toggle("active")
    signupmaincontainer.classList.remove("active")
    signupmaincontainer.classList.toggle("inactive")

    loginincontainer.classList.remove("active")
    loginincontainer.classList.toggle("inactive")
    // Loginin.classList.toggle("activated")
    
    // signuped.classList.toggle("inactive")
    // loginin.classList.toggle("inactive")
    
    // console.log("login clicked")

}
function LOGOUT(){
    Login1container.classList.remove("active")
    Login1container.classList.toggle("inactive")
    signup1container.classList.remove("active")
    signup1container.classList.toggle("inactive")
    signupmaincontainer.classList.remove("inactive")
    signupmaincontainer.classList.toggle("active")

    loginincontainer.classList.remove("inactive")
    loginincontainer.classList.toggle("active")
}