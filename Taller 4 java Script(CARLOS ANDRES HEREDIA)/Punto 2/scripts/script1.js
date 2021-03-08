function myFunction() {
	let fecha1 = new Date('2021/11/24');
	let fecha2 = new Date();
	let resta = fecha1.getTime() - fecha2.getTime();
	document.getElementById("date").innerHTML = "Faltan "+ Math.round(resta/ (1000*60*60*24))+ " para el 24 de noviembre";
}