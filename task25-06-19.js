var arr = [];

for (var i = 0; i < 5; i++) {
    var f = function () {
        var j = i;
        return arr.push(function() {
            console.log(j);
        });
    }
    f();
}
console.log(arr.length);

for (var i = 0; i < 5; i++) {
    var j = i;
    var test = function() {
        console.log(this);
    }
    arr.push(test.bind(j));
}

arr[3]();




class A {
	static x(){};
    constructor(name) {
        this.name = name;
    }

    f1() {}
}

class B extends A {
    static z = 325;

    constructor(name, age) {
        super(name);
        this.age = age;
    }

    f2(){}
}

function A(name) {
    this.name = name;
}
A.x = function() {};
A.prototype.f1 = function() {};

function B(age) {
    A.call(this, name);
    this.age = age;
}

B.z = 325;
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.f2 = function() {};

// Задание 2

function Bus() {}
const bus = new Bus();

Bus.prototype === bus.prototype // {} === undefined  -->  false
Bus.__proto__ === bus.prototype // [Function] === undefined --> false
Bus.prototype === bus.__proto__ // {} === {} --> true
Bus.__proto__ === bus.__proto__ // [Function] === {} --> false

// Задание 3


function isMonogamy(arr) {
    const isDecreasing = arr.every((el, i) => {
        if (arr[i + 1] !== undefined) {
            return el >= arr[i + 1] ;
        } else {
            return true;
        }
    });
    const isIncreasing = arr.every((el, i) => {
        if (arr[i + 1] !== undefined) {
            return el <= arr[i + 1] ;
        } else {
            return true;
        }
    });
    console.log(isDecreasing || isIncreasing);
    return isDecreasing || isIncreasing;
}

isMonogamy([1, 1, 2, 4, 4]) // true
isMonogamy([7, 4, 3, 2, 0]) // true
isMonogamy([1, 1, 1]) // true
isMonogamy([1, 2, 0]) // false
isMonogamy([1, 2, 3, 1, 2, 3]) // false

