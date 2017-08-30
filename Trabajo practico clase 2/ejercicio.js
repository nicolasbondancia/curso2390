//TP 2


// Array inicial con dias de la semana
var diasDeLaSemana = ["lunes", "martes", "miercoles", "miércoles", "jueves", "viernes", "sabado", "sábado", "domingo"]


// Prompt para que el usuario cargue su dia de la semana mas do while para confirmar que ingresó un dia de la semana correctamente
do{
	var diaDeLaSemanaUsuario = prompt ("Ingrese un dia de la semana:", "aqui").toLowerCase()
} while (diaDeLaSemanaUsuario != "lunes" && diaDeLaSemanaUsuario != "martes" && diaDeLaSemanaUsuario != "miercoles" &&  diaDeLaSemanaUsuario != "miércoles" && diaDeLaSemanaUsuario != "jueves" && diaDeLaSemanaUsuario != "viernes" && diaDeLaSemanaUsuario != "sábado" && diaDeLaSemanaUsuario != "sabado" && diaDeLaSemanaUsuario != "domingo" )


// Recorrido del Array en comparacion con el dato ingresado por el usuario para encontrar el mismo y roper el for
for (i=0; i<diasDeLaSemana.length; i++){
	
	if (diasDeLaSemana[i]==diaDeLaSemanaUsuario) {
   		break
	} else {
	    console.log (diasDeLaSemana[i])
	}
}

// If para mostrar mensaje si el dia de la semana es fin de semana o dia de semana
if (diasDeLaSemana[i]=="sabado" || diasDeLaSemana[i]=="sábado" || diasDeLaSemana[i]=="domingo" ) {
    	alert("El día " + diaDeLaSemanaUsuario + " es fin de semana")
	} else {
	    alert("El día " + diaDeLaSemanaUsuario + " es dia laboral")
	}

