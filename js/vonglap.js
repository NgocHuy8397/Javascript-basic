/**
 * 1.for -lặp với điều kiện đúng
 * 2.for/in-lặp qua key của đối tuọng
 * 3.for/of -Lặp qua  value của đối tượng
 * 4.while - Lặp khi điều kiện đúng
 * 5.do/ while -Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */

//1.Vòng lặp For

// for(var i = 1; i <= 10 ; i++){
//     console.log(i);
// }

//  var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Python',
//     'Dart',
//  ];


// //  console.log(myArray[1]);
// var arrayLength = myArray.length;

// for(var  i = 0; i < arrayLength; i++){
//     console.log(myArray[i]);
// }

//Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.

// function getTotal(arr) {
//     let sum = 0;
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return console.log(sum);;
// }
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

// tính tổng Price.
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// var ordersLength = orders.length;
// function getTotal(orders){
//     let sum = 0;
//     for(var i = 0; i < ordersLength; i++ ){
//             sum += orders[i].price;
//     }
//     return console.log(sum);
// }
// getTotal(orders);

// 👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
// function getRandNumbers (min, max, length){
//     let myArray = [];
//     for(var i=0; i< length; i++){
//        let number = Math.random() * (max - min) + min
//         myArray.push(number);
//     }
//     return myArray;

// }


//2.VÒNG LẶP FOR IN

// var myInfo ={
//     name:'ngoc huy',
//     age:'25',
//     address:'HCM, VN'
// }

// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

// var languages = [
//     'Javascript',
//     'PHP', 
//     'Ruby',
// ];

// for(var key in languages) {
//     console.log(languages[key]);
// }

// var myString = 'javascript';
// for(var key in myString) {
//     console.log(myString[key]);
// }

// var object = {
//     name: 'Nguyen Van A',
//     age: 16,
// }
// function run(object) {
//     var arr = [];
//     for(var key in object){
//          arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
//     }
//     return arr;
// }
// console.log(run(object));

//3.VÒNG LẶP FOR ... OF

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];

// for(var value of languages) {
//     console.log(value);
// }

// var languages = 'Javascript'
// for(var value of languages) {
//     console.log(value);
// }

// var myInfo ={
//     name:'ngoc huy',
//     age:'25',
//     address:'HCM, VN'
// }

// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }

// for (var value of Object.keys(myInfo)) {
//     console.log(value);
// }

//4.VÒNG LẶP wHILE

// var i = 0;

// while(i <= 1000){
//     console.log(i);
//     i++;
// };

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// var i = 0;

// while(i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

//5.VÒNG LẶP Do...WHILE

// var i = 0;

// do{
//     i++
//     console.log(i);
// } while(i < 10);

//vd nạp thẻ
// var i = 0;
// var isSuccess = false;

// do{ 
//     i++;
//     console.log('Nạp thẻ lần' + i);
//     //Thành công
//     if(false){
//         isSuccess = true;
//     }
// } while (!isSuccess && i <= 3);

//6.Break và Continue trong vòng lặp
// for(var i = 0; i < 10; i++){
//     console.log(i);
    
//     if(i >= 5){
//         break;
//     }

// }

// for(var i = 0; i < 10; i++){
//     if(i%2 !==0){ 
//         continue;
//     }
    
//     console.log(i);
// }

//7.VÒNG LẶP LỒNG NHAU (NESTED LOOP)

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6],
// ];

// for (var i = 0; i < myArray.length; i++){
//     for(var j = 0; j < myArray[i].length; j++){
//         console.log(myArray[i][j]);
//     }
// }

//Ví dụ về vòng lặp

// for(var i = 100; i>0; i--){
//     console.log(i);
// }

// for(var i = 0; i <= 100; i+= 5){
//     console.log(i);
// }

// for(var i = 0; i <= 100; i+= 5){
//     console.log(i);
// }


// ĐỆ QUY LÀ GÌ ? hỌC VỀ ĐỆ QUY!
// LÀ 1 CÁI HÀM TỰ GỌI LẠI CHÍNH NÓ

// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log(...[new Set(array)]);

//1.Xác định điểm dừng
//2.Logic handler ==> Tạo ra điểm dừng

// function deQuy(num){
//     if(num < 0){
//         //Dừng
//         //...
//         return;
//     }
//     deQuy();
// }
// deQuy(10);

//A --> loop --> CPU
//A --> Đệ quy --> Ram

// function countDown(num){
//     if(num > 0){
//         console.log(num);
//         return countDown(num-1)
//     }
//     return num;
// }
// countDown(3);

// function loop(start, end, cb){
//     if(start < end){
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

// var array = ['javascript', 'PHP', 'Ruby'];
// loop(0, array.length, function(index){
//     console.log(array[index]); 
// });

//3*2*1 = 6
//6*5*4*3*2*1 = 720

// function giaithua(num){
//     var output = 1;
//     for(var i=num; i > 0; i--){
//         output = output * i;
//     }
//     return output;
// }

// console.log(giaithua(3));

// function giaithua(number){
//     if(number > 0){
//         return number * giaithua(number - 1);
//     }
//     return 1;
// }

// console.log(giaithua(3));