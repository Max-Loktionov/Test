// == task 1 ==  Посчитать общую сумму 

// const cart = [54, 28, 36, 105, 150] 
// // 2 сделать переменную total до цикла
// let total = 0;

// вариант 1

// // 1 перебрать массив
// for (let i = 0; i< cart.length; i+=1) {
// console.log(cart[i]);
//     // 3 каждый элемент приплюсовать к total

//  total += cart[i];
// }
// console.log('Сумма: ', total);

// вариант 2 уменьшает кол-во кода (можно использовать, если не нужно доступ к итерациям)

// for(const value of cart) {
//     total+= value;
// }
// console.log('Сумма: ', total);


// == task 1.2 посчитать общую сумму, но с добавлением процента

// for (let i =0; i<cart.length; i+=1) {
//     total = Math.round(cart[i]*1.2);
// }
// console.log('Сумма: ', total)

// task 2 посчитать сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 111, 100];

// // 1 variable total
// let total = 0;

// вариант 1 for
// // 2 перебрать массив
// for (let i = 0; i < numbers.length ; i+= 1) {
// const number = numbers[i];

//  console.log(numbers[i]);
//     // 3 на каждой итерации проверить элемент на чётность
//     if (number % 2 === 0) {
//         console.log ('Чётное!')
//         total += number;
//     }
// }
// console.log('Сумма: ', total);

// вариант 2 for of
// for (number of numbers) {

//     if (number % 2 === 0) {
//                 console.log ('Чётное!')
//                 total += number;
//             }

// }
// console.log ('About: ',total);



// == task 3 ==  поиск логина

// const logins = ['man4Dog', 'kiwinub', 'polyIscute', 'ajaxer'];
// const loginToFind = 'polyIscute';


// вариант 1 
// let message = `Пользователь ${loginToFind} не найден`;
// for (let i = 0; i< logins.length; i+= 1) {
//     const login = logins[i];

//     console.log('Login: ', login);
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден` ; 
//         break;
//      }
// }
// console.log(message);

// вариант 2 for of 

// let message = `Пользователь ${loginToFind} не найден`;
// for (login of logins) {
//     console.log('Login: ', login);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден` ; 
//         break;
//     }   
// }
// console.log(message);

//  вариант 3 includes  --результатом будет булль

// console.log(logins.includes(loginToFind)); 

// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден`
// : `Пользователь ${loginToFind} не найден`;

// console.log(message);


//  == task 4 ==  поиск самого маленького числа в массиве

// const numbers = [51, 18, 13, 24, 7, 0, 85, 19, 6];
// let smalliestNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number);

//     if(number<smalliestNumber) {
//         smalliestNumber = number;
//     }
// }
// console.log('smalliest: ', smalliestNumber);


//  == task 5 == объединить всё в одну строку, отрезать ненужное
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']; 
// let string = ''; 

// variant 1 (for of)

// for (const friend of friends) {
//     string += friend + ',';
// }

// string = string.slice(0, string.length-1);
// console.log(string);

// variant 2 "join ()"  - в скобках указывается разделитель, с помощью кот будут разделяться выведенные в строку элементы

// const string = friends.join(', ');
// console.log(friends);
// console.log(string);


// task 6 заменить регистр каждого символа в строке на противоположный
// например на входе строка "JavaScript", output: "jAVAsCRIPT"

// const string = "JavaScript";
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // variant 1    "for - of   if- else"

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Эта буква в нижнем регистре! - ', letter);
//     //     invertedString += letter.toUpperCase();

//     // } else {
//     //     console.log('Эта буква в верхнем регистре!! -', letter);
//     //     invertedString += letter.toLowerCase();
//     // } 


//     // variant 2 " for of   turn"

//     invertedString += 
//         letter === letter.toLowerCase() 
//             ? letter.toUpperCase() 
//             : letter.toLowerCase();
// }
// console.log(invertedString);


// task 7 делаем slug в URL из названия статьи 
    //  заголовок статьи состоит только из букв и пробелов
        //  - нормализируем строку (toLowerCase)
        //  - разбиваем по словам (.split(' ')) в массив
        //  - сшиваем из массива в строку с разделителем .join('-')
    //  = должно получиться top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log('slug:',slug);

