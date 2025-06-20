Функція makePizza повертає рядок з повідомленням клієнту.

Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
 а у змінній pointer було посилання на функцію makePizza.

 function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

*У першому лозі ми викликаємо функцію greet за допомогою круглих дужок,
 і в консоль виводиться результат її виконання.

 *У другому лозі передається посилання на функцію, а не результат її виклику (відсутні круглі дужки),
  тому в консоль виводиться внутрішнє представлення нашої функції. Це означає, що посилання
   на функцію можна записати у змінну або передати як аргумент іншій функції.

   *****************************************

 ---------  Колбек-функції  ----------

 Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції 
 як аргумент, а та у свою чергу використовує передану функцію. Ім'я параметра для колбека 
 може бути довільним, головне пам'ятати, що значенням буде функція.

 ---------- задача ------------

 Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) 
колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza 
будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци,
 що доставляється.

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName) ;
}

------------Інлайн-колбеки-------------
 ---------- задача ------------
 Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію. 
 Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн
 колбек-функцію eatPizza(pizzaName). Колбек eatPizza логує рядок "Eating pizza <назва піци>", 
 де <назва піци> це значення параметра pizzaName.

 function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});



-----------  Метод forEach(callback) -------------
 це метод перебирання масиву, який використовується для заміни циклів 
 for і for...of в роботі з колекцією.

  ---------- задача ------------

  Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, 
  і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається 
  як результат роботи функції.

Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає 
до totalPrice значення поточного елемента масива orderedItems.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function(item) {
    totalPrice += item;
  });

  return totalPrice;
}

 ---------- задача ------------

Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає 
новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення 
другого параметра числа value. Якщо таких значень не буде знайдено, функція повертає порожній масив.

Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала
 метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function(number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

--------  ПРАКТИЧНЕ ЗАНЯТТЯ  -------

Функція як значення
Колбек-функції
Інлайн-колбеки


Callback функція - це звичайна функція. 

function fnA(num) {
  return num * 10;
}

//      1   2
function foo(a, b, callback) {
  return a + b;
}

foo(1, 2, fnA);  //// Функція яка передається в іншу фукцію як аргумент називається callback

fnA на 126 рядку була фунцією а на 135 рядку стала аргументом функції , fnA на 135 рядку це callback


Внизу показан приклад з майже однаковими функціями в яких відрізняється лише те що в однієї
в const result = a + b; (потрібно додавання) а в другої  const result = a - b; (потрібно віднімання)
і через цю маленьку операцію ми робимо цілу копію нашої функції, а callback функція саме допомагає 
нам цього уникнути, а саме можна передати в функцію calc1 якусь іншу функцію яка буде при
одному виклику рахувати суму і повертати результат її, а при іншому виклику додати іншу функцію
як аргумент  і вона буде повертати різницю.

//function calc1(a, b) {
  //console.log("hello");
  //console.log("lalala");
  //const result = a + b;
  //console.log(result);
//}

// function calc2(a, b) {
//   console.log("hello");
//   console.log("lalala");
//   const result = a - b;
//   console.log(result);
// }



function calc1(a, b, callback) {
  console.log("hello");
  console.log("lalala");
  const result = callback (a, b);
  console.log(result);
}

calc1(10, 2, function (x, y) {
  return x + y;
})

calc1(5, 3, function(x, y) {
  return x - y;
})



 * Напишіть функцію each(array, callback), яка першим параметром очікує масив
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція 
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 
function each(array, callback) {
  const newArr = [];

  for (const num of array) {
    newArr.push(callback(num));
  }

  return newArr;
}

console.log(each([64, 49, 36, 25, 16], function(value) {
  return value * 2;
}));

console.log(each([64, 49, 36, 25, 16], function(value) {
  return value - 10;
}));

console.log(each([64, 49, 36, 25, 16], function(value) {
  return Math.sqrt(value);
}));


-----------  Стрілочні функції  ------------ ТЕОРІЯ ---------

Стрілочні функції (сленг — “стрілки”) мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.

Усі стрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.

// Звичайне оголошення функції
function classicAdd(a, b, c) {
  return a + b + c;
}

// Те саме стрілочною функцією
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

 ---------- задача ------------ 

Ключове слово function не використовується
Одразу зазначається оголошення параметрів
Після параметрів використовується символ => і тіло функції у фігурних дужках

Виконай рефакторинг функції calculateTotalPrice() таким чином, 
щоб вона була оголошена як стрілочна.

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

--------Неявне повернення----------

У стрілочної функції після символу => знаходиться її тіло. 
Існує два способи запису: з фігурними дужками і без них.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;

---------- задача ------------ 

Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

Запис без фігурних дужок!!!!!!!!

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

---------Псевдомасив arguments-----------
У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи.
 Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

 const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

---------- задача ------------ 

Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на 
стрілочну функцію. Також заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

---------- задача ------------ 

Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

--------  ПРАКТИЧНЕ ЗАНЯТТЯ  -------  Стрілочні функції  --------

-------  Метод forEach(callback) ------
Поелементно перебирає оригінальний масив. Нічого не повертає
Замінює класичний for, якщо не потрібно переривати цикл


---------- задача ------------ 

* Виконайте рефакторинг коду за допомогою методу forEach та стрілоч-

function calculateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
} // це звичайна класична функція, ми перетворимо на стрілочну нижче

