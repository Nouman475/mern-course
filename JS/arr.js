// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// push add at last
// pop  removes from last
// shift remove from start
// unshift add at start

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();

// const arr = [1,2,3,4,5,6];
// let remEle = arr.shift()
// arr.unshift("Kiwi")

// let merged_arr = fruits2.concat(arr)

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();

// map

let myArr = [1, 2, 3, 4, 5];
let newArr = myArr.map(ele => ele * ele);

let filteredArr = myArr.filter((ele) => {
  return ele % 2 != 0;
});

console.log(filteredArr);
