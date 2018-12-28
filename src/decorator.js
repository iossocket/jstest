import {readonly, deprecate} from 'core-decorators'

// hard code decorator, also show how to use deprecate in core-decorator
class Circle {
    @deprecate('即将废弃')
    draw() {
        console.log('draw circle')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }

    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }

    setRedBorder(circle) {
        console.log('add border')
    }
}

let c = new Circle()
console.log(c.draw())


// @ decorator
function testDec(isDec) {
    return function (target) {
        target.isDec = isDec
    }
}

@testDec(false)
class Demo {

}

alert(Demo.isDec)

// function readonly(target, name, descriptor) {
//     descriptor.writable = false
//     return descriptor
// }

class Person {
    constructor() {
        this.first = 'A'
        this.last = 'B'
    }

    @readonly
    name() {
        return `${this.first} ${this.last}`
    }
}

let p = new Person()
console.log(p.name())

// will show an error, because the 'name' is a readonly property
// p.name = function () {
//     alert(100)
// }

function log(target, name, descriptor) {
    let oldValue = descriptor.value
    descriptor.value = function () {
        console.log(`calling ${name} with`, arguments)
        return oldValue.apply(this, arguments)
    }
    return descriptor
}

class Math {
    @log
    add(a, b) {
        return a + b
    }
}

let math = new Math()
let result = math.add(1, 2)
console.log('result: ', result)