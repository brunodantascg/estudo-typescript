"use strict";
// Desafio
/*
Criar Objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número)
        e retorna um string
        -> ponto normal ( <= 8 )
        -> fora do horário ( > 8)
*/
console.log(" --- Desafio --- ");
var funcionarios = {
    supervirores: ['Pedro', 'Alberto', 'João'],
    baterPonto: function (horas) {
        if (horas <= 8) {
            return 'ponto normal - (' + horas + ' <= 8 ).';
        }
        return 'fora do horário - (' + horas + ' > 8 ).';
    },
};
console.log("Ponto: " + funcionarios.supervirores);
console.log("Ponto: " + funcionarios.baterPonto(10));
