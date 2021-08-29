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
var funcionario = {
    supervirores: ['Pedro', 'Alberto', 'João'],
    baterPonto: function (horas) {
        if (horas <= 8) {
            return 'ponto normal - (' + horas + ' <= 8 ).';
        }
        return 'fora do horário - (' + horas + ' > 8 ).';
    },
};
console.log("Ponto: " + funcionario.supervirores);
console.log("Ponto: " + funcionario.baterPonto(10));
