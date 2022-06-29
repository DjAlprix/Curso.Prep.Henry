var numero = 100;
function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var a = [];
    for (var i = 0; i < 10; i++) {
        a.push(numero += 2);
        if (numero === i) { break; }
    }
    return a.length === 10 ? a : "Se interrumpió la ejecución";
}
console.log(breakStatement(numero));