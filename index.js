function handilLogin(){
    let user=document.getElementById('username').value
    let p_word=document.getElementById('password').value

    let username=localStorage.getItem('name')
    let password=localStorage.getItem('password')

    let err=document.getElementById('error')
    let errp=document.getElementById('errpas')
 
    // let suc1=document.getElementById('suc1')
    // let suc=document.getElementById('suc')



   
    if(user != username){
        err.innerHTML='username not matching'
        return false
    }
    if(p_word != password){
        errp.innerHTML='password not matching'
        return false
    }
    if(user===username && p_word===password){
      
        return true
    }
}


// call popup
function callPopupHandler(){
    let popup=document.getElementById('popupId')
    popup.classList.add('popup-active')
}
function closePopupHandler(){
    let popup=document.getElementById('popupId')
    popup.classList.remove('popup-active')
}   

