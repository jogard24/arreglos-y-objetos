    // Definimos y exportamos la constante directamente
function inventarioFrutas (){

    let lista = ["Manzana", "Pera", "Uva"] ;

    lista.unshift("banano");

    lista.pop();

    console.log("Arreglo final:", lista);

    for (let fruta of lista) {
    console.log(fruta);
    }

    return lista;
}

console.log(inventarioFrutas);

    


export {inventarioFrutas};
