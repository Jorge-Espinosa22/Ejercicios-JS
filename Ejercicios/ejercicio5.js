console.log("")


console.log("Ejercicio #5")


/* Ejercicio n.° 5
Para cada uno de los ejercicios siguientes, suponga que comienza con la siguiente matriz de personas.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1. Escriba un comando que imprima todas las personas de la lista.
2. Escriba el comando para eliminar "Dani" de el arreglo.
3. Escriba el comando para eliminar "Juan" de el arreglo.
4. Escriba el comando para mover "Luis" al frente de el arreglo.
5. Escriba el comando para agregar su nombre al final de el arreglo.
6. Usando un bucle, itere a través de esta matriz y después de console.log "Maria", salga del bucle. (usar break)
7. Escriba el comando que proporcione el indexOf donde se encuentra "Maria".
Al final del ejercicio, debería haber 4 personas en el arreglo.
*/

let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//Problema 1
for(persona of personas ){ //Sacar cada persona del arreglo
    console.log(persona);//Imprimir en consola persona por persona
}
//Problema 2
const eliminarPersona = ( array, indice ) => { //Crear funcion con parametros para eliminar y poner el indice dependiendon la persona a eliminar
    const personaEliminada = array.splice(indice, 1);//Eliminar a la persona,indice a eliminar y cuantos elementos
    console.log( personaEliminada ); //Imprimir en consola la persona eliminada
}
eliminarPersona(personas,1);//['Dani']
//console.log(personas); (4) ['Maria', 'Luis', 'Juan', 'Camila']

//Problema 3
eliminarPersona(personas,2);//Se reutilizo la misma funcion. ['Juan']
//console.log(personas); (3) ['Maria', 'Luis', 'Camila']

//Problema 4
const personaAMover = personas.splice(1,1)[0]; 
personas.unshift(personaAMover);
console.log(personas);//(3)['Luis', 'Maria', 'Camila']
//Problema 5
personas.push("Jorge");//['Luis', 'Maria', 'Camila', 'Jorge']
console.log(personas);
//Problema 6 
for ( persona of personas ){
    console.log( persona); 
    if ( persona  === "Maria" ){
        break;
    }
}
//Problema 7
console.log(`Índice de Maria": ${personas.indexOf("Maria")}`);















console.log("<=================================================================================================================>")