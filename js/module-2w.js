// //  ======== #1 РАННИЙ ВОЗВРАТ 

// function checkAge(age) {
//     if (age>=18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

//   console.log(checkAge(20));
//   console.log(checkAge(18));

// //  ===== #2  ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ (РАННИЙ ВОЗВРАТ)

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
//       if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     }  
      
//     return "Access denied, wrong password!";

//     // Change code above this line
//   }

//  console.log(checkPassword("mangohackzor"));   // возвращает "Access denied, wrong password!"
//  console.log(checkPassword("polyhax"));   // возвращает "Access denied, wrong password!"
//  console.log(checkPassword("jqueryismyjam1"));   // возвращает "Welcome!"


// //  ==== #3 ЗАДАЧА: СКЛАД ТОВАРОВ 3.0

// function checkStorage(available, ordered) {
//     // Change code below this line
     
//     if (ordered === 0) {
//       return "Your order is empty!";

//     } if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } 
//       return "The order is accepted, our manager will contact you";
    
//      // Change code above this line
//   }

// console.log( checkStorage(100, 50));    // возвращает "The order is accepted, our manager will contact you"
// console.log( checkStorage(100, 130));    // возвращает "Your order is too large, not enough goods in stock!"
// console.log( checkStorage(70, 0));    // возвращает "Your order is empty!"
// console.log( checkStorage(200, 20));    // возвращает "The order is accepted, our manager will contact you"
// console.log( checkStorage(200, 250));    // возвращает "Your order is too large, not enough goods in stock!"
// console.log( checkStorage(150, 0));    // возвращает "Your order is empty!"


// //  ==== #4 СОЗДАНИЕ МАССИВА

// const fruits = ["apple", "plum", "pear" , "orange"];


// //  ==== # 5 ДОСТУП К ЭЛЕМЕНТАМ ПО ИНДЕКСУ

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];


// //  ==== #6  ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ЭЛЕМЕНТА

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);


// //  ==== #7 ДЛИНА МАССИВА 

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);


// // ==== #8 ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length-1;
// const lastElement	= fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// //  ==== #9  ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА

// function getExtremeElements(array) {
//     // Change code below this line
  
//     return [array[0],array[array.length-1]];

//     // Change code above this line
//   }
  
// console.log( getExtremeElements([1, 2, 3, 4, 5]));    // возвращает [1, 5]
// console.log( getExtremeElements(["Earth", "Mars", "Venus"]));    // возвращает ["Earth", "Venus"]
// console.log( getExtremeElements(["apple", "peach", "pear", "banana"]));    // возвращает ["apple", "banana"]


// //  ==== #10    МЕТОД СТРОК SPLIT()

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line

//     words = message.split(delimeter);
  
//     // Change code above this line
//     return words;
//   }
// console.log( splitMessage("Mango hurries to the train", " "));  // возвращает ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", ""));    //возвращает ["M", "a", "n", "g", "o"])  
// console.log(splitMessage("best_for_week", "_"));   // возвращает ["best", "for", "week"]))



// //  ==== # 11  ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
 
//  return (message.split(" ").length)*pricePerWord;
 
//     // Change code above this line
//  }

// console.log (calculateEngravingPrice("JavaScript is in my blood", 10));   // возвращает 50
// console.log (calculateEngravingPrice("JavaScript is in my blood", 20));   // возвращает 100
// console.log (calculateEngravingPrice("Web-development is creative work", 40));   // возвращает 160
// console.log (calculateEngravingPrice("Web-development is creative work", 20));   // возвращает 80


// // ==== #12 МЕТОД МАССИВА JOIN()

// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
  
//   string = array.join(delimeter);
  
//     // Change code above this line
//     return string;
//   }

// console.log (makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")); //возвращает "Mango hurries to the train"
// console.log (makeStringFromArray(["M", "a", "n", "g", "o"], ""));                   //возвращает "Mango"
// console.log (makeStringFromArray(["top", "picks", "for", "you"], "_"));             //возвращает "top_picks_for_you"


// //  ==== # 13 ЗАДАЧА: ГЕНЕРАТОР SLUG

// function slugify(title) {
//     // Change code below this line
    

//     const array = title.toLowerCase().split(" ");
   
//     const  slug = array.join("-");
    
    
  
//   return slug;
  
//     // Change code above this line
//   }

