console.log('Hello world');
// This is my comment 
/**
 * variable and datatypes:
 * primitive type: string, number, boolean, undefined, null, bigint, symbol
 * object
 */

var fullName = 'welcome to my decktop';
console.log(typeof fullName);
var age = 18;
console.log(typeof age);
var isStudent = true;
console.log(typeof isStudent);
var height;
console.log(height);
var content = document.getElementById('title');
console.log(content.innerHTML);
var tagName = document.getElementsByTagName('h2');
console.log(tagName);
var elm = document.getElementById("batden");
var elm2 = document.getElementById("tatden");
elm.addEventListener('click', function(){
    document.getElementById('img').src = "./img/pic_bulbon.gif";
});
elm2.addEventListener('click', function(){
    document.getElementById('img').src = "./img/pic_bulboff.gif";
});

