var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");
    var resposta = xhr.responseText;
    console.log(resposta);

    if (xhr.status == 200) {
      var pacientes = JSON.parse(resposta);
      console.log(pacientes);

      pacientes.forEach(function(paciente) {
              adicionaPacienteNaTabela(paciente);
          });
    }else {
      erroAjax.classList.remove("invisivel");
    }


  });

  xhr.send();
});
