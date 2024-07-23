function bloco(){
    console.log("bloco 1")
}
const bloco2 = function() {
    console.log("bloco2")
}
const bloco3 = mensagem => console.log("bloco3", mensagem) 




bloco()
bloco()
bloco()

bloco2()
bloco2()
bloco2()

bloco3("bloco3")

module.exports = {
    bloco
}