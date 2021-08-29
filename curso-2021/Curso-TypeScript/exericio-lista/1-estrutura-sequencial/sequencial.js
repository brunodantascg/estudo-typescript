"use strict";
console.log(" --- Questões da Lista de Estrutura Sequencial ---");
// 1 - Faça um Programa que mostre a mensagem "Alo mundo" na tela.
var hello = "1 - Hello Word.";
console.log(hello);
// 2 - Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
var numero = 10;
var frase = "2 - O número informado foi: ";
console.log(frase + numero);
// 3 - Faça um Programa que peça dois números e imprima a soma.
var num1 = 3;
var num2 = 4;
var soma = num1 + num2;
console.log("3 - Soma de " + num1 + " + " + num2 + " = " + soma);
// 4 - Faça um Programa que peça as 4 notas bimestrais e mostre a média.
var nota1 = 7.5;
var nota2 = 7;
var nota3 = 8;
var nota4 = 9;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("4 - Média: " + media);
// 5 - Faça um Programa que converta metros para centímetros.
var metros = 1;
var converte = 1 * 100;
console.log("5 - " + metros + " metro equivale a " + converte + " centímetros.");
// 6 - Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
var cir = 9;
var pi = 3.142;
var raio = cir / 2 * pi;
console.log("6 - Raio " + raio);
// 7 - Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
var lado = 9;
var areaQuadrado = lado * lado;
console.log("7 - Área do quadrado " + areaQuadrado);
// 8 - Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
var ganhahora = 25.9;
var horasTrabalhadas = 220;
var salario = ganhahora * horasTrabalhadas;
console.log("8 - Salário: " + salario);
// 9 - Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).
var fahrenheit = 100;
var celsius = 5 * ((fahrenheit - 32) / 9);
console.log("9 - Temperatura fahrenheit " + fahrenheit + " é equivalente a " + celsius + " celsius.");
// 10 - Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
var celsius_two = 35;
var fahrenheit_two = 1.8 * celsius + 32;
console.log("10 - A conversão é igural a: " + fahrenheit_two);
// 11 - Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// a - o produto do dobro do primeiro com metade do segundo.
// b - a soma do triplo do primeiro com o terceiro.
// c - o terceiro elevado ao cubo.
var numero1 = 9;
var numero2 = 19;
var numero3 = 81;
var a_produto = (2 * numero1) * (numero2 / 2);
var b_soma = (3 * numero1) + numero3;
var c_cubo = Math.pow(numero3, 3);
console.log("11 - a " + a_produto);
console.log("11 - b " + b_soma);
console.log("11 - c " + c_cubo);
// 12 - Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
var altura = 1.79;
var imc = (72.7 * altura) - 58;
console.log("12 - Peso ideal: " + imc);
// 13 - Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7
var altura_two = 1.79;
var imcHomem = (72.7 * altura_two) - 58;
var imcMulher = (62.1 * altura_two) - 44.7;
console.log("12 - Peso ideal Homem: " + imcHomem);
console.log("12 - Peso ideal Mulher: " + imcMulher);
// 14 - João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
var pesoEstabelecido = 50;
var multa = 4;
var peso = 104;
var excesso = peso - pesoEstabelecido;
var valorMulta = excesso * multa;
console.log("13 - Valor da multa: R$", valorMulta);
// 15 - Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// a - salário bruto.
// b - quanto pagou ao INSS.
// c - quanto pagou ao sindicato.
// d - o salário líquido.
// e - calcule os descontos e o salário líquido, conforme a tabela abaixo:
// ganhahora - horasTrabalhadas - salario (são carregadas da questão 8)
var salarioBruto = salario;
var inss = salarioBruto * 0.08;
var ir = salarioBruto * 0.11;
var sin = salarioBruto * 0.05;
var desconto = inss + ir + sin;
console.log("15 - Detalhe Salário: ");
console.log("+ Salário Bruto: R$ " + salarioBruto);
console.log("- IR: R$ " + ir);
console.log("- INSS: R$ " + inss);
console.log("- Sindicato: R$ " + sin);
console.log("= Salário Liquido: R$ " + (salarioBruto - desconto));
// 16 - Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
var area = 35;
var litros = area / 3;
var latas = litros / 18;
var custo = 18 * latas;
console.log("16 - Program Loja de Tintas: ");
console.log("Quantidade de Litros: " + litros);
console.log("Quantidade de Latas: " + latas);
console.log("Custo R$: " + custo);
// 17 - Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
var areaRe = 160;
var litrosRe = areaRe / 6;
var latasRe = litrosRe / 18;
var custoLatasRe = 18 * latasRe;
// const custtoGalaoesRe: number = 
console.log("17 - Program Loja de Tintas: ");
console.log("Quantidade de Litros: ", litrosRe);
console.log("Quantidade de Latas: ", latasRe);
console.log("Custo R$: ", custoLatasRe);
// 18 - Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
console.log("18 ----");