// console.log (slugify("Arrays for begginers"));                            // возвращает "arrays-for-begginers"
// console.log (slugify("English for developer"));                           // возвращает "english-for-developer"
// console.log (slugify("Ten secrets of JavaScript"));                       // возвращает "ten-secrets-of-javascript"
// console.log (slugify("How to become a JUNIOR developer in TWO WEEKS"));   // возвращает "how-to-become-a-junior-developer-in-two-weeks"


// //  ==== # 14 МЕТОД SLICE()

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1,fruits.length-1) ;
// const lastThreeEls = fruits.slice(-3) ;


// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// // ==== #15  МЕТОД CONCAT() 

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients) ; // Change this line


// //  ==== # 16   ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ 

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//   const newArray = firstArray.concat(secondArray);
 
//   const maxArray = newArray.length > maxLength ? newArray.slice(0, maxLength): newArray.slice();
    
// return maxArray;
//     // Change code above this line
//   }

// console.log (makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));   // возвращает ["Mango", "Poly", "Ajax"]
// console.log (makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));   // возвращает ["Mango", "Poly", "Houston", "Ajax"]
// console.log (makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));   // возвращает ["Mango", "Ajax", "Chelsea"]
// console.log (makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));   // возвращает ["Earth", "Jupiter"]
// console.log (makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));   // возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log (makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));   // возвращает []


