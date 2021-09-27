"use strict";
console.log("--- Questões da Lista de Estrutura de Repetição ---");
// Estrutura de Repetição
// 1- for 
// for ([expressaoInicial]; [condicao]; [incremento])
//  declaracao
//
// 2 - do...while
//  do
//      declaracao
//  while (condicao);
//
// 3 - while
// while (condicao)
//  declaracao
//
// 4 - for...in
// for (variavel in objeto) {
//  declaracoes
// }
//
// 5 - for...of
// for (variavel of objeto) {
//  declaracoes
// }
//
// 6 - for...of e for...in
// let arr = [3, 5, 7];
// arr.foo = "hello";
//
// for (let i in arr) {
//   console.log(i); // logs "0", "1", "2", "foo"
// }
//
// for (let i of arr) {
//   console.log(i); // logs "3", "5", "7"
// }
// 1- Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
function numeroInvalido(n1, n2) {
    console.log(n1);
    console.log(n2);
    if ((n1 >= 0 && n1 <= 10) && (n2 >= 0 && n2 <= 10)) {
        return "Notas Válido";
    }
    else {
        return "Notas Inválido";
    }
}
let i;
console.log("1 - Questão");
for (i = 0; i < 10; i++)
    console.log(i + 1 + " - " + numeroInvalido(Math.random() * (100 - 0) + 0, Math.random() * (10 - 0) + 0));
// 2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
function nomeSenhaIguais(nome, senha) {
    if (nome === senha)
        return "Inválido";
    return "Válido";
}
console.log("2 - Questão");
for (i = 0; i < 10; i++)
    if (i <= 5) {
        console.log(i + 1 + " - " + nomeSenhaIguais("Joao", "Joao"));
    }
    else {
        console.log(i + " - " + nomeSenhaIguais("Joao", "Joao12"));
    }
// 3 - Faça um programa que leia e valide as seguintes informações:
// a. Nome: maior que 3 caracteres;
// b. Idade: entre 0 e 150;
// c. Salário: maior que zero;
// d. Sexo: 'f' ou 'm';
// e. Estado Civil: 's', 'c', 'v', 'd';
/*
function validarInformacoes(): string {

} */ 
