// const name = "John";
// let age = 25;
// const hasHobbies = true;

// age = 30;

// ** Arrow functions

// const summarizeUser = function (userName, userAge, userHasHobbies) {
//     return('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);
// }

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);
}

const add = (a,b) => a + b; 
// const add = (a,b) => {
//     return a + b;
// }

console.log(summarizeUser(name, age, hasHobbies));

// 2. Arrow functions and this keyword

// const person2 = {
//     name: 'John',
//     age: 25,
//     greet: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// // this.name is undefined because arrow functions don't bind their own 'this' value
// };

const person = {
    // key value pair
    name: 'John',
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// 3. Arrays and Array Methods
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies);
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// 3.1 Primitive Types and Reference Types
hobbies.push('Programming');
console.log(hobbies);
// reason why hobbies has not error is because it is a reference type -> the pointer to the memory location is not changed
// reference types save the pointer to the memory location, therefore, the memory location is not changed, even if the value is changed


// 4. Spread and Rest Operators

// 4.1 Spread Operator: 배열이나 객체에서 원소나 속성을 추출하는 데 사용함.
const copiedPerson = {...person}; // person 이 가지고 있는 key value pair를 copiedPerson에 복사
const copiedArray = hobbies.slice(); // hobbies array를 copiedArray에 복사
const copiedArray2 = [hobbies]; // hobbies array를 copiedArray2에 복사
const copiedArray3 = [...hobbies]; // hobbies array를 copiedArray3에 복사

// 4.2 Rest Operator: 여러 인수를 하나의 배열로 묶어줌.
const toArray = (...args) => {
    return args; // input의 갯수에 상관없이 모든 input을 array로 만들어서 return
}; 
console.log(toArray(1,2,3,4)); // toArray 함수에 1,2,3,4를 넣어서 실행. 


// 5. Destructuring: 배열이나 객체의 속성을 해체하여 변수로 할당하는 것.

// // personData object를 받아서 name key의 value를 출력
// const printName = (personData) => {
//     console.log(personData.name);
// };
const printName = ({name}) => {
    console.log(name);
};

const { name, age } = person; // person object에서 name을 가져와서 name에 할당
console.log(name, age); // John, 25

const [hobby1, hobby2] = hobbies; // hobbies array에서 첫번째, 두번째 원소를 hobby1, hobby2에 할당
console.log(hobby1, hobby2); // Sports, Cooking

// 6. Async Code & Promises

const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

setTimeout(() => {
    console.log('Timer is done!');
}, 2000); // 2초 후에 'Timer is done!' 출력


setTimeout(()=>{
    console.log('Timer is done!');
}, 1500);

// 7. Template Literals