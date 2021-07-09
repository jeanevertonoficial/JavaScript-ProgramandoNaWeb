// add uma função e evento ao clicar no botão do formulario
var botaoAdicionar = document.querySelector("#adicionar-paciente");
   botaoAdicionar.addEventListener('click', function(event){  // função que escuta o evento ao click no botão
     event.preventDefault(); // ao clicar não recarregar a pagina

    // função adicionar novo cliente na tabela, lendo os dados da tabela
     var form = document.querySelector("#form-adiciona");
     var paciente = document = objetoPaiente(form);
     var pacienteTr = montarTr(paciente);

     if(!validaPaciente(paciente)){ // ! negação se for invalido
       console.log("Paciente inválido");
       return; // return para a excução aqui se o paciente for invalido
     }

// adicionando o paciente a tabela
     var tabela = document.querySelector("#tabela-pacientes");

     tabela.appendChild(pacienteTr);

// limpando os campos do formulario com reset
     form.reset();
});

// criando um objeto paciente
function objetoPaiente(form) {
  var paciente = {
    nome: form.nome.value, // recebendo os valores de cada campo do formulario
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

//função montaTr paciente através dela é facil de montar os  formulario com apenas um chamada de função em vez de repetir o codigo varias vezes
function montarTr(paciente) {
     var pacienteTr = document.createElement("tr"); // tr de uma div no formulario
     pacienteTr.classList.add("paciente");
     //colocando a montarTd dentro do montarTr e montando o formulario retornando o pacienteTr
          pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
          pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
          pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
          pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
          pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
       //   pacienteTr.appendChild(calculaImc.(peso,altura));

     return pacienteTr;
}

// função montarTd uma função para montar todos os campos do formulario de uma unica vez por um chamada apenas, pegando todos os campas
function montarTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
// função para validação de paciente
 function validaPaciente(paciente) {
   if(validaPeso(paciente.peso)){
     return true;
   }else {
     return false;
   }
 }
