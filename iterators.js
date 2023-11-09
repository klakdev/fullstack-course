

function forEach(transform, collection) {
    for(const item of collection) {
        transform(item)
    }
}

const didPassCourse = name => true
const multiply = x => x * 2

const arr = [1, 2, 3, 5, 6, 89]
const strArr = ["Yaki", "Shmuel", "David", "Ari"]

console.log(arr.forEach(multiply))
console.log(strArr.map(didPassCourse))