// // если не нужны промежуточные результаты, для упрощения можно записать:
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log( 'slug1:', slug1);


// task 8 посчитать сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0; 


// variant 1  сделать два цикла и каждое значение приплюсовать к total
// for (let i =0; i< array1.length; i += 1) {
//     total += array1[i];
// }

// for (let i =0; i< array2.length; i += 1) {
//     total += array2[i];
// }
// console.log( 'total:', total) 

// // variant 2  сложить два массива ".concat"  "for of"
// const numbers = array1.concat(array2);
// console.log(numbers); 
// for (const number of numbers) {
// total += number; 
// }
// console.log("total: ", total);

// task 9  работаем с коллекцией карточек в Trello
    // метод splice
    // удалить
    // добавить
    // обновить

//     const cards = [
//         'Карточка-1',
//         'Карточка-2',
//         'Карточка-3',
//         'Карточка-4',
//         'Карточка-5',
//     ]; 
// console.table(cards);
    // удаление по индексу, метод indexOf() -деструктивный метод, физически удаляет элемент из массива,
         //  =>вызывает массив вырезанных элементов

    // const cardToRemove = 'Карточка-3'; 
    // const index = cards.indexOf(cardToRemove);
    // console.log(index);

    // cards.splice(index,1);
    // console.table(cards);

    // *
    // добавление по индексу 

    // const cardToInsert = 'Карточка-6';
    // const index = 3;
    // cards.splice(1,0, 5, 10, 20);
    // cards.splice(index,0,cardToInsert);

    // console.table(cards); 

    // *
    // обновление (по индексу)

    // const cardToUpdate = 'Карточка-4';
    // const index = cards.indexOf(cardToUpdate);
    // console.log(index);

    // cards.splice(index,1, 'Обновлённая карточка-4');
    // console.table(cards); 


// task example   concat
    // const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]  

    

            // FUNCTION второе видео Репеты

// task 10  посчитать сумму  

// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции: ', items);
//     let total = 0; 

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }; 

// const r1 = calculateTotalPrice([1, 2, 3]);

// console.log(`Общая сумма покупок ${r1}`);
// console.log(calculateTotalPrice([10, 20, 30]));


// task 11  функция  logItems(items) для перебора и логирования массива

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', "наушники", "часы"]);


// task 12 функция поиска логина

// const logins = ['m4ngoDoge', 'kiwiDUB', 'polyiscute', 'aj4xn3k4'];
                // const loginToFind = 'aj4xn3k4';

                // const message = logins.includes(loginToFind)
                //     ? `Пользователь ${loginToFind} найден.`
                //     : `Пользователь ${loginToFind} не найден.`;

                // console.log(message);
// // variant 1  "for of"
// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocedr'));
// console.log(findLogin(logins, 'kiwiDUB')); 

// // variant 2 "тернарный оператор"
// const findLogin = function (allLogins, loginToFind) {
//     return  allLogins.includes(loginToFind)
//             ? `Пользователь ${loginToFind} найден.`
//             : `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'avocedr'));
// console.log(findLogin(logins, 'kiwiDUB')); 


// task 13 поиск самого маленького числа в массиве

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smalliestNumber = numbers[0];
//                 for (const number of numbers) { 
//                     if (number < smalliestNumber) {
//                         smalliestNumber = number;
//                     }
//                 }
// console.log('smalliestNumber: ', smalliestNumber);

// const findSmallestNumber = function (numbers) {
//     let smalliestNumber = numbers[0];

//     for (const number of numbers) { 
//         if (number < smalliestNumber) {
//             smalliestNumber = number;
//         }
//     }

//     return smalliestNumber;
// }

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));


// task 14 функция, которая заменяет регистр

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     console.log(letters);

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();

//         }

//     return invertedString;
// };

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));


// task 15 slug 
// task 7 делаем slug в URL из названия статьи 
    //  заголовок статьи состоит только из букв и пробелов
        //  - нормализируем строку (toLowerCase)
        //  - разбиваем по словам (.split(' ')) в массив
        //  - сшиваем из массива в строку с разделителем .join('-')
    //  = должно получиться top-10-benefits-of-react-framework


