// ✌ :))

let BackElem = document.querySelector('#Back')
let titleElem = document.querySelector('h1')
let doceElem = document.querySelector('p')
let imgElem = document.querySelector('img')


let products = [
    {id:1, title:'Sport Shoe', price:55, img:'images/1.png', doce:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Sport Shoe)'},
    {id:2, title:'Women Shoe', price:83, img:'images/2.png', doce:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Women Shoe)'},
    {id:3, title:'Boots', price:45, img:'images/3.png', doce:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (Boots)'}
]

BackElem.addEventListener('click', function () {
    history.back()
})

let locationParam = new URLSearchParams(location.search)
let mainProductId = locationParam.get("id")

let mainProdoctObj = products.find(function (product) {
    return product.id === Number(mainProductId)
})

if (mainProdoctObj) {
    titleElem.innerHTML = mainProdoctObj.title
    imgElem.setAttribute('src', mainProdoctObj.img)
    doceElem.innerHTML = mainProdoctObj.doce
} else {
    location.href = 'http://127.0.0.1:5500/'
}