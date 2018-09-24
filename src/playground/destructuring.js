/*Object destructuring*/


// const Person={
//   name:'sasi',
//   age:28,
//   location:{
//       city:'Kansas',
//       temp:'79'
//   }
// }

// const {name="Anonymous",age} = Person;

// const{city,temp}= Person.location;

// console.log(`${name} is ${age}`);

// if(city && temp)
// {
//     console.log(`${city} has temp of ${temp}`);
// }


// const book={
//     title:'Ego is your enemy',
//     author:'Rayn Holiday',
//     publisher:{
//         //name:'Penquin'
//     }
// };


// const {name:publisherName='Self-Published'}=book.publisher;

// console.log(`${publisherName}`);


                     /*Array Destructuring */

const item =['Coffee(hot)','$2.00','$2.50','$2.75'];

const [itemName, ,mdprice,]=item;
console.log(`A medium ${itemName} costs ${mdprice}`);