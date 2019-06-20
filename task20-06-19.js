// // Задание 1 
// /// Что будет, почему, и как исправить
// const o = { 
//     a: 10,
//     b: 20,
//     sum() { 
//       console.log(this);
//       console.log(this.a + this.b);
//      },
//   }; 
 
//  const o1 = {
//     a: 1,
//     b: 2, 
//     sum: o.sum 
//  }; 

//  o1.sum(); // ??? метод sum вызван в контексте объекта о1, поэтому this будет равно = {a:1, b:2}
//  setTimeout(() => o.sum(), 5000); // метод о.sum передан в методо SetTimeout, соответственно он будет вызван в контексте объекта 
//  // Timeout, у которого нет свойств a и b, соответственно возвращается Nan
//  // Один из способов решения проблемы является жесткая фиксация контекста вызова метода o.sum при помощи .bind()
//  // либо можно передать первым аргументом функции SetTimeout коллбек в виде стрелочной функции, которая вернет вызов метода o.sum(),
//  // так как у стрелочной функции собственного контекста нет, она обратится к контексту, в котором была создана.


// // Задание 2

// // Что выведется в консоль и почему?

// function foo() {
//     /* 1 */ console.log('script end');
//     setTimeout(function() {  
//        /* 5 */ console.log('setTimeout');  
//      }, 0);  
   
//      Promise.resolve()  
//        .then(function() {  
//         /* 3 */ console.log('promise1');  
//        })  
//        .then(function() {  
//         /* 4 */ console.log('promise2');  
//        });  
   
//     /* 2 */ console.log('script start');  
//  }  

//  // console.log('script end') и console.log('script start') выполнятся сразу, т.к. они синхронные
//  // macrotasks [setTimeout] -- будет выполнен только когда все задачи из микротаскс будут выполнены
//  // microtasks [Promise] -- будет выполнен промис, выполнится метод then(promise1) затем then(promise2)



//  foo();
// // 1-м будет выведена строка 


// Задание 3

// // Что выведется в консоль и почему?
// Promise.resolve('BatMan')
//     .then(function (val /* получит Бетмен */) {
//         console.log('then', val); // соответственно выведет 'then batman'
//         throw new Error('Error happen'); // пробросит ошибку
//         return 'OMG!';
//     })
//     .then((val) => console.log('then', val))
//     .catch((val) => { // ловит ошибку
//         console.log('catch', val); // выводит строку catch Error и стек ошибки
//         return Promise.reject(); // возвращает неуспешно завершенный promise
//     })
//     .then(firstHandler, secondHandler) // соответственно в этом then будет вызван второй аргумент
//     .then(firstHandler, secondHandler) // secondHandler вернет undefined , что и попадет в значение val
//     .then(firstHandler, secondHandler); // firstHandler вернет undefined , что и попадет в значение val

// function firstHandler(val) {
//     console.log('first', val);
// }

// function secondHandler(val) {
//     console.log('second', val);
// }

// Задание 4

// Что выведется в консоль и почему?
// var prom1 = Promise.resolve('Error happen');

// // 1
// prom1
// .then((res) => {
// 	console.log(res + '1'); // Error happen1
// 	throw new Error('error');
// })
// .then(null, (err) => console.log(err)); // вернет null т.к. промис зарезолвлен

// // 2
// prom1
// .then((res) => {
// 	console.log(res + '2'); // Error happen2 т.к. промис зарезолвлен
// 	throw new Error('error');
// }, (err) => console.log(err)); // не будет выполнена

// // 3
// prom1
// .then((res) => {
// 	console.log(res + '2'); // Error happen2
// 	throw new Error('error'); // бросит ошибку
// })
// .catch((err) => console.log(err)); // ошибка будет словлена здесь, выведет error и стек ошибки

var prom2 = Promise.reject('Error happen');
// при каждом вызове методов у prom2 вернется причина реджекта ('Error happen'), т.к. изначально у промиса был вызван метод reject
// 1
prom2
.then((res) => {
	console.log(res + '1'); 
	throw new Error('error');
})
.then(null, (err) => console.log(err));

// 2
prom2
.then((res) => {
	console.log(res + '2');
	throw new Error('error');
}, (err) => console.log(err)); 

// 3
prom2
.then((res) => {
	console.log(res + '2'); 
	throw new Error('error');
})
.catch((err) => console.log(err)); 