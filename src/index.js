import validator from './validator.js';

//LLAMAR EVENTO VALIDACION DE LLENADO DE INPUT--

document.getElementById('sendForm').addEventListener('click', sendForm)

//FUNCION PARA SE EFECTUE PRIMERO LA FUNCION DE VALIDACION DE LLENADO DE INPUT--
function sendForm(){
  const inputValid=validInput();
  
  if(inputValid===true){
    validLuhn();
  }
  
}

//FUNCION DE VALIDACION DE LLENADO DE INPUT--
function validInput() {
  
  const name = document.getElementById('name').value;
  const number = document.getElementById('inputNumberInsert').value;
  if (name === '') {
    document.getElementById('errorName').style.display = 'block';
    document.getElementById('name').focus();
  }
  else if (number === '') {
    document.getElementById('errorNumber').style.display = 'block';
    document.getElementById('inputNumberInsert').focus();
  } 
  else{
    return true
  }
  
}


//FUNCION PARA VALIDACION DEL ALGORITMO DE LUHN--
function validLuhn() {
  
  const number = document.getElementById('inputNumberInsert').value;
  const validLuhn = validator.isValid(number);
  console.log(validLuhn);

  if (validLuhn === true) {
    document.getElementById('infValid').style.display = 'block';
    document.getElementById('form').style.display = 'none';
    document.getElementById('noValid').style.display = 'none';
  }
  else {
    document.getElementById('noValid').style.display = 'block';
    document.getElementById('infValid').style.display = 'none';
    document.getElementById('form').style.display = 'none';
  }
}

//LLAMAR EVENTO AL BOTON "REGRESAR"--
document.getElementById('comeBack').addEventListener('click', back);
//FUNCION PARA FUNCION DE BOTON "REGRESAR"--
function back() {
  document.getElementById('form').style.display = 'block';
  document.getElementById('infValid').style.display = 'none';
  document.getElementById('noValid').style.display = 'none';
}

document.getElementById('sendForm').addEventListener('click', inputMaskNumber);
//FUNCION PARA ENMASCARAR DIGITOS--
function inputMaskNumber() {
  const name = document.getElementById('name').value;
  const number = document.getElementById('inputNumberInsert').value;
  const inputMask = number;
  const numberMask = validator.maskify(inputMask);
  const answer = document.getElementById('answer');
  const answer2 = document.getElementById('answer2');
  answer.textContent = `Hola ${name}, el número de tarjeta ${numberMask}` ;
  answer2.textContent = `Hola ${name}, el número de tarjeta ${numberMask};` ;
}

//EVENTO PARA BORRAR LLENADO INPUT AL HACER CLICK EN "REGRESAR"--
document.getElementById('comeBack').addEventListener('click', clean);


//EVENTO PARA  LIMPIAR INPUTS Y REGRESAR A LA PANTALLA INICIAL--
document.getElementById('again').addEventListener('click', eraser);

//FUNCION PARA LIMPIAR INPUTS E "INTENTAR OTRA VEZ" --
function eraser(){
  again();
  clean();
}

//FUNCION PARA REGRESAR A LA PANTALLA INICIAL AL HACER CLICK EN "INTENTAR OTRA VEZ"--
function again() {
  document.getElementById('noValid').style.display = 'none';
  document.getElementById('infValid').style.display = 'none';
  document.getElementById('form').style.display = 'block';
}
//FUNCION PARA LIMPIAR INPUTS --
function clean() {
  document.getElementById('name').value = '';
  document.getElementById('errorName').style.display = 'none';
  document.getElementById('inputNumberInsert').value = '';
  document.getElementById('errorNumber').style.display = 'none';
  document.getElementById('name').focus();
}