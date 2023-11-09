

function isString(val) {
    return typeof val === 'string'
}

console.log(isString(1)) // false
console.log(isString("1")) //true 
console.log(isString(true)) // false
console.log(isString(null)) // false
console.log(isString(new String("1"))) // false
console.log(isString({})) // false
console.log(isString([1, 2, 3])) // false
console.log(isString([1, "2", 3])) // false
console.log(isString(function test() {  })) // false


const str1 = ""
const str2 = ""

str1 === str2 



