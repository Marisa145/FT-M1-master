'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let alReves = num.split('').reverse()
  let binario = 0;
  for (let i = 0; i < alReves.length; i++) {
    if (alReves[i] == 1){
      binario += alReves[i] * 2 ** (i);
    }
  }
  return binario;
}
/* Primeros declaramos una variable para acumular alli nuestro resultado

*/
function DecimalABinario(num) {
  // tu codigo aca
  let decimal = [];
  while (num > 0) {
    decimal.unshift(num%2)
    num = Math.floor (num /2)
  }
  return decimal.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}