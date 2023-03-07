const validator = {

  isValid: function (number) {
    
    // CONVERSION DE STRING A ARRAY Y NUMBER--
    const inputNumber = number.split('').map((number) => { return parseInt(number) });

    //INVERTIR ARRAY -- 

    const arrayInvert=inputNumber.reverse();

    console.log(inputNumber);

    //NUEVO ARRAY CON NUMEROS IMPARES "NUM1"--
    const num1 = [];

    for (let i = 1; i < arrayInvert.length; i = i + 2) {
      num1.push(arrayInvert[i]);
    }

    for (let i = 0; i < num1.length; i++) { // MULTIPLICACION X2 DE NUMEROS EN POSICION IMPAR--
      num1[i] = num1[i] * 2;
      if (num1[i] > 9) {
        num1[i] = num1[i] - 9;
      }
    }
    console.log('num1', num1);

    //SUMA DE DIGITOS DE ARRAY NUM1--
    let sum1 = 0;
    for (let i = 0; i < num1.length; i++) {
      sum1 += num1[i];

    }

    console.log('sum1', sum1)



    //ARRAY CON NUMEROS PARES "NUM2"
    const num2 = [];
    for (let i = 0; i < arrayInvert.length; i = i + 2) {
      num2.push(arrayInvert[i]);
    }
    console.log('num2', num2);

    ///SUMA DE DIGITOS DE ARRAY NUM2--
    let sum2 = 0;
    for (let i = 0; i < num2.length; i++) {
      sum2 += num2[i];
    }
    console.log('sum2', sum2);

    //SUMA DE ARRAY NUM1 +NUM2
   
    const sumTotal = sum1 + sum2;
    console.log('sumTotal',sumTotal);
    
    //VERIFICACION SI SUMATOTAL ES MULTIPLO DE 10--

    if (sumTotal % 10 === 0){
      return true
    }else { return false
    }
    
  },



  maskify: function (inputMask) {

    //RECORRER CUATRO POSICIONES DE IZQ=>DERECHA PARA OMITIR ENMASCARAR LOS ULTIMOS DIGITOS

    const inMask = inputMask.split('');
    const mask = inMask.length - 4;

    //ENMASCARAR LOS DIGITOS GUARDADOS EN EL SLICE MASK
    for (let i = 0; i < mask; i++) {
      inMask[i] = '#';
    }
    return inMask.join('');

    //MOSTRAR LOS OBJETOS SIN COMILLA
  }
}

export default validator;