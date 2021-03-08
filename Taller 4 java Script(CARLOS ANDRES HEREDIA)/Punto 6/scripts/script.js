function myFunction(n){
	let pr=1;
	if(n>0){
		for(i=1;i<=n;i++){
			pr = pr * i;
		}
		return pr;
	}else{
		window.alert("El numero ingresado tiene que se entero positivo");
	}
}