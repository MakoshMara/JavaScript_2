const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];//массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                 this.goods = data;
                 this.render()
            });
    }
    // _fetchProducts(cb){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         console.log(this.goods);
    //         cb();
    //     })
    // }
    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Basket {
    constructor(container = '.basket'){
        this.container = container;
        this.basket_goods = [];
        this._getBasket()
            .then(data => {
                 this.basket_goods = data.contents;
                 this.render_basket()
            });
    }
    
    _getBasket(){
      
        return fetch(`${API}/getBasket.json`)
            .then(result =>
                result.json())
            .catch(error => {
                console.log(error);
            });
       
    }

    add_basket_good(){
    }

    delete_basket_item(){
    // удаление экземпляра класса Basket_item из списка basket_items
    }

    get_quantity_basket_item(){
    // изменение количества конкретного товара в корзине
    }

    total_quantity(){
    // подсчет общего количества товаров в корзине
    }

    total_cost(){
    // подсчет общей цены товара в корзине
    }

    render_basket(){
        const block = document.querySelector(this.container);
        for (let product of this.basket_goods){
            const productObj = new Basket_item(product);
            block.insertAdjacentHTML('beforeend', productObj.render_basket_item());
        }
    }
}

class Basket_item {
    constructor(product, img = 'https://via.placeholder.com/200x150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render_basket_item(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="del-btn">Удалить</button>
                </div>
            </div>`
    }

    basket_item_cost(quantity, price){
    // подсчет цены каждого конкретного товара в зависимости от количества. Пригодиться для рендера
    }
}

let list = new ProductsList();
let basket = new Basket()