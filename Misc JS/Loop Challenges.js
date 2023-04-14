function printOdds(start, end){
    for(let i = start; i <=end; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

function downByThree(num){
    while(num > 0){
        if(num % 3 === 0){
            console.log(num)
        }num--
    }
}

function printSeq(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

function sigma(start, end){
    let message = start
    let sum = start
    for(let num = start + 1; num <= end; num++){
        sum += num
        message += " + "+num
    }console.log(message+" = "+sum)
}

function factorial(start, end){
    let message = start
    let product = start
    for(let num = start + 1; num <= end; num++){
        product *= num
        message += " * "+num
    }console.log(message+" = "+product)
}

printOdds(1,20)
downByThree(100)
printSeq([4, 2.5, 1, -0.5, -2, -3.5])
sigma(1, 100)
factorial(1, 12)