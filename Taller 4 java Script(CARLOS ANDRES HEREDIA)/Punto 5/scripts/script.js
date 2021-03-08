function myFunction(){
	let n = prompt("Ingrese numero a calcular", "##");
	let r = false;
	for(i=2; i<n; i++){
		if(n % i == 0 && n!=1){
			r = true;
		}
	}
	if(r == false){
		document.getElementById("resul").innerHTML = "el numero " + n + " es primo";
	}else {
		document.getElementById("resul").innerHTML = "el numero "+ n +" no es primo"; 
	}
}