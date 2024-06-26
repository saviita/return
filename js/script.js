//Se puede guardar el resultado de la operación en una constante

/*function getDoubleValue(number){
    const double = number * 2;
    return double;
}

const result = getDoubleValue(8);
console.log('const result', result);*/

//También se puede sacar el resultado directamente con return

/*function getSum(numberA, numberB) {
    return numberA + numberB;
}

const resultSum = getSum(4, 4);
console.log('const resultSum', resultSum);*/

//Funciones de flechas

const getSum = (numberA, numberB) => {
  console.log(numberA + numberB);
};

getSum(5, 8);

const doubleNumber = number => number * 2;
