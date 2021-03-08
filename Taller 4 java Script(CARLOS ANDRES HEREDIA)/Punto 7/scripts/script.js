
let a = prompt("ingrese numero a", "suma de multiplos");
let b = prompt("ingrese numero b", "suma de multiplos");
let n = prompt("ingrese numero n", "suma de multiplos");



function myFunction(a, b, n){
	let suma =0;
	if(a>0 && b>0 && n>0){
		for(i=1;i<=n;i++){
			suma = suma + (i*a);
		}
		for(i=1;i<=n;i++){
			suma = suma + (i*b);
		}
		return	suma;
	}else{
		window.alert("algun numero ingresado esta negativo");
	}
}