// const slugify = function (string) {

//   //================================================== 
//     // const normalizedTitle = string.toLowerCase();
//     // const words = normalizedTitle.split(' ');
//     // const slug = words.join('-');
// //   ====================================================

//     return string.toLowerCase( ).split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Technical writting tips for non-native English speakers around the world'));


// task 16 Псевдомассив arguments и Array.from  и ...

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments)

//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);



        // собирает все  аргументы и образует массив
// const fn = function (...args) { 
  
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);


            // собирает указанные аргументы, а остальные в массив
// const fn = function (a, b, c, ...args) { 
//   console.log(`${a} ${b} ${c}`);
//     console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// task 16.1  напиши функцию для сложения произвольного количества аргументов (чисел)

// const add = function (...args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// task 16.2  function = filterNumbers

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args); 
//     const uniqueElements = [];

// for (const element of array) {
//     if (args.includes(element)) {
//         console.log(`${element} есть везде!`)
//         uniqueElements.push(element);
//     };
// }
//     return uniqueElements;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));



    // =============автопроверка=============

    // *task 1 =====проверка возраста===========

    // function checkAge(age) {
    //     if (age >= 18) { // Change this line
    //       return "You are an adult";
    //     }
      
    //     return "You are a minor";
    //   }
    //   console.log(checkAge); 


    //  *task 2 =============проверка пароля (ранний возврат)===========

    // function checkPassword(password) {
    //     const ADMIN_PASSWORD = "jqueryismyjam";
    //     // Change code below this line
      
    //     if (password === ADMIN_PASSWORD) {
    //       return "Welcome!";
    //     } 
    //       return "Access denied, wrong password!";  
    //     // Change code above this line
    //   }
    //   console.log(checkPassword); 


    // *task 3 ======СКЛАД ТОВАРОВ 3.0===========
    
        // function checkStorage(available, ordered) {
        //     // Change code below this line
            
          
        //     if (ordered === 0) {
        //       return "Your order is empty!";
        //     } 
        //        if (ordered > available) {
        //            return "Your order is too large, not enough goods in stock!";
        //     } 
        //       return "The order is accepted, our manager will contact you";
           
        //      // Change code above this line
        //   }
  //   console.log(checkStorage(10,0)); 

       
        // *task 4   СОЗДАНИЕ МАССИВА 
// Массив используется для хранения упорядоченной коллекции элементов. 
// Он объявляется открывающей и закрывающей квадратной скобками [] - литералом массива. 
// Внутри скобок каждый элемент массива разделяется запятой.

// Change code below this line

// const fruits = ["apple", "plum", "pear", "orange",];

// console.log(fruits[0]);


// *task 5    ДОСТУП К ЭЛЕМЕНТАМ ПО ИНДЕКСУ

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(lastElement);


// *task 6  ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ЭЛЕМЕНТА

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits[1] = "peach";
// fruits[3] = "banana";
// console.table(fruits);


// *task 7    ДЛИНА МАССИВА 

// Длина массива, то есть число его элементов, хранится в свойстве length.
//  Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов. 

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength); 


// *task 8    ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА 

// let fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];


// console.log(lastElement); 


// *task 9  =======ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА ==========

// const getExtremeElements = function (array) {
//     // Change code below this line

//     const lastElement = [array[array.length-1]];
//     const extremeElements = [array[0]].concat(lastElement);

//     return extremeElements;

//   // Change code above this line
// }
  
  
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// *task 10    =======МЕТОД СТРОК SPLIT()==========
// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала
//  в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line

//     words = message.split(delimeter);
  
//     // Change code above this line
//     return words;
//   }
  
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_")); 


// *task 11   ===========ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ==========  
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, 
// в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, 
// состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
// //  const calcWord = message.split(' ').length;

//  const engravingPrice = (message.split(' ').length) * pricePerWord;

//  return engravingPrice;

//     // Change code above this line
//  }

//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  console.log(calculateEngravingPrice("JavaScript is in my blood jklo poytre", 20));