const calculateAveragee = (...rest) => {
  let total = 0;
  rest.forEach(num => total += num);
  return total / rest.length;
}


console.log(calculateAverage(1, 2, 3, 4));
console.log(calculateAverage(14, 8, 2));
console.log(calculateAverage(27, 43, 2, 8, 36));


----------Методи map і flatMap-------------

Функція з побічними ефектами — це функція, яка в процесі виконання може:

змінювати або використовувати глобальні змінні
змінювати значення аргументів посилального типу
виконувати операції введення-виведення тощо

Чиста функція (pure function) — це функція, результат якої залежить тільки від 
значень переданих аргументів. За умови однакових аргументів вона завжди повертає
 один і той самий результат і не має побічних ефектів, тобто не змінює значення 
 аргументів.

---------- задача ------------ 

Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює 
кожен елемент, значення якого - це парне число, додаючи до нього значення
 параметра value, який точно є числом.

Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив
 чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими
  значеннями.

  function changeEven(numbers, value) {
  const newArray = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
      newArray.push(number);
    }
  }

  return newArray;
}

---------- задача ------------ 

В масиві planets зберігаються назви планет. Доповни код таким чином,
 щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв
  кожної планети з масиву planets. Обов'язково використовуй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);


---------- задача ------------ 
Створити масив який повертає назву моделей всіх авто

const allCars = [
  { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
  { make: "Honda", model: "Accord", amount: 10, price: 22455 },
  { make: "Mazda", model: "CX-9", amount: 8, price: 31520 },
  { make: "Mazda", model: "Mazda6", amount: 7, price: 24195 },
  { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
  { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
  { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
  { make: "Ford", model: "F-150", amount: 11, price: 27110 },
  { make: "Ford", model: "Fusion", amount: 8, price: 22120 },
  { make: "Ford", model: "Explorer", amount: 6, price: 31660 }
];

const getModels = (cars) => {
  const arr = [];

  cars.forEach(item => {
    arr.push(item.model);
  });

  return arr;
}

console.log(getModels(allCars));

*********************
Другий варіант вирішення цієї самої задачі за допомогою метода map
*********************

const getModels = (cars) => {
  return cars.map(item => item.model);
}

console.log(getModels(allCars));


--------  Методи filter і find  ---------

 /**
 * Нехай функція filterByPrice повертає масив автомобілів, ціна яких менша за
 * значення параметра threshold.
 */

const filterByPrice = (cars, threshold) => {
  return cars.filter((item) => item.price < threshold);
};

console.table(filterByPrice(allCars, 30000));

---------- задача ------------ 

const cars = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "suv", price: 31660 }
];

// Шукаємо машину за моделлю


const getByModel = (array, model) => {
  return array.find(item => item.model == model);
}

console.log(getByModel(cars, "Sequoia"));
console.log(getByModel(cars, "Fusion"));

Методи filter і find
Метод filter()



Метод filter(callback) використовується для єдиної операції — фільтрації масиву. 
Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції за певним критерієм.

---------- задача ------------

Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers,
 а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);


---------- задача ------------

Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
 Використовуючи метод filter(), доповни код таким чином, щоб:

У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) 
більший за або дорівнює значенню змінної MIN_RATING.
У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям
 (властивість author), яке збігається зі значенням у змінній AUTHOR.


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

