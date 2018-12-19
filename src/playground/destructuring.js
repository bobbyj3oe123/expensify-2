// const person = {
//   name: 'Ryan',
//   age: 26,
//   location: {
//     city: 'San Diego',
//     temp: 88
//   }
// };
//
// const { name = 'anonymous', age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// const address = ['1299 S Junipero Street', 'San Diego', 'California', '19147'];
// const [, city, state] = address;
//
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [hotCoffee, ,md] = item;

console.log(`A medium ${hotCoffee} costs ${md}`);