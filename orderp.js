let carts = document.querySelectorAll('.add_cart');

let products = [
    {
        name: 'Wings of fire',
        tag: "wof",
        price: 499,
        inCart: 0
    },
    {
        name: 'Song for a Whale',
        tag: "ssw",
        price: 279,
        inCart: 0
    },
    {
        name: 'War & Peace',
        tag: "wap",
        price: 410,
        inCart: 0
    },
    {
        name: 'The Alchemist',
        tag: "tal",
        price: 789,
        inCart: 0
    },
    {
        name: 'Destroyer Angel',
        tag: "dan",
        price: 649,
        inCart: 0
    },
    {
        name: 'The Girl (ABI DARE)',
        tag: "tgi",
        price: 399,
        inCart: 0
    },
    {
        name: 'SHORT',
        tag: "sho",
        price: 299,
        inCart: 0
    },
    {
        name: 'Maltida Wood',
        tag: "maw",
        price: 510,
        inCart: 0
    },
    {
        name: 'The Iron Marshal',
        tag: "tim",
        price: 799,
        inCart: 0
    },
    {
        name: 'American Power',
        tag: "apo",
        price: 799,
        inCart: 0
    }
];
displayCart();
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        //    console.log("added to cart");
        cartNumbers(products[i]);
        totalCost(products[i])
    });
}
function cartNumbers(product) {
    // console.log("The product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    // console.log(productNumbers);
    // console.log(typeof productNumbers);
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    // console.log(typeof productNumbers);
    // localStorage.setItem('cartNumbers', 1);
    setItems(product);
}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cart items are", product);
    // console.log("Inside of setItems function");
    // console.log("My product is", product);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("my cart cost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
             <div class="product">
                 <ion-icon class="cross" name="close-circle"></ion-icon>
                 <ion-icon class="booki" name="document-text-sharp"></ion-icon>
                 <span>${item.name}</span>
             </div>
             <div class="price"> ${item.price} </div>
             <div class="quantity">
             <span>... ${item.inCart} ...</span>
             </div>
             <div class="total"> &#8377 ${item.inCart * item.price}.00</div>
             `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Total Amount
        </h4>
        <h4 class="basketTotal">
        &#8377 ${cartCost}.00
        </h4>  
        </div>
        `;

    }
}


