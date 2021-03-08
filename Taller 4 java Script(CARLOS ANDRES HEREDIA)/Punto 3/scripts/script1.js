function myFunction(){
	let r="";
	for (i = 0; i < 10; i++) {
		let Enumero = prompt("Ingrese numero a calcular", "##");
		if (Enumero<0) {
			r = r + " "+Enumero;
		}
	}
	document.getElementById("resul").innerHTML = r; 
	document.getElementById("comen").innerHTML = "estos son los numeros menores a 0"; 
}