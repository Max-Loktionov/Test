// Метод hasOwnProperty()
// Поэтому при переборе циклом for...in необходимо на каждой итерации 
// добавить проверку на собственное свойство.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (book.hasOwnProperty(key)) {
//       console.log(key,":", book[key] );
//     //   console.log(book[key]);
//     }
  
//     // Если это не собственное свойство - ничего не делаем
//   }


//   //\\ Метод    Object.keys()//\\
// У встроенного класса Object есть несколько полезных методов для работы с объектами. 
// Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей
// его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

//   Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать
//  собственные свойства объекта, не прибегая к использованию архаического цикла 
// for...in с проверками принадлежности свойств. 

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значение свойства
//     console.log(book[key]);

//     console.log(key, ':', book[key] );
//   } 


//  //\\Метод    Object.values()//\\ 
// метод Object.values(obj) возвращает массив значений его собственных свойств.
//  Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив. 

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]


//  //\\ Метод    Object.entries()   //\\ 
// Метод Object.entries(obj) возвращает массив записей, каждым элементом которого
//  будет еще один массив из 2-х элементов: имени свойства и значения этого свойства из объекта obj. 

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']
  
//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]
  
//   const entries = Object.entries(book);
//   console.log(entries); // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]


//   ======Массив обьектов=========

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смешного человека",
//       author: "Федор Достоевский",
//       rating: 7.75,
//     },
//   ];

//   for (const book of books) {
//     // Объект книги
//     console.log(book);
//     // Название
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }

//   let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log( 'averageRating:', averageRating); // 8.2




// ==============аВТОПРОВЕРКА=============

//  *task 1 СОЗДАНИЕ ОБЪЕКТА 
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"]. 

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],

// };

// console.log(apartment);


// *task 2 ======= ВЛОЖЕННЫЕ СВОЙСТВА=======
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией 
// о владельце. Добавь ему следующие свойства:
// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com". 

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],

//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",

//     }
// };

// console.log(apartment);


// *task 3 =======ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ ТОЧКУ======
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим 
// свойствам обьекта apartment.
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги. 


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line

//   console.log( aptRating );
//   console.log( aptDescr );
//   console.log( aptPrice );
//   console.log( aptTags ); 


//   *task 4 ========ДОСТУП К ВЛОЖЕННЫМ СВОЙСТВАМ======
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам
//  обьекта apartment.
// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags. 

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[numberOfTags-1];
//   // Change code above this line
  
//   console.log( ownerName );
//   console.log( ownerPhone );
//   console.log( ownerEmail );
//   console.log( numberOfTags ); 
//   console.log( firstTag );
//   console.log( lastTag );


// *task 5 ========ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ=====
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам 
// обьекта apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];
//   // Change code above this line
  
//   console.log( aptRating );
//   console.log( aptDescr );
//   console.log( aptPrice );
//   console.log( aptTags ); 

//   *task 6 =======ИЗМЕНЕНИЕ ЗНАЧЕНИЯ СВОЙСТВА==========
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line

//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");
  
//     const aptRating = apartment['rating'];
//     const aptDescr = apartment['descr'];
//     const aptPrice = apartment['price'];
//     const aptTags = apartment['tags'];
//     const aptOwnerName = apartment.owner.name;
    
//     console.log( aptRating );
//     console.log( aptDescr );
//     console.log( aptPrice );
//     console.log( aptTags ); 
//     console.log( aptOwnerName ); 


// *task 7 =========ДОБАВЛЕНИЕ СВОЙСТВ========
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston". 

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line

//     apartment.area = 60;
//     apartment.rooms = 3;
//     apartment.location = {
//         country: "Jamaica",
//         city:"Kingston",
//     }

//     console.log(apartment);


// *task 8 =======КОРОТКИЕ СВОЙСТВА====
// Дополни код объявления объекта так, чтобы у него были свойства 
// name, price, image и tags со значениями из переменных с аналогичными именами. 
// Обязательно используй синтаксис коротких свойств. 

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//     name,
//     price,
//     image,
//     tags,

