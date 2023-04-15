let operacion = prompt("Elije tu operación:1.Sumar - 2.Restar - 3.Multiplicación - 4.División - 5. Potenciar");

const number1 = prompt("Ingresa el Primer Número");
const number2 = prompt("Ingresa el Segundo Número");

    const sumar = (number1,number2)=>{
        return parseInt(number1) + parseInt (number2);
}
const restar= (number1,number2)=>{
    return parseInt(number1) - parseInt (number2);
}
const multiplicar = (number1,number2)=>{
    return parseInt(number1) * parseInt (number2);
}
const dividir = (number1,number2)=>{
    return parseInt(number1) / parseInt (number2);
}
const potencia = (number1,number2)=>{
    return parseInt(number1) ** parseInt (number2);
}

if (operacion == 1){
    //let number1 = prompt("Ingresa el Primer Número");
    //let number2 = prompt("Ingresa el Segundo Número");
    result = sumar( number1,number2 );
    alert (`El resultado de la operación es ${result}`);
}
else if (operacion == 2){
    //let number1 = prompt("Ingresa el Primer Número");
    //let number2 = prompt("Ingresa el Segundo Número");
    result = restar( number1,number2 );
    alert (`El resultado de la operación es ${result}`);
}
else if (operacion == 3){
    //let number1 = prompt("Ingresa el Primer Número");
    //let number2 = prompt("Ingresa el Segundo Número");
    result = multiplicar( number1,number2 );
    alert (`El resultado de la operación es ${result}`);
}
else if (operacion == 4){
    //let number1 = prompt("Ingresa el Primer Número");
    //let number2 = prompt("Ingresa el Segundo Número");
    result = dividir( number1,number2 );
    alert (`El resultado de la operación es ${result}`);
}
else if (operacion == 5){
    //let number1 = prompt("Ingresa el Primer Número");
    //let number2 = prompt("Ingresa el Segundo Número");
    result = potencia( number1,number2 );
    alert (`El resultado de la operación es ${result}`);
}
else{
    alert (`Por favor ingrese los valores correctos`);
}