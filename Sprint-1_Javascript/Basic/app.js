console.log('Hola mundo')//Ejercicio 1

const nombre = "Jhon Robert";
const apellidos = "Matamoros Vitonera";
var mostrar = "¡Me llamo " + nombre + " " + apellidos +"!";

alert(mostrar) // Ejercicio 2

console.log(nombre+" "+apellidos) // Ejercicio 3

var numero1 = 28;
var numero2 = 43;
console.log("La suma entre "+numero1+" i "+numero2+" es " +(numero1+numero2));
//Ejercicio 4

var notaExamen = 4.5;
var message = "";
if (notaExamen < 5) {
    message = "Has suspendido el examen con un "+ notaExamen;
} else{
    message = "Has aprobado, pero no te confies, con un "+ notaExamen;
}
alert(message) //Ejercicio 5

const cotxeBlau = "Tinc un cotxe de color blau";
const cotxeVerd = cotxeBlau.replace("blau", "verd");
const cotxeOU = cotxeBlau.replace(/o/g,"u");
console.log(cotxeBlau+"\n"+cotxeVerd+"\n"+cotxeOU);
//Ejercicio 6

var objetos = ["taula", "cadira", "ordinador", "libreta"];
for (let i=0; i < objetos.length; i++){
    var mensaje = "L'objecte "+ objetos[i]+" està a la posició "+i+".";
    console.log(mensaje);
};//Ejercicio 7

function calculadora(operador, valor1, valor2){
    var operacion = operador.toLowerCase();
    var resultado = 0;
    if (operacion == "sumar" || operacion =="s") {
        resultado = valor1+ valor2;
    } else if (operacion == "restar" || operacion == "r"){
        resultado = valor1 - valor2;
    } else if (operacion == "multiplicar" || operacion == "m"){
        resultado = valor1 * valor2;
    } else if (operacion == "dividir" || operacion == "d"){
        if (valor2 == 0){
            resultado ="El denominador no puede ser 0";
            return resultado;
        } else{
            resultado = valor1 / valor2;
        }
    } else {
        resultado = "Por favor elige una opcion valida"
        return resultado;
    }
    return(resultado)
};
calculadora("sumar", 3,4);//Ejercico 8 y nivel 2 (1)

const botonNumero = document.getElementsByName("number");
const botonOperacion = document.getElementsByName("operacion");
const botonIgual = document.getElementsByName("equal")[0];
const botonLimpiar = document.getElementsByName("clear")[0];


var resultado = document.getElementById("resultado");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

botonNumero.forEach( function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    });
});

botonOperacion.forEach( function(boton){
    boton.addEventListener("click", function(){
        seleccionarOperacion(boton.innerText);
    });
});

botonIgual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
});

botonLimpiar.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});

function agregarNumero(num){
    opeActual = opeActual.toString() + num;
    actualizarDisplay();
}

function clear(){
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}

function seleccionarOperacion(op){
    if (opeActual === "") return;
    if (opeAnterior !=="" ){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function actualizarDisplay(){
    resultado.value = opeActual;
}

function calcular(){
    var numero1 = parseFloat(opeAnterior);
    var numero2 = parseFloat(opeActual);
    var calculo = 0;
    if (isNaN(numero1) || isNaN(numero2)) return;
    switch(operacion){
        case '+':
            calculo = calculadora("s", numero1, numero2);
            break
        case '-':
            calculo = calculadora("r", numero1, numero2);
            break
        case 'x':
            calculo = calculadora("m", numero1, numero2);
            break
        case '/':
            calculo = calculadora("d", numero1, numero2);
            break
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}//Ejercicio 1 nivell 3