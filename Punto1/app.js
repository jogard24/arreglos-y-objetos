// Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
// un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
// de nombres registrados.

//Lista de Asistencia con 5 nombres
let Asistencia = ["Juan", "Carrillo", "Pablo", "Maria", "Marco"];

//Imprimos la lista original
console.log(Asistencia);

//Añadir un nuevo nombre al final
Asistencia.push("Gabriel");

//Eliminar el primer nombre: "Juan"
Asistencia.shift();

//Imprimimos El resultado final
for (let i = 0; i < Asistencia.length; i++){

    console.log(`Indice: ${i}, Nombre Del aprendiz ${Asistencia[i]}`);
}