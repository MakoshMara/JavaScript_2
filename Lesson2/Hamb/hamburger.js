class Hamburger{
    constructor(){
        this.size = 0;
        this.filling = 0;
        this.options = [];
        this.calorize = 0;
        this.price = 0;
        this.init;
        this.get_calorize_and_price;

    }
    init(){
        this.size = +prompt('Вы хотите маленький бургер (1) или большой (2)?')
        this.filling = +prompt('Вам бургер с сыром (1), с салатом(2) или картофелем (3)?')
        this.options.push(+prompt('Посыпать приправой: да (1) нет (2)?'))
        this.options.push(+prompt('добавить майонез: да (1) нет (2)?'))
        this.get_calorize_and_price()
    }

    get_calorize_and_price(){
        if (this.size == 1) {
            this.price = this.price + 50
            this.calorize = this.calorize +20
        }
        else{
            this.price = this.price + 100
            this.calorize = this.calorize + 40
        }

        if (this.filling == 1){
            this.price = this.price + 10
            this.calorize = this.calorize +20
        }
        else if(this.filling == 2){
            this.price = this.price + 20
            this.calorize = this.calorize + 5
        }
        
        else if (this.filling == 3){
            this.price = this.price + 15
            this.calorize = this.calorize + 10
        }

        if (this.options[0] == 1){
            this.price = this.price + 15
        }
        if (this.options[1]==1){
            this.price = this.price + 20
            this.calorize = this.calorize + 5
        }
        
        alert(`вы заказали гамбургер стоимостью ${this.price} рублей и потолстеете на ${this.calorize} калорий`)
        
    }
}   

let hamb = new Hamburger()
hamb.init()
