//parametro rest
function cocinar(...ingredientes ){
//console.log("ingrdienteA ",ingredienteA)
//console.log("ingrdienteB",ingredienteA)
console.log("ingrdientec",ingredientes)

}
cocinar("pollo","tomate","lechuga")

//parametro rest
function cocinarr(ingrdienteA,ingrdienteB,...ingredientes ){
    //console.log("ingrdienteA ",ingredienteA)
    //console.log("ingrdienteB",ingredienteA)
    console.log("ingrdientec",ingredientes)
    
    }
    cocinar("pollo","tomate","lechuga")


  //parametros spread
 let ingredientesBase=["Pollo","Tomaate"]
 cocinar (ingredientesBase,"Arroz")// se le puede pasar un array por parametro a una funcion