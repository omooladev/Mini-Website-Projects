const Input=document.querySelector(".input")


Input.addEventListener("keyup",()=>{
   const filter=document.querySelector(".classlist")
   var list=Input.value.toUpperCase()
   var li=filter.getElementsByTagName("li")
   for(var i=0;i<li.length;i++){
       a=li[i].getElementsByTagName("a")[0]
      if (a.innerHTML.toUpperCase().indexOf(list)>-1){
          li[i].style.display=""
      }
      else{
        li[i].style.display="none"
      }
   }

})