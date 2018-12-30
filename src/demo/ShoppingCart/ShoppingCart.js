import $ from 'jquery'
import getCart from './GetCart'

export default class ShoppingCart {
    constructor(app) {
        this.app = app
        this.$el = $('<div>').css({
            'padding-bottom': '10px'
        })
        this.cart = getCart()
    }

    initBtn() {
        let $btn = $('<button>shopping cart</button>')
        $btn.click(() => {
            alert(this.cart.getList())
        })
        this.app.$el.append($btn)
    }

    render() {
        this.app.$el.append(this.$el)
    }

    init() {
        this.initBtn()
        this.render()
    }
}