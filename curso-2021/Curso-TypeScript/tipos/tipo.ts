// string
let nome: string = 'João'
// ou
let sobreNome = 'Dantas'
console.log("Nome: " + nome + " " + sobreNome)

// number
let idade: number = 77
console.log("Idade: " + idade)

// boolean
let possuiHobbies = false
console.log("Possui hobbies: " + possuiHobbies)

// tipos explícitos
let minhaIdade // se coloca any (ACEITA TUDO), se declarar o tipo ele só aceitará tipos daquele jeito
minhaIdade = 27
console.log("1 - " + typeof minhaIdade)
minhaIdade = '27'
console.log("2 - " + typeof minhaIdade)

// Tipo Array
let hobbies = ['Praticar esporte', 'Conzinhar']
console.log(hobbies[0])
console.log(typeof hobbies)

// declara tipo explícito para array
let telefoneContatos: number[] = [981227700, 21076565]
console.log(telefoneContatos[0])
console.log(typeof telefoneContatos)

// Tupla = é um array de dados pré-definitos
let endereco: [string, number, number] = ['Rua Rodrigues Alves', 999, 58420100]
console.log(endereco)

// Enum's Estrutura pré-definito
enum Cores {
    cinza, // 0
    verde, // 1
    azul, // 2
    amarelo // 3
}

let minhaCor: Cores = Cores.verde
console.log(minhaCor)

// Any
let carro: any = 'BMW'
carro = {marca: "BMW", ano: 2019, chassi: "zdcw201234328545"}
console.log(carro)

// Tipos em funções

function meuNome(): string {
    return nome
}

console.log("Nome cliente: " + meuNome())

let numero1_teste: number = 199
let numero2_teste: number = 55

function retornaSoma(numero1_teste: number, numero2_teste: number): number {
    return (numero1_teste + numero2_teste)
}

console.log("Soma aleátoria: " + retornaSoma(numero1_teste, numero2_teste))

// parte dois de funções

const teste = function (numero1_teste: number, numero2_teste: number): boolean {
    if ( numero1_teste < numero2_teste ) {
        return true
    }
    return false
}

console.log("Resulado: " + teste(10, 20))

// Objetos

let usuario: {nome: string, idade: number} =  {
    nome: 'Bruno',
    idade: 32
}

console.log('1 - ')
console.log(usuario)

usuario = {nome: 'João', idade: 70}

console.log('2 - ')
console.log(usuario)
