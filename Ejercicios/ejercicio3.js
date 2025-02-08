console.log("")


console.log("Ejercicio #3")

/*Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const numerospru = [3, 5, 6, 2];

const resultadoSuma = "sd"



//Ejercicio usando reduce
const numerosReduce = [1 , 2, 3, 4];

const sumaNumeros = numerosReduce.reduce((num1,num2) => num1 + num2 );
const productoNumeros = numerosReduce.reduce((num1,num2) => num1 * num2 );

console.log(`"Resultado de la suma de los numeros dentro del arreglo: ${sumaNumeros}`);
console.log(`"Producto de los numeros dentro del arreglo: ${productoNumeros}`);

console.log("<=================================================================================================================>")

