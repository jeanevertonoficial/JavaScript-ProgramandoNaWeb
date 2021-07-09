// add uma função e evento ao clicar no botão do formulario
var botaoAdicionar = document.querySelector("#adicionar-paciente");
   botaoAdicionar.addEventListener('click', function(event){  // função que escuta o evento ao click no botão
     event.preventDefault(); // ao clicar não recarregar a pagina

     var form = document.querySelector("#form-adiciona");  // função adicionar novo cliente na tabela, lendo os dados da tabela
     // pegando dados do form
     var paciente = document = objetoPaiente(form);

     var pacienteTr = montarTr(paciente);

// adicionando o paciente a tabela
     var tabela = document.querySelector("#tabela-pacientes");

     tabela.appendChild(pacienteTr);

     form.reset(); // limpando os campos do formulario com reset 
});

// criando um objeto paciente
function objetoPaiente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montarTr(paciente) {
     var pacienteTr = document.createElement("tr"); // tr de uma div no formulario
     pacienteTr.classList.add("paciente");

          pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
          pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
          pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
          pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
          pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
       //   pacienteTr.appendChild(calculaImc.(peso,altura));

     return pacienteTr;
}

function montarTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
