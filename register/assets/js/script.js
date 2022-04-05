const Menu = {
    "UwU Bowl": {
        price: 750,
        items: ["UwU Bowl"],
        display: true,
        image: 'assets/images/items/uwubowl.png'
    },
    "Chicken Cat-Su": {
        price: 750,
        items: ["Chicken Cat-Su"],
        display: true,
        image: 'assets/images/items/chickencatsu.png'
    },
    "Omurice": {
        price: 850,
        items: ["Omurice"],
        display: true,
        image: 'assets/images/items/omurice.png'
    },
    "Pawcakes": {
        price: 500,
        items: ["Pawcakes"],
        display: true,
        image: 'assets/images/items/pawcake.png'
    },
    "Onigiri": {
        price: 300,
        items: ["onigiri"],
        display: true,
        image: 'assets/images/items/onigiri.png'
    },
    "Miso Soup": {
        price: 250,
        items: ["Miso Soup"],
        display: true,
        image: 'assets/images/items/misosoup.png'
    },
    "Dumplings": {
        price: 250,
        items: ["Dumplings"],
        display: true,
        image: 'assets/images/items/dumplings.png'
    },
    "Boba Tea": {
        price: 200,
        items: ["Boba Tea"],
        display: true,
        image: 'assets/images/items/bobatea.png'
    },
    "UwU-Pop": {
        price: 250,
        items: ["UwU-Pop"],
        display: true,
        image: 'assets/images/items/uwupop.png'
    },
    "Sakura Tea": {
        price: 150,
        items: ["Sakura"],
        display: true,
        image: 'assets/images/items/sakura.png'
    },
    "Meow-caroons": {
        price: 300,
        items: ["Meow-caroons"],
        display: true,
        image: 'assets/images/items/meowcaroons.png'
    },
    "Cupcat": {
        price: 250,
        items: ["Cupcat"],
        display: true,
        image: 'assets/images/items/cupcat.png'
    },
    "Flan": {
        price: 250,
        items: ["Flan"],
        display: true,
        image: 'assets/images/items/flan.png'
    },
    "Lucky Bento": {
        price: 1500,
        items: ["Lucky Bento"],
        display: true,
        image: 'assets/images/items/luckybento.png'
    },
    "9 Lives": {
        price: 999,
        items: ["9 Lives"],
        display: true,
        image: 'assets/images/items/9LivesCombo.png'
    },
    "Cat Burglar": {
        price: 1150,
        items: ["Cat Burglar"],
        display: true,
        image: 'assets/images/items/CatBurglarCombo.png'
    },
    "Kitty Meal": {
        price: 400,
        items: ["Kitty Meal"],
        display: true,
        image: 'assets/images/items/kittymeal.png'
    },
    "Pawcakes Meal": {
        price: 700,
        items: ["PawcakesMeal"],
        display: true,
        image: 'assets/images/items/pawcakesmeal.png'
    }
};


function loadItems() {
    let itemList = document.getElementById('itemsContainer');
    Object.keys(Menu).forEach(item => {
        if (Menu[item].display == true) {
            if (item.includes('Combo')) {
                itemList.innerHTML += `<div class="col-md-12 col-sm-12 col-12 text-center">
            <figure class="card card-product" onclick="addItem('${item}',${Menu[item].price},1)" >
                <div class="img-wrap">
                    <img draggable="false" src=${Menu[item].image}>
                </div>
                <figcaption class="info-wrap">
                    <span class="title h6">${item}</span>
                    <div class="action-wrap">
                        <span class="btn disabled btn-success btn-sm"> <i
                                class="fa fa-cart-plus"></i> $${Menu[item].price} </span>
                    </div> <!-- action-wrap -->
                </figcaption>
            </figure> <!-- card // -->
        </div> <!-- col // -->`
            }
            else {
                itemList.innerHTML += `<div class="col-md-4 col-sm-4 col-4 text-center">
            <figure class="card card-product" onclick="addItem('${item}',${Menu[item].price},1)">
                <div class="img-wrap">
                    <img draggable="false" src=${Menu[item].image}>
                </div>
                <figcaption class="info-wrap">
                    <span class="title h6">${item}</span>
                    <div class="action-wrap">
                        <span class="btn btn-primary disabled btn-sm"> <i
                                class="fa fa-cart-plus"></i>$${Menu[item].price} </span>
                    </div> <!-- action-wrap -->
                </figcaption>
            </figure> <!-- card // -->
        </div> <!-- col // -->`
            }
        }
    });

}

