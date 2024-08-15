//1 - Escreva uma função que receba uma lista a de dimensão 30 composta apenas por números inteiros. A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.

// Exemplos de saída: ⁠A lista recebida possui x elementos pares e y elementos ímpares.
// const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

// function contarParImpar(a){
//     let par = 0;
//     let impar = 0

//     for (let i = 0; i < lista.length; i++){
//         if (a[i] % 2 === 0){
//             par++;
//         }else{
//             impar++;
//         }

//     }
//     return `⁠A lista recebida possui ${par} elementos pares e ${impar} elementos ímpares`;
// }
// console.log(contarParImpar(lista));

// Escreva uma função que recebe uma lista b de tamanho 10, composta por números inteiros.⁠
// Retorne o total de elementos ímpares existentes na matriz e também o percentual do valor total de números ímpares em relação à quantidade total de elementos armazenados na matriz.

// Retorne o seguinte texto: "O total de valores ímpares é x e corresponde a y% da lista"

const lista2 = [1,2,3,4,5,6,7,8,12,10,50,27,33,84];

function contarImparPercentual(b){
    let impar2 = 0;
    
    for (let i = 0; i < b.length; i++){
        if (b[i] % 2 !== 0){
            impar2++
        }
    }
    
    const taxa = (impar2 /b.length)*100;

    return `O total de valores ímpares é ${impar2} e corresponde a ${taxa}% da lista`
    
}
console.log(contarImparPercentual(lista2))

// Escreva uma função que receba como parâmetro duas listas a e b, cada uma com dez elementos. ⁠A função deve realizar a validação do tamanho da lista. Caso sejam maiores ou menores que 10, retorne: "Lista fora dos padrões necessários".

// A lista a deve ser composta por valores divisíveis por 2 e 3, enquanto a lista b deve ser composta apenar por valores múltiplos de 5. ⁠A composição das listas deve ser validada pela função. Caso a composição não esteja correta, retorne: "Valores não permitidos encontrados".

let listA = [1,2,3,4,5,6,7,8,9,10];
let listB = [1,2,3,4,5,6,7,8,9,10];

function duasListas(a, b){
    if( a.length !== 10 || b.length !== 10){
        return "Lista fora dos padrões necessários"
    }
    for(let i = 0; i < 10; i++){
        if ((a[i] % 2 === 0 && a[i] %3 === 0) || (b[i] % 5 === 0)){
            return 'Lista válida!'
        }
    }
    return "Valores não permitidos dddddd encontrados"
}
console.log(duasListas(listA, listB))