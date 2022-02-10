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
        image: 'assets/images/items/9lives.png'
    },
    "Cat Burglar": {
        price: 1150,
        items: ["Cat Burglar"],
        display: true,
        image: 'assets/images/items/catburglar.png'
    },
    "Kitty Meal": {
        price: 400,
        items: ["Kitty Meal"],
        display: true,
        image: 'assets/images/items/kittymeal.png'
    },
    "LuckyBentoOmurice": {
        price: 850,
        items: ["LuckyBentoOmurice"],
        display: false,
        image: 'assets/images/items/omurice.png'
    },
    "LuckyBentoOngiri": {
        price: 300,
        items: ["LuckyBentoOngiri"],
        display: false,
        image: 'assets/images/items/onigiri.png'
    },
    "LuckyBentoMeowCaroons": {
        price: 300,
        items: ["LuckyBentoMeowCaroons"],
        display: false,
        image: 'assets/images/items/omurice.png'
    },
    "LuckyBentoUwUPoP": {
        price: 50,
        items: ["LuckyBentoUwUPop"],
        display: false,
        image: 'assets/images/items/uwupop.png'
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
        if (document.getElementById('receipt-item-LuckyBentoOmurice')) {
            let orderPriceString = document.getElementById('price-item-LuckyBentoOmurice').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-LuckyBentoOmurice').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 850
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-LuckyBentoOmurice').innerText = '$' + orderPrice
            document.getElementById('quantity-item-LuckyBentoOmurice').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-LuckyBentoOmurice">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/omurice.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">LuckyBentoOmurice</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('LuckyBentoOmurice',850,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-LuckyBentoOmurice" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('LuckyBentoOmurice',850,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-LuckyBentoOmurice">$850</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('LuckyBentoOmurice')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
        if (document.getElementById('receipt-item-LuckyBentoOngiri')) {
            let orderPriceString = document.getElementById('price-item-LuckyBentoOngiri').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-LuckyBentoOngiri').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 300
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-LuckyBentoOngiri').innerText = '$' + orderPrice
            document.getElementById('quantity-item-LuckyBentoOngiri').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-LuckyBentoOngiri">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/onigiri.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">LuckyBentoOngiri</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" disabled onclick="removeItem('LuckyBentoOngiri',300,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-LuckyBentoOngiri" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" disabled onclick="addItem('LuckyBentoOngiri',300,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-LuckyBentoOngiri">$300</var>
                    </div>
                </td>
                <td class="text-right">
                    <span href="#" class="btn btn-outline-danger" onclick="deleteItem('LuckyBentoOngiri')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    
        if (document.getElementById('receipt-item-LuckyBentoMeowCaroons')) {
            let orderPriceString = document.getElementById('price-item-LuckyBentoMeowCaroons').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-LuckyBentoMeowCaroons').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 300
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-LuckyBentoMeowCaroons').innerText = '$' + orderPrice
            document.getElementById('quantity-item-LuckyBentoMeowCaroons').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-LuckyBentoMeowCaroons">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/meowcaroons.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">LuckyBentoMeowCaroons</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('LuckyBentoMeowCaroons',300,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-LuckyBentoMeowCaroons" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('LuckyBentoMeowCaroons',300,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-LuckyBentoMeowCaroons">$300</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('LuckyBentoMeowCaroons')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
        if (document.getElementById('receipt-item-LuckyBentoUwUPop')) {
            let orderPriceString = document.getElementById('price-item-LuckyBentoUwUPop').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-LuckyBentoUwUPop').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 50
            orderQuantity += 1
            console.log(orderPrice);
            console.log(orderQuantity);
            document.getElementById('price-item-LuckyBentoUwUPop').innerText = '$' + orderPrice
            document.getElementById('quantity-item-LuckyBentoUwUPop').innerText = orderQuantity
            totalPrice();
        }
        else {
            let receiptList = document.getElementById('tbody');
            receiptList.innerHTML += `<tr class="receipt-item" id="receipt-item-LuckyBentoUwUPop">
                <td>
                    <figure class="media">
                        <div class="img-wrap"><img draggable="false" src="assets/images/items/uwupop.png"
                                class="img-thumbnail img-xs"></div>
                        <figcaption class="media-body">
                            <h6 class="title text-truncate menu-item">LuckyBentoUwUPop</i></h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('LuckyBentoUwUPop',50,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-LuckyBentoUwUPop" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('LuckyBentoUwUPop',50,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-LuckyBentoUwUPop">$50</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('LuckyBentoUwUPop')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    }    

    if (item === "9 Lives") {
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
        if (document.getElementById('receipt-item-Miso Soup')) {
            let orderPriceString = document.getElementById('price-item-Miso Soup').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Miso Soup').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 249
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
                        <button type="button" class="m-btn btn btn-default" disabled onclick="removeItem('Miso Soup',249,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Miso Soup" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" disabled onclick="addItem('Miso Soup',249,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Miso Soup">$249</var>
                    </div>
                </td>
                <td class="text-right">
                    <span href="#" class="btn btn-outline-danger" onclick="deleteItem('Miso Soup')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }

        if (document.getElementById('receipt-item-Boba Tea')) {
            let orderPriceString = document.getElementById('price-item-Boba Tea').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Boba Tea').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 0
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
                            <h6 class="title text-truncate menu-item">Boba Tea - <i>Discounted9Combo</i></h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Boba Tea',0,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Boba Tea" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Boba Tea',0,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Boba Tea">$0</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Boba Tea')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }    
    }

    if (item === "Cat Burglar") {
        console.log("yup");
        if (document.getElementById('receipt-item-Omurice')) {
            let orderPriceString = document.getElementById('price-item-Omurice').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Omurice').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 750
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
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Omurice',750,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Omurice" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Omurice',750,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Omurice">$750</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Omurice')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
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
                        <button type="button" class="m-btn btn btn-default" disabled onclick="removeItem('Dumplings',250,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Dumplings" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" disabled onclick="addItem('Dumplings',250,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Dumplings">$250</var>
                    </div>
                </td>
                <td class="text-right">
                    <span href="#" class="btn btn-outline-danger" onclick="deleteItem('Dumplings')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
    
        if (document.getElementById('receipt-item-Cupcat')) {
            let orderPriceString = document.getElementById('price-item-Cupcat').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Cupcat').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 0
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
                            <h6 class="title text-truncate menu-item">Cupcat(DiscountedBurlgar)</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Cupcat',0,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Cupcat" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Cupcat',0,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Cupcat">$0</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Cupcat')"> <i class="fa fa-trash"></i></span>
                </td>
                </tr>`
            totalPrice();
        }
        if (document.getElementById('receipt-item-Boba Tea')) {
            let orderPriceString = document.getElementById('price-item-Boba Tea').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Boba Tea').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 150
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
                            <h6 class="title text-truncate menu-item">Boba Tea(DiscountedBurglar)</h6>
                        </figcaption>
                    </figure>
                </td>
                <td class="text-center">
                    <div class="m-btn-group m-btn-group--pill btn-group mr-2" role="group"
                        aria-label="...">
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Boba Tea',150,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Boba Tea" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Boba Tea',150,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Boba Tea">$150</var>
                    </div>
                </td>
                <td class="text-right">
                    <span class="btn btn-outline-danger" onclick="deleteItem('Boba Tea')"> <i class="fa fa-trash"></i></span>
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
                        <button type="button" class="m-btn btn btn-default" onclick="removeItem('Boba Tea',750,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Boba Tea" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" onclick="addItem('Boba Tea',750,1)"><i
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
        if (document.getElementById('receipt-item-Cupcat')) {
            let orderPriceString = document.getElementById('price-item-Cupcat').innerText.replace(/\D/g, '');
            let orderQuantityString = document.getElementById('quantity-item-Cupcat').innerText.replace(/\D/g, '');
            let orderPrice = Number(orderPriceString);
            let orderQuantity = Number(orderQuantityString);
            orderPrice += 1 * 200
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
                        <button type="button" class="m-btn btn btn-default" disabled onclick="removeItem('Cupcat',200,1)"><i
                                class="fa fa-minus"></i></button>
                        <button type="button" class="m-btn btn btn-default quantity" id="quantity-item-Cupcat" disabled>1</button>
                        <button type="button" class="m-btn btn btn-default" disabled onclick="addItem('Cupcat',200,1)"><i
                                class="fa fa-plus"></i></button>
                    </div>
                </td>
                <td>
                    <div class="price-wrap">
                        <var class="price" id="price-item-Cupcat">$200</var>
                    </div>
                </td>
                <td class="text-right">
                    <span href="#" class="btn btn-outline-danger" onclick="deleteItem('Cupcat')"> <i class="fa fa-trash"></i></span>
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