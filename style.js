function like(x){
    x.classList.toggle("changeToRed")
    console.log(x)
}

function remove(x){
    x.parentElement.parentElement.remove()
    generalTotal()
}

function checknumber(x){
    if(isNaN(x.value) || x.value<= 0){
        x.value = 1
    }
    puqte(x)
}

function puqte(a){
    var parent = a.parentElement.parentElement
    var pu = parseInt(parent.children[1].innerHTML.replace(' Fcfa',''))
    var qte = a.value
    var total1 = pu*qte
    parent.children[3].innerHTML = total1 + ' Fcfa'
    generalTotal()
    
}

function generalTotal (){
    var lesTotaux = document.getElementsByClassName('total')
    var i = 0
    for(let unTotal of lesTotaux ){
        i = i + parseInt(unTotal.innerHTML.replace(' Fcfa',''),10)
    }
    document.querySelector('.cart-total-price').innerHTML = i + ' Fcfa'

}

function addToCart(data){
    var title = data.parentElement.parentElement.children[0].innerHTML
    var price = data.parentElement.parentElement.children[2].children[0].innerHTML
    var src = data.parentElement.parentElement.children[1].src
    var cartItemDiv = document.querySelector('.cart-items')
    var div = document.createElement('div')
    div.classList.add('cart-row')
    var contentItem = `<div class="cart-item cart-column">
        <img class="cart-item-image" src="${src}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column pu">${price}</span>
    <div class="cart-quantity cart-column">
        <input onchange=checknumber(this) class="cart-quantity-input" type="number" value="1">
    </div>
    <span class="cart-price cart-column total">000 Fcfa</span>
    <div class=" cart-column">
        <button onclick=remove(this) class="btn btn-danger" type="button">REMOVE</button>
        <i onclick=like(this) class="fas fa-heart"></i>`
        div.innerHTML = contentItem
    var liste = document.querySelectorAll('.cart-item-title')
    var ok = 0
    for( var i in liste){
        if(liste[i].innerHTML === title){
            ok = 1
        }
    }
    if (ok == 0){
        cartItemDiv.append(div)
    }
    else{
        alert("CE PRODUIT EST DEJA DANS LE PANIER")
    }
    
    


}