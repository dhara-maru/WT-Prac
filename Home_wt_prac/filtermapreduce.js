const langs = ['js', 'cpp', 'java', 'python', 'dart']

// const values = langs.forEach( (items) => {
//     console.log(items);
//     return items
// })           //returning will give UNDEFINED in forEach. if we have to do some operations on each or any item, it would be impossible like this

// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]

const newnums = nums.filter( (num) => {
    return num > 4
})

// console.log(newnums);

const users = [
    { id: 1, name: "Alice", age: 25, city: "New York", interests: ["reading", "traveling", "hiking"] },
    { id: 2, name: "Bob", age: 30, city: "Chicago", interests: ["cooking", "hiking", "hiking"] },
    { id: 3, name: "Charlie", age: 35, city: "San Francisco", interests: ["music", "traveling", "hiking"] },
    { id: 4, name: "David", age: 40, city: "Seattle", interests: ["gaming", "reading"] },
    { id: 5, name: "Eve", age: 22, city: "Los Angeles", interests: ["sports", "cooking"] },
    { id: 6, name: "Frank", age: 27, city: "New York", interests: ["reading", "gaming", "hiking"] },
    { id: 7, name: "Grace", age: 32, city: "Chicago", interests: ["traveling", "music"] },
    { id: 8, name: "Hannah", age: 28, city: "San Francisco", interests: ["hiking", "cooking", "hiking"] },
    { id: 9, name: "Isaac", age: 24, city: "Seattle", interests: ["sports", "music"] },
    { id: 10, name: "Jack", age: 26, city: "Los Angeles", interests: ["gaming", "reading", "hiking"] }
];

//const myuser = users.filter( (u) => u.age > 25)
// const myuser = users.filter ( (u) => u.interests.includes('reading'))
// const youngTravelers = users.filter(user => user.age < 30 && user.interests.includes("traveling"));
// const newyorks = users.filter((u) => u.city == 'New York')
// console.log(newyorks);

// console.log(myuser);
// const cs = users.filter( (u) => u.city == 'Chicago' || u.city == 'San Francisco')
// console.log(cs);

const ints2 = users.filter ((u) => u.interests.length == 2)
console.log(ints2);

