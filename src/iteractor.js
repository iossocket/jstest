// class Iterator {
//     constructor(list) {
//         this.list = list
//         this.index = 0
//     }

//     next() {
//         if (this.hasNext()) {
//             return list[this.index++]
//         }
//         return null
//     }

//     hasNext() {
//         return this.index < this.list.length
//     }
// }

// let list = [1, 2, 3, 4]
// let i = new Iterator(list)

// while(i.hasNext()) {
//     console.log(i.next())
// }

function each(data) {
    // let iterator = data[Symbol.iterator]()

    // let item = {done: false}

    // while(!item.done) {
    //     item = iterator.next()
    //     if (!item.done) {
    //         console.log(item)
    //     }
    // }

    for (let item of data) {
        console.log(item)
    }
}

let list = [1, 2, 3, 4]
each(list)

