function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1,2,3,4);

const conta = (...args) => {
    console.log(args)

} 
conta ('+', 1, 20, 40, 50)