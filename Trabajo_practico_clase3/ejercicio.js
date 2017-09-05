//TP Clase 3 

// Pedir un numero hasta que sea ingresado correctamente
do{
	var numero1 = Number(prompt ("Ingrese el primer numero con el que desea operar ", "aqui"))
} while (isNaN(numero1) === true) 

// Pedir un segundo numero hasta que sea ingresado correctamente
do{
	var numero2 = Number(prompt ("Ingrese el segundo numero con el que desea operar ", "aqui"))
} while (isNaN(numero2) === true) 


// Preguntar que operación quiere realizar hasa que sea una función correcta
do{
	var operacion = prompt ("Elija que operacion desea realizar. Escriba sumar, restar, multiplicar o dividir", "sumar").toLowerCase()
} while (operacion != "sumar" && operacion != "restar" && operacion != "multiplicar" && operacion != "dividir")

//Declaro función de sumar
var funcionSumar = function (numero1,numero2){
	return numero1+numero2
}

//Declaro función de restar
var funcionRestar = function (numero1,numero2){
	return numero1-numero2
}

//Declaro función de dividir
var funcionDividir = function (numero1,numero2){
	return numero1/numero2
}

//Declaro función de multiplicar
var funcionMultiplicar = function (numero1,numero2){
	return numero1*numero2
}

if (operacion=="sumar") {
	var resultadoSumar = funcionSumar (numero1, numero2)
	console.log(numero1 + " + " + numero2 + " es igual a: " + resultadoSumar)
} else if (operacion=="restar") {
	var resultadoRestar = funcionRestar (numero1, numero2)
	console.log(numero1 + " - " + numero2 + " es igual a: " + resultadoRestar)
} else if (operacion=="dividir") {
	var resultadoDividir = funcionDividir (numero1, numero2)
	console.log(numero1 + " dividido " + numero2 + " es igual a: " + resultadoDividir)
} else if (operacion=="multiplicar") {
	var resultadoMultiplicar = funcionMultiplicar (numero1, numero2)
	console.log(numero1 + " * " + numero2 + " es igual a: " + resultadoMultiplicar)
} else{
	console.log("error")
}