function addItem(item, price, quantity) {

    if (item === "Lucky Bento") {
        console.log("yup");
        if (document.getElementById('receipt-item-LuckyBentoCombo')) {
            let orderPriceString = document.getElementById('price-item-LuckyBentoCombo').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-LuckyBentoCombo').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 1500
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-LuckyBentoCombo').innerText = '$' + orderPrice
            document.getElementById('quantity-item-LuckyBentoCombo').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-LuckyBentoCombo">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/luckybento.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">LuckyBentoCombo</h6>
                            <h8 class="title text-truncate staff-help"><i>Omurice, Onigiri, Meowcaroons, UwU-Pop</i></h8>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('LuckyBentoCombo',1500,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-LuckyBentoCombo" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('LuckyBentoCombo',1500,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-LuckyBentoCombo">$1500</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('LuckyBentoCombo')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    }    

    if (item === "9 Lives") {
        console.log("yup");
        if (document.getElementById('receipt-item-9LivesCombo')) {
            let orderPriceString = document.getElementById('price-item-9LivesCombo').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-9LivesCombo').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 999
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-9LivesCombo').innerText = '$' + orderPrice
            document.getElementById('quantity-item-9LivesCombo').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-9LivesCombo">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/9LivesCombo.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">9LivesCombo</h6>
                            <h8 class="title text-truncate staff-help"><i>UwU Bowl, Miso Soup, Flan</i></h8>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('9LivesCombo',999,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-9LivesCombo" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('9LivesCombo',999,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-9LivesCombo">$999</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('9LivesCombo')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }

    if (item === "Cat Burglar") {
        console.log("yup");
        if (document.getElementById('receipt-item-CatBurglarCombo')) {
            let orderPriceString = document.getElementById('price-item-CatBurglarCombo').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-CatBurglarCombo').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 1150
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-CatBurglarCombo').innerText = '$' + orderPrice
            document.getElementById('quantity-item-CatBurglarCombo').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-CatBurglarCombo">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/CatBurglarCombo.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">CatBurglarCombo</h6>
                            <h8 class="title text-truncate staff-help"><i>Chicken Cat-Su, Dumplings, Cupcat, Boba Tea</i></h8>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('CatBurglarCombo',1150,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-CatBurglarCombo" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('CatBurglarCombo',1150,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-CatBurglarCombo">$1150</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('CatBurglarCombo')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice(); 
        }  
    }
        if (item === "UwU Bowl") {
        console.log("yup");
        if (document.getElementById('receipt-item-UwU Bowl')) {
            let orderPriceString = document.getElementById('price-item-UwU Bowl').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-UwU Bowl').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 750
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-UwU Bowl').innerText = '$' + orderPrice
            document.getElementById('quantity-item-UwU Bowl').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-UwU Bowl">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/uwubowl.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">UwU Bowl</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('UwU Bowl',750,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-UwU Bowl" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('UwU Bowl',750,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-UwU Bowl">$750</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('UwU Bowl')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }   

        if (item === "Chicken Cat-Su") {
        console.log("yup");
        if (document.getElementById('receipt-item-Chicken Cat-Su')) {
            let orderPriceString = document.getElementById('price-item-Chicken Cat-Su').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Chicken Cat-Su').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 750
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Chicken Cat-Su').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Chicken Cat-Su').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Chicken Cat-Su">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/chickencatsu.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Chicken Cat-Su</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Chicken Cat-Su',750,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Chicken Cat-Su" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Chicken Cat-Su',750,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Chicken Cat-Su">$750</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Chicken Cat-Su')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }   
        if (item === "Omurice") {
        console.log("yup");
        if (document.getElementById('receipt-item-Omurice')) {
            let orderPriceString = document.getElementById('price-item-Omurice').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Omurice').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 850
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Omurice').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Omurice').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Omurice">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/omurice.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Omurice</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Omurice',850,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Omurice" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Omurice',850,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Omurice">$850</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Omurice')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }   
        if (item === "Onigiri") {
        console.log("yup");
        if (document.getElementById('receipt-item-Onigiri')) {
            let orderPriceString = document.getElementById('price-item-Onigiri').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Onigiri').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 300
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Onigiri').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Onigiri').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Onigiri">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/onigiri.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Onigiri</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Onigiri',300,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Onigiri" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Onigiri',300,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Onigiri">$300</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Onigiri')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }   
        if (item === "Dumplings") {
        console.log("yup");
        if (document.getElementById('receipt-item-Dumplings')) {
            let orderPriceString = document.getElementById('price-item-Dumplings').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Dumplings').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 250
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Dumplings').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Dumplings').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Dumplings">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/dumplings.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Dumplings</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Dumplings',250,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Dumplings" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Dumplings',250,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Dumplings">$250</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Dumplings')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }  
        if (item === "Flan") {
        console.log("yup");
        if (document.getElementById('receipt-item-Flan')) {
            let orderPriceString = document.getElementById('price-item-Flan').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Flan').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 250
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Flan').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Flan').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Flan">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/flan.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Flan</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Flan',250,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Flan" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Flan',250,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Flan">$250</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Flan')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }  
        if (item === "Cupcat") {
        console.log("yup");
        if (document.getElementById('receipt-item-Cupcat')) {
            let orderPriceString = document.getElementById('price-item-Cupcat').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Cupcat').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 250
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Cupcat').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Cupcat').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Cupcat">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/cupcat.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Cupcat</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Cupcat',250,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Cupcat" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Cupcat',250,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Cupcat">$250</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Cupcat')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }  
        if (item === "Meow-caroons") {
        console.log("yup");
        if (document.getElementById('receipt-item-Meow-caroons')) {
            let orderPriceString = document.getElementById('price-item-Meow-caroons').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Meow-caroons').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 300
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Meow-caroons').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Meow-caroons').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Meow-caroons">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/meowcaroons.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Meow-caroons</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Meow-caroons',300,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Meow-caroons" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Meow-caroons',300,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Meow-caroons">$300</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Meow-caroons')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }  
        if (item === "UwU-Pop") {
        console.log("yup");
        if (document.getElementById('receipt-item-UwU-Pop')) {
            let orderPriceString = document.getElementById('price-item-UwU-Pop').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-UwU-Pop').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 250
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-UwU-Pop').innerText = '$' + orderPrice
            document.getElementById('quantity-item-UwU-Pop').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-UwU-Pop">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/uwupop.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">UwU-Pop</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('UwU-Pop',250,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-UwU-Pop" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('UwU-Pop',250,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-UwU-Pop">$250</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('UwU-Pop')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }  
        if (item === "Boba Tea") {
        console.log("yup");
        if (document.getElementById('receipt-item-Boba Tea')) {
            let orderPriceString = document.getElementById('price-item-Boba Tea').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Boba Tea').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 200
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Boba Tea').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Boba Tea').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Boba Tea">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/bobatea.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Boba Tea</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Boba Tea',200,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Boba Tea" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Boba Tea',200,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Boba Tea">$200</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Boba Tea')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }    
        if (item === "Miso Soup") {
        console.log("yup");
        if (document.getElementById('receipt-item-Miso Soup')) {
            let orderPriceString = document.getElementById('price-item-Miso Soup').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Miso Soup').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 250
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Miso Soup').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Miso Soup').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Miso Soup">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/misosoup.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Miso Soup</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Miso Soup',250,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Miso Soup" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Miso Soup',250,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Miso Soup">$250</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Miso Soup')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }  
    }  
    if (item === "Kitty Meal") {
        console.log("yup");
        if (document.getElementById('receipt-item-KittyMeal')) {
            let orderPriceString = document.getElementById('price-item-KittyMeal').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-KittyMeal').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 400
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-KittyMeal').innerText = '$' + orderPrice
            document.getElementById('quantity-item-KittyMeal').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-KittyMeal">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/kittymeal.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">KittyMeal</h6>
                            <h8 class="title text-truncate staff-help"><i>Drink, Dessert</i></h8>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('KittyMeal',400,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-KittyMeal" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('KittyMeal',400,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-KittyMeal">$400</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('KittyMeal')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    } 
    if (item === "Pawcakes Meal") {
        console.log("yup");
        if (document.getElementById('receipt-item-PawcakesMeal')) {
            let orderPriceString = document.getElementById('price-item-PawcakesMeal').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-PawcakesMeal').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 700
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-PawcakesMeal').innerText = '$' + orderPrice
            document.getElementById('quantity-item-PawcakesMeal').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-PawcakesMeal">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/pawcakesmeal.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">PawcakesMeal</h6>
                            <h8 class="title text-truncate staff-help"><i>Pawcakes, Sakura Tea, Cupcat</i></h8>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('PawcakesMeal',700,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-PawcakesMeal" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('PawcakesMeal',700,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-PawcakesMeal">$700</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('PawcakesMeal')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    } 
    if (item === "Pawcakes") {
        console.log("yup");
        if (document.getElementById('receipt-item-Pawcakes')) {
            let orderPriceString = document.getElementById('price-item-Pawcakes').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Pawcakes').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 500
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Pawcakes').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Pawcakes').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Pawcakes">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/pawcake.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Pawcakes</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Pawcakes',500,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Pawcakes" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Pawcakes',500,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Pawcakes">$500</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Pawcakes')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    }
    if (item === "Sakura Tea") {
        console.log("yup");
        if (document.getElementById('receipt-item-Sakura')) {
            let orderPriceString = document.getElementById('price-item-Sakura').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Sakura').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 150
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-Sakura').innerText = '$' + orderPrice
            document.getElementById('quantity-item-Sakura').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-Sakura">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/sakura.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">Sakura</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Sakura',150,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Sakura" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Sakura',150,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Sakura">$150</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Sakura')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    }  
}

function removeItem(item, price, quantity) {
    if (document.getElementById('receipt-item-' + item)) {
        let orderPriceString = document.getElementById('price-item-' + item).innerText.replace(/\D/g, '');
        let orderQuantityString = document.getElementById('quantity-item-' + item).innerText.replace(/\D/g, '');
        let orderPrice = Number(orderPriceString);
        let orderQuantity = Number(orderQuantityString);
        if (orderQuantity > 1) {
            orderPrice -= price
            orderQuantity -= quantity
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-' + item).innerText = '$' + orderPrice
            document.getElementById('quantity-item-' + item).innerText = orderQuantity
            totalPrice();
        }
 
    }  
}
function deleteItem(item) {
    document.getElementById('receipt-item-' + item).remove();
    totalPrice();
}

function resetTill(item) {
    document.getElementById('tbody').innerHTML = '';
    totalPrice();
}



function totalPrice() {
    var elements = document.getElementsByClassName('price');
    if (elements.length == 0) {
        document.getElementById('totalCost').innerText = '$' + 0
        generateComment();
    }
    else {
        prices = [];
        for (var i = 0; i < elements.length; ++i) {
            var priceElement = elements[i].innerHTML.replace(/\D/g, '');
            var price = Number(priceElement)
            prices.push(price);
            let total = prices.reduce(function (acc, val) { return acc + val; }, 0)
            document.getElementById('totalCost').innerText = '$' + total
            generateComment();
        }
    }
}

function generateComment() {
    document.getElementById('orderComment').innerText = "";
    var itemComments = []
    var itemQuantity = []
    var quantity = document.getElementsByClassName("quantity");
    for (var a = 0; a < quantity.length; a++) {
        itemQuantity.push(quantity[a].innerText);
    }
    var receiptItems = document.getElementsByClassName("menu-item");
    for (var i = 0; i < receiptItems.length; i++) {
        itemComments.push(quantity[i].innerText + "x " + receiptItems[i].innerText);
    }
    document.getElementById('orderComment').innerHTML = `<button class="btn btn-primary btn-lg" id='copyToClipBoard' data-clipboard-target="#orderComment">
    <span class="h5">Copy Order Comment</span>
  </button> <br> <div style="color:white;">`+  itemComments.join(' '); +"</div>" 
  let clipboard = new ClipboardJS('#copyToClipBoard');
  clipboard.on('success', function(e) {
    e.clearSelection();
});

}

loadItems();