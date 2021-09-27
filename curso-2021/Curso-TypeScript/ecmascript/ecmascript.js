"use strict";
console.log("--- Módulo 4 - Novos Recursos ECMAScript ---");
// let & Const
let seraQuePode = "?";
console.log(seraQuePode);
let estaFrio = true;
if (!estaFrio) {
    let acao = "Colocar o casaco";
    console.log(acao);
}
else {
    console.log("Testar. let: " + estaFrio);
}
const cpf = "012.500.605-78";
// cpf = "222.313.302-45"
console.log("CPF: " + cpf);
// Let Const #2
function revelar() {
}
// Dois modos de criar uma função
//1 - Atribuir a função a uma constante
const somar = function (a, b) {
    return a + b;
};
console.log("1 - Soma: " + somar(2, 2));
// 2 - Atribuindo nome a função
function somar2(a1, b1) {
    return a1 + b1;
}
console.log("2 - Soma: " + somar2(2, 2));
// Arrow Function
const subtrair = (n1, n2) => n1 - n2;
const subtrair2 = (n1, n2) => n1 - n2;
const subtrair3 = (n1, n2) => {
    return n1 - n2;
};
console.log("1 - Subtrair: " + subtrair(2, 2));
console.log("2 - Subtrair: " + subtrair2(2, 2));
console.log("3 - Subtrair: " + subtrair3(2, 2));
const saudacao = () => "Olá.";
console.log(saudacao());
const falar = (name) => "Olá " + name;
console.log(falar("Bruno"));
// Parametros Padrão
function contagemRegressiva(inicio = 3) {
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
}
contagemRegressiva();
contagemRegressiva(5);
// Operador Spread & Rest
const numbers = [1, 10, 99, -5, 68, 59, 990];
console.log("Maior número: " + Math.max(...numbers));
const turmaA = ["Bruno", "João", "Victor"];
const turmaB = ["Fernando", "Luis", "Alberto", ...turmaA];
console.log("Turma A: " + turmaA);
console.log("Turma A + Turma B: " + turmaB);
function retornarArray(...args) {
    return args;
}
console.log(retornarArray(10, 20, 30, 40, 50));
