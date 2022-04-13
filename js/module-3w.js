// //  ==== #1 СОЗДАНИЕ ОБЪЕКТА

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     };


// //  ====#2  ВЛОЖЕННЫЕ СВОЙСТВА 

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
//   };
  

// //  ==== #3   ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ ТОЧКУ

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
  


// //  ==== #4   ДОСТУП К ВЛОЖЕННЫМ СВОЙСТВАМ
 
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
//   const lastTag = apartment.tags[apartment.tags.length-1];
//   // Change code above this line

//   console.log (ownerName);      // = apartment.owner.name;
//   console.log (ownerPhone);      // = apartment.owner.phone;
//   console.log (ownerEmail);      // = apartment.owner.email;
//   console.log (numberOfTags);      // = apartment.tags.length;
//   console.log (firstTag);      // = apartment.tags.tags[0];
//   console.log (lastTag);      // = apartment.tags.tags[length-1];


// //  ==== #5   ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line


// //  ==== #6   ИЗМЕНЕНИЕ ЗНАЧЕНИЯ СВОЙСТВА

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push('trusted');

// console.log(apartment);


// //  ==== #7   ДОБАВЛЕНИЕ СВОЙСТВ  

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line


// apartment.area = 60;
// apartment.rooms = 3;
// apartment.owner.tom = 'ten';
// apartment.location ={
//   country: "Jamaica",
// city: "Kingston",
// };
// // apartment.location.town = 'pot';

// console.table(apartment);


// //  ==== #8  КОРОТКИЕ СВОЙСТВА

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line

//   name,
//   price,
//   image,
//   tags,

//   // Change code above this line
// };


// //  ==== #9  ВЫЧИСЛЯЕМЫЕ СВОЙСТВА

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };

// console.log(credentials);


// //  ==== # 10   ЦИКЛ FOR...IN 

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// };

// console.log(keys);
// console.log(values);


// //  ==== #11 МЕТОД HASOWNPROPERTY() 

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


//   if(apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// };

//   // Change code above this line
// }

// console.log(keys);
// console.log(values);
// console.log(apartment);


// //  ==== #12  ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   let props = [];
//   for(const key in object){
//   if(object.hasOwnProperty(key)){
//     props.push(object[key])
//     propCount = props.length;
//   };
// };
  
//   // Change code above this line
//   return propCount;
// }

// // console.log(propCount({}));

// console.log (countProps({ name: "Mango", age: 2 }));                               // возвращает 2
// console.log (countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));   // возвращает 3

////////////////////////////////////////////////////
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
/////////////////////////////////////////////////////


// // ==== #13  МЕТОД OBJECT.KEYS()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for(const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// //  ==== #14  ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//  const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount +=1;
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));

// console.log (countProps({ name: "Mango", age: 2 }));                               // возвращает 2
// console.log (countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));   // возвращает 3



// //  ==== #15   МЕТОД OBJECT.VALUES()

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


// // ==== #16  ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
    
//   }

//   // Change code above this line
//   return totalSalary;
// }

// console.log (countTotalSalary({}));                                      // возвращает 0
// console.log (countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));   // возвращает 330
// console.log (countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));      // возвращает 400


