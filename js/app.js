// DOM => Document Object Model
// BOM => Browser Object Model

let ProductContainer = document.querySelector('.container')

let products = [
    {id:1, title:'Sport Shoe', price:55, img:'images/1.png'},
    {id:2, title:'Women Shoe', price:83, img:'images/2.png'},
    {id:3, title:'Boots', price:45, img:'images/3.png'}
]

products.forEach(product => {
    ProductContainer.insertAdjacentHTML('beforeend', '<div class="product-card"><h1>' + product.title + '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url(' + product.img + ');"></div><div class="product-info"><div class="product-price">$' + product.price + '</div><a href="product.html?id=' + product.id + '" class="product-button">See More</a></div></div>')
});