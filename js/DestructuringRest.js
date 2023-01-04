// var array = ["Javascript", "Java", "Ruby"]

// var [a, ...rest] = array;

// console.log(a);
// console.log(rest);

// var course = {
//     name: "JavaScript",
//     price: 1000,
//     img:"so deep",
//     // description: "description value",
// }
// var {name,...rest} = course;
// var {name, ...newObject} = course; //xóa đi 1 key name
// var {name, description ="default description"} = course; //xóa đi 1 key name
// console.log(name);
// console.log(rest);
// console.log(newObject);
// console.log(description);


// function logger(a, b, c, ...params){
//     console.log(params);
// }

// logger(1,2,3,4,5,6,7,8,9);


// function logger({name, price, ...rest}){
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger({
//     name: "JavaScript",
//     price: 1000,
//     img: "so deep",
// })

// function logger([name, price, ...rest]){
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger([2, 6, 9]);