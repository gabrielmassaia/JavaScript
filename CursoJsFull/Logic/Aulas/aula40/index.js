try {
    console.log("Abri um arquivo")
    console.log("Manipulei o arquivo e gerou erro")
    console.log("Fechei o arquivo")
    
    try {
        console.log(a)
        console.log("Abri um arquivo")
    } catch (error) {
        console.log("deu erro")
    } finally {
        console.log("Eu sempre sou executado tambem")
    }

} catch (error) {
    console.log("Tratando o erro")
} finally {
    console.log("Eu sempre sou executado")
}