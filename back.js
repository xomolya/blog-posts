// var names = ['vasa', 'pitya', 'olya', 'anya' ] ;
// var cities = ['Dnepr', 'Kyiv', 'Odessa', 'Lviv'];





/*function Sum() {
    var s = 0;
for(var val of arguments) {
   s += val;
 }
  return s;
}
 var res = Sum(1, 5, 8, 4, 5, 8);
console.log(res); */





// function Sum(a, b) {
    //var res = a * a + b * b;
    //return res;
    //}
//var r = Sum(2, 4)
//console.log(r);





// names.push('ann', 'pit');
// names.unshift('ann'); добавить эелемент сначала
// names.shift (); убрать элемент сначала
// names.pop(); убрать эелемент с конца
// names.splice(1,2); удалить элемент с указанной позиции...
// var newNames = names.slice(2, 4); показать только виделенные значения



/*var + prompt = ('input value > 0 < 100');
consol.log (typeof b);
var res = b === 100 || b === 200;
if (res) {
    alert ('good');
} else {
alert ('bad');
}
var a = 7;
var b = 5;
var res = a || b;
console.log(res)
if () {
    alert('hi');
}
*/



/*var names = ['Vasa', 'Pitya', 'Anya', 'Olya'];
var list = document.getElementById('list-names');
var html = '';
for (var name of names) {
    html += '<li>' + name + '</li>';
}
list.innerHTML = html;
console.log(html);*/



/*function sum() {
    alert(10)
}
var btn = document.querySelector('button');
btn.onclick = sum;

console.log(btn);*/





/*Замыкание функции 
function Parent() {
    var a = 0;
    function child() {
        a++
        return a;
    }
    return child;
}
var a = Parent();
console.log(a());
console.log(a());
console.log(a());*/


/* наследование 
var Pay = {
    name: "PAY",
    send: function () {
        console.log("send");
    }
}
var privat = {
    buy: function () {
        console.log("privat buy");
    }
}
var pumb = {
    name: "PUMB",
    buy: function () {
        console.log("pumb buy");
    }
}
pumb.__proto__ = Pay;
pumb.send(); */



//- КОНСТРУКТОР - 
/*var car = { name: 'Audi - 6', doors: 4 };      
var car2 = {}
function BuildCar(nameCar) {
    var car = { name: nameCar, doors: 4 }
    console.log(this);
    return car;
}
var a6 = new BuildCar('Audi - 6');
var a8 = new BuildCar('Audi - 8');
console.log(a8);*/



/*var btn = document.querySelector('#myBtn');
var show = function () {

    if (this.style.backgroundColor === 'red') {
        this.style.backgroundColor = 'green';
    }
    else {
        this.style.backgroundColor = 'red';
    }
    console.log(this);
}

btn.onclick = show;

console.dir(btn)*/


/*var btn = document.querySelector('#myBtn');
var show = function () {

    if (this.className === 'clicked') {
        this.className = 'unclicked';
    }
    else {
        this.className = 'clicked';
    }
    console.log(this);
}

btn.onclick = show;

console.dir(btn)*/






/*var btn = document.querySelector('#myBtn');    кнопка которая меняет цвет с счетчиком
var con = document.querySelector('#container');

var counter = 0;
btn.onclick = function () {
    counter++;
    con.innerHTML += `${counter}<p>Hello user</p>`
}*/
