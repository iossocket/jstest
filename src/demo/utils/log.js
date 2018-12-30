export function log(type) {
    return function (target, name, descriptor) {
        let oldValue = descriptor.value

        descriptor.value = function () {
            console.log(`${type}`)
            return oldValue.apply(this, arguments)
        }
    }
}