//var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function() {
		if (event.target.tagName == 'TD') {
			event.target.parentNode.remove();
		}
	}, 500);
	//var alvodoEvento = event.target;
	//var paiDoAlvodoEvento = alvodoEvento.parentNode;
	//paiDoAlvodoEvento.remove();
});