// *task 12    =============МЕТОД МАССИВА JOIN()==========
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной 
// string результат  соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
  
//   string = array.join(delimeter);
  
//     // Change code above this line
//     return string;
//   }

//   console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
//   console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
//   console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); 


// *task 13  =========ЗАДАЧА: ГЕНЕРАТОР SLUG=======

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//     // Change code below this line
  
//     // const titleInLowerCase = title.toLowerCase();
//     // const splitTitle = titleInLowerCase.split(' ');
//     const slugTitle = title.toLowerCase().split(' ').join('-');


// //   console.log(titleInLowerCase);
// //   console.log(slugTitle);

//   return slugTitle;
  
//     // Change code above this line
//   }

//   console.log( slugify("Arrays for begginers") );
//   console.log( slugify("English for developer") );
//   console.log( slugify("How to become a JUNIOR developer in TWO WEEKS") ); 



// *task 14   ===========МЕТОД SLICE()=========
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов 

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3, fruits[-1]) ;


// console.log( firstTwoEls );
// console.log( nonExtremeEls );
// console.log( lastThreeEls );

// *task 15 =======МЕТОД CONCAT()=======
// Дополни код так, чтобы в переменной allClients получился массив 
// всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients) ; // Change this line

// console.log(allClients); 


// *task 16 ==========ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ===========
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива
//  со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально 
// допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной
//  maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     const newArray = firstArray.concat(secondArray).slice(0, maxLength);

//     return (newArray);
//     // Change code above this line
//   }

//   console.log( makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) );
//   console.log( makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) );
//   console.log( makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) );
//   console.log( makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) );



//  *task 17  ============ЦИКЛ FOR==========
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// } 


// *task 18  ======ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)======
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает 
// сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//     // Change code below this line
//    let total = 0;
//    for (let i = 0; i <= number; i+=1) {
//      total += i;   
   
       
//    }
//    return total;
//      // Change code above this line
//    }

//    console.log( calculateTotal(1) );
//    console.log( calculateTotal(7) );
//    console.log( calculateTotal(24) );


// *task 19  ========ИТЕРАЦИЯ ПО МАССИВУ============
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0;  i < fruits.length; i += 1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// *task 20  ============ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ========
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, 
// и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, 
// которая возвращается, как результат работы функции. 

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (const item of order) {
//         total += item;
//     }

//     // Change code above this line
//     return total;
//   }
  
//   console.log( calculateTotalPrice([12, 85, 37, 4]) );
//   console.log( calculateTotalPrice([164, 48, 291]) );
//   console.log( calculateTotalPrice([412, 371, 94, 63, 176]) ); 


// *task 21  ==============ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА=====
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только
//  из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//     // Change code below this line

//     const arrayWord = string.split(' ');
    
//     let longestWord = arrayWord[0];
//     let indexLongestWord = 0;

   
//     for (let i = 0; i < arrayWord.length; i += 1 ) {

//     //   console.log(array[i], array[i].length);

//         if (arrayWord[i].length > longestWord.length) {
//             longestWord = arrayWord[i];
//         //   continue;
//         }

//         // longestWord = arrayWord[i].length;
//         // indexLongestWord = i;

//         // console.log('longest:',indexLongestWord);
//     };
    
//    console.log(arrayWord);
//   console.log('longestWord',longestWord);

//   return longestWord;

//     // Change code above this line
//   }

//   console.log( findLongestWord("The quick brown fox jumped over the lazy dog") );
  
//   console.log( findLongestWord("May the force be with you") );


//   function findLongestWord(string) {
//     // Change code below this line
//       const array = string.split(' ');  
//       let longestWord = (array[0]).length;
//       let indexLongestWord = 0;
   
//       for (let i = 0; i < array.length; i += 1 ) {
  
//       //   console.log(array[i], array[i].length);
  
//           if (array[i].length <= longestWord) {
            
//             continue;
//           }
  
//           longestWord = array[i].length;
//           indexLongestWord = i;
  
//           console.log('longest:',indexLongestWord);
         
//       };
      
//     return array[indexLongestWord];
  
  
//     // Change code above this line
//   }
  
//   console.log( findLongestWord("The quick brown fox jumped over the lazy dog") );


// *task 22    ============МЕТОД PUSH()===============
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех
//  целых чисел от значения min до max. 

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//       numbers.push( i);
//   }
//     // Change code above this line
//     return numbers;
//   }

//   console.log( createArrayOfNumbers(14, 17) );
//   console.log( createArrayOfNumbers(29, 34) );


// *task 23 ============ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ=======
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел 
// (параметр numbers) и возвращает новый массив, в котором будут только те элементы
//  массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
//     // Change code below this line
 
//     const newArray = [];

//     for (let number of numbers) {
//         if (number > value) {
//            newArray.push(number);
//         }
//     }
 
//  return newArray;

//    // Change code above this line
//  }


// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 38));



// *task 24 ===========МЕТОД INCLUDES()=======
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), 
// и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false. 

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit); // Change this line
//   }
  
