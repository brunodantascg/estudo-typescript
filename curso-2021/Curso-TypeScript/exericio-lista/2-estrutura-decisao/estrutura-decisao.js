"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
    var media = (nota1 + nota2) / 2;
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
    var salarioReajuste;
    var variavel;
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
var salarioBase = 1500;
var s = salarioReajuste(salarioBase)[0];
var p = salarioReajuste(salarioBase)[1];
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
    var salarioBruto = horas * valorHora;
    return salarioBruto;
}
var salarioB = salarioBrutoCalculoComHoras(220, 31.82);
var descontoIr = [0.0, 0.05, 0.10, 0.20];
var valorDescontoINSS = 0.10;
var valorDescontoFGTS = 0.11;
function calculoDescontoIR(salarioB) {
    var descontoIr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        descontoIr[_i - 1] = arguments[_i];
    }
    var v = descontoIr;
    var desINSS;
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
    var descontoINSS;
    descontoINSS = salarioB * valorDescontoINSS;
    return [(valorDescontoINSS * 100), descontoINSS];
}
function calculoDescontoFGTS(salarioB, valorDescontoFGTS) {
    var descontoFGTS;
    descontoFGTS = salarioB * valorDescontoFGTS;
    return descontoFGTS;
}
var totalDescontos = (calculoDescontoIR.apply(void 0, __spreadArray([salarioB], descontoIr))[1] + calculoDescontoINSS(salarioB, valorDescontoINSS)[1]);
var salarioLiquido = salarioB - totalDescontos;
console.log("12: Salário com Descontos");
console.log(" --- Salário Bruto: R$ " + salarioB);
console.log("( - ) Desconto IR (" + calculoDescontoIR.apply(void 0, __spreadArray([salarioB], descontoIr))[0] + "%) : R$ " + calculoDescontoIR.apply(void 0, __spreadArray([salarioB], descontoIr))[1]);
console.log("( - ) Desconto INSS (" + calculoDescontoINSS(salarioB, valorDescontoINSS)[0] + "%) : R$ " + calculoDescontoINSS(salarioB, valorDescontoINSS)[1]);
console.log("(   ) Desconto FGTS (" + valorDescontoFGTS * 100 + "%) : R$ " + calculoDescontoFGTS(salarioB, valorDescontoFGTS));
console.log("( = ) Total de descontos: R$ " + totalDescontos);
console.log("( = ) Salário Líquido: R$ " + salarioLiquido);
