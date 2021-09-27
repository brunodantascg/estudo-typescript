"use strict";
console.log("--- Questões da Lista de Estrutura de Decisão ---");
// 1 - Faça um Programa que peça dois números e imprima o maior deles.
function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    }
    return numero2;
}
console.log("1: O maior número é: " + maiorNumero(10, 15));
// 2- Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
function valorPositivoNegativo(numero) {
    if (numero > 0) {
        return 'Positivo';
    }
    else if (numero < 0) {
        return 'Negativo';
    }
    else {
        return 'Zero é neutro';
    }
}
console.log("2: O número é: " + valorPositivoNegativo(15));
// 3 - Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
function verificadorLetra(letra) {
    if (letra === 'F' || letra === 'f') {
        return 'F - Feminino';
    }
    else if (letra === 'M' || letra === 'm') {
        return 'M - Masculino';
    }
    else {
        return 'Não identificado';
    }
}
console.log("3: Sexo: " + verificadorLetra('m'));
// 4 - Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
function verificadorVogal(vogal) {
    vogal.toUpperCase();
    if (vogal === 'A' || vogal === 'E' || vogal === 'I' || vogal === 'O' || vogal === 'U') {
        return 'vogal!';
    }
    return 'consoante!';
}
console.log("4: A letra é: " + verificadorVogal('m'));
// 5 - Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.
function mediaAluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if (media === 10) {
        return 'Aprovado com Distinção.';
    }
    else if (media >= 7 && media < 10) {
        return 'Aprovado.';
    }
    else {
        return 'Reprovado.';
    }
}
console.log("5: " + mediaAluno(10, 10));
// 6 - Faça um Programa que leia três números e mostre o maior e o menor deles.
function maiorTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
// 7 - Faça um Programa que leia três números e mostre o maior e o menor deles.
function menorTres(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log("6: Maior - " + maiorTres(15, 16, 17));
console.log("7: Menor - " + menorTres(15, 18, 17));
// 8 - Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
function melhorCompra(produto1, produto2, produto3) {
    if (produto1 < produto2 && produto1 < produto3) {
        return produto1;
    }
    else if (produto2 < produto1 && produto2 < produto3) {
        return produto2;
    }
    else {
        return produto3;
    }
}
console.log("8: Produto com menor preço - R$ " + melhorCompra(55.20, 60, 65.99));
// 9 - Faça um Programa que leia três números e mostre-os em ordem decrescente.
function ordemDecrescente(num1, num2, num3) {
    if ((num1 < num2) && (num1 < num3)) {
        if (num2 < num3) {
            return [num1, num2, num3];
        }
        else {
            return [num1, num3, num2];
        }
    }
    else if ((num2 < num1) && (num2 < num3)) {
        if (num1 < num3) {
            return [num1, num3, num2];
        }
        else {
            return [num2, num3, num1];
        }
    }
    else if ((num3 < num1) && (num3 < num2)) {
        if (num1 < num2) {
            return [num3, num1, num2];
        }
        else {
            return [num3, num2, num1];
        }
    }
    else {
        return [0, 0, 0];
    }
}
console.log("9: " + ordemDecrescente(15, 11, 10));
// 10 -Faça um Programa que pergunte em que turno você estuda. Peça para digitar:
// M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem  "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", 
// conforme o caso.
function turnoEstudo(turno) {
    turno = turno.toUpperCase();
    if (turno === 'M') {
        return "M-Matutino";
    }
    else if (turno === 'V') {
        return "V-Vespetino";
    }
    else if (turno === 'N') {
        return "N-Noturno";
    }
    else {
        return "Não identificado!";
    }
}
console.log("10: " + turnoEstudo('v'));
// 11 - As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.
function salarioReajuste(salarioAtual) {
    let salarioReajuste;
    let variavel;
    if (salarioAtual < 280) {
        salarioReajuste = salarioAtual * 1.20;
        variavel = 20;
        return [salarioReajuste, variavel];
    }
    else if (salarioAtual >= 280 && salarioAtual < 700) {
        salarioReajuste = salarioAtual * 1.15;
        variavel = 15;
        return [salarioReajuste, variavel];
    }
    else if (salarioAtual >= 700 && salarioAtual < 1500) {
        salarioReajuste = salarioAtual * 1.10;
        variavel = 10;
        return [salarioReajuste, variavel];
    }
    else {
        salarioReajuste = salarioAtual * 1.05;
        variavel = 5;
        return [salarioReajuste, variavel];
    }
}
let salarioBase = 1500;
let s = salarioReajuste(salarioBase)[0];
let p = salarioReajuste(salarioBase)[1];
console.log("11: Reajuste Salário");
console.log("Salário antes do reajuste: R$ " + salarioBase);
console.log("Percentual de aumento aplicado " + p + "%");
console.log("Valor do aumento: R$ " + (salarioBase * (p / 100)));
console.log("Salário novo: R$ " + s);
// 12 - Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto 
// (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado 
// (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
// O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
function salarioBrutoCalculoComHoras(horas, valorHora) {
    let salarioBruto = horas * valorHora;
    return salarioBruto;
}
let salarioB = salarioBrutoCalculoComHoras(220, 31.82);
let descontoIr = [0.0, 0.05, 0.10, 0.20];
let valorDescontoINSS = 0.10;
let valorDescontoFGTS = 0.11;
function calculoDescontoIR(salarioB, ...descontoIr) {
    let v = descontoIr;
    let desINSS;
    if (salarioB < 900) {
        desINSS = salarioB * Number(v[0]);
        return [Number(v[3] * 100), desINSS];
    }
    else if (salarioB >= 900 && salarioB < 1500) {
        desINSS = salarioB * Number(v[1]);
        return [Number(v[3] * 100), desINSS];
    }
    else if (salarioB >= 1500 && salarioB < 2500) {
        desINSS = salarioB * Number(v[2]);
        return [Number(v[3] * 100), desINSS];
    }
    else if (salarioB >= 2500) {
        desINSS = salarioB * Number(v[3]);
        return [Number(v[3] * 100), desINSS];
    }
    else {
        return [0, 0];
    }
}
function calculoDescontoINSS(salarioB, valorDescontoINSS) {
    let descontoINSS;
    descontoINSS = salarioB * valorDescontoINSS;
    return [(valorDescontoINSS * 100), descontoINSS];
}
function calculoDescontoFGTS(salarioB, valorDescontoFGTS) {
    let descontoFGTS;
    descontoFGTS = salarioB * valorDescontoFGTS;
    return descontoFGTS;
}
let totalDescontos = (calculoDescontoIR(salarioB, ...descontoIr)[1] + calculoDescontoINSS(salarioB, valorDescontoINSS)[1]);
let salarioLiquido = salarioB - totalDescontos;
console.log("12: Salário com Descontos");
console.log(" --- Salário Bruto: R$ " + salarioB);
console.log("( - ) Desconto IR (" + calculoDescontoIR(salarioB, ...descontoIr)[0] + "%) : R$ " + calculoDescontoIR(salarioB, ...descontoIr)[1]);
console.log("( - ) Desconto INSS (" + calculoDescontoINSS(salarioB, valorDescontoINSS)[0] + "%) : R$ " + calculoDescontoINSS(salarioB, valorDescontoINSS)[1]);
console.log("(   ) Desconto FGTS (" + valorDescontoFGTS * 100 + "%) : R$ " + calculoDescontoFGTS(salarioB, valorDescontoFGTS));
console.log("( = ) Total de descontos: R$ " + totalDescontos);
console.log("( = ) Salário Líquido: R$ " + salarioLiquido);
// 13 - Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido
function diasDaSemana(dia) {
    if (dia === 1) {
        return " 1 - Domingo.";
    }
    else if (dia === 2) {
        return " 2 - Segunda-feira.";
    }
    else if (dia === 3) {
        return " 3 - Terça-feira.";
    }
    else if (dia === 4) {
        return " 4 - Quarta-feira.";
    }
    else if (dia === 5) {
        return " 5 - Quinta-feira.";
    }
    else if (dia === 6) {
        return " 6 - Sexta-feira.";
    }
    else if (dia === 7) {
        return " 7 - Sábado.";
    }
    else {
        return " Valor inválido.";
    }
}
console.log("13: Dia da semana: " + diasDaSemana(1));
// 14 - Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
let notaParcial1 = 10;
let notaParcial2 = 9;
function conceitoAluno(notaParcial1, notaParcial2) {
    let media = (notaParcial1 + notaParcial2) / 2;
    if (media >= 0 && media <= 10) {
        if (media > 9 && media <= 10) {
            return ["9.0 e 10.0 ", "     A", " APROVADO"];
        }
        else if (media > 7.5 && media <= 9) {
            return ["7.5 e 9.0 ", "     B", " APROVADO"];
        }
        else if (media > 6 && media <= 7.5) {
            return ["6.0 e 7.5 ", "     C", " APROVADO"];
        }
        else if (media > 4 && media <= 6) {
            return ["4.0 e 6.0 ", "     D", " REPROVADO"];
        }
        else {
            return ["4.0 e zero ", "     E", " REPROVADO"];
        }
    }
    else {
        return ["Nota inválida."];
    }
}
console.log("14: Conceito Aluno: ");
console.log("Média de Aprovamento Conceito");
console.log("Entre " + conceitoAluno(notaParcial1, notaParcial2));
// 15 - Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. 
// Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
// Dicas:
// + Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// + Triângulo Equilátero: três lados iguais;
// + Triângulo Isósceles: quaisquer dois lados iguais;
// + Triângulo Escaleno: três lados diferentes;
let lado1 = 10;
let lado2 = 20;
let lado3 = 40;
console.log("15: ");
function podeSerTriangulo(lado1, lado2, lado3) {
    if (((lado1 + lado2) > lado3) || ((lado2 + lado3) > lado3) || ((lado1 + lado3) > lado3)) {
        console.log("É um triângulo!");
        if ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)) {
            return "Triângulo Equilátero!";
        }
        else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
            return "Triângulo Isósceles!";
        }
        else if ((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)) {
            return "Triângulo Escaleno!";
        }
        else {
            return "Não identificado!";
        }
    }
    else {
        return "Não poder ser um triângulo.";
    }
}
console.log(podeSerTriangulo(lado1, lado2, lado3));
// 16 - Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e 
// fazer as consistências, informando ao usuário nas seguintes situações:
// a - Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
// b - Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
// c - Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
// d - Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;
let aEqua = 5;
let bEqua = 10;
let cEqua = 13;
function calculoRaizes(aEqua, bEqua, cEqua) {
    if (aEqua != 0) {
        let delta = ((Math.pow(bEqua, 2)) - (4 - aEqua * cEqua));
        if (delta < 0) {
            return "Delta negativo! Não possui raízes reais!";
        }
        else if ((delta < 0) && (delta == 0)) {
            let equma = (-bEqua) / 2 * aEqua;
            return `A equação possui apenas uma raiz real! ${equma}`;
        }
        else if (delta > 0) {
            let eqdua1 = (-bEqua + delta) / 2 * aEqua;
            let eqdua2 = (-bEqua - delta) / 2 * aEqua;
            return `A equação possui duas raízes reias! ${eqdua1} e ${eqdua2}`;
        }
        else {
            return "Erro";
        }
    }
    else {
        return "A equação não é do segundo grau!";
    }
}
console.log("16: " + calculoRaizes(aEqua, bEqua, cEqua));
// 17 - Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto
let ano = 1990;
function anoBisexto(ano) {
    if (((ano % 100) != 0) || ((ano % 4) == 0) || ((ano % 400) == 0)) {
        return "O Ano é Bissexto!";
    }
    else {
        return "O Ano não é Bissexto!";
    }
}
console.log("17: " + anoBisexto(ano));
// 18 - Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
let dd = 9;
let mm = 12;
let aaaa = 1990;
function validarData(dd, mm, aaaa) {
    if (((dd > 0) && (dd <= 31)) && ((mm > 0) && (mm <= 12)) && ((aaaa > 0) && (aaaa <= 9999))) {
        return "A data é válida!";
    }
    else {
        return "A data Não é válida!";
    }
}
console.log("18: " + validarData(dd, mm, aaaa));
// 19 - Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
// a - 326 = 3 centenas, 2 dezenas e 6 unidades
// b - 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16
let nInt = 20;
function qunatCentenas(nInt) {
    let centenas = nInt / 100;
    let dezenas = Math.floor(nInt / 100) / 10;
    let unidades = Math.floor(Math.floor(nInt / 100) / 10);
    if (nInt > 0 && nInt <= 1000) {
        return [];
    }
    else {
        return "Insira um numero entre zero (0) ou menor que (1000)";
    }
}
// 20 - Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
// a - A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
// b - A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
// c - A mensagem "Aprovado com Distinção", se a média for igual a 10.
function mediaParcial(nota_par_01, nota_par_02, nota_par_03, aluno) {
    if ((nota_par_01 >= 0 && nota_par_01 <= 10) && (nota_par_02 >= 0 && nota_par_02 <= 10) && (nota_par_03 >= 0 && nota_par_03 <= 10)) {
        let media = (nota_par_01 + nota_par_02 + nota_par_03) / 3;
        if (media >= 7 && media <= 10) {
            if (media == 10) {
                return ["Aluno: " + aluno, " APROVADO COM DISTINÇÃO ", " Méida: " + media.toString()];
            }
            else {
                return ["Aluno: " + aluno, " APROVADO ", " Méida: " + media.toString()];
            }
        }
        else {
            return ["Aluno: " + aluno, " REPROVADO ", " Méida: " + media.toString()];
        }
    }
    else {
        return "Notas invalidas!";
    }
}
console.log("20: " + mediaParcial(10, 8, 9, "Bruno"));
// 21 - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas.
// As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais.
// O programa não deve se preocupar com a quantidade de notas existentes na máquina.
// Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
function caixaEletrinico(valorSaque) {
    let x = 3;
    if (x == 3) {
        return "aqui 1";
    }
    else if (x == 2) {
        return "aqui 2";
    }
    else {
        return "aqui fora";
    }
}
console.log("21: " + caixaEletrinico(10));
// 22 - Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).
function numImparPar(numero) {
    let n = Math.floor(numero) % 2;
    if (n == 1) {
        return "Impar";
    }
    else if (n == 0) {
        return "Par";
    }
    else {
        return "Neutro";
    }
}
console.log("22: " + numImparPar(9));
// 23 - Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.
console.log("23: typeof(), só retorna se é um number, string, etc...");
// 24 - Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. 
// O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// a - par ou ímpar;
// b - positivo ou negativo;
// c - inteiro ou decimal.
function numPositivoNegativo(numero) {
    let n = numero;
    if (n > 0) {
        return "Positivo";
    }
    else if (n < 0) {
        return "Negativo";
    }
    else {
        return "Neutro";
    }
}
function operacaoEspecificado(n1, n2, ope) {
    if (ope == 1) {
        let soma = n1 + n2;
        let numIm = numImparPar(soma);
        let numPn = numPositivoNegativo(soma);
        return [`Operação - soma: ${n1} + ${n2} = ${soma}`, " a. " + numIm, " b. " + numPn];
    }
    else if (ope == 2) {
        let subtracao = n1 - n2;
        let numIm = numImparPar(subtracao);
        let numPn = numPositivoNegativo(subtracao);
        return [`Operação - subtração: ${n1} - ${n2} = ${subtracao}`, " a. " + numIm, " b. " + numPn];
    }
    else if (ope == 3) {
        let multiplicacao = n1 * n2;
        let numIm = numImparPar(multiplicacao);
        let numPn = numPositivoNegativo(multiplicacao);
        return [`Operação - multiplicação: ${n1} - ${n2} = ${multiplicacao}`, " a. " + numIm, " b. " + numPn];
    }
    else if (ope == 4) {
        let divisao = n1 / n2;
        let numIm = numImparPar(divisao);
        let numPn = numPositivoNegativo(divisao);
        return [`Operação - divisão: ${n1} - ${n2} = ${divisao}`, " a. " + numIm, " b. " + numPn];
    }
    else {
        return ["operação errada."];
    }
}
console.log("24: " + operacaoEspecificado(100, 90, 2));
// 25 - Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?"
// O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser 
// classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
function classificacaoCrime(perg1, perg2, perg3, perg4, perg5) {
    let respostas = [perg1, perg2, perg3, perg4, perg5];
    let reSim = 0;
    for (let i = 0; i < respostas.length; i++) {
        let r = respostas[i];
        if (r === "sim") {
            reSim = reSim + 1;
        }
    }
    if (reSim === 1) {
        return "Não é suspeito";
    }
    else if (reSim === 2) {
        return "Suspeito";
    }
    else if (reSim >= 3 && reSim <= 4) {
        return "Cúmpice";
    }
    else if (reSim > 4) {
        return "Assassino";
    }
    else {
        return "Algo deu errado.";
    }
}
console.log("25: " + classificacaoCrime("sim", "não", "sim", "não", "sim"));
// 26 - Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//
// Álcool:
// até 20 litros, desconto de 3% por litro
// acima de 20 litros, desconto de 5% por litro
// Gasolina:
// até 20 litros, desconto de 4% por litro
// acima de 20 litros, desconto de 6% por litro
//
// Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina),
// calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
function calculadoraPosto(litros, tipoCombustivel) {
    let precoGasolina = 2.50;
    let precoAlcool = 1.90;
    if (tipoCombustivel === "A") {
        let valor = precoAlcool * litros;
        if (litros <= 20) {
            let desconto = valor * 0.03;
            return `A - álcool R$: ${valor - desconto}`;
        }
        else {
            let desconto = valor * 0.05;
            return `A - álcool R$: ${valor - desconto}`;
        }
    }
    else if (tipoCombustivel === "G") {
        let valor = precoGasolina * litros;
        if (litros <= 20) {
            let desconto = valor * 0.04;
            return `A - gasolina R$: ${valor - desconto}`;
        }
        else {
            let desconto = valor * 0.06;
            return `A - gasolina R$: ${valor - desconto}`;
        }
    }
    else {
        return "Tipo de combustível errado! Informe novamente.";
    }
}
console.log("26: " + calculadoraPosto(20, "A"));
// 27 - Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//
//                       Até 5 Kg           Acima de 5 Kg
// Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
// Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
//Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total.
// Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
function calculadoraFruteira(morangoKilo, macaKilo) {
    function calculoMaca(macaKilo) {
        if (macaKilo >= 0 && macaKilo < 5) {
            return macaKilo * 1.80;
        }
        else if (macaKilo > 5) {
            return macaKilo * 1.50;
        }
        else {
            return 0;
        }
    }
    function calculoMorango(morangoKilo) {
        if (morangoKilo >= 0 && morangoKilo < 5) {
            return morangoKilo * 2.50;
        }
        else if (morangoKilo >= 5) {
            return morangoKilo * 2.20;
        }
        else {
            return 0;
        }
    }
    if (((macaKilo + morangoKilo) > 8) || (calculoMaca(macaKilo) + calculoMorango(morangoKilo)) > 25) {
        let valorDesconto = (calculoMaca(macaKilo) + calculoMorango(morangoKilo)) * 0.10;
        let valorTotal = (calculoMaca(macaKilo) + calculoMorango(morangoKilo)) - valorDesconto;
        return valorTotal;
    }
    else {
        let valorTotal = calculoMaca(macaKilo) + calculoMorango(morangoKilo);
        return valorTotal;
    }
}
console.log("27: valor a ser pago: R$ " + calculadoraFruteira(5, 3));
// 28 - O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//
// Até 5 Kg           Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
//
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente.
// Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra.
// Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra:
// tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
function hiperMercado(tipoCarne, formaPagamento, quantCarne) {
    function fileDuplo(quantCarne) {
        if (quantCarne >= 0 && quantCarne < 5) {
            return quantCarne * 4.90;
        }
        else if (quantCarne >= 5) {
            return quantCarne * 5.80;
        }
        else {
            return 0;
        }
    }
    function alcantra(quantCarne) {
        if (quantCarne >= 0 && quantCarne < 5) {
            return quantCarne * 5.90;
        }
        else if (quantCarne >= 5) {
            return quantCarne * 6.80;
        }
        else {
            return 0;
        }
    }
    function picanha(quantCarne) {
        if (quantCarne >= 0 && quantCarne < 5) {
            return quantCarne * 6.90;
        }
        else if (quantCarne >= 5) {
            return quantCarne * 7.80;
        }
        else {
            return 0;
        }
    }
    return 0;
}
console.log("28: valor a ser pago: R$ " + hiperMercado("P", "S", 10));
