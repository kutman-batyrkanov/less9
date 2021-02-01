// function User(firstName, lastName, prefix = "") {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.prefix = prefix
//     this.sayHello = function() {
//         document.write("Good morning" + "<br>");
//     }
// };


// let user1 = new User("Elon", "Musk");
// let user2 = new User("Jeff", "Besos");
// let user3 = new User("Jacky", "Chan");
// let user4 = new User("Bruce", "Lee");
// let user5 = new User("Rayim", "Million");



// user.sayHello();
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();
// user5.sayHello();



// function Apple(name, weight = 0) {
//     this.name = name;
//     this.weight = weight;

    // this.toString = function() {
    //     return "Apple type" + this.name;
    // }
//     this[Symbol.toPrimitive] = function(hint) {
//         switch (hint) {
//             default:
//             case 'string': 
//                    return this.name + "tomato";
//                    default:
//             case 'number': 
//                return this.weight;
//         }
// };
// function Tomato(name, weight) {
//     this.name = name;
//     this.weight = weight;   

//     // this.toString = function() {
//     //     return "Tomato type" + this.name;
//     // }
//     this[Symbol.toPrimitive] = function(hint) {
//         switch (hint) {
//             default:
//             case 'string': return this.name + "tomato";
//             case 'number': return this.weight;
//         }
//     }
// }

// let apple1 = new Apple("Aport", 150);
// let apple2 = new Apple("Nalivka", 100);
// let tomato1 = new Tomato("Cherri", 50);
// let tomato2 = new Tomato("Chernyi prince", 100);


let fruits = ['Apple', "Bananas", "Strawberries", 123, true , undefined, null, {}, []];


// document.write(fruits[2]);
fruits.push("Pear");
fruits.unshift("Lemon");
fruits.pop();
fruits.shift();
// document.write(fruits.length);
console.log(fruits);


fruits[fruits.length - 1];

for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}