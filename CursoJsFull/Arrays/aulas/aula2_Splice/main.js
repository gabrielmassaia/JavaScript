const nomes = ['Massaia', 'Gabriel', 'Luana', 'Lucas', 'Gean']

//nomes.splice(índice, delete, elem1, elem2, elem3)
//pop

// const removidos = nomes.splice(-4, Number.MAX_VALUE);
// console.log(nomes, removidos)

const removidos = nomes.splice(3, 2, 'meiva');
console.log(nomes, removidos)