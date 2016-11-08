function contarA(cadena,letra)
{

	for(var i=0, contA=0; i<cadena.length; i++)
	{//parametro
		if(cadena[i]===letra)
		{//action
			contA++;
		}
	}
	return contA;
}

var cad="Romero";
var letra="r";
console.log("la cantidad de letras: "+letra +"  es:"+contarA(cad,letra));

/*generar la tabla de multiplicacion usando una funcion que reciba como parametros
numero operacion linea ejemplo function(numero, operador, limite)=>function(5,"*",10)
5*1=5
5*2=10
5*3=15
.
.
.
5*10=50
*/