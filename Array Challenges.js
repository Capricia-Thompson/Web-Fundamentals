// //Always Hungry
function alwaysHungry(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy")
            count++
        }
    }
    if (count === 0) {
        console.log("I'm hungry")
    }
}
//
// alwaysHungry([3.14, "food", "pie", true, "food"])
// alwaysHungry([4, 1, 5, 7, 2])

// //High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
//
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5)
// console.log(result)

// // Better than average
function betterThanAverage(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var avg = sum / arr.length
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++
        }
    }
    return count
}
//
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9])
// console.log(result)

// //Array Reverse
function reverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.reverse()
    }
    return arr
}
//
// var result = reverse(["a", "b", "c", "d", "e"])
// console.log(result)

//Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1]
    for (let k = 2; k < n; k++) {
        fibArr.push(fibArr[k - 1] + fibArr[k - 2])
    }
    return fibArr
}
//
// var result = fibonacciArray(10)
// console.log(result)