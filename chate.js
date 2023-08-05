let addItems = document.getElementById('add-search-items');
let addBtn = document.getElementById('add-btn');
let searchList = document.getElementById('search-list');

let inputDisplay = document.getElementById('input-display');
let edItem;
let itemArray = [];


// Set items to Local storage
const setLocalStorage = getKitchenItems=>{
    localStorage.setItem('searchItem', JSON.stringify(itemArray));
};

// Get items from Local storage
const getLocalStorage = ()=>{
    let GetLocalStorageItem = JSON.parse(localStorage.getItem('searchItem'));
    BuildUI(GetLocalStorageItem);
};

// To build UI
const BuildUI = (GetLocalStorageItem)=>{
    searchList.textContent = "";
    if(localStorage.getItem('searchItem')){
        GetLocalStorageItem.forEach(items=>{
            let li = document.createElement('li');
            let span = document.createElement('span');
            li.appendChild(span);
            span.innerHTML = items;
            li.style.cssText = 'animation-name: SlideIn;';
            searchList.appendChild(li);
            addItems.focus();
            addItems.value = '';

        });
    };
};

// step 1
addBtn.addEventListener('click', ()=>{
    let getKitchenItems = addItems.value;
    itemArray.push(getKitchenItems);
    console.log(itemArray);
    setLocalStorage(getKitchenItems);
    getLocalStorage();

});






let menu=document.getElementById('menu')
let list=document.getElementById('list')

const handilClick=()=>{
    list.classList.toggle('active')
}

menu.addEventListener('click',handilClick)


