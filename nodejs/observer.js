// const EventEmitter = require('events').EventEmitter

// const emitter1 = new EventEmitter()

// emitter1.on('some', info => {
//     console.log('fn1', info)
// })

// emitter1.on('some', info => {
//     console.log('fn2', info)
// })

// emitter1.emit('some', 'xxxx')

// class Dog extends EventEmitter {
//     constructor(name) {
//         super()
//         this.name = name
//     }
// }

// let simon = new Dog('simon')
// simon.on('dark', function() {
//     console.log(this.name, ' bark-1')
// })
// simon.on('dark', function() {
//     console.log(this.name, ' bark-2')
// })

// setInterval(function () {
//     simon.emit('dark')
// }, 1000)

// const fs = require('fs')
// const readStream = fs.createReadStream('./data/file1.txt')

// let length = 0

// readStream.on('data', chunk => {
//     let len = chunk.toString().length
//     console.log('len', len)
//     length += len
// })

// readStream.on('end', () => {
//     console.log('length', length)
// })

const fs = require('fs')
const readline = require('readline')

let rl = readline.createInterface({
    input: fs.createReadStream('./data/file1.txt')
})

let lineNum = 0
rl.on('line', line => {
    lineNum++
})

rl.on('close', () => {
    console.log('lineNum', lineNum)
})

