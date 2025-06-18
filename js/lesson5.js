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












