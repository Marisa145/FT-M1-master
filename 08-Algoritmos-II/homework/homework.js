'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: en el arreglo elegimos un numero(pivote)de forma aleartoria y determina  a la izquierda menores y derecha mayores
  if(array.length <= 1) return array;                              //caso base 
  let pivote = array[Math.floor( Math.random() * array.length)];   // desarollo del mismo: determinamos nuestro pivote  de forma random y con .floor que no da un n° entero hacia abajo
  let left =[];                                                     // declaramos un array nuevo hacia la izq
  let right =[];                                                    // declaramos un array nuevo hacia la der 
  let equal = [];                                                    // y si es igual 
  for (let i = 0; i < array.length; i++) {                           //utilizamos un bucle for para recorrer mi array
    if(array[i] < pivote){                                            // si el n°  es meno que mi pivote
      left.push(array[i]);                                             // lo pusheamos hacia la izquierda
    }else if(array[i] > pivote){                                       // si la valor de la posicion es mayor al pivote 
      right.push(array[i])                                              // lo pusheamos hacia el array right
    }
    else{
      equal.push(array[i])                                                // si  es igual lo pusheamos a su correspondiente array 
    } 
  }
  return quickSort(left).concat(equal).concat(quickSort(right));          // concatenamos de forma recursiva 
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length <= 1)return array           // caso base
  //dividimos el array a la mitad
  const i = Math.floor(array.length/2);        //separamos nuestro array
  let left = array.slice(0, i);               //nos sirve para tomar la primer mitad del arreglo  del 0 al medio
  let right =array.slice(i)                   // del medio para adelante
  //recursion
  left= mergeSort(left)                        // 
  right=mergeSort(right)
  const result =[]
  //con el resultado recorro y lo agrego a un nuevo array
  while(left.length && right.length){            //mientra left tenga elementos y  right tenga elmentos
    result.push(left[0]>right[0] ? right.shift() : left.shift())   // empiezo a comparar si left es mayor a right si cumple pusheamos el derecho y si no pushemaos el izquierdo
  }
 return [ ...result,...left,...right]              // concateno el resultado con el Operador Spread 
} 
/*Divida la lista dada en dos mitades (mitades aproximadamente iguales en el caso de una lista con un número impar de elementos).
Continúe dividiendo los subarreglos de la misma manera hasta que solo le queden arreglos de un solo elemento.
Comenzando con los arreglos de un solo elemento, fusione los subarreglos para que cada subarreglo fusionado esté ordenado.
Repita la unidad del paso 3 para terminar con una sola matriz ordenada. */

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
