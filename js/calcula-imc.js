var titulo = document.querySelector(".titulo"); // lendo o formulario e pegando a classe com o nome titulo

titulo.textContent = "Jean academy"; // mudança no titulo da pagina diretamente pelo javaScript

// Variavel paciente e suas decendentes
var pacientes =  document.querySelectorAll(".paciente"); // Variavel que percorre a lista Array pacientes com o querySelectorAll

  // Estrutura For para percorrer o array
for( var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i]; // paciente passa a ser pacientes, recebendo i como um parametro para passar no for e ler a array

  var tdPeso = paciente.querySelector(".info-peso"); // lendo e pegando as classes conforme o nome
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");  // lendo e pegando as classes conforme o nome
  var altura = tdAltura.textContent;

  var tdGordura = paciente.querySelector(".info-gordura");  // lendo e pegando as classes conforme o nome
  var gordura = tdGordura.textContent;

  var tdImc = paciente.querySelector(".info-imc");  // lendo e pegando as classes conforme o nome

// validando e passando uma condição como verdadeiro para peso e altura
  var pesoValidado = true;
  var alturaValida = true;

  // condições para validção do IMC
  // validando o peso
  if(peso <= 0 || peso >= 500) {
    console.log("peso invalido");
    pesoValidado = false;
    tdImc.textContent = "Peso inválido";

    paciente.classList.add("paciente-invalido"); // add classList, pega a classe do css e faz a alteração que estiver no estilo
  }
// validando a altura
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura invalida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";

    paciente.classList.add("paciente-invalido");
  }

// if  que passa por DEFAULT verdadeiro, casa nenhuma das condições chejam false e chegam verdadeiras 
  if (pesoValidado && alturaValida) {
    var imc = peso /(altura * altura);
    tdImc.textContent = imc.toFixed(2); // toFixed é um padrão de formatar casas decimais no javaScript
    // 100 / 2.0 * 2.0 = 100 / 4 ==> 25
  } else if ((peso <= 0 || peso >= 1000) && (altura <= 0 || altura >= 3.0)) { // else caso as duas condições chegam falsas
    tdImc.textContent = "Peso e Altura inválidos.";
  }

}

// consoles que aparece os resultados no console do navegador
