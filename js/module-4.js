// function greet() {
//     console.log(`Добро пожаловать .`);
//   }
  
//   // Функция высшего порядка
//   function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback();
//   }
  
//   registerGuest("Манго", greet);





//  ==== #1 ФУНКЦИЯ КАК ЗНАЧЕНИЕ

// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza,
//  а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line

// const pointer = makePizza;

//  const result = makePizza();
   
//  console.log(result);
// console.log(pointer);


//  ==== #2 КОЛБЭК-ФУНКЦИИ

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию
//  и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать 
// аргументом имя готовой доставляемой пиццы.



// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return  callback(pizzaName);
    
//   };

//   console.log(makeMessage('Jamaica', deliverPizza));
//   console.log (makeMessage("Royal Grand", makePizza));     // возвращает строку "Pizza Royal Grand is being prepared, please wait..."
//   console.log (makeMessage("Ultracheese", deliverPizza));  // возвращает строку "Delivering Ultracheese pizza."



//  ==== #3 ИНЛАЙН-КОЛБЭКИ

// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн
//  колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
//   });
  


//  ==== #4 НЕСКОЛЬКО КОЛБЭКОВ

// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, 
// чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать 
// результат вызова колбэка onError, передавая ему аргументом строку 
// "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен 
// возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if(this.pizzas.includes(pizzaName)){
//             return   onSuccess=makePizza(pizzaName);
            
//         }else {return onError=onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)}
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order('Smoked', makePizza, onOrderError);
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   pizzaPalace.order('Vienna', makePizza, onOrderError);
  

//   console.log(pizzaPalace.order('Smoked', makePizza(), onOrderError()));
//   console.log(pizzaPalace.order('Vienna', makePizza(), onOrderError()));

//   console.log (pizzaPalace.order("Four meats", makePizza, onOrderError));  // возвращает "Your order is accepted. Cooking pizza Four meats."
//   console.log (pizzaPalace.order("Big Mike", makePizza, onOrderError));    // возвращает "Error! There is no pizza with a name Big Mike in the assortment."
//   console.log (pizzaPalace.order("Vienna", makePizza, onOrderError));      // возвращает "Error! There is no pizza with a name Vienna in the assortment."


// ===== # 5 МЕТОД FOREACH(CALLBACK)

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел,
//  и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается 
//  как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function (element) {
//         totalPrice += element
    
//     });
    
//     // Change code above this line
//     return totalPrice;
//   };

// console.log (calculateTotalPrice([12, 85, 37, 4]));           // возвращает 138
// console.log (calculateTotalPrice([164, 48, 291]));            // возвращает 503
// console.log (calculateTotalPrice([412, 371, 94, 63, 176]));   // возвращает 1116


