/*Minha solução*/

function maiorDeDois () {
    let num1 = 7
    let num2 = 2

    if (num1 > num2) {
        console.log(num1)
    }
    else {
        console.log(num2)
    }
}
maiorDeDois()

/* Solução do curso*/

//1
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y
    }
}
console.log(max(10,2))

//2 
function max(x, y) {
    if (x > y) {
        return x;
    }
     return y  
}
console.log(max(10,20))

//3
function max(x, y) {
    if (x > y) return x;
    return y
}
console.log(max(19,2))

//4
function max(x, y) {
    return x > y ? x : y;
   
}
console.log(max(190,2))

//5
const max2 = (x, y) => {
    return x > y ? x : y 
}
console.log(max2(10,79))

//6
const max3 = (x, y) => x > y ? x : y 
console.log(max3(101,79))
