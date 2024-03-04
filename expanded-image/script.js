const Panel=document.querySelectorAll(".panel")
var i

console.log(Panel)

for(i=0;i<Panel.length;i++){
    Panel[i].addEventListener("click",ACTIVE)
}


function ACTIVE(){
    removeactive()
    // this.classList.remove("active")
    this.classList.add("active")
}

function removeactive(){
    for(i=0;i<Panel.length;i++){
        Panel[i].classList.remove("active")
        
    }
}