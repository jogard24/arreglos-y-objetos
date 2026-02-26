// Características de un celular: Cree un objeto llamado celular con propiedades:
// marca, modelo, año y estado. Muestre cada propiedad en consola de manera
// individual.

//Creacion de un objecto llamado celular
let Celular = {
    marca: "Honor",
    modelo: "X7a",
    año: "2020",
    estado: "Bueno"
}

//Imprimir cada valor en la consola de manera individual
for (let carcteristica in Celular){

    console.log(`Llave: ${carcteristica} = ${Celular[carcteristica]}`);
    
}