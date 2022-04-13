
// // =====#4
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem*orderedQuantity;

// console.log(totalPrice);


// // ======#5

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

// console.log(message);

// // ===#6 

// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${ totalPrice } credits. Delivery (${ deliveryFee } credits) is included in total price.`; 

// console.log(message);

// // ===#7 Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, 
// this is my first function!". После объявления вызови функцию sayHi.

// // Change code below this line
// function sayHi() {
//     // Тело функции
//     console.log("Hello, this is my first function!");
//   }
  
//   sayHi();

// // ===#8    ?????

// // Change code below this line
// function add(a,b,c) {
//     const result = a+b+c;
//     console.log(`Addition result equals ${ result }`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// // ===#9 

// function add(a, b, c) {
//     // Change code below this line
  
//   return a+b+c;
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));


// // ===#10 

// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//      console.log(message);
//     // Change code above this line
//     return message;
//   };

//    makeMessage('Radar', 6150) ; 
//    makeMessage('Scanner', 3500) ;
//    makeMessage('Reactor', 8000) ;
//    makeMessage('Engine', 4070)  ;


// // ===#11

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity* pricePerItem;
//     console.log(totalPrice);
//     // Change code above this line
//     return totalPrice;
//   };

//  calculateTotalPrice(5, 100);
//   calculateTotalPrice(8, 60);
//   calculateTotalPrice(3, 400);


// // ===#12 

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
  
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  
//   const message = ` You ordered droids worth ${ totalPrice } credits. Delivery (${ deliveryFee } credits) is included in total price. `
//   console.log(message);
//     // Change code above this line
//     return message;
//   }

//   makeOrderMessage(2, 100, 50);
//   makeOrderMessage(4, 300, 100);


// // ===#13

// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
//   console.log(passed);
//     // Change code above this line
//     return passed;
//   }

//   isAdult(20);
//   isAdult(14);


// // ====#14

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = password === SAVED_PASSWORD;
//   console.log(isMatch);
//     // Change code above this line
//     return isMatch;
//   }

//  isValidPassword("mangodab3st"); 
//   isValidPassword("kiwirul3z"); 
//   isValidPassword("jqueryismyjam1"); 


// // ====#15 

// function checkAge(age) {
//     let message;
  
//     if (age>=18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
//     console.log(message);
//     return message;
//   }
//   checkAge(20);
//   checkAge(1); 


