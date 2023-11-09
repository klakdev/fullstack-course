

/**
 * 
 * @param {function} fn 
 */
function notifyMe(fn) {
    console.log("setting up notification service")
    setTimeout(function() {
        fn()
    }, 8000)
}

function alert() {
    console.log("Go into the Mamad")
}

notifyMe(alert)


function fn1(fn) {
    console.log("fn1")
    fn()
}

function fn2() {
    console.log("fn2")
}

const obj = {
    name: "Yaki",
    birthday: 1985,
    address: {
        street: [
            "", ""
        ],
        country: "Israel"
    }
}

function createUser(details) {
    return {
        a: function(s) {
            return details.f+s
        },
        name: function() {
            return `${details.firstName} ${details.lastName}`
        }

    }
}

const user = createUser({
    f: 23,
    firstName: 'Yaki',
    lastName: "Klein"
})

console.log(user.a(34))
console.log(user.name())



fn1(fn2)

function x (val) {
    return val+ 5
}
const x = val => val + 5