// //  ==== # 17   ЦИКЛ FOR

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i +=1 ) { // Change this line
//   console.log(i);
// }



// //  ==== # 18  ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)

// function calculateTotal(number) {
//     // Change code below this line
//    let total = 0;
//    for (let i = 0; i <= number; i+=1) {
//         total += i;
       
//    }
//     return total;
//      // Change code above this line
//    }

// console.log (calculateTotal(1));      // возвращает 1
// console.log (calculateTotal(3));      // возвращает 6
// console.log (calculateTotal(7));      // возвращает 28
// console.log (calculateTotal(18));      // возвращает 171
// console.log (calculateTotal(24));      // возвращает 300


// //  ==== #19   ИТЕРАЦИЯ ПО МАССИВУ

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i<fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// //  ==== # 20   ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

// for (let i = 0; i < order.length; i+=1) {
//     total += order[i];
    
// }
  
//     // Change code above this line
//     return total;
//   }

// console.log (calculateTotalPrice([12, 85, 37, 4]));              // возвращает 138
// console.log (calculateTotalPrice([164, 48, 291]));               // возвращает 503
// console.log (calculateTotalPrice([412, 371, 94, 63, 176]));      // возвращает 1116
  


// //  ==== #21   ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА

// function findLongestWord(string) {
//     // Change code below this line

// const array = string.split(" ");
//   let longestWord = array[0];

//  for (let i = 0; i < array.length; i+=1) {
     
//      if (array[i].length>longestWord.length) {
//          longestWord = array[i];
//      }

//  }
//   return longestWord;
//     // Change code above this line
//   }

// console.log (findLongestWord("The quick brown fox jumped over the lazy dog"));      // возвращает jumped
// console.log (findLongestWord("Google do a roll"));                                  // возвращает Google
// console.log (findLongestWord("May the force be with you"));                         // возвращает force


// // ==== #22  МЕТОД PUSH()

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line

//     for (let i = min; i <= max; i+=1) {
        
//         numbers.push(i)
        
//     }
  
//     // Change code above this line
//     return numbers;
//   } 

// console.log (createArrayOfNumbers(1, 3));     // возвращает [1, 2, 3]
// console.log (createArrayOfNumbers(14, 17));   // возвращает [14, 15, 16, 17]
// console.log (createArrayOfNumbers(29, 34));   // возвращает [29, 30, 31, 32, 33, 34]


// //  ==== # 23  ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ

// function filterArray(numbers, value) {
//     // Change code below this line
 
//  let newArray = [];
//  for (let i = 0; i < numbers.length; i+=1) {
     
//     if (numbers[i] > value) {
        
//          newArray.push(numbers[i]);
//      };
     
//  }
//  return newArray;
//    // Change code above this line
//  }

// console.log (filterArray([1, 2, 3, 4, 5, 6], 3));        // возвращает [4, 5]
// console.log (filterArray([1, 2, 3, 4, 5], 4));        // возвращает [5]
// console.log (filterArray([1, 2, 3, 4, 5], 5));        // возвращает []
// console.log (filterArray([12, 24, 8, 41, 76], 38));   // возвращает [41, 76]
// console.log (filterArray([12, 24, 8, 41, 76], 20));   // возвращает [24, 41, 76]


// //  ==== #24  МЕТОД INCLUDES()

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log (checkFruit("plum"));   // возвращает true
// console.log (checkFruit("mandarin"));   // возвращает false
// console.log (checkFruit("pear"));   // возвращает true
// console.log (checkFruit("Pear"));   // возвращает false
// console.log (checkFruit("apple"));   // возвращает true


// //  ==== # 25   ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ

// function getCommonElements(array1, array2) {
//   // Change code below this line
// let commonElements =[];

// for (const element of array1) {
//   if (array2.includes(element))  {
//     commonElements.push(element);
//   }
// }

// return commonElements;
//  // Change code above this line
// }

// console.log (getCommonElements([1, 2, 3], [2, 4]));                          // возвращает [2]
// console.log (getCommonElements([1, 2, 3], [2, 1, 17, 19]));                  // возвращает [1, 2]
// console.log (getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));        // возвращает [12, 27, 3]
// console.log (getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));      // возвращает [10, 30, 40]
// console.log (getCommonElements([1, 2, 3], [10, 20, 30]));                    // возвращает []


// //  ==== #26   ЦИКЛ FOR...OF

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let number of order) {
//     total += number;
//   }

//   // Change code above this line
//   return total;
// }



// console.log (calculateTotalPrice([12, 85, 37, 4]));              // возвращает 138
// console.log (calculateTotalPrice([164, 48, 291]));               // возвращает 503
// console.log (calculateTotalPrice([412, 371, 94, 63, 176]));      // возвращает 1116


// //  ===== #27  ЗАЧАДА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log (filterArray([1, 2, 3, 4, 5], 3));        // возвращает [4, 5]
// console.log (filterArray([1, 2, 3, 4, 5], 4));        // возвращает [5]
// console.log (filterArray([1, 2, 3, 4, 5], 5));        // возвращает []
// console.log (filterArray([12, 24, 8, 41, 76], 38));   // возвращает [41, 76]
// console.log (filterArray([12, 24, 8, 41, 76], 20));   // возвращает [24, 41, 76]


// //  ====#28    ОПЕРАТОР %

// // Change code below this line
// // Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log (e);


// //  ==== #29 ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   let evenNumber = [];
//   let fullArray = [];

//   for (let i = start; i <= end; i+=1) {
//    fullArray.push(i);

//   }

//   for (const number of fullArray) {
//     if (number%2===0) {
//       evenNumber.push(number);
//     }  
//   }

//   return evenNumber;
//    // Change code above this line
//  }

// console.log (getEvenNumbers(2, 5));     // возвращает [2, 4]
// console.log (getEvenNumbers(3, 11));    // возвращает [4, 6, 8, 10]
// console.log (getEvenNumbers(6, 12));    // возвращает [6, 8, 10, 12]
// console.log (getEvenNumbers(8, 8));     // возвращает [8]
// console.log (getEvenNumbers(7, 7));     // возвращает []


// //  ==== #30   ОПЕРАТОР BREAK

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);


// //  ==== # 31 ОПЕРАТОР BREAK VS RETURN В ФУНКЦИИ

// function findNumber(start, end, divisor) {
//   // Change code below this line
  

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
    
//   }

  
//   // Change code above this line
// }

// console.log (findNumber(2, 6, 5));    // возвращает 5
// console.log (findNumber(8, 17, 3));   // возвращает 9
// console.log (findNumber(6, 9, 4));    // возвращает 8
// console.log (findNumber(16, 35, 7));  // возвращает 21


// //  ==== #32  ЗАДАЧА: ФУНКЦИЯ INCLUDES() 

// function includes(array, value) {
//   // Change code below this line

//   for (const element of array) {

//     if (element===value) {
//       return true;
//     }
    
//   }
//      return false;

//   // Change code above this line
// }

// console.log (includes([1, 2, 3, 4, 5], 3));                                           // возвращает true
// console.log (includes([1, 2, 3, 4, 5], 17));                                          // возвращает false
// console.log (includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));   // возвращает true
// console.log (includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));    // возвращает false
// console.log (includes(["apple", "plum", "pear", "orange"], "plum"));                  // возвращает true
// console.log (includes(["apple", "plum", "pear", "orange"], "kiwi"));                  // возвращает false