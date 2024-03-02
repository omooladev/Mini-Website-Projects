const Input=document.querySelector(".input")
const Animals=document.querySelector(".animals")
var search_type
search_type=0
Animals.addEventListener("click",()=>{
    

    if (Animals.innerHTML=="Search by Country"){
        search_type=0
        Animals.innerHTML="Search by National Animals"
        Input.focus()
        Input.placeholder="Search by Country..."
    }

    else if(Animals.innerHTML=="Search by National Animals"){
        search_type=1
        Input.focus()
        Animals.innerHTML="Search by Country"
        Input.placeholder="Search by National Animals..."
    }
})




Input.addEventListener("keyup",()=>{
    var filter,table,tr,td
    filter=Input.value.toUpperCase()
    table=document.querySelector(".table")
    tr=table.getElementsByTagName("tr")
    for(var i=0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[search_type]
        if (td){
            if (td.innerHTML.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display=""
            }
            else{
                tr[i].style.display="none"
            }}
    }

})