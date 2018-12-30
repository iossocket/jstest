// 原型模式，new一个新对象开销大，根据已有对象，生成新对象

// 原型对象
const prototype = {
    getName: function () {
        return `${this.first} ${this.last}`
    },

    say: function () {
        return `${this.getName()} say Hi`
    }
}

// Object.create 根据传入的对象，生成一个新的对象
let x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
console.log(x.getName())
console.log(x.say())

let y = Object.create(prototype)
y.first = 'C'
y.last = 'D'
console.log(y.getName())
console.log(y.say())

// 桥接模式，更像是组合
// 享元模式