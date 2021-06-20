// Object kiểu đối tượng

var person = {
    // key: value
    // object has two components: properies and methods
    name: 'Đức',
    age: 22,
    class: "fe68",
    greeting: function(){
        console.log('Hello!');
    }
}
console.log(person.name);
console.log(person.class);
console.log(person.greeting());
console.log(person['age']);
person.name = "Hoàng";
console.log(person);