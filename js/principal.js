var titulo = document.querySelector(".titulo");

titulo.textContent = "Jean academy";
// Variavel paciente e suas decendentes
var paciente =  document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdGordura = paciente.querySelector(".info-gordura");

var altura = tdAltura.textContent;
var peso = tdPeso.textContent;
var gordura = tdGordura.textContent;


// consoles que aparece os resultados no console do navegador
console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);
console.log(gordura);
