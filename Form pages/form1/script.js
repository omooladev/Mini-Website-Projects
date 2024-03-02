const myForm=document.forms[0]
const username=document.querySelector("#username")
const email=document.querySelector("#emailaddress")
const password=document.querySelector("#password")
const confirm_password=document.querySelector("#confirmpassword")
const inputerror=document.querySelectorAll(".inputerror")

const Error=document.querySelectorAll(".error")
var Container=[]
var Container1=[]

myForm.addEventListener("submit",function(event){
    event.preventDefault()
    check()
    // if (email.validity.typeMismatch){
    //     email.setCustomValidity("i am expectrf")
       
    // }s
    
})
function check(){
    Error.forEach(function(items){
        Container.push(items)
    })

    inputerror.forEach(function(items1){
        Container1.push(items1)
    })
    
    if((confirm_password.value).length==0){
        confirm_password.style.borderColor="red"
        Container[3].style.visibility="visible"
        Container[3].textContent="Password field cannot be blank"
        Container1[3].classList.add("incorrect")
        Container1[3].classList.remove("correct")
        confirm_password.focus()

    }
    if((password.value).length<8){
        password.style.borderColor="red"
        Container[2].style.visibility="visible"
        console.log(password.value)
        password.focus()
        if((password.value).length==0){
            password.style.borderColor="red"
            Container[2].style.visibility="visible"
            Container[2].textContent="Password field cannot be blank"
            Container1[2].classList.add("incorrect")
            Container1[2].classList.remove("correct")}
        else{
            Container[2].textContent="minimum of 8 characters "
            Container1[2].classList.add("incorrect")
            Container1[2].classList.remove("correct")
        }
    }
    

    if((email.value).length==0){
        email.style.borderColor="red"
        Container[1].style.visibility="visible"
        Container[1].textContent="Email field cannot be blank"
        Container1[1].classList.add("incorrect")
        Container1[1].classList.remove("correct")
        email.focus()

    }

    

    if((username.value).length==0){
        username.style.borderColor="red"
        Container[0].style.visibility="visible"
        Container[0].textContent="Username field cannot be blank"
        Container1[0].classList.add("incorrect")
        Container1[0].classList.remove("correct")
        username.focus()

    }

    checkanother()
    checkanother1()
}


function checkanother(){
    if((confirm_password.value).length!=0){
        confirm_password.style.borderColor="green"
        Container[3].style.visibility="hidden"
        Container[3].textContent="nothing here "
        Container1[3].classList.add("correct")
        Container1[3].classList.remove("incorrect")

    }

    if((password.value).length>=8){
        password.style.borderColor="green"
        Container[2].style.visibility="hidden"
        Container[2].textContent="nothing here"
        Container1[2].classList.add("correct")
        Container1[2].classList.remove("incorrect")

    }

    if((email.value).length!=0){
        email.style.borderColor="green"
        Container[1].style.visibility="hidden"
        Container[1].textContent="nothing here"
        Container1[1].classList.add("correct")
        Container1[1].classList.remove("incorrect")


    }

    if((username.value).length!=0){
        username.style.borderColor="green"
        Container[0].style.visibility="hidden"
        Container[0].textContent="nothing here"
        Container1[0].classList.add("correct")
        Container1[0].classList.remove("incorrect")
       

    }
}


function checkanother1(){
    
}