// // ==== №17   МАССИВ ОБЪЕКТОВ 

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const color of colors) {
//       hexColors.push(color.hex);
//       rgbColors.push(color.rgb);
//   };

//   console.log(hexColors);
//   console.log(rgbColors);


// //  ==== #18   ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line

//   for (const product of products) {
//       if (product.name===productName) {
//          return product.price;
//       } 
//   }
  
//   return null;

//     // Change code above this line
//   };

// console.log (getProductPrice("Radar"));      // возвращает 1300.
// console.log (getProductPrice("Grip"));       // возвращает 1200.
// console.log (getProductPrice("Scanner"));    // возвращает 2700.
// console.log (getProductPrice("Droid"));      // возвращает 400.
// console.log (getProductPrice("Engine"));     // возвращает null.


// //  ==== #19 ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
  
//     let newArray =[];
    

//   for (const product of products) {
//    let propArray = Object.keys(product);

//     if(propArray.includes(propName)){
//     newArray.push(product[propName]);
//      };
//     };

//   return newArray;
//     // Change code above this line
//   }

// console.log (getAllPropValues("name"));       // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// console.log (getAllPropValues("quantity"));   // возвращает [4, 3, 7, 9]
// console.log (getAllPropValues("price"));      // возвращает [1300, 2700, 400, 1200]
// console.log (getAllPropValues("category"));   // возвращает []


// // ==== #20   ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
  
//     for (const product of products) {
//         if(product.name===productName){
//             return product['price']*product['quantity'];
//         }
//     }
//   return 0;
//     // Пиши код выше этой строки
//   };

// console.log (calculateTotalPrice("Blaster"));   // возвращает 0
// console.log (calculateTotalPrice("Radar"));     // возвращает 5200
// console.log (calculateTotalPrice("Droid"));     // возвращает 2800
// console.log (calculateTotalPrice("Grip"));      // возвращает 10800
// console.log (calculateTotalPrice("Scanner"));   // возвращает 8100


// ==== #21 ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today, tomorrow}=highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//   console.log(meanTemperature);


// //  ==== #22  ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {
//       yesterday, today, tomorrow, 
//       icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} =highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;


// //  ==== #23  ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {
//       yesterday:highYesterday, today:highToday,
//        tomorrow:highTomorrow, icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}=highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// //  ==== #24 ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   };

//   console.log(hexColors);
//   console.log(rgbColors);


// //  ==== #25 ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  
  
// const {
//     today: {
//     high:highToday, 
//     low:lowToday,
//     icon:todayIcon,
// },

// tomorrow: {
//     high:highTomorrow,
//     low:lowTomorrow, 
//     icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// }

// }=forecast;

// console.log(highToday);


// // ==== #26 ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const  {
//         today: {low:todayLow, high:todayHigh}, 
//        tomorrow: {low:tomorrowLow, high:tomorrowHigh},} = forecast;
  
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }

// console.log (calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));  // возвращает 28.5
// console.log (calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));  // возвращает 37


// // ==== #27  ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);


// //  ==== #28  ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// // ==== #29   ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};

// //  ==== #30 ЗАДАЧА. КАРТОЧКИ ЗАДАЧ

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line

//    const task = { completed, category, priority, ...data,}
//   return task;
//     // Change code above this line
//   }

// console.log (makeTask({}));   // возвращает { category: "General", priority: "Normal", completed: false }
// console.log (makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));   // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log (makeTask({ category: "Finance", text: "Take interest" }));   // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log (makeTask({ priority: "Low", text: "Choose shampoo" }));   // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log (makeTask({ text: "Buy bread" }));   // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }


// //  ==== #31  ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ

// // Change code below this line
// function add(...args) {
//     let total=0;
// for(const arg of args) {
//      total += arg;
// }
// return total;
//     // Change code above this line
//   }

// console.log (add(15, 27));                  // возвращает 42
// console.log (add(12, 4, 11, 48));           // возвращает 75
// console.log (add(32, 6, 13, 19, 8));        // возвращает 78
// console.log (add(74, 11, 62, 46, 12, 36));  // возвращает 241


// //  ==== #32  ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ

// // Change code below this line
// function addOverNum(number,...args) {
//     let total = 0;
  
//     for (const arg of args) {
//      if(arg>number){
//         total += arg;
//      };
//     }
  
//     return total;
//     // Change code above this line
//   }

// console.log (addOverNum(50, 15, 27));                   // возвращает 0
// console.log (addOverNum(10, 12, 4, 11, 48, 10, 8));     // возвращает 71
// console.log (addOverNum(15, 32, 6, 13, 19, 8));         // возвращает 51
// console.log (addOverNum(20, 74, 11, 62, 46, 12, 36));   // возвращает 218


// //  ==== #33  ЗАДАЧА. МАССИВ СОВПАДЕНИЙ

// // Change code below this line
// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line
  
//     for(const arg of args) {

//         if(array.includes(arg)){
//             matches.push(arg);
//         }
//     }
//     // Change code above this line
//     return matches;
//   }

