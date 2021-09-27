console.log("--- Módulo 4 - Novos Recursos ECMAScript ---")

// let & Const

let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;

if(!estaFrio){
    let acao = "Colocar o casaco";
    console.log(acao);
} else {
    console.log("Testar. let: " + estaFrio);
}

const cpf: string = "012.500.605-78"

// cpf = "222.313.302-45"

console.log("CPF: " + cpf)

// Let Const #2

function revelar() {

}

// Dois modos de criar uma função
//1 - Atribuir a função a uma constante
const somar = function(a: number, b: number): number{
    return a + b;
}
console.log("1 - Soma: " + somar(2,2))

// 2 - Atribuindo nome a função
function somar2(a1: number, b1: number): number {
    return a1 + b1;
}
console.log("2 - Soma: " + somar2(2,2))

// Arrow Function

const subtrair = (n1: number, n2: number) => n1 - n2

const subtrair2 = (n1: number, n2: number): number => n1 - n2

const subtrair3 = (n1: number, n2: number): number => {
    return n1 - n2
}

console.log("1 - Subtrair: " + subtrair(2,2))
console.log("2 - Subtrair: " + subtrair2(2,2))
console.log("3 - Subtrair: " + subtrair3(2,2))

const saudacao = () => "Olá."

console.log(saudacao())

const falar = (name: string): string => "Olá " + name

console.log(falar("Bruno"))

// Parametros Padrão

function contagemRegressiva(inicio: number = 3): void {
    while(inicio > 0 ){
        inicio--
        console.log(inicio)
    }
}

contagemRegressiva()
contagemRegressiva(5)

// Operador Spread & Rest
const numbers = [1, 10, 99, -5, 68, 59, 990]
console.log("Maior número: " + Math.max(...numbers))

const turmaA: string[] = ["Bruno", "João", "Victor"]
const turmaB: string[] = ["Fernando", "Luis", "Alberto", ...turmaA]

console.log("Turma A: " + turmaA)
console.log("Turma A + Turma B: " + turmaB)


function retornarArray(...args: number[]): number[] {
    return args
}

console.log(retornarArray(10,20,30,40,50))

// Destructuring Array

const caracteristicas = ['Motor Zetec 1.8', 2020]

const [motor, ano1] = caracteristicas
console.log(motor)
console.log(ano1)

// Destructuring Objeto
const item = {
    nome: 'SSD 480GB',
    preco: 200
}

// const nomeItem = item.nome
// const preco = item.preco

const {nome: n, preco: pr} = item
console.log(n)
console.log(pr)