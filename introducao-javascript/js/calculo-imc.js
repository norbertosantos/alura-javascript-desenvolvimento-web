var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;
	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if (peso <= 0 || peso >= 1000) {
	
		console.log("Peso Inválido");
		tdImc.textContent ="Peso Inválido!";
		pesoEhValido = false;

		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {
	
		console.log("Altura Inválida!");
		tdImc.textContent = "Altura Inválida";
		alturaEhValida = false;

		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValida) {
	
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;	
	}	
}

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}