//  ==== #6 ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, 
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(function (number) {
//         if (number>value){
//         filteredNumbers.push(number);
//         }
//     } )
    
//     // Change code above this line
//     return filteredNumbers;
//   };

// console.log (filterArray([1, 2, 3, 4, 5], 3));          // возвращает [4, 5]
// console.log (filterArray([1, 2, 3, 4, 5], 4));          // возвращает [5]
// console.log (filterArray([1, 2, 3, 4, 5], 5));          // возвращает []
// console.log (filterArray([12, 24, 8, 41, 76], 38));     // возвращает [41, 76]
// console.log (filterArray([12, 24, 8, 41, 76], 20));     // возвращает [24, 41, 76]
  

//  ==== #7  ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ

// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины
//  в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть 
//  тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach( function (elm){
//         if (secondArray.includes(elm)) {
//             commonElements.push(elm);
//           }
//     })
    
//     return commonElements;
//     // Change code above this line
//   }

// console.log (getCommonElements([1, 2, 3], [2, 4]));                        // возвращает [2]
// console.log (getCommonElements([1, 2, 3], [2, 1, 17, 19]));                // возвращает [1, 2]
// console.log (getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));      // возвращает [12, 27, 3]
// console.log (getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));    // возвращает [10, 30, 40]
// console.log (getCommonElements([1, 2, 3], [10, 20, 30]));                  // возвращает []


//  ==== #8 СТРЕЛОЧНЫЕ ФУНКЦИИ.

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

// Change code below this line

// const calculateTotalPrice=(quantity, pricePerItem)=>{
//     // Change code above this line
//     return quantity * pricePerItem;
//   }
  


//  ==== #9  НЕЯВНЫЙ ВОЗВРАТ 

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;
  
//   // Change code above this line
  

//  ==== #10 СТРЕЛОЧНЫЕ ФУНКЦИИ КАК КОЛЛБЕКИ

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление 
// на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// Change code below this line
// const calculateTotalPrice = (orderedItems) =>{
//     let totalPrice = 0;
  
//     orderedItems.forEach( item => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
//   // Change code above this line

//   console.log (calculateTotalPrice([12, 85, 37, 4]));           // возвращает 138
//   console.log (calculateTotalPrice([164, 48, 291]));            // возвращает 503
//   console.log (calculateTotalPrice([412, 371, 94, 63, 176]));   // возвращает 1116


// ==== # 11 ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0 

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// // Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach( (number) =>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
  


//  ==== #12 ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ 2.0

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach( (element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Change code above this line
//     return commonElements;
//   }


//  ==== #13 ЧИСТЫЕ ФУНКЦИИ

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, 
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, 
// наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray= [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             number = number + value;
//           } newArray.push(number)
//     })
// return newArray;
   
//     // Change code above this line
//   }

// console.log (changeEven([1, 2, 3, 4, 5], 10));              // возвращает новый массив [1, 12, 3, 14, 5]
// console.log (changeEven([2, 8, 3, 7, 4, 6], 10));           // возвращает новый массив [12, 18, 3, 7, 14, 16]
// console.log (changeEven([17, 24, 68, 31, 42], 100));        // возвращает новый массив [17, 124, 168, 31, 142]
// console.log (changeEven([44, 13, 81, 92, 36, 54], 100));    // возвращает новый массив [144, 13, 81, 192, 136, 154]


// ==== #14  МЕТОД MAP()

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. 
// Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet =>  planet.length
// )

// console.log(planetsLengths);  // это массив [5, 4, 6, 6]


//  ==== #15 МЕТОД MAP() И МАССИВ ОБЪЕКТОВ

// Используя метод map() сделай так, чтобы в переменной titles получился массив названий 
// книг (свойство title) из всех объектов массива books.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const titles = books.map(book =>book.title);

// console.log (titles);


//  ==== #16  МЕТОД FLATMAP()

// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг 
// (свойство genres) из массива книг books.

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line
  
//   const genres = books.flatMap(book => book.genres);

//   console.log(genres);


//   ==== # 17 ЗАДАЧА. ИМЕНА ПОЛЬЗОВАТЕЛЕЙ

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) 
// из массива объектов в параметре users. 

// Change code below this line
// const users = [{
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },];

// const getUserNames = users => users.map(user =>user.name) ;
// // Change code above this line

// console.log(getUserNames(users));


//  ==== #18 ЗАДАЧА. ПОЧТЫ ПОЛЬЗОВАТЕЛЕЙ

// Change code below this line

// const users = [{
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//       },];


// const getUserEmails = users => users.map(user =>user.email);
    

// ;
// // Change code above this line

// console.log(getUserEmails(users)); 


// ==========================================================
// несколько параметров
// const users = [{
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             skills: ["ipsum", "lorem"],
//             gender: "male",
//             age: 37,
//           },
//           {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//             gender: "female",
//             age: 34,
//           },
//           {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//             gender: "male",
//             age: 24,
//           },
//           {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             skills: ["adipisicing", "irure", "velit"],
//             gender: "female",
//             age: 21,
//           },
//           {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             skills: ["ex", "culpa", "nostrud"],
//             gender: "male",
//             age: 27,
//           },
//           {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             skills: ["non", "amet", "ipsum"],
//             gender: "male",
//             age: 38,
//           },
//           {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             skills: ["lorem", "veniam", "culpa"],
//             gender: "female",
//             age: 39,
//           },];
    
    
//     const getUserData = users.map(({name,age}) => ({name,age}));
//     // const getUserEmails = users.map(user =>user.email);   
    
//     ;
//     // Change code above this line
//     console.log(getUserData);
//     // ==============================================================================
//     const doubledNums = users.map(({name,age,email}) => ({name,age,email}));

//     console.log('doubledNums', doubledNums);
    
    // ========================================================

//  ==== # 19  МЕТОДЫ FILTER И FIND

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива 
// numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number%2 === 0);
// const oddNumbers = numbers.filter(number => number%2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);


// ==== # 20 ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) 
// из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений. 

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter(
//       (genre, index, array)=>array.indexOf(genre) === index
//     ); 

//     console.log(uniqueGenres);


// ==== # 21  МЕТОД FILTER() И МАССИВ ОБЪЕКТОВ

// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) 
// больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем 
// (свойство author) которое совпадает со значением в переменной AUTHOR. 

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line
  
//   const topRatedBooks = books.filter( book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter( book => book.author === AUTHOR); 

//   console.log(topRatedBooks);
//   console.log(booksByAuthor);


// ==== # 22  ЗАДАЧА. ПОЛЬЗОВАТЕЛИ С ЦВЕТОМ ГЛАЗ

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив 
// пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.


// Change code below this line



const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => 
 
// users.filter(user => user.eyeColor === color);

// const color =  "blue";
// // Change code above this line

// console.log(getUsersWithEyeColor(users,color));


//  ==== #23 ЗАДАЧА. ПОЛЬЗОВАТЕЛИ В ВОЗРАСТНОЙ КАТЕГОРИИ

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, 
// возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => 
//  users.filter(user => user.age > minAge & user.age<maxAge
//     );
// Change code above this line


// ==== # 24 ЗАДАЧА. ПОЛЬЗОВАТЕЛИ С ДРУГОМ

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей 
// у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// Change code below this line
// const getUsersWithFriend = (users, friendName) =>  

//   users.filter(user => user.friends.includes(friendName)
     
//     );


//    const friendName = "Briana Decker";
// // Change code above this line

// console.log(getUsersWithFriend(users,friendName));


//  ==== # 25 ЗАДАЧА. СПИСОК ДРУЗЕЙ 

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей 
// (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы 
// возвращаемый массив не содержал повторений.

// Change code below this line
// const getFriends = (users) => {
//    const allFriends = users.flatMap(user => user.friends);
//    return allFriends.filter((friend,index,array) => array.indexOf(friend) === index );
   
// };
// Change code above this line

// console.log(getFriends(users));


//  ==== # 26 ЗАДАЧА. АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, 
// значение свойства isActive которых true.

// // Change code below this line
// const getActiveUsers = users => 
//     users.filter(user => user.isActive
//         );
// console.log(getActiveUsers(users));
// // Change code above this line


//  ==== # 27 ЗАДАЧА. НЕАКТИВНЫЕ ПОЛЬЗОВАТЕЛИ

// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, 
// значение свойства isActive которых false.

// const getInactiveUsers = users => 
//     users.filter(user => !user.isActive
//         );
// console.log(getInactiveUsers(users));


//  ==== # 28  МЕТОД FIND()

// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) 
// совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает 
// со значением переменной AUTHOR.

// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);

//   console.log(bookByAuthor);
//   console.log(bookWithTitle);
  


//  ==== # 29 ЗАДАЧА. ПОЛЬЗОВАТЕЛЬ С ПОЧТОЙ 

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, 
// почта которого (свойство email) совпадает со значением параметра email.

// Change code below this line

// const getUserWithEmail = (users, email) => 
//    users.find(user => user.email === email);

// const email = "shereeanthony@kog.com";

//    console.log(getUserWithEmail(users, email));

// // Change code above this line


//  ==== #30  МЕТОД EVERY()

// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number%2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number%2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number%2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number%2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number%2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number%2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsEven);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsEven);


//  ==== #31  ЗАДАЧА. ВСЕ ЛИ ПОЛЬЗОВАТЕЛИ АКТИВНЫ

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас 
// активны (свойство isActive) и возвращала true или false.

// Change code below this line

// const isEveryUserActive = (users) => 
//   users.every(user => user.isActive) ;

// Change code above this line


//  ==== #32 МЕТОД SOME()

// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number => number%2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number%2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number => number%2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number%2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number => number%2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number%2 !== 0);



//  ==== # 33 ЗАДАЧА. ЕСТЬ ЛИ АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей 
// (свойство isActive) и возвращала true или false.

// Change code below this line

// const isAnyUserActive = users => 
//    users.some(user => user.isActive);

// Change code above this line


//  ==== #34 МЕТОД REDUCE()

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. 
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((value,number) => value+number) ;
  
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log(totalPlayTime);
//   console.log(averagePlayTime);


//  ==== #35 МЕТОД REDUCE() И МАССИВ ОБЪЕКТОВ

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого 
// игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно 
// разделив его время (свойство playtime) на количество игр (свойство gamesPlayed). 

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line
  
//   const totalAveragePlaytimePerGame = players => players.reduce((total,player) => 
//   total+(player.playtime/player.gamesPlayed),0 );

//             console.log(totalAveragePlaytimePerGame(players)); 


// ====#36 

// // Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total+ user.balance ,0) } ;
// // Change code above this line


//  ==== #37 

// =====================================================
// // Change code below this line
// const getTotalFriendCount = users => {
//   users.reduce(
//   (total, user)  => total.push(...user.friends)
// .length,0 );
// } 
// Change code above this line       
// ===============================================

// // Change code below this line
// const getTotalFriendCount = users => 
//  users.reduce((allFriends, user) => {
//   allFriends.push(...user.friends);

//   return allFriends;
// }, []).length;
// // // Change code above this line

// console.log(getTotalFriendCount(users));

//  consp ===========================================================
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));
// =======================================================================



