const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numbers of numeros) {

    if (numbers === 2 || numbers === 5) {
        continue;
    }
    console.log(numbers)
}