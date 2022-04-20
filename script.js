/*Function map com this  */
const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}


function mapComThis(arr, thisArgs){
    return arr.map(function(item){
       return item*this.value;
    }, thisArgs)
}
const nuns = [1, 2];
console.log('This -> maçã', mapComThis(nuns, maca));
console.log('This -> laranja', mapComThis(nuns, laranja));

/*Function map sem this*/

function mapSemThis(arr){
    return arr.map(function(item){
        return item*2;
    })
}
const nums = [1, 2, 3, 5, 10];
console.log('function map sem this', mapSemThis(nums));
/*function filter */
function numerosPares(arr){
    return arr.filter(callback);
}
function callback(item){
    return item % 2 === 0;
}
const pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('numeros pares com filter', numerosPares(pares));

/* function com reduce */
function somaNum(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    });
}
const arr = [1, 2];
console.log('soma com reduce', somaNum(arr));

/*exercicio com reduce */

const list =[
    {
        name: 'toalha',
        preco: 20,
    },
    {
        name: 'carne',
        preco: 30,
    },
    {
        name: 'arroz',
        preco: 20,
    }
];
const disponivel = 100;
function saldoDiponivel(disponivel, list){
    return list.reduce(function(prev, corrent){
        return prev - corrent.preco;
    }, disponivel);
};
console.log(saldoDiponivel(disponivel, list));
