// 1 завдання

const getMessage = () => {
    console.log("Hello World!")
}
getMessage()


// 2 завдання


function makeRandomNumber() {
    const randomNumber = Math.random() * (100 - 1)
    return randomNumber
}
const value = makeRandomNumber()
const chek = prompt("Вгадайте число від 1 до 100");
if (chek === value ) {
    alert("Ви вгадали ");
} else if (chek !== value){
    alert("Ви НЕ вгадали");
}



// 3 завдання


let gettingNumber = confirm("Натисніть <OK>")
let howManyNumber = 0;
do {
    let gettingNumber = confirm("Продовжуйте натискати <OK>")
    howManyNumber++
    if (howManyNumber >= 5) {
        break
    }
} while (gettingNumber === true)
console.log(howManyNumber)


// 4 завдання


const applyCallbackToEachElement = (arr, callback) => {
    let squaredArray = [];
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i]
        callback(number)
        squaredArray.push(number)
    }
    return squaredArray
}
const arr = [1, 2, 3, 4, 5]
const squareCallback = (number) => {
    const squareResult = number * number
    return squareResult
};
const result = applyCallbackToEachElement(arr, squareCallback)
console.log(result)



//   5 завдання

const calculateDiscountPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100)
    callback(discountedPrice)
};
const showDiscountedPrice = (discountedPrice) => {
    console.log(`Дисконтна ціна ${discountedPrice} грн`)
};
calculateDiscountPrice(100, 10, showDiscountedPrice);