//   console.log( checkFruit("plum") );
//   console.log( checkFruit("mandarin") );



// *task 25 ========ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ======
// Напиши функцию getCommonElements(array1, array2) которая получает два
//  массива произвольной длины в параметры array1 и array2, и возвращает новый массив, 
// состоящий из тех элементов, которые присутствуют в обоих исходных массивах. 

// const getCommonElements = function (array1, array2) {
//     // Change code below this line
//     const commonElements = [];
  
//     for (const element of array1) {
//         if (array2.includes(element)) {
//             commonElements.push(element);
//         }
//     }
//         return commonElements;
//    // Change code above this line
//   }

//   console.log( getCommonElements([1, 2, 3, 4, 5], [10, 15, 2, 3, 8]) );
//   console.log( getCommonElements([1, 2, 3], [2, 4]) );


// *task 26 ===========ЦИКЛ FOR...OF=========
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (const item of order) {
//         total += item;
//     }
 
//     // Change code above this line
//     return total;
//   }
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));


// *task 27 ==========ЗАЧАДА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0=====
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {
//     // Change code below this line

//     const filteredNumbers = [];

//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//           }
//     }
  
//     return filteredNumbers;
    
//     // Change code above this line
//   }

//   console.log(filterArray([12, 24, 8, 41, 76], 38));
  

// *task 28 =======ОПЕРАТОР %==========
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
  
// Change code below this line
// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;


// *task 29 ===========ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА======= 
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив
//  всех чётных чисел от start до end. Чётным считается число которое 
// делится на 2 без остатка (10 % 2 === 0). 

// function getEvenNumbers(start, end) {
//     // Change code below this line
//         const evenNumbers = [];

//         for (let i = start; i <= end; i++) {
            
//             if (i % 2 === 0) {
//                evenNumbers.push(i);
//             }
//         }
        
//         return evenNumbers;
 
//      // Change code above this line
//    }

//    console.log( getEvenNumbers(2, 5) );
//    console.log( getEvenNumbers(7, 7) );
//    console.log( getEvenNumbers(7, 42) );



// *task 30 ======ОПЕРАТОР BREAK=========
// Дополни код так, чтобы в переменную number записывалось первое число 
// от start до end, которое делится на 5 без остатка. 

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


// *task 31 =======ОПЕРАТОР BREAK VS RETURN В ФУНКЦИИ====
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number 

// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         // number = i;
//         // break;
//         return i;
//       }
//     }
  
//     return number;
//     // Change code above this line
//   }
  
//   console.log( findNumber(2, 6, 5) );
//   console.log( findNumber(16, 35, 7) );



// *task 32 ======ЗАДАЧА: ФУНКЦИЯ INCLUDES()=======
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод 
// массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, 
// возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать 
// метод массив.includes(значение).

// function includes(array, value) {
//     // Change code below this line

//     const rot =false;
  
//     for (const include of array) {
          
//       if(include === value) {
//         return true;
//     } else {
//         // console.log(false);
//     }
//       }
//       return rot;   
//     // Change code above this line
//   }

//   console.log( includes([1, 2, 3, 4, 5], 3) );
//   console.log( includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") );
//   console.log( includes([1, 2, 3, 4, 5], 17) );