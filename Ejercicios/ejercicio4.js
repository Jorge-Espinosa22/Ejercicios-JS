console.log("")


console.log("Ejercicio #4")

/*Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

let materiasEstudiante1 = ['Matemáticas', 'Inglés', 'Programación',"Algebra"];
let materiasEstudiante2 = ['Geografía', 'Español', 'Programación',"Inglés"];


const materiasRepetidas = (arr1, arr2)  => {    // Crear un conjunto con los elementos del primer arreglo  
  const repetidos = arr2.filter(materias => arr1.includes(materias));// Filtrar los elementos del segundo arreglo que están en el conjunto   
  console.log("Elementos repetidos:", repetidos);  // Mostrar los elementos repetidos en la consola 
  
}
// Ejemplo de uso:const arreglo1 = [1, 2, 3, 4, 5];const arreglo2 = [3, 4, 5, 6, 7];
materiasRepetidas(materiasEstudiante1,materiasEstudiante2);

for(curso of materiasEstudiante1) {
  if ( materiasEstudiante2.includes(curso)){
  console.log("Materia repetida:" , curso)};
}





console.log("<=================================================================================================================>")
