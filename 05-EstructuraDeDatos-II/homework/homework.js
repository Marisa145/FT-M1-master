"use strict";

const { has } = require("markdown-it/lib/common/utils");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como 
  parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  if (this.head === null) this.head = new Node(value)
  else {
    let referencia = this.head
    while (referencia.next !== null) {
      referencia = referencia.next
    }
    referencia.next = new Node(value)
  }


  /*var nuevoNodo = new Node(value)  /// primero creamos el nuevo nodo a ingresar
  if(this.head == null)  {           /// luego preguntamos si el primer elemento esta vacio
      this.head = nuevoNodo           /// si esta vacio decimos que va a ser igual al nodo que creamos
  }
  else{
     let actual = this.head          // cremaos un let que nos permita seguir avanzado en la lista
    while (actual.next ){            // 
      actual = actual.next;
    }
    actual.next = nuevoNodo 
  } */
}
LinkedList.prototype.remove = function () {

  let actual = this.head;                           // le asignamos a una variable this.head
  if (actual === null) return null                    //si mi no tenga nada en mi head retornar null
  else if (actual && !actual.next) {                 // si tenemos un head pero no tengo un actual.next significa que tengo un solo elemento
    let aux = actual.value;                         // le  estoy pasando una copia del avlora ctual de mi head
    this.head = null;                                // y reasignamos a this.head que va a ser igyal a null (eliminamso el valor)
    return aux;                                      // retornamos el valor que eliminamos de la lista
  }
  //Recorrer hasta el ultimo nodo ya que antes teniamos un solo elemento
  while (actual.next.next) {                             // Nos paramos en el antes del ultimo para verificar cual es mi ultimo nodo ya que su next seria null
    actual = actual.next;                                // la idea es avanzar si tengo un actual.next.next- hasta que actul.next.next sea null
  }
  let aux = actual.next.value                           // entonces nos quedamos con el valor del ultimo nodo
  actual.next = null                                    // lo eliminamos
  return aux                                            // retornamos lo eliminado
}

LinkedList.prototype.search = function (arg) {
  if (this.head === arg) return arg              // si en el head  se encuentra el valor que se busca va a retornar el valor pedido
  var current = this.head;                      // creamos un let para copiar lo que se encuentra en el head para poder correrlo
  while (current) {                               //aqui decimos que mientras currents(el nodo)exista 
    if (typeof arg === 'function') {              //preguntamos si el argumento es un tipo de funcion
      if (arg(current.value)) {                    // y si es una funcion entoces preguntamos arg esta en cauuren value(la invocamos)
        return current.value                      // retornmos current value
      }
    }
    else {                                        // y si no
      if (arg === current.value) return arg       // preguntamso si argumento es igual a current.value retornamos el argumento
    }
    current = current.next                         //   y si no es ninguna de las 2 anteriores , decimos que vamos al siguiente
  }
  return null;                                     // y si no esta en ninguna opcion retornamos null
}
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket (casillero)se almacenará un dato. Recibe un input alfabético,
   suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula
    el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en
     la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash,
   y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la 
tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico 
(determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;              // numero total de casilleros
  this.buckest = [];                  //consta de un arreglo de buckets ( casilleros; es decir, posiciones posibles para almacenar la información)
}

HashTable.prototype.hash = function (Key) {  //  creamos un metodo pasamos por parametro un input alfabetico 
  let suma = 0;                             // creamos un contador para poner la suma del codigo numerico 
  let resultados = 0;                        //  creamos una variable para poner el modulo que necesitamos
  for (let i = 0; i < Key.length; i++) {   // creamos un for para iterar sobre cada letra de la clave
    suma += Key.charCodeAt(i);             // sumamos la ASCII de cada letra de la clave
    resultados = suma % this.numBuckets;    // obtenemos el modulo de dividir las suma realizada por el numero de casilleros totales
  }
  return resultados                        //por ultimo retornamos el modulo  que determina la posición del casillero  en la que se almacenará el dato.

}

HashTable.prototype.set = function (Key, value) {
  if (typeof Key !== 'string') throw TypeError('Keys must be strings'); // aqui indicamos si la clave no es un strign tire un error
  let numero = this.hash(Key)                                             // aqui obtensmos de  la funcion hash la Key que nos indica en que posicion esta de los casillero
  if (this.buckest[numero] === undefined) {                                // si en el casillero(numero ) no esta osea undifined
    this.buckest[numero] = {}                                             //entonces le asignamos un objeto para que podamos guardar datos
  }
  this.buckest[numero][Key] = value;                                     //  voy a la posicion numero(casillero) sino esta el key lo crea y le pone el valor
}

HashTable.prototype.get = function (Key) {
  let numero = this.hash(Key)
  if (this.buckest[numero]) {                                               // si numero se encuentra el los casilleros
    return this.buckest[numero][Key]                                       // retornamos el casillero con su clave
  }
}

HashTable.prototype.hasKey = function (Key) {
  let numero = this.hash(Key)

  if (this.buckest[numero][Key]) {
    return true
  }
  return false
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