// // ====#16 

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (available < ordered) {
//     message = `Not enough goods in stock!`;
//   } else { message = `Order is processed, our manager will contact you.`
  
//   }
//   console.log(message);
//     // Change code above this line
//     return message;
//   }
  
//   checkStorage(100, 50);
//   checkStorage(100, 130);


// // ====#17

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // ====#18 

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
  
//   const totalPrice = pricePerDroid * orderedQuantity;
  
//   if (totalPrice> customerCredits) {
//     message = "Insufficient funds!";
//   } else { message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`
//   }
//   console.log(message);
//     // Change code above this line
//     return message;
//   }
  
//   makeTransaction(3000, 5, 23000);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// const minSalary =500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0; 

// for (let i= 1; i<=employees; i +=1) {

//   const salary = Math.round(Math.random()*(maxSalary-minSalary)+minSalary);
//   console.log(`ЗП работника номер ${i}: ${salary}`);
//   totalSalary += salary;
// }
// console.log(totalSalary);


// ++++++++++++
// напиши скрипт, который подсчитывает сумму всех четных чисел,
// кот входит в диапазон от min до max

// const min =6;
// const max = 13;
// let total = 0;

// for (let i=min; i<=max; i+=1){
//   console.log(i);

//   if (i%2 !== 0) {
//     console.log(`Не чётное: `, i);
//     continue;
//   }

//   console.log(`чётное: `, i);
//   total +=i;
// }

// console.log(`total: `, total);

// ++++++++++++++++

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent>= 100 && totalSpent<1000) {
//   console.log ("Бронзовый партнёр, скидка 2%");
//   discount = 0.02;
// } else if (totalSpent>= 1000 && totalSpent<5000) {
//   console.log ("Серебряный партнёр, скидка 5%");
//   discount = 0.05;
// }else if ( totalSpent > 5000) {
//   console.log ("Золотой партнёр, скидка 10%");
//   discount = 0.1;
// } else {
//   console.log ("Не партнёр, скидка 0%");
// }

// payment -= payment*discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount*100}%`,);

// totalSpent += payment;
// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);


// // ====#19 

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   console.log(message);
//   return message;
  
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("jqueryismyjam1");


// // ====#20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if(ordered === 0) {

//     message = "There are no products in the order!";
    
//   } else if(ordered > available) {

//     message = "Your order is too large, there are not enough items in stock!";
    
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(150, 0);

// // ====#21  ЛОГИЧЕСКОЕ «И» (ОПЕРАТОР &&)

// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end); // Change this line
// console.log(isInRange);
//   return isInRange;
// }

// isNumberInRange(10, 30, -10);


// // ====#22  ЛОГИЧЕСКОЕ «ИЛИ» (ОПЕРАТОР ||)

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line
// console.log(canAccessContent);
//   return canAccessContent;
// }

// checkIfCanAccessContent("sub");
// checkIfCanAccessContent("vip");


// // ==== #23   ЛОГИЧЕСКОЕ «НЕ» (ОПЕРАТОР !)

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ; // Change this line
// console.log(isNotInRange);
//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(-10, 30, 5);


// ==== #24  ЗАДАЧА: РАСЧЁТ СКИДКИ
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы 
// потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). 
// Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, 
// SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//  if ( totalSpent < 5000 ) {
//   discount = BASE_DISCOUNT;

//  } else if ( totalSpent >= 5000 && totalSpent < 20000 ) {
//   discount = BRONZE_DISCOUNT;

//  } else if (  totalSpent >= 20000 && totalSpent < 50000 ) {
//   discount = SILVER_DISCOUNT; 

//  } else  {
//   discount = GOLD_DISCOUNT; 

//  }

//  console.log(discount);

//   // Change code above this line
//   return discount;
// }

//  getDiscount(137000);     //возвращает 0.1
//  getDiscount(46900);     //возвращает 0.05
//  getDiscount(8250);     //возвращает 0.02
//  getDiscount(1300);     //возвращает 0


// ==== #25  ТЕРНАРНЫЙ ОПЕРАТОР

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//    message = ordered > available ? "Not enough goods in stock!": "The order is accepted, our manager will contact you";
  
// console.log(message);
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);   // возвращает "The order is accepted, our manager will contact you"
// checkStorage(100, 130);   // возвращает "Not enough goods in stock!"
// checkStorage(200, 20);   // возвращает "The order is accepted, our manager will contact you"


// // ==== #26  ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   message = password === ADMIN_PASSWORD ? "Access is allowed":"Access denied, wrong password!";
// console.log(message);
//   // Change code above this line
//   return message;
// }

//  checkPassword("jqueryismyjam");    // возвращает "Access is allowed"
//  checkPassword("angul4r1sl1f3");    // возвращает "Access denied, wrong password!"
//  checkPassword("r3actsux");    // возвращает "Access denied, wrong password!"


// // ====  #27 ИНСТРУКЦИЯ SWITCH


// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional" : // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization" : // Change this line
//       price = 50 ; // Change this line
//       break;
//   }
//  console.log(price);
//   // Change code above this line
//   return price;
// }

//  getSubscriptionPrice("professional");   // возвращает число 20
//  getSubscriptionPrice("organization");   // возвращает число 50
//  getSubscriptionPrice("starter");   // возвращает число 0


// // ====  #28 ИНСТРУКЦИЯ SWITCH C БЛОКОМ DEFAULT

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// switch(password) {

//  case null:
//     message = "Canceled by user!";
//     break;
  
//    case ADMIN_PASSWORD :
//     message = "Welcome!";
//     break;

//   default:
//     message = "Access denied, wrong password!";
//   }
// console.log(message);
//   // Change code above this line
//   return message;
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("jqueryismyjam");


// // ====  #29   ЗАДАЧА: ДОСТАВКА ТОВАРА

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   let price;

//   switch (country) {

// case "China":
//   price = 100;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

// case "Chile":
//   price = 250;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

// case "Australia":
//   price = 170;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

// case "Jamaica":
//   price = 120;
//   message = `Shipping to ${country} will cost ${price} credits`;
//   break;

//   default:
//     message = "Sorry, there is no delivery to your country"
//   }
  
