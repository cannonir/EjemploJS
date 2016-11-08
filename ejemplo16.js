//sentencia for
function contarA(cadena)
{

	for(var i=0, contA=0; i<cadena.length; i++)
	{//parametro
		if(cadena[i]==="o")
		{//action
			contA++;
		}
	}
	return contA;
}

var cad="Romero";

console.log("la cantidad de letras o, es:"+contarA(cad));