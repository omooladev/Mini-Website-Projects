//from activation
let _name=document.querySelector("#name")
let _phone_number=document.querySelector("#mobile")
let _email_address=document.querySelector("#email")
let _pratice=document.querySelector("#pratice")
let _attorneys=document.querySelector("#attorneys")
const _message=document.getElementById("message")



//activation
const FORMACTIVATION=document.querySelector(".form")

//active form
FORMACTIVATION.addEventListener("submit",ONSUBMIT)

//function defining
function ONSUBMIT(_value){
    //all the values extracted
    _name_=_name.value
     _phone_number_=_phone_number.value
    _email_address_=_email_address.value
    _pratice_=_pratice.value
    _attorneys_=_attorneys.value
    // console.log(_message.innerHTML="oalw")
    _value.preventDefault();

    // _message.innerHTML="oalw"
    setTimeout(()=>CLEAR(),1000)  
    

    function CLEAR(){
        _message.remove()
        _name.value=" "
        _phone_number.value=" "
        _email_address.value=" " 
        _pratice.value=" "    
        _attorneys.value=" "
    
    }
   
}

