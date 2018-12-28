import { resolve } from "url";

function loadImg(src) {
    let promise = new Promise(function (reslove, reject) {
        let img = document.createElement('img')
        img.onload = function () {
            reslove(img)
        }
        img.onerror = function () {
            reject('image load failed')
        }
        img.src = src
    })
    return promise
}

let src = 'https://tse2.mm.bing.net/th?id=OIP.ui-qz0GiYHBcUycTeDImgQHaFH'
let result = loadImg(src)

result.then(function (img) {
    alert(`width: ${img.width}`)
    return img
}).then(function (img) {
    alert(`height: ${img.height}`)
}).catch(function (ex) {
    alert(ex)
})