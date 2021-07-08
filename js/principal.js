var titulo = document.querySelector(".titulo");

titulo.textContent = "Jean academy";

// Variavel paciente e suas decendentes
var pacientes =  document.querySelectorAll(".paciente"); // Variavel que percorre a lista Array pacientes com o querySelectorAll

  // Estrutura For para percorrer o array
for( var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdGordura = paciente.querySelector(".info-gordura");
  var gordura = tdGordura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValidado = true;
  var alturaValida = true;

  // condições para validção do IMC
  if(peso <= 0 || peso >= 500) {
    console.log("peso invalido");
    pesoValidado = false;
    tdImc.textContent = "Peso inválido";

    paciente.classList.add("paciente-invalido"); // add classList, pega a classe do css e faz a alteração que estiver no estilo
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura invalida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";

    paciente.classList.add("paciente-invalido");
  }


  if (pesoValidado && alturaValida) {
    var imc = peso /(altura * altura);
    tdImc.textContent = imc.toFixed(2); // toFixed é um padrão de formatar casas decimais no javaScript
    // 100 / 2.0 * 2.0 = 100 / 4 ==> 25
  } else if ((peso <= 0 || peso >= 1000) && (altura <= 0 || altura >= 3.0)) {
    tdImc.textContent = "Peso e Altura inválidos.";
  }

}

// add uma função e evento ao clicar no botão do formulario
var botaoAdicionar = document.querySelector("#adicionar-paciente");
   botaoAdicionar.addEventListener('click', function(event){
     event.preventDefault(); // ao clicar não recarregar a pagina
     console.log("Fui clicado");
   });


// consoles que aparece os resultados no console do navegador

console.log(imc);
