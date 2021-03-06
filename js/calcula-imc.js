var titulo = document.querySelector(".titulo"); // lendo o formulario e pegando a classe com o nome titulo

titulo.textContent = "Jean academy"; // mudança no titulo da pagina diretamente pelo javaScript

// Variavel paciente e suas decendentes
var pacientes =  document.querySelectorAll(".paciente"); // Variavel que percorre a lista Array pacientes com o querySelectorAll

  // Estrutura For para percorrer o array
for( var i = 0; i < pacientes.length; i++){

// paciente passa a ser pacientes, recebendo i como um parametro para passar no for e ler a array
  var paciente = pacientes[i];

// lendo e pegando as classes conforme o nome
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdGordura = paciente.querySelector(".info-gordura");
  var gordura = tdGordura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

// validando e passando uma condição como verdadeiro para peso e altura
  var pesoValidado = validaPeso(peso); // pegando a função
  var alturaValida = validaAltura(altura);

  // condições para validção do IMC
  // validando o peso
  if(!pesoValidado) { // caso a função for false mostra mensagem paciente invalido
    console.log("peso invalido");
    pesoValidado = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido"); // add classList, pega a classe do css e faz a alteração que estiver no estilo
  }
// validando a altura
  if (!alturaValida) { // caso a função for false mostra mensagem paciente invalido 
    console.log("Altura invalida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

// if  que passa por DEFAULT verdadeiro, casa nenhuma das condições chejam false e chegam verdadeiras
  if (pesoValidado && alturaValida) {
    var imc = calculaImc(peso,altura); // recebendo por parametro a função calculaImc
    tdImc.textContent = imc;
    // 100 / 2.0 * 2.0 = 100 / 4 ==> 25
    // else caso as duas condições chegam falsas
  } else if ((peso <= 0 || peso >= 1000) && (altura <= 0 || altura >= 3.0)) {
    tdImc.textContent = "Peso e Altura inválidos.";
  }

}
// função de validação de peso
function validaPeso(peso) {
    if(peso >= 0 && peso <= 500){
      return true;
    }else {
      return false;
    }
}
// função para validar a altura retornando parametro para reuso
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  }else {
    return false;
  }
}

// calculando o imc com uma função, assim é possivel passar por parametro
function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2); // toFixed é um padrão de formatar casas decimais no javaScript
}
