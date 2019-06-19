
// такое поведение обусловлено тем, что объект является ссылочным типом данных
// в самой функции мы изменяем не объект "а", а собственно аргумент, который мы передаем в функцию
// если заменить в функиции аргумент с "а" на "b" например, тогда все станет наглядно понятно.
var a = {}; 
function clear(a) { 
      a.a = 10;
     a = null; 
     //console.log(a);
}; 

clear(a); 

console.log(a);

// задание 2
/// Что будет, почему, и как исправить
// в функции getFitered создана в объекте userService, соответственно этот объект будет являться контекстом вызова (this) 
// для этой функции. Данная функция возвращает метод filter, в котором в свою очередь вызывается анонимная функция обратного вызова,
// но так как она не создана непосредственно в объекте, ее контекст неопределен.
// самое простое решение -- передать в метод filter стрелочную функцию, т.к. она сама по себе не имеет собственного контекста вызова
// она обратится к контексту функции getFiltered
// если мы не хотим по каким либо соображениям использовать стрелочную функцию, можно использовать замыкания,
// и в функции getFiltered объявить переменную self, и присвоить ей значение this,
// а в коллбек функции указать self.currentFilter

var userService = { 
    currentFilter: 'active', 
    users: [ 
       {name: 'Alex', status: 'active'},
       {name: 'Nick', status: 'delete'}, 
    ], 
    // вариант 1
    getFiltered: function () { 
       return this.users.filter((user) => { 
          return user.status === this.currentFilter;
       });
     }, 
    };
    
    console.log(userService.getFiltered()); 


var userService = { 
    currentFilter: 'active', 
    users: [ 
       {name: 'Alex', status: 'active'},
       {name: 'Nick', status: 'delete'}, 
    ], 
    // вариант 2
    getFiltered: function () { 
        let self = this;
       return this.users.filter(function(user) { 
          return user.status === self.currentFilter;
       });
     }, 
    };
    
    console.log(userService.getFiltered()); 

// Задание 3
calc(123.45) // 15
calc(111.1111) // 7 
calc(123) // 6

// привел аргумент функции к строке
// определил регулярное выражение, которое будет искать точку
// методом String.replace убрал лишний знак
// в цикле суммировал каждый элемент строки, приведя его к числу.

function calc(num) { 
let string = num.toString();
    let reg = /[.,]/g;
    let newString = string.replace(reg, '');
    let sum = 0;
    for (let i = 0; i < newString.length; i++) {
        sum += +newString[i];
    }
    console.log(sum);
    return sum;
 } 