// console.log (findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));                 // возвращает [1, 2]
// console.log (findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));        // возвращает [17, 89, 2]
// console.log (findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));   // возвращает [24, 9, 41]
// console.log (findMatches([63, 11, 8, 29], 4, 7, 16));                   // возвращает []


// //  ====  #34  МЕТОДЫ ОБЪЕКТА

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },

//     removeBook(bookName){ 
//     return `Deleting book ${bookName}`;
//     }, 

//     updateBook(oldName, newName){ 
//     return `Updating book ${oldName} to ${newName}`;
//     }, 
//     // Change code above this line
//   };

// console.log (bookShelf.getBooks());                         // возвращает строку "Возвращаем все книги"

// console.log (bookShelf.addBook("Haze"));                    //) возвращает строку "Adding book Haze"

// console.log (bookShelf.removeBook("Red sunset"));           // возвращает строку "Deleting book Red sunset"

// console.log (bookShelf.updateBook("Sands of dune", "Dune"));    // возвращает строку "Updating book Sands of dune to Dune"


// //  ==== #35 ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//   const bookIndex = this.books.indexOf(oldName);
//   this.books.splice(bookIndex, 1, newName);
  
  
//       // Change code above this line
//     },
//   };

  
//   bookShelf.updateBook("Haze", "Dungeon chronicles");
//   console.log(bookShelf.books);
//   bookShelf.updateBook("The last kingdom", "Dune");
//   console.log(bookShelf.books);


// //  ==== #36 ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»

// const atTheOldToad = {
//     // Change code below this line
  
//    potions:[],

  
//     // Change code above this line
//   };

//   console.log(atTheOldToad.potions);
  


// //  ==== # 37 ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//   getPotions() {
      
//     return this.potions;
//   }
//     // Change code above this line
//   };
  
//  console.log (atTheOldToad.getPotions());  // возвращает ["Speed potion", "Dragon breath", "Stone skin"]


// //  ==== #38  ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ 

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
  
//         this.potions.push(potionName);
//         return this.potions;
//       // Change code above this line
//     },
    
//   };

// console.log (atTheOldToad.addPotion("Invisibility"));  //, в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// console.log (atTheOldToad.addPotion("Power potion"));  //, в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]


// //  ==== #39 ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
  
//       const potionIndex =  this.potions.indexOf(potionName);
//        this.potions.splice(potionIndex,1);
//         return this.potions;
//       // Change code above this line
//     },
//   };

// console.log (atTheOldToad.removePotion("Dragon breath")); //, в свойстве potions будет массив ["Speed potion", Stone skin"]
// console.log (atTheOldToad.removePotion("Speed potion"));  //, в свойстве potions будет массив ["Stone skin"]


// //  ==== #40 ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//         const indexPotion = this.potions.indexOf(oldName);
//         this.potions.splice(indexPotion,1, newName);
//         return this.potions;
  
//       // Change code above this line
//     },
//   };

// console.log (atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));  //, в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// console.log (atTheOldToad.updatePotionName("Stone skin", "Invisibility"));  //, в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]


//  ==== #41 ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ

const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line

    getPotions() {
      return this.potions;
    },
    
    addPotion(newPotion) {
        
        for(const potion of this.potions ){
      if (potion.name===newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
     };
      this.potions.push(newPotion);
      return this.potions;
    },
    removePotion(potionName) {

      for (let i = 0; i < this.potions.length; i+=1) {
          const potion = this.potions[i];
              
        console.log(potion);
        
      if (potion.name===potionName){
        this.potions.splice(i, 1);
      return this.potions;
      }
      
    }return `Potion ${potionName} is not in inventory!`;
      
    },
    updatePotionName(oldName, newName) {

        for(const potion of this.potions){
        
      if (potion.name===oldName) {
        potion.name = newName;
        return this.potions;


      }
    }return `Potion ${oldName} is not in inventory!`;
      
    },
    // Change code above this line
  };

  console.log(atTheOldToad.getPotions());
  console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
  console.log(atTheOldToad.removePotion("Dragon breath")) //, будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ])
  console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));  //, в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ])
