
 let presupuesto = 1000;
 let saldo = gastos(presupuesto);

function gastos(presupuesto) {
    let gasto;
    while (true) {
      gasto = parseInt(prompt("Ingresa el monto del gasto. Si ya no hay más gastos, escribe '0'"));
      if (gasto === 0) {
        break;
      }
      if (gasto > presupuesto) {
        alert("El gasto excede el presupuesto disponible. Por favor, ingresa un monto menor.");
        continue;
      }
      presupuesto -= gasto;
    }
    return presupuesto;
  }
  

 


alert ('te quedaria un saldo restante de : ' + saldo); // Imprime el saldo restante del presupuesto
