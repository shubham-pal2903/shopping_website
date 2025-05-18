let bagItems;

onload();


function onload(){
    let bagitemsStr =localStorage.getItem('bagitems');
    bagItems= bagitemsStr ? JSON.parse(bagitemsStr) : [];
displayItemsOnHomePage();
displayBagIcon();
} 


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagitems',JSON.stringify(bagItems));
    displayBagIcon();
}
 
function displayBagIcon() {
    let bagItemCountElement= document.querySelector('.bag-item-count');

    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility ='hidden';
    }
}


function displayItemsOnHomePage(){
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
let innerHtml='';

items.forEach(item=>{
    innerHtml +=  `<div class="item-container">
    <img class="item-img" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars}⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">RS ${item.current_price}</span>
        <span class="original-price">RS ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
     </div>`
});


itemsContainerElement.innerHTML =innerHtml;
}

