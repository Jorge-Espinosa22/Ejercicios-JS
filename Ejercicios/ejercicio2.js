console.log("")


console.log("Ejercicio #2")
//Exercise #2 (sugerencia map() )

/*Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

//Crear el arreglo de numeros a duplicar
const numeros = [5, 3, 15, 34, 22];
console.log(`Estos son los numeros sin duplicar: ${numeros}`)

//Use el .map para poder duplicarlos creando un nuevo arreglo para obtener los resultados ahi.
const numerosDuplicados = numeros.map(function (num) {
    return num * 2;
});

console.log(`"Este el resultado de los numeros ya duplicados: ${numerosDuplicados}`);
console.log("<=================================================================================================================>")
