//2 FizzBuzz. Напишите программу, которая выводит через console.log все числа 
// от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна 
// выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете 
// – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся
//  и на 3 и на 5

// const filter = function () {

//     for (let i = 0; i <= 100; i++) {
        
        
//         if ( 
//             i % 5 === 0 && i % 3 === 0
//         ) {
//             console.log('FizzBuzz');
//         } else  if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if ( 
//             i % 5 === 0 
//         ) {
//             console.log('Buzz');
//         } else   {
//             console.log(i);
//         }
        
//     }
//     return filter;

// }
// filter();


// 4 \\ Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// let minNumber = function (num1, num2) {

//    minNumber = num1 < num2 ?   num1 :  num2;

//     return minNumber;
// }

// console.log(minNumber(10, -25));



// console.log('строчкa'.charAt(5));

// 6 \\  Напишите функцию countBs, которая принимает строку в качестве аргумента, 
// и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию 
// countChar, которая работает примерно как countBs, только принимает второй параметр — 
// символ, который мы будем искать в строке (вместо того, чтобы просто считать количество 
// символов “B”). Для этого переделайте функцию countBs.


// console.log( countBs("The quick brown fox jumped over the lazy dog") );
// const string = "The quick rown fox jumped over the lazy dog and Boy uilds house";
// let countBs = 0;

// const count = string.includes('b') ? countBs += 1 : console.log('no letter');

// console.log( string.includes('b') );
// console.log( count );

// const countBs = function (string, b) {
//     let countBs = 0;
//     let letter = string.toLowerCase();

//     console.log(letter);

//     for (const element of letter) {
        
    
//         if (element.includes(b)) {
//             countBs += 1;

//         }
//     }

//     return countBs;
// }

// console.log( countBs("The quick brown foxb jumped over bb the lazy dog", 'b') );


//  задача от Ашота plusOne
// написать функцию, которая принимает массив с цифрами,
// получить целое число и прибавить 1,
// результат вернуть в виде массива

// const plusOne = function (numbersArr) {
   
//     const newArray = [];
//     let finalNumber = 0;
//     let finalArray = [];
//     const finishArray = [];

//     for (let i = 0; i < numbersArr.length; i++) {
        
//         let total = 0;
//         let element = 0;
       
//         element = (numbersArr[i]*Math.pow(10, (numbersArr.length - (i+1))));
          
//         newArray.push(element);

//         for (const item of newArray) {
//             total += item;
//          }
               
//         finalNumber = total+1;

//          console.log(finalNumber);
//         console.log(newArray);
//     }
//     finalArray =  `${finalNumber}`.split('');

//     for (const iterator of finalArray) {
//         finishArray.push( Number(iterator));
//     }
 

// return finishArray;
// }

// console.log( plusOne([0]));
// console.log( plusOne([5, 06, -7, -8, 8]));

// ================================================================Annka

// function plusOne(numbersArr) { 
//     if (numbersArr.length === 0) return "Массив пустой"
//     for (const number of numbersArr) { 
//       if (typeof (number) != number) return `Элемент массива ${(number)+1 } : '${numbersArr[number]}' не число`
//     }
    
//      const number = `${Number.parseInt(numbersArr.join('')) + 1}`;
//      return number.split("")
//   }
  
  
//   console.log(plusOne([10, 11, 5, 3]));
//   console.log(plusOne([1, 2, 3]));

// function plusOne(numbersArr) { 
//   if (numbersArr.length === 0) return "Массив пустой"
//   for (const number of numbersArr) { 
//     // if (typeof (number) != number) return `Элемент массива ${(number) + 1} : ${numbersArr[number]} не число`
//   }
  
//    const number = `${Number.parseInt(numbersArr.join('')) + 1}`;
//    return number.split("")
// }


// console.log(plusOne([4, 1, 3, '45', 5]));  // Элемент массива 5 : 5 не число
// console.log(plusOne([ 1, 3, 5]));  //Элемент массива 2 : 3 не число 


// // если убрать строку проверки на тип, то выходит так:
// console.log(plusOne([4, 1, 3, '45', 5]));  // ['4', '1', '3', '4', '5', '6']
// console.log(plusOne([ 1, 3, 5]));  //  ['1', '3', '6'] 

// ============================================

function plusOne(numbersArr) { 
  if (numbersArr.length === 0) return "Массив пустой";
  
  for (let i = 1; i < numbersArr.length; i += 1) { 
    if (typeof(numbersArr[i]) != 'number') { 
       return `Элемент массива ${numbersArr[i]} не число`;
    }

    if (numbersArr[i] < 0) { 
      return `Число ${numbersArr[i]} отрицательное`;
    }
  }

   const number = `${Number.parseInt(numbersArr.join('')) + 1}`;
   return number.split("")
}


console.log(plusOne([11, 123, 2]));