function myFunction() {
	let muestra = "";
	for(i=1; i<=9; i++){
		let temp="";
		for(i1=1; i1<=10; i1++){
			temp = temp + "<br/>" + i.toString() + " * " + i1.toString() + " = " + (i*i1);
		}
		muestra = muestra + "<br/>" + temp;
	}
	document.getElementById("resul").innerHTML = muestra; 
}