---------- задача ------------

Оголошена змінна getUsersWithEyeColor
Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
Для перебирання параметра users використовується метод filter()
Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив


const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

---------- задача ------------

Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб повернути масив користувачів, 
вік (збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.

Поради:

Використай метод filter() для створення нового масиву, в якому зберігаються тільки елементи, 
які задовольняють певну умову.
Використай оператори >= (більше або дорівнює) та <= (менше або дорівнює), щоб відфільтрувати 
користувачів, вік яких точно потрапляє у діапазон між мінімальним minAge та максимальним maxAge значеннями.

const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

********************
Метод find()

Ти вже знаєш, що метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову.

Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, 
після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), 
шукає до першого збігу.

---------- задача ------------

Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.

Використовуючи метод find(), доповни код таким чином, щоб:

У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі 
значенням змінної BOOK_TITLE.
У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі 
значенням змінної AUTHOR.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);




----------  Методи every, some і reduce  -----------------
Метод every()

Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.

Що повертає метод every()?

true, якщо всі елементи масиву задовольняють умову, і false, якщо хоча б один елемент масиву 
не задовольняє умову

---------- задача ------------

Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі 
зараз активні (властивість isActive) і повертала true або false.

const isEveryUserActive = (users) => {
  return users.every(user => user.isActive);
};

Метод some()

Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

Що повертає метод some()?

true, якщо хоча б один елемент масиву задовольняє умову, та false, якщо жоден елемент 
масиву не задовольняє умову

---------- задача ------------

Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність 
хоча б одного активного користувача (властивість isActive) і повертала true або false.

const isAnyUserActive = (users) => {
  return users.some(user => user.isActive);
};

Метод reduce()

Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента 
масиву із збереженням проміжного результату. Трохи складніший за інші методи для засвоєння,
 але результат вартий того.

---------- задача ------------

Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, 
одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця, 
а значення - його ігровий час. У змінній playtimes зберігається масив значень
 об'єкта players, тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime 
 буде середній час, проведений одним гравцем в іграх.

Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву 
playtimes. Використовуй метод reduce().

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((total, time) => total + time, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
************
Метод reduce() і масив об'єктів
*************
---------- задача ------------

У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.

Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

Поради:

Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем.
Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);


---------- задача ------------


Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала
 суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};

***********************************************************************
Метод toSorted
Метод toSorted()



Метод toSorted() сортує елементи масиву.

---------- задача ------------

Змінна releaseDates - це масив чисел, років видання книг. Змінна authors - це масив рядків,
 авторів книг.

Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, 
відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, 
відсортована за алфавітом. Використовуй метод toSorted()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();

const alphabeticalAuthors = authors.toSorted();


---------- задача ------------

Змінна releaseDates - це масив чисел, років видання книг.

Онлайн бібліотеці необхідно відображати книги, відсортовані за датою видання, за їх зростанням або
 спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву 
 releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, 
 відсортована за спаданням.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

---------- задача ------------

Змінна authors - це масив рядків, авторів книг.

Онлайн бібліотеці необхідно відображати книги, відсортовані за автором в алфавітному і в 

зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder
 вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
  відсортована у зворотному алфавітному порядку.

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

---------- задача ------------

Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

Доповни код таким чином, щоб:

У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];


const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

// Сортування за автором (Z → A)
const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

// Сортування за зростанням рейтингу
const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// Сортування за спаданням рейтингу
const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

---------- задача ------------

Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, 
рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];

const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted((a, b) => a.localeCompare(b));




































