//Variant 8
//Напишите код, который определяет сумму и произведение значений массива

//(Input: [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9], 
//Output: Сумма : 45, Произведение : 362880)

const A = [1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9]
let sum = 0;
let proi = 1;

A.forEach((data) => { sum = sum + data; proi = proi*data})

console.log('Сумма : ' + sum + ' Произведение : ' + proi);

//made by: Prokhor Prokopev