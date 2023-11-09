

function map(collection, transform) {
    const results = []
    for(const item of collection) {
        results.push(transform(item))
    }
    return results;
}

function reduce(collection, transform, initialState) {
    let state = initialState
    for(let i of collection) {
        state = transform(state, i)
    }
    return state
}

console.log(reduce([1,2, 3, 4], (state, i) => i + state, 0))

function findLargestNumsV1(arrayOfNumberArrays) {
    const results = []
    for(let arr of arrayOfNumberArrays) {
        let max = arr[0]
        for(let i of arr) {
            if(i > max) {
                max = i
            }
        }
        results.push(max)
    }
    return results
}


function findMaxInArrayV1(arr) {
    let max = arr[0]
    for(let i of arr) {
        if(i > max) {
            max = i
        }
    }
    return max
}


/**
 * 
 * @param {Array} arr 
 */
const findMaxInArray = (arr) => reduce(arr, (max, curVal) => Math.max(max, curVal), arr[0])

const findLargestNums = (arrayOfNumberArrays) => map(arrayOfNumberArrays, findMaxInArray)



console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) // ➞ [7, 90, 2]
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])) // ➞ [-34, -2, 7]
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])) // ➞ [0.7634, 9.32, 9]