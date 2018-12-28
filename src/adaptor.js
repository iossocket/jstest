class RealImg {
    constructor(fileName) {
        this.fileName = fileName
        this.loadImage()
    }

    loadImage() {
        console.log('loading... ', this.fileName)
    }

    display() {
        console.log('display... ', this.fileName)
    }
}

class ProxyImg {
    constructor(fileName) {
        this.realImg = new RealImg(fileName)
    }

    display() {
        this.realImg.display()
    }
}

// let img = new ProxyImg('1.png')
// img.display()

let star = {
    name: 'XXX',
    age: 25,
    phone: '13900001111'
}

let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            return '19911112323'
        }
        if (key === 'price') {
            return 1200000
        }

        return target[key]
    },

    set: function (target, key, val) {
        if (key === 'customPrice') {
            if (val < 100000) {
                throw new Error('price is too low')
            } else {
                target[key] = val
                return true
            }
        }
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 15000000

console.log(agent.customPrice)

agent.customPrice = 10