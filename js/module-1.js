



// 12       ЗАДАЧА: ЗАКАЗ ПРОДУКТА 2.0

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));


// 13           ОПЕРАТОРЫ СРАВНЕНИЯ >, >=, < И <=
// function isAdult(age) {
//   // Change code below this line
//    const passed = (age >= 18);

//   // Change code above this line
//   return passed;
//   console.log(passed);
// }

// console.log(isAdult(age));

// 14     ОПЕРАТОРЫ СРАВНЕНИЯ === И !==
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password===SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost);


// 15
// function checkAge(age) {
//   let message;
//   if (age>=18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(17));


// 16   consp

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

// if (available>=ordered) {
//   message="Order is processed, our manager will contact you."
// }  else {
//   message="Not enough goods in stock!";
// }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(200, 130));



// let cost;
// const subscription = "hj";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }
// console.log(cost);

// 17

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


// 18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// let totalPrice= (pricePerDroid*orderedQuantity)
// if (totalPrice<=customerCredits) {
// message=`You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`
// } else {
//   message=`Insufficient funds!`
// }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));

// 19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password===ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// console.log(checkPassword(null));

// 20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if(ordered===0) {
//     message='There are no products in the order!'
//   } else if(ordered>available) {
//     message='Your order is too large, there are not enough items in stock!'
//   } else {
//     message='The order is accepted, our manager will contact you'
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100,130));

// 21

// function isNumberInRange(start, end, number) {
//   const isInRange = (number>start && number<end) ; // Change this line
//   return isInRange;
// }
// console.log(isNumberInRange(20, 50, 76));

// 22 

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType==="pro" || subType==="vip"); // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("free"));

// 23

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));

// 24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if(totalSpent<5000) {
//   discount = BASE_DISCOUNT
// } else if (totalSpent>=5000 && totalSpent<20000) {
//  discount = BRONZE_DISCOUNT
// } else if (totalSpent>=20000 && totalSpent<50000) {
//   discount = SILVER_DISCOUNT
// } else if (totalSpent>=50000) {
//   discount = GOLD_DISCOUNT
// }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(143000));

// 25   Тернарный оператор используется как более синтаксически краткая 
//      замена инструкции if...else, когда одной и той же переменной 
//      необходимо присвоить разные значения по условию.
//  <условие> ? <выражение если условие истинно> : <выражение если условие ложно>

// function checkStorage(available, ordered) {
//   let message;
//        // Change code below this line
//   message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//          // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 150));

// 26 ПРОВЕРКА ПАРОЛЯ -Тернарный оператор

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = (password === ADMIN_PASSWORD)? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("queryismyjam"))

// 27 ИНСТРУКЦИЯ SWITCH

//  В некоторых случаях неудобство чтения сложных ветвлений if...else можно избежать,
//  используя более «плоский» синтаксис инструкции ветвления switch.
//  Область применения switch ограничена задачами с одним общим вопросом (что сравнивать)
//  и множеством вариантов ответов (с чем сравнивать).

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case ("starter") :  // Change this line
//       price = 0; // Change this line
//       break;

//     case ("professional") :  // Change this line
//       price = 20; // Change this line
//       break;

//     case ("organization") :  // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("organization"));


// 28     ИНСТРУКЦИЯ ----SWITCH C БЛОКОМ DEFAULT-----

// Если ни одного совпадения значений не произошло, 
// необходимо выполнить код по умолчанию, как в блоке else для инструкции 
// if...else. Для этого после всех блоков case добавляется блок default.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// switch (password) {

//   case (ADMIN_PASSWORD):
//  message = "Welcome!";
//  break; 

// case (null):
// message = "Canceled by user!";
// break;

// default: 
//  message = "Access denied, wrong password!";
// }
 
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));


// 29   ДОСТАВКА ТОВАРА   switch

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

// const costChina = 100;
// const costChile = 250;
// const costAustralia = 170;
// const costJamaica = 120;


// switch (country) {
//   case ("China"):
//   message = `Shipping to China will cost ${costChina} credits`;
//   break;

//  case ("Chile"):
//   message = `Shipping to Chile will cost 250 credits`;
//   break; 

//   case ("Australia"):
//   message = `Shipping to Australia will cost ${costAustralia} credits`;
//   break;

//   case ("Jamaica"):
//   message = `Shipping to Jamaica will cost ${costJamaica} credits`;
//   break;

//   default:
//   message = "Sorry, there is no delivery to your country"
// }

//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Jamaica"));

// // 30   ДЛИНА СТРОКИ 

// function getNameLength(name) {
//     const lengthName = (name.length)
//   const message = `Name ${name} is ${lengthName} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));

// 31   ИНДЕКСАЦИЯ ЭЛЕМЕНТОВ СТРОКИ

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = (courseTopic.length);
// const firstElement = courseTopic[0];
// const lastElement = (courseTopic[courseTopic.length -1]);

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);


// 32  МЕТОД SLICE()
// Метод строк slice(startIndex, endIndex) используется для создания
//  копии части или всей строки. Он делает копию элементов строки от startIndex и до,
//  но не включая endIndex и возвращает новую строку.

// function getSubstring(string, length) {
//   const substring = (string.slice(0,length)); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 0))


// 33    ЗАДАЧА: ФОРМАТИРОВАНИЕ СООБЩЕНИЯ  ==if else 

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

// if (message.length <= maxLength) {
//   result = message;
// } else  {
//   result = message.slice(0,maxLength)+"...";
// }

//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// 34    МЕТОДЫ TOLOWERCASE() И TOUPPERCASE()

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));

// 35      МЕТОД INCLUDES()

// function checkForName(fullName, name) {
//  const result = fullName.includes(name) ; // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "egor"));

// 36   ЗАДАЧА: ПРОВЕРКА СПАМА

// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   toLowerCaseMessage = message.toLowerCase();
// banOne = "spam";
// banTwo = "sale";

// if (toLowerCaseMessage.includes(banOne) || toLowerCaseMessage.includes(banTwo)) {
//     result = true;
// } else {
//     result = false;
// }
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Get best sale offers now!"));




