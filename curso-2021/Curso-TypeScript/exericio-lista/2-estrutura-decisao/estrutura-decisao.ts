console.log("--- Questões da Lista de Estrutura de Decisão ---")

// 1 - Faça um Programa que peça dois números e imprima o maior deles.

function maiorNumero(numero1: number, numero2: number): number {
    if (numero1 > numero2) {
        return numero1
    }
    return numero2
}

console.log("1 - O maior número é: " + maiorNumero(10, 15))

// 2- Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

function valorPositivoNegativo(numero: number): string {
    if( numero > 0) {
        return 'Positivo'
    } else if ( numero < 0 ) {
        return 'Negativo'
    } else {
        return 'Zero é neutro'
    }
}

console.log("2 - O número é: " + valorPositivoNegativo(15))

// 3 - Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

function verificadorLetra(letra: string): string {
    if (letra === 'F' || letra === 'f') {
        return 'F - Feminino'
    } else if (letra === 'M' || letra === 'm') {
        return 'M - Masculino'
    } else {
        return 'Não identificado'
    }
}

console.log("3 - Sexo: " + verificadorLetra('m'))

// 4 - Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function verificadorVogal(vogal: string): string {
    vogal.toUpperCase()
    if (vogal === 'A' || vogal === 'E' || vogal === 'I' || vogal === 'O' || vogal === 'U' ) {
        return 'vogal!'
    }
    return 'consoante!'
}

console.log("4 - A letra é: " + verificadorVogal('m'))

// 5 - Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

function mediaAluno(nota1: number, nota2: number): string {
    let media: number = (nota1 + nota2)/2
    if (media === 10) {
        return 'Aprovado com Distinção.'
    } else if (media >= 7 && media < 10) {
        return 'Aprovado.'
    } else {
        return 'Reprovado.'
    }
}

console.log("5 - " + mediaAluno(10, 10))

// 6 - Faça um Programa que leia três números e mostre o maior e o menor deles.
function maiorTres(num1: number, num2: number, num3: number): number {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}

// 7 - Faça um Programa que leia três números e mostre o maior e o menor deles.
function menorTres(num1: number, num2: number, num3: number): number {
    if (num1 < num2 && num1 < num3) {
        return num1
    } else if (num2 < num1 && num2 < num3) {
        return num2
    } else {
        return num3
    }
}

console.log("6: Maior - " + maiorTres(15,16,17))
console.log("7: Menor - " + menorTres(15,18,17))

// 8 - Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.