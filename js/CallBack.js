// function myFunction(param){
//     param('Học lập trình');
// }

// function myCallback(value){
// console.log('value: ', value);
// }
// myFunction(myCallback)
// nguoi tao ra ham thuc thi ==> mình muốn cho người khác tái sử dụng
// function thucthi(cb){ 
//     //2 du lieu xu lý rat phuc tap
//     var number1 = 1;
//     var number2 = 9;
//     //toi cho phep ng khác co the su dung 2 bien number1, number2 tuy theo y thich cua ho
//     cb(number1, number2)
// }

// thucthi(function(num1, num2){
//     console.log(num1 + num2);

// });

// thucthi(function(num1, num2){
//     console.log(num1 - num2);

// });

//TÁI HIỆN PHUONG THỨC MAP
// Array.prototype.map2 = function(callback){
//     var output = [], arrayLength = this.length

//     for (var i = 0; i < arrayLength; i++) {// lặp qua
//       var result = callback(this[i], i);
//      output.push(result);
//     }
//     return output;
// }

// var courses = [
//     'Javascript', 
//     'PHP', 
//     'Ruby'
// ];

// var htmls = courses.map2(function(course){//truyền callback vào
//     return `<h2>${course}</h2>`
// });
// console.log(htmls.join(''));
 
// var htmls = courses.map(function(course){
//     return `<h2>${course}</h2>`
// });

// console.log(htmls.join(''));


// EMPTY ELEMENTS OF Array
// var courses = [
//     'Javascript', 
//     'PHP', 
//     'Ruby'
// ];

// courses.length = 10;

// // console.log(courses);

// for (var index in courses) {
//     console.log(courses[index]);
// }

// var courses = new Array(10);
// courses.push('Javascript','PHP')
// console.log(courses);

// for(var index in courses) {
//     console.log(courses[index]);
// }


// TÁI HIỆN MY FOREACH()
// Array.prototype.forEach2 = function(callback) {
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             // console.log(index, this.hasOwnProperty(index)); 
//             callback(this[index],index,this);
//         }
//     }
// }
// var courses =[
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// var output = courses.forEach2(function(course, index, array) {
//     console.log(course, index, array);
// });

// TAI HIEN MY FILTER()
// Array.prototype.filter2 = function(callback){
//     var output = [];
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//            var result = callback(this[index], index, this);
//            if(result){
//                 output.push(this[index]);
//            }
//         }
//     }
//     return output;
// };

// var courses = [
//     {
//         id: 1, 
//         name:'Javascript',
//         coin: 200
//     },
//     {
//         id: 2, 
//         name:'HTML, CSS',
//         coin: 990
//     },
//     {
//         id: 3, 
//         name:'Ruby',
//         coin: 700
//     },
//     {
//         id: 4, 
//         name:'PHP',
//         coin: 200
//     },
//     {
//         id: 5, 
//         name:'ReactJS',
//         coin: 200
//     },
//     {
//         id: 6, 
//         name:'Ruby',
//         coin: 880
//     },
// ];

// var filterCourses = courses.filter2(function(course, index, array){
//     return course.coin > 700;
// });
// console.log(filterCourses);

// TAI HIEN PHUONG THUC MY SOME()
// var output = false;
// Array.prototype.some2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//            if(callback(this[index], index, this)) {
//             output = true;
//             break;
//            }
//         }
//     }
//     return output;
// }
// var courses = [
//     {
//         name: 'Javascript',
//         coin: 700,
//         isFinish: true,
//     },
//     {
//         name:'PHP',
//         coin:860,
//         isFinish: false,
//     },
//     {
//         name:'Ruby',
//         coin:980,
//         isFinish: false,
//     },
// ];

// var result = courses.some2(function (course, index, array) {
//     return course.isFinish;
// });
// console.log(result);

// PHUONG THUC MY EVERY()

// Array.prototype.every2 = (function(callback){
//     var output = true;
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//           var result = callback(this[index], index, this)
//           if(!result){
//             output = false;
//             break;
//           }
//         }
//     }
//     return output;
// });
// var courses = [
//     {
//         name: 'Javascript',
//         coin: 700,
//         isFinish: true,
//     },
//     {
//         name:'PHP',
//         coin:860,
//         isFinish: false,
//     },
//     {
//         name:'Ruby',
//         coin:980,
//         isFinish: false,
//     },
// ];

// var result = courses.every2(function (course, index, array) {
//     return course.isFinish
// });
// console.log(result);
