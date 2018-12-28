class Product {
    constructor(name) {
        this.name = name
    }

    init() {

    }

    fn1() {

    }

    fun2() {

    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}