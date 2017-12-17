// const person = {
//     name: 'Eduardo',
//     age: 22,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: nome = 'anonymous', age, location} = person;

// //const name = person.name;
// //const age = person.age;
// console.log(`${nome} is ${age}.`);

// const {city, temp: kk} = location;
// if (city && kk){
//     console.log(`I'm from ${city}, it is ${kk} celsius here`);
// }

// const book = {
//     title: 'lEgo is the enemy',
//     author: 'Santa Maria',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self'} = book.publisher;

// console.log(publisherName);



// Array destructuring

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '213'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price] = item;
console.log(`A medium ${coffee} costs ${price}`);