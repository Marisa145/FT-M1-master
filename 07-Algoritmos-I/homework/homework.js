'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let resultado = [1];          //
  let i = 2                    // el priemer valor que vamos a dividir es 2

while(num !== 1) {            // voy a trabajar con este numero mintras sea distinto de uno
if( num % i === 0){           // si el modulo es igual a cero significa que estas bien entonces
  resultado.push(i);           // lo pusheamos al array de resultado
  num = num / i  ;             // divido por 2 al num 
   
}
else { i++}                    // si no se puede dividir por dos incrementamos el numero
}   
return resultado   ;    
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: va intercambiando mandando el numero msa grande hacia el final 
 for (let i = 0; i < array.length -1 ; i++) {     // siempre va a tener una comparacion menos por que va comparando de 2
  for (let j = 0; j < array.length -1; j++) {     // utilizamos bluques anidados.Los bucles internos se ejecutan completamente en cada iteración del bucle externo.
    if(array [j] > array[ j +1] ){                // array en la posicion [j] es mayor array en la posicion [j] siguiente 
      let aux = array[j+1]                        // declaramos una variable para poder copiar y guardar el valor que tiene array siguiente
      array[j+1] = array[j]                       // como ya el valor lo tenemos guardado lo reasignamos a la posicion primera porque que ses menor
      array[j] = aux ;                            // entonces aca realiza el ultimo intercambio para que la primera posicion tenga el valor de la segunda
    }
  }
 }
  return array                                      // por ultimo retornamos ordenado
}
 /* let swap = true;
 while (swap){
  swap = false;
  for(let i =0; i <array.length; i++){
    if(array[i] > array[i+1]){
      let aux = array[i]
      array[i] = array[i+1]
      array[i+1]= aux 
    }
  }
 }
 return array */

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código: tenemos un valor los comparamos con de la posicion de la izquierda e insertarlo en su posicion correspondiente
  for (let i = 1; i < array.length; i++) {                  // comenzamos nuestro indice en 1 porque asumimos que el primer elemento ya esta ordenado
    let j = i-1;                                            // declaramos un avariable para poder comparar el elemento hacia atras;simepre va estar una pocision por detras
    let aux = array[i];                                     // para guardar el valor que se tinene que posicionar en su lugar correspondiente
    while(j>=0 && array[j] > aux){                          // mientras se cumpla la condicion
      array[j+1] = array [j];                                // se intercambia los valores 
      j--;                                                   // j decrementa para seguir comparandose con el de izquierda para ver si es menor
    }
    array[j + 1] = aux;                                      // si la condicion no se cumple entonces introducimos nuestro valor (si se vuelve aresetear al terminar el recorrido)
    
  }
  return array;                                               // por ultimo retornamos el array ordenado
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código: identificamos el numero maas chico para despues llevarlo hacia adelante de todos
  for (let j = 0; j < array.length; j++) {                    //creamos un buqlue para poder recorre el array
    let min= j;                                               // y se sospecha que el numero mas chico esta en la  posicion donde se encuentrade mi indice j(se guarda la posicion del numero mas chico)segun el indice
    for (let i = j+1; i < array.length; i++) {                //creamos un bucle anidado  donde j va a ser i + 1 una posicion adelante
      if(array[i] < array[min]){                              // comparamos los valores 
        min=i;                                                // redifinimos quien es el mas chico 
      } 
      
    }
    if(j!== min){                                              // si nos damos cuenta que j no es el minimo
      let aux = array[j];                                      //redefinimos los valores
      array[j]= array[min];
      array[min] = aux;
    }
  }
  return array                                                  //retornamos el array ordenado
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
