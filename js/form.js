// add uma função e evento ao clicar no botão do formulario
var botaoAdicionar = document.querySelector("#adicionar-paciente");
   botaoAdicionar.addEventListener('click', function(event){
     event.preventDefault(); // ao clicar não recarregar a pagina

     var form = document.querySelector("#form-adiciona");
     // pegando dados do form
     var nome = form.nome.value;
     var peso = form.peso.value;
     var altura = form.altura.value;
     var gordura = form.gordura.value;

     // criando os elementos
     var pacienteTr = document.createElement("tr");

     var nomeTd = document.createElement("td");
     var pesoTd = document.createElement("td");
     var alturaTd = document.createElement("td");
     var gorduraTd = document.createElement("td");
     var imcTd = document.createElement("td");


     nomeTd.textContent = nome;
     pesoTd.textContent = peso;
     alturaTd.textContent = altura;
     gorduraTd.textContent = gordura;
     imcTd.textContent = imc;

     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);

     var tabela = document.querySelector("#tabela-pacientes");

     tabela.appendChild(pacienteTr);
});
