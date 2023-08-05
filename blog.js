let menu=document.getElementById('menu')
let list=document.getElementById('list')

const handilClick=()=>{
    list.classList.toggle('active')
}

menu.addEventListener('click',handilClick)


// call popup
function callPopupHandler(){
    let popup=document.getElementById('popupId')
    popup.classList.add('popup-active')
}
function closePopupHandler(){
    let popup=document.getElementById('popupId')
    popup.classList.remove('popup-active')
}