const SHOW=document.querySelector(".container")
const Cancel=document.querySelector(".cancel")
const Reject=document.querySelector(".reject")
const body=document.querySelector("body")



setInterval(function(){
    SHOW.style.display="block"
},3000)


Cancel.addEventListener("click",()=>{
    SHOW.style.display="none"
})


Reject.addEventListener("click",()=>{
    SHOW.style.display="none"
})



window.onclick=function(event){
    console.log(event.target)
    if (event.target==body){
        SHOW.style.display="none"
    }
}