console.log("--- Questões da Lista de Estrutura de Lista ---")

// 1 - Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
console.log("1 -")
const vetor5: number[]  = [10,20,30,40,50]

for (var ia = 0; ia < vetor5.length; ia++) {
    console.log(vetor5[ia])
}

// 2 - Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

console.log("2 -")
const vetor10: number[]  = [10,20,30,40,50,60,70,80,90,100]

console.log("Vetor original: " + vetor10)
console.log("Vetor inverso: " + vetor10.reverse())

// 3 - Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

console.log("3 -")
const notasBi: number[] = [10, 9, 8, 10]
var notas: number = 0
for (var ic = 0; ic < notasBi.length; ic++) {
    console.log("Nota " + (ic+1) + " - " + notasBi[ic])
    var notas = notas + notasBi[ic]
}

console.log("Média: " + notas/4)

// 4 - Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

console.log("4 -")
const vetor10Letra: string[]  = ["a","b","s","e","c","d","i","p","t","q"]
var consoantes: string[] = []

for (var id = 0; id < vetor10Letra.length; id++) {
    let letra: string = vetor10Letra[id]
    
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log();
    } else {
        consoantes.push(letra);
    }
}

console.log(consoantes)

// 5 - Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

let numbers20: number[] = [10,20,30,40,50,60,70,80,90,100,15,25,36,46,56,57,59,58,61,78]
var par: number[] = []
var impar: number[] = []

for (var im = 0; im < numbers20.length; im++) {

    if (numbers20[im] % 2 === 0 ) {
        par.push(numbers20[im]);
    } else {
        impar.push(numbers20[im]);
    }
}

console.log("Pares: " + par)
console.log("Impares: " + impar)

// 7- Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

let alunos10: string[] = ["Carlos", "Augusto", "João", "Roberto", "Alessandro", "Arthur", "Carla", "Júnior", "Urual", "Beatriz"]
let media10: number[] = []

for (var ime = 0; ime < alunos10.length; ime++) {

    let no: number = 0
    for (var ide = 0; ide < 4; ide++) {
        let notas: number = Math.random()
        notas = no + notas
    }


}