//  ==== #38 МЕТОД SORT()

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная 
// по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия 
// массива имён авторов authors отсортированная в по алфавиту. 

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);


// ==== #39 СВОЙ ПОРЯДОК СОРТИРОВКИ ЧИСЕЛ

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, 
// по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates 
// получилась отсортированная по возрастанию копия массива releaseDates, а в переменной 
// descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => (a-b));

// const descendingReleaseDates = [...releaseDates].sort((a,b) => (b-a));


//  ==== # 40 СВОЙ ПОРЯДОК СОРТИРОВКИ СТРОК

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и 
// обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась 
// отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия 
// отсортированная в обратном алфавитном порядке.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));


//  ==== #41  СОРТИРОВКА ОБЪЕКТОВ

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора 
// в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени 
// автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook,secondBook) => 
// firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook,secondBook) => 
// secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook,secondBook) => 
// firstBook.rating-secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook,secondBook) => 
// secondBook.rating-firstBook.rating);

// console.log(sortedByAscendingRating);


//  ==== # 42 ЗАДАЧА. СОРТИРОВКА ПО БАЛАНСУ

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей 
// отсортированный по возрастанию их баланса (свойство balance). 

// Change code below this line
// const sortByAscendingBalance = users => 
//   [...users].sort((firstUser,secondUser) => 
//   firstUser.balance - secondUser.balance)
   
// ;
// // Change code above this line

// console.log(sortByAscendingBalance(users));


//  ==== #43 ЗАДАЧА. СОРТИРОВКА ПО КОЛИЧЕСТВУ ДРУЗЕЙ

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив 
// пользователей отсортированный по убыванию количества их друзей (свойство friends).

// Change code below this line
// const sortByDescendingFriendCount = users => 
//     [...users].sort((firstUser,secondUser) => 
//   secondUser.friends.length - firstUser.friends.length)
//    ;
// Change code above this line
// console.log(sortByDescendingFriendCount(users));


//  ==== # 44 ЗАДАЧА. СОРТИРОВКА ПО ИМЕНИ

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный 
// по их имени (свойство name) в алфавитном порядке.

// Change code below this line
// const sortByName = users => 
// [...users].sort((firstUser,secondUser) => 
// firstUser.name.localeCompare(secondUser.name))
   
// ;
// Change code above this line


//  ==== #45 ЦЕПОЧКИ МЕТОДОВ (ЧЕЙНИНГ, CHAINING)

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном 
// порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// .sort((firstBook,secondBook) => firstBook.author.localeCompare(secondBook.author))

// .filter((book) => book.rating> MIN_BOOK_RATING)
// .map(book => book.author)
// ;

// console.log(names);


//  ==== # 46 ЗАДАЧА. ПОЛЬЗОВАТЕЛИ И ДРУЗЬЯ 

// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён 
// пользователей отсортированный по возрастанию количества их друзей (свойство friends). 

// ======================================================================
// const sortByDescendingFriendCount = users => 
//     [...users].sort((firstUser,secondUser) => 
//   secondUser.friends.length - firstUser.friends.length)
//    ;
// =======================================================================

// // Change code below this line
// const getNamesSortedByFriendCount =users=> [...users]
// .sort((firstUser,secondUser) => firstUser.friends.length - secondUser.friends.length)
//  .map(user => user.name) 
// ;
// // Change code above this line

// console.log(getNamesSortedByFriendCount(users));


//  ==== #47  ЗАДАЧА. ИМЕНА ДРУЗЕЙ

// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных 
// имён друзей (свойство friends) отсортированный по алфавиту .

// // Change code below this line
// const getSortedFriends = users => [...users]
// .flatMap(user => user.friends)
// .filter((friend,index,array) => array.indexOf(friend) === index)
// .sort((firstFriend,secondfriend) => firstFriend.localeCompare(secondfriend))  
// ;
// // Change code above this line

// console.log(getSortedFriends(users));


// ==== #48 ЗАДАЧА. ОБЩИЙ БАЛАНС

// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала 
// общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает 
// со значением параметра gender.

// Change code below this line

// const getTotalBalanceByGender = (users, gender) => 
//   [...users].filter(user => user.gender === gender)
//   .reduce((total,user) => total + user.balance,0)
 
// ;

// // Change code above this line

// console.log(getTotalBalanceByGender(users,"male"));