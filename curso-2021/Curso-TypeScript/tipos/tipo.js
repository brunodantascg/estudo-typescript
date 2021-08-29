"use strict";
// string
var nome = 'João';
// ou
var sobreNome = 'Dantas';
console.log("Nome: " + nome + " " + sobreNome);
// number
var idade = 77;
console.log("Idade: " + idade);
// boolean
var possuiHobbies = false;
console.log("Possui hobbies: " + possuiHobbies);
// tipos explícitos
var minhaIdade; // se coloca any (ACEITA TUDO), se declarar o tipo ele só aceitará tipos daquele jeito
minhaIdade = 27;
console.log("1 - " + typeof minhaIdade);
minhaIdade = '27';
console.log("2 - " + typeof minhaIdade);
// Tipo Array
var hobbies = ['Praticar esporte', 'Conzinhar'];
console.log(hobbies[0]);
console.log(typeof hobbies);
// declara tipo explícito para array
var telefoneContatos = [981227700, 21076565];
console.log(telefoneContatos[0]);
console.log(typeof telefoneContatos);
// Tupla = é um array de dados pré-definitos
var endereco = ['Rua Rodrigues Alves', 999, 58420100];
console.log(endereco);
// Enum's Estrutura pré-definito
var Cores;
(function (Cores) {
    Cores[Cores["cinza"] = 0] = "cinza";
    Cores[Cores["verde"] = 1] = "verde";
    Cores[Cores["azul"] = 2] = "azul";
    Cores[Cores["amarelo"] = 3] = "amarelo"; // 3
})(Cores || (Cores = {}));
var minhaCor = Cores.verde;
console.log(minhaCor);
// Any
var carro = 'BMW';
carro = { marca: "BMW", ano: 2019, chassi: "zdcw201234328545" };
console.log(carro);
// Tipos em funções
function meuNome() {
    return nome;
}
console.log("Nome cliente: " + meuNome());
var numero1_teste = 199;
var numero2_teste = 55;
function retornaSoma(numero1_teste, numero2_teste) {
    return (numero1_teste + numero2_teste);
}
console.log("Soma aleátoria: " + retornaSoma(numero1_teste, numero2_teste));