// console.log(message);
//   // Change code above this line
//   return message;
// }

//  getShippingCost("Australia");   // возвращает "Shipping to Australia will cost 170 credits"
//  getShippingCost("Germany");   // возвращает "Sorry, there is no delivery to your country"
//  getShippingCost("China");   // возвращает "Shipping to China will cost 100 credits"


// // ====  #30 ДЛИНА СТРОКИ

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   console.log(message);
//     return message;
//   }
  
// getNameLength("Poly");   // возвращает "Name Poly is 4 characters long"
// getNameLength("Harambe");   // возвращает "Name Harambe is 6 characters long"
// getNameLength("Billy");   // возвращает "Name Billy is 5 characters long"
// getNameLength("Joe");   // возвращает "Name Joe is 3 characters long"


// // ====  #31  ИНДЕКСАЦИЯ ЭЛЕМЕНТОВ СТРОКИ

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);


// // ====   #32  МЕТОД SLICE()

// function getSubstring(string, length) {
//     const substring = string.slice(0,length); // Change this line
//   console.log(substring);
//     return substring;
//   }

// getSubstring("Hello world", 3);    // возвращает "Hel"
// getSubstring("Hello world", 6);    // возвращает "Hello"
// getSubstring("Hello world", 8);    // возвращает "Hello wo"
// getSubstring("Hello world", 11);    // возвращает "Hello world"
// getSubstring("Hello world", 0);    // возвращает ""


// //  ====   #33  ЗАДАЧА: ФОРМАТИРОВАНИЕ СООБЩЕНИЯ

// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line

    
//   result = (message.length>maxLength)?  `${message.slice(0,maxLength)}...` : message;
//     /// Change code above this line
//     console.log(result);
//     return result;
//   }
//   formatMessage("Curabitur ligula sapien", 16);  // возвращает "Curabitur ligula..."
//   formatMessage("Curabitur ligula sapien", 23);  // возвращает "Curabitur ligula sapien"
//   formatMessage("Vestibulum facilisis purus nec", 20);  // возвращает "Vestibulum facilisis..."
//   formatMessage("Vestibulum facilisis purus nec", 30);  // возвращает "Vestibulum facilisis purus nec"
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);  // возвращает "Nunc sed turpis..."
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);  // возвращает "Nunc sed turpis a felis in nunc fringilla"  


// // ====  # 34  МЕТОДЫ TOLOWERCASE() И TOUPPERCASE() 

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
//   console.log(normalizedInput);
//     return normalizedInput;
//   }
  
//  normalizeInput("Hello world");   // возвращает "hello world"
//  normalizeInput("This ISN'T SpaM");   // возвращает "this isn't spam"
//  normalizeInput("Big SALE");   // возвращает "big sale"


// //  ==== #35   МЕТОД INCLUDES()

// function checkForName(fullName, name) {
//     const result = fullName.includes(name) ; // Change this line
//     console.log(result);
//      return result;
//    }

// checkForName("Egor Kolbasov", "Egor");      //возвращает true
// checkForName("Egor Kolbasov", "egor");      //возвращает false
// checkForName("Egor Kolbasov", "egOr");      //возвращает false
// checkForName("Egor Kolbasov", "Zhenya");    //возвращает false
// checkForName("Vadim Nekrasov", "Vadim");    //возвращает true
// checkForName("Vadim Nekrasov", "vadim");    //возвращает false
// checkForName("Vadim Nekrasov", "Dima");     //возвращает false


// //   ==== #36   ЗАДАЧА: ПРОВЕРКА СПАМА

// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//   result = (message.toLowerCase()).includes("spam")||(message.toLowerCase()).includes("sale");
//     // Change code above this line
//     console.log(result);
//     return result;
//   } 

//  checkForSpam("Latest technology news");                         // возвращает false
//  checkForSpam("JavaScript weekly newsletter");                   //возвращает false
//  checkForSpam("Get best sale offers now!");                      // возвращает true
//  checkForSpam("Amazing SalE, only tonight!");                    // возвращает true
//  checkForSpam("Trust me, this is not a spam message");           // возвращает true
//  checkForSpam("Get rid of sPaM emails. Our book in on sale!");   // возвращает true
//  checkForSpam("[SPAM] How to earn fast money?");                 // возвращает true