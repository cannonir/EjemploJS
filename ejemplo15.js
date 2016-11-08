//sentencia while-for
function contadorA(cadena)
{
	var contA=0;//inicializacion
	var i=0;
		while(i<cadena.length)
			{
			if (cadena[i].toUpperCase()==="A")//convierte todo en mayusculas
			//if (cadena[i].toLowerCase()==="a")//convierte todo en minusculas
				{
					contA++;
				}
	i++;//incremento

			}
return contA;
}
var cad="Anastacia";
console.log("la cantidad de letras a, es:"+ contadorA(cad));

