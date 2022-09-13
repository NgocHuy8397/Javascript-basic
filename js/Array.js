//1.Tạo mảng

// var languages = new Array('Javascript', 'PHP', 'Ruby', null, undefined, function(){

// })

// console.log(languages);


// var languages = ['Javascript', 'PHP', 'Ruby', null, undefined, function(){

// }];
// console.log(Array.isArray(new Array)); // cach kiểm tra Array

// console.log(languages[2]);

//2.Làm việc với Array

var languages = [
    'Javascript', 
    'PHP', 
    'Ruby', 
];

//1.Tostring chuyển từ mảng sang chuỗi
// console.log(typeof languages.toString());

//2.Join  chuyển từ mảng sang chuỗi
// console.log(languages.join(', '));

//3.Pop xóa element cuối mảng và trả về phần tử đã xóa

// console.log(languages.pop());
// console.log(languages);


//4.Push thêm một hoặc nhiều phần tử vào cuối mảng

// console.log(languages.push('Dart'));
// console.log(languages);

//5.Shift xóa phần tử đầu mảng và trả về phần tử đã xóa

// console.log(languages.shift());
// console.log(languages);

//6.Unshift thêm một hoac nhiều phần tử vào đầu mảng và return về độ dài mảng

// console.log(languages.unshift('Dart','Java'));
// console.log(languages);

//7.Splicing xóa tách hoặc chèn phần tử mới vào mảng

// languages.splice(1, 1, 'Dart');
// console.log(languages);


//8.Concat nối mảng

// var languages2 = [
//     'Dart',
//     'java'
// ];

// console.log(languages.concat(languages2));

//9.Slicing cắt một vài element

// console.log(languages.slice(0));

//LÀM VIỆC VỚI MẢNG PHẦN 2

/**
 * Array methods;
 * forEach() duyệt qua từng phần tử của mảng
 * every() trả về True || false, tất cả phần tử trong mảng thõa mãn đk 
 * some() chỉ cần 1 phần tử thõa mãn đk thì thực thi
 * find() tìm kiếm và trả về 1 phần tử đúng
 * filter() tìm kiếm và trả về tất cả phần tử thõa mãn
 * map() dể hiện thị ra giao diện 
 * reduce() tính tổng
 */

var courses = [
    {
        id: 1, 
        name:'Javascript',
        coin: 200
    },
    {
        id: 2, 
        name:'HTML, CSS',
        coin: 0
    },
    {
        id: 3, 
        name:'Ruby',
        coin: 0
    },
    {
        id: 4, 
        name:'PHP',
        coin: 200
    },
    {
        id: 5, 
        name:'ReactJS',
        coin: 200
    },
    {
        id: 6, 
        name:'Ruby',
        coin: 0
    },
];

// .forEach
// courses.forEach(function(course, index) {
//     console.log(index, course);
// });

// .EVERY
// var isFree = courses.every(function(course, index) {
//     console.log(index);
//    return course.coin === 0;
// });

// console.log(isFree);

// .SOME
// var isFree = courses.some(function(course, index) {
//     console.log(index);
//    return course.coin === 0;
// });

// console.log(isFree);

// .FIND
// var listCourses = courses.find(function(course, index) {
//     console.log(index);
//    return course.name === 'PHP';
// });

// console.log(listCourses);

// .FILTER
// var listCourses = courses.filter(function(course, index) {
//     console.log(index);
//    return course.name === 'Ruby';
// });

// console.log(listCourses);

//.MAP dể hiện thị ra giao diện 
function courseHandler(course, index) {
    // console.log(courses);
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses,
    };
}

var newCourses = courses.map(courseHandler);

// console.log(newCourses);

function courseHandler(course, index) {
    // console.log(courses);
    return `<h2>${course.name}</h2>`;
}

var newCourses = courses.map(courseHandler);

// console.log(newCourses.join(' '));

//REDUCE.
//.dễ hiểu
//.ngắn gọn
//.hiệu năng

// var totalCoin = 0;
// for(var course of courses) {
//     totalCoin += course.coin;
// }
// console.log(totalCoin);

// var totalCoin = courses.reduce((a,b) => 
//     a + b.coin, 0
// );
// console.log(totalCoin);

// var totalCoin = courses.reduce(function(total, course){
//     return total + course.coin;
// }, 0);

// console.log(totalCoin);

//TÁI HIỆN PHƯƠNG THỨC REDUCE

// const Numbers =[1, 2, 3, 4, 5];

// var result = Numbers.reduce(function(total, number){
//     return total + number
// },0)
// console.log(result);


// Array.prototype.reduce2 = function(callback, results){
//     let i = 0;
//     if(arguments.length < 2){
//         i = 1;
//         results = this[0]
//     }

//     for(let i = 0; i < results.length; i++){
//         callback(results, this[i], i, this)
//     }
//     return results
// }

// const Numbers =[1, 2, 3, 4, 5];

// var result = Numbers.reduce(function(total, number){
//     return total + number
// },10)
// console.log(result);

//STRING/ARRAY INCLUDES() METHOD

// var title = 'Responsive wed design';

// console.log(title.includes('Responsive', 1));

// var courses = ['Javascript', 'PHP','Dart'];

// console.log(courses.includes('Javascript'));























// Flat - "làm phẳng" mảng từ Depth array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6 [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//     return flatOutput.concat(depthItem);
// }, []);

// console.log(flatArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
// var topics =[
//     {
//         topic: 'Front-end', 
//         courses: [
//             {
//                 id:1, 
//                 title: "HTML, CSS"
//             },
//             { 
//                 id:2, 
//                 title: "Javascript"
//             }
//         ]
//     },
//     { 
//         topic: "Back-end",
//         courses: [
//             { 
//                 id:1, 
//                 title: "PHP"
//             },
//             { 
//                 id:2, 
//                 title: "NodeJS"
//             }
//         ] 

//     },
// ];

// var newCourses = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses);
// }, []);
// // console.log(newCourses);

// var htmls = newCourses.map(function(course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `
// });

// console.log(htmls.join(''));

//vd: Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. Hãy tạo hàm getTotalGold có 1 tham số là mảng. Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.


// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]
// function getTotalGold(arr){
//     var results = arr.reduce((a,b) =>
//         a + b.gold, 0
//     );
//     return results;
// }


// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23








//BÀi tập
// hãy tạo hàm getMostFavoriteSport có 1 tham số (luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// function getMostFavoriteSport(arr){
//     var result = arr.filter(function(sports,index){
//         // console.log(sports);
//         return arr.like > 5
//     });
//     return result
// }
// console.log(getMostFavoriteSport(sports));