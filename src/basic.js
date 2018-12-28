class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }

    eat() {
        alert(`${this.name} eat something`)
    }

    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

class Student extends Person {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }

    study() {
        alert(`${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.study()

console.log(xiaoming.number)
xiaoming.eat()

let xiaohong = new Student('xiaohong', 11, 'A2')
xiaohong.study()
xiaohong.speak()

class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }

    saySth() {

    }
}

class House {
    constructor(city) {
        this.city = city
    }

    showCity() {
        alert(`house in ${this.city}`)
    }
}

class A extends People {
    constructor(name, house) {
        super(name, house)
    }

    saySth() {
        alert('I am A')
    }
}

class B extends People {
    constructor(name, house) {
        super(name, house)
    }

    saySth() {
        alert('I am B')
    }
}

class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    append(node) {

    }

    addClass(name) {

    }

    html(data) {

    }
}

window.$ = function (selector) {
    return new jQuery(selector)
}

var $p = $('p')
console.log($p)
console.log($p.addClass)