//   // Change code above this line
// };

// console.log(product);


// *task 9 ========ВЫЧИСЛЯЕМЫЕ СВОЙСТВА=====
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: 
// email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка "henry.carter@aptmail.com", 
// а значением свойства password - строка "jqueryismyjam". 

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// }; 


// *task 10  =======ЦИКЛ FOR...IN=======
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, 
// а в массив values все значения его свойств. 

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const keys = [];
//   const values = [];
//   // Change code below this line

//   for (const key in apartment) {
               
//     keys.push(key);
//     values.push(apartment[key]);
      
//   }

//   console.log('keys:', keys);
//   console.log('values:', values);


// *task 11 =========МЕТОД HASOWNPROPERTY()=====
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in 
// проверку на собственное свойство. 

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

//   // Change code above this line
// }

// console.log('keys:', keys);
//   console.log('values:', values);


// *task 12 ====ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ====
// Напиши функцию countProps(object), которая считает и возвращает количество 
// собственных свойств объекта в параметре object. Используй переменную propCount 
// для хранения количества свойств объекта.


// function countProps(object) {
// let propCount = 0;
// // Change code below this line


//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

// // Change code above this line
// return propCount;
// }

// console.log(countProps({}));
// console.log( countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) );


// *task 13 =========МЕТОД OBJECT.KEYS()======
// Перебери объект apartment используя метод Object.keys() и цикл for...of. 
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// и добавь в массив values все значения его свойств. 

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

//   for (const key of keys) {
     
//     values.push(apartment[key]);
//   }

//   console.log(keys);
//   console.log(values);



// *task 14 =====ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0=====
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, 
// возможно, но необязательно, цикл for...of. 

// function countProps(object) {
//   // Change code below this line

//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
    
//       propCount += 1;
//       console.log(key);
//   }
  
//   return propCount;
//   // Change code above this line
// }

// // console.log(keys);
// console.log(countProps({}));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ======================================== без for of
// function countProps(object) {
//   // Change code below this line

//   const propCount = Object.keys(object).length;
   
//   return propCount;
//   // Change code above this line
// }

// // console.log(keys);
// console.log(countProps({}));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));



// *task 15 ======МЕТОД OBJECT.VALUES()=====
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// а в переменную values массив всех значений его свойств. Используй методы Object.keys() 
// и Object.values(). 

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);


// *task 16 ====ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ====
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
// где имя свойства это имя сотрудника, а значение свойства это зарплата. 
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
// Используй переменную totalSalary для хранения общей суммы зарплаты. 

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   const keys = Object.keys(salaries);

//   for (const key of keys) {
//     totalSalary += salaries[key];
//     console.log(salaries[key]);
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({}));


// *task 17 ====МАССИВ ОБЪЕКТОВ====
// Перебери массив объектов colors используя цикл for...of. Добавь в массив 
// hexColors значения свойств hex, а в массив rgbColors значения свойств rgb 
// из всех объектов массива colors. 

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// *task 18 ====ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА====
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName 
// - название продукта. Функция ищет объект продукта с таким именем (свойство name) 
// в массиве products и возвращает его цену (свойство price). Если продукт с таким названием 
// не найден, функция должна возвращать null. 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let price = [];
// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
   

//     if (product.name === productName) {
//       return product.price;
//     }
//     console.log(products.name);
    
//      }
  
//   return null;
//   // Change code above this line
// }

// console.log( getProductPrice("Grip") );


// =========================================== попробовать тернарный вместо if

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

// //  let productPrice = 0;
// //  const product = productName
//   // const prodName = productName;
//   for (const product of products) {
//     // productPrice = product.name === product[key] 
//     // ?  product.price
//     // :  null;

//     if (product.name === productName) {
//       return product.price;
//     }
//     console.log(product.name);
    
//     // console.log(product.name, product.price);
//   }
//   // return productPrice;
//   return null;
//   // Change code above this line
// }

// console.log( getProductPrice("Scanner") );

// =========================================

// *task 19 ====== ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА========
// Напиши функцию getAllPropValues(propName) которая принимает один параметр 
// propName - имя (ключ) свойства. Функция должна вернуть массив всех значений 
// свойства с таким именем из каждого объекта в массиве products. Если в объектах 
// нет свойства с таким именем, функция должна вернуть пустой массив. 

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   // Change code below this line
  
//   const key = [];
  
//   for (const product of products) {
  
//   if(propName === 'quantity') {
//     key.push(product.quantity);
//   } 
//   if (propName === 'name' ) {
//     key.push(product.name);
//   }
//    if (propName === 'price' ) {
//     key.push(product.price);
//   } 
// }
//   return key ;

//   // Change code above this line;

// }

// console.log( getAllPropValues("name") );
// console.log( getAllPropValues("price") );
// console.log( getAllPropValues("quantity") );
// console.log( getAllPropValues("pri") );


// вариант 2 не выполняет Вызов getAllPropValues('category') возвращает []

// function getAllPropValues(propName) {
//   // Change code below this line
  
//   const key = [];
  
//   if(propName === 'quantity' || "name" || "price" ) {
//     for (const product of products) {

//    key.push( product[propName] );
//   }
// }
// return key ;

//   // Change code above this line;

// }

// console.log( getAllPropValues("name") );
// console.log( getAllPropValues("price") );
// console.log( getAllPropValues("quantity") );
// console.log( getAllPropValues("pri") );

// вариант 2 не выполняет Вызов getAllPropValues('category') возвращает [] //end\\




// ================================================== из конспекта
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "isPublic";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// ===================================================================



// *task 20 ========ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА=========
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName 
// - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким 
// именем из массива products. 

// const products = [
//   { name: "Radar", price: 1300, quantity: 2 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//   let totalPrice = 0;
   
//     for (const product of products) {

//       if(productName === product.name ) {

//         totalPrice = ( product.price*product.quantity );

//         console.log(`${productName}:`, totalPrice )
//  }
// }

// return totalPrice ;

//   // Пиши код выше этой строки
// }


// console.log( calculateTotalPrice("Radar") );
// console.log( calculateTotalPrice("Scanner") );
// console.log( calculateTotalPrice("Droid") );
// console.log( calculateTotalPrice("Scannero") );
// console.log( calculateTotalPrice("Grip") );


// *task 21 ====ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ========
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру 
// за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow 
// одной операцией деструктуризации свойств объекта highTemperatures. 

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);


// *task 22 ====ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ=====
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. 
// Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации 
// свойств объекта highTemperatures. Задай значение по умолчанию для icon - 
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". 

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow, 
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",

// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// *task 23 ======ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ=====
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией 
// деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - 
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { today: highToday ,
//   yesterday:highYesterday ,
//   tomorrow: highTomorrow ,
//  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", 
//  } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);



// *task 24 =========ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ======
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// *task 25 ====ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ====
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, 
// а также необязательными иконками. Замени объявления всех переменных одной операцией 
// деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, 
// переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: {
//                   high:highToday ,
//                   low:lowToday ,
//                   icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//                  },
//         tomorrow: {
//                   high:highTomorrow ,
//                   low:lowTomorrow ,
//                   icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//                  }
// } = forecast;



// *task 26 ========ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»=====
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект 
// температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной 
// операцией деструктуризации свойств объекта forecast. 


// forecast = {
  
//   today: { low: 100, high: 20 },
//   tomorrow: { low: 20, high: 300 },
// }

// // Change code below this line
// function calculateMeanTemperature(forecast) {
  
//  const {     today: { low:todayLow, high:todayHigh , },
//           tomorrow: { low:tomorrowLow , high:tomorrowHigh , },
//       } = forecast;


//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log( calculateMeanTemperature(forecast) );


// *task 27 ====ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ====
// В переменной scores хранится массив результатов тестирования. 
// Используя распыление и методы Math.max() и Math.min() дополни код так, 
// чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores); 

// console.log( 'bestScore:', bestScore);
// console.log( 'worstScore:', worstScore);




// *task 28 ====ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА====
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores 
// хранятся результаты тестирования отдельных групп. Используя распыление 
// дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до 
// третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл. 

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log( 'allScores:', allScores);
// console.log( 'bestScore:', bestScore);
// console.log( 'worstScore:', worstScore);


// *task 29 ====ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА====
// В конструкторе можно создавать новые тесты, для которых есть настройки 
// по умолчанию которые хранятся в переменной defaultSettings. Во время 
// создания теста, все или часть настроек можно переопределить, они хранятся 
// в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять 
// настройки по умолчанию и поверх них применить переопределённые настройки. 
// Дополни код так, чтобы в переменной finalSettings получился объект 
// финальных настроек теста.


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);



// *task 30 ====ЗАДАЧА. КАРТОЧКИ ЗАДАЧ====
// Напиши функцию makeTask(data) которая принимает один параметр data - 
// объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя 
// напрямую параметр data. В новом объекте должно быть свойство completed, 
// значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, 
// category и priority, могут отсутствовать. Тогда, в новом объекте задачи, 
// в свойствах category и priority должны быть значения по умолчанию, 
// хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
  
//   const {text, } = data;

//   const oldTask = {completed ,category , priority, ...data, text, 
//  };

// return oldTask;

//   // Change code above this line
// }

// console.log( makeTask({}) );
// console.log( makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) )
// console.log( makeTask({ text: "Buy bread" }) );


// *task 31 ====ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ====
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество 
// аргументов, считала и возвращала их сумму. 


// // Change code below this line
// function add(...args) {

   
//   let total = 0;

//   for (const argument of args) {
//     total += argument;
//   }

//   return total;

//   // Change code above this line
// }

// console.log( add(32, 6, 13, 19, 8) );


// *task 32 ====ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ====
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции 
// addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем 
// заданное число. Это число должно быть первым параметром функции. 


// // Change code below this line
// function addOverNum( limitNum, ...args ) {
//   let total = 0;

  
//   for (const arg of args) {
//     if (arg>limitNum) {
//     total += arg;
//   }
// }

//   return total;
//   // Change code above this line
// }

// console.log( addOverNum(32, 6, 13, 19, 8) );
// console.log( addOverNum(10, 12, 4, 11, 48, 10, 8) );


// *task 33 ====ЗАДАЧА. МАССИВ СОВПАДЕНИЙ====
// Функция findMatches() принимает произвольное количество аргументов. 
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, 
// начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть 
// в массиве первого аргумента.

// // Change code below this line

// function findMatches(firstArg, ...otherArgs) {
//   const matches = []; // Don't change this line

//   for (const argument of firstArg) {
//     if(otherArgs.includes(argument) ) {
//       matches.push(argument);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log( findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) );
// console.log( findMatches([63, 11, 8, 29], 4, 7, 16) );



// *task 34 ====МЕТОДЫ ОБЪЕКТА====
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки 
// по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", 
// где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку 
// "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров 
// oldName и newName соотвественно. 

// const bookShelf = {
//   // Change code below this line

//   books: ["The last kingdom", "The guardian of dreams"],

//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//     updateBook(oldName, newName) {
//     return `Updating book ${oldName } to ${newName }`;
//   },

//   // Change code above this line
// };

//   console.log(bookShelf);


// *task 35 ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги 
// с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти 
// нужный элемент массива, и splice() для того чтобы заменить этот элемент 

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     for (let i = 0; i < this.books.length; i++) {
//       const element = this.books[i];
//         if (oldName === element) {
//           this.books.splice(i, 1, newName)
//         }
//     } 
      
    
//     return bookShelf;
//     // Change code above this line
//   },
// };

// console.log(bookShelf);

// bookShelf.updateBook("Haze", "Hazelnut");
// console.log(bookShelf.updateBook()); 


// *task 36 =====ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»====
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения 
// инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad 
// свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//   // Change code below this line

//   potions: [],

//   // Change code above this line
// };



// *task 37 ====ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ====
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   }
//   // Change code above this line
// };

// console.log( atTheOldToad.getPotions() );



// *task 38 ====ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ====
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

  // //return atTheOldToad;
//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion('Treatment of the soul');

// console.log( atTheOldToad.potions );


// *task 39 ====ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ====
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
      
//       this.potions.splice(this.potions.indexOf( potionName ), 1,);
  
//     // return atTheOldToad;

//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath");

// console.log( atTheOldToad ); 


// *task 40 ====ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ====
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название 
// зелья с oldName на newName, в массиве зелий в свойстве potions 

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line

    // this.potions.splice(this.potions.indexOf( oldName ), 1, newName);
// =======================================================================
    for (let i = 0; i < this.potions.length; i+=1) {
      
      console.log(oldName);
      const element = this.potions[i];


      if(oldName === element) {
        this.potions.splice(i,1, newName);
        // element[name] = newName;
        console.log(element );
        return;
      } return `Never have been `;
    }
    //======================================================== 
    // Change code above this line
  }, 
};

console.table( atTheOldToad ); 


atTheOldToad.updatePotionName("Stone skin", "Green heart");
console.table( atTheOldToad ); 


// *task 41 ====ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ====
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, 
// а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions 
// будет храниться массив объектов со следующими свойствами.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, 
// но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions. 

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
    
//     { name: 'Stone skin', price: 520 },
//     { name: "Dragon breath", price: 780 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },


//   addPotion(newPotion) {
    
//     for (const potion of this.potions) {
            
//     if (newPotion.name===potion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;

//     } 
//       this.potions.push(newPotion);
//       // this.potions.splice(0,1, newPotion);
     
//   } 
//   return this.potions;
//   },


//   removePotion(potionName) {

//     // const {name, price, } = potionName;

//     console.log( `'potionName ${potionName}` );

//     for (let i = 0; i < this.potions.length; i += 1 ) {
    
//       console.log( 'potions[i]', this.potions[i].name  );
//       this.potions.splice(i, 1);

//       // if ( name === this.potions[i].name ) {

//       //   console.log(  i );

       
//       //   return;
//       // }
//       return  (` Potion ${potionName} is not in inventory!` ) ; 
       
//     }
     
//     console.log( `not here  ${potionName}` );
//     return this.potions;
//   },

//   // clear () {
//   //   this.potions = [];
//   // }, 

//   updatePotionName(oldName, newName) {
//     // const {name, price}=oldName;
//     // const {name, price}=newName;

//     for ( let i = 0; i < this.potions.length; i+=1 ) {
//       // const element = this.potions[i];
     
//         if (oldName === this.potions[i].name) {
//           console.log('i=oldName', i)
//           const element = this.potions[i];
           
//               const updatePotion = { ...element,
//                  newName, 
//               };    
//               console.log(newName);
//               console.log(element.name);
//               // return updatePotion;
//           this.potions.splice(i, 1, newName);
//           // this.potions.splice(0,1, newName);
//           // return;
//         }
          
//           // return `Potion ${oldName} is not in inventory!`;
     
//     }
//     return `newName ${newName}`;
//   },

//   // Change code above this line
// };


// // atTheOldToad.getPotions();
// console.table( atTheOldToad.getPotions() ); 

//   atTheOldToad.addPotion({ name: "Stone skin", price: 520 });
//   console.table('add', atTheOldToad.getPotions() );

//   atTheOldToad.removePotion({ name: "Dragon breath", price: 780 });
//   console.table( 'remove', atTheOldToad.getPotions());

//   // atTheOldToad.removePotion({ name: "Dragon breath", price: 700 });
//   atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.table( atTheOldToad.getPotions() );

// // atTheOldToad.clear ();
// console.log( atTheOldToad.updatePotionName() );




// for (let i = 0; i < this.books.length; i++) {
//         const element = this.books[i];
//           if (oldName === element) {
//             this.books.splice(i, 1, newName)
//           }