// thuật ngữ Built-in

// alert("hello world")
// console.log("hello world");
// confirm("hello world")
// prompt("hello world");
// setTimeout(function() {
//     alert("hello world")
// },3000)
// setInterval(function() {
//     console.log("hello world" + Math.random());
// },3000)

/**
 toan tử 
 
 toán tử số học
 + cộng,- trừ,* nhân,** lũy thừa,/ chia,% chia lấy số dư, ++ tăng 1 đơn vị ,-- giảm 1 đơn vị

// tiền tố ++a, hậu tố a++
// var a = 6;
// ++a || --a;
// việc 1: +1 cho a, a = a => a = 7;
// việc 2: trẢ  về a sau khi được + 1;
// a++ || a--;
//việc 1 `a copy`, `a copy` = 6;
//việc 2: trừ (cộng) 1 của a, a = a -1 => a = 5;
// việc 3 : trả về `a copy`
// console.log(a);

//vd toán tử ++,--
// var number = 6;
// var output = number++ + --number;
// 6 + 6 = 12
// var output = ++number * 2 - number-- * 2;
//             7       * 2 - 7 * 2 = 0;
// console.log(output);

 toán tử gán
 +=, -=, *=, /=, **=;

 toán tử so sánh
 ==, !=(không bằng), >, <, >=, <=

 toán tử logic

 */
// toán tử số học

//  var a = 1 + 2;
//  console.log(a);
// var a = 1;
// var b = 2;
// var c = a + b;
// alert(c);

//toán tử gán

// var fullName = 'Nguyễn Ngọc Huy'
// var a = 2;
//  a += 1;
//  a -= 1;
//  a *= 2;
//  a /= 2;
// //  a %= 2;
//  console.log(a);
//toán tử so sánh

// var a = 1;
// var b = 2;
// if(a > b){
//     console.log('SAI');
// } else {
//     console.log('Đúng');
// }

// var a = 'nguyễn ngọc huy'
// var b = 'nguyễn ngọc Huy'

// if(a == b) {
//     console.log("Điều kiện đúng");
// } else {
//     console.log("Điều kiện sai")
// }

/** 
 * ===
 * !==
*/

// var a = 1;
// var b = '1';

// console.log(a === b)
// toán tử logic

// var a = 1;
// var b = 2;
// //&& một hay nhiều điều kiện sai là k thực thi
// // || đúng là chạy
// if(a > 0 && b > 3){
//     alert('a và b lớn hơn 0');
// }

// toán tử nối chuỗi- string operator

// var firtName = 'huy'
// var lastName = 'ngoc'
// console.log(firtName + ' ' +lastName );

// var name = 'huy';
//  name += ' ngoc';
// console.log(name);

// kiểu dữ liệu Boolean(true || false)

// var isSuccess = true
// console.log(isSuccess);

// var a = 5;
// var b = 6;

// var isSuccess = a > b;
// console.log(isSuccess);

//  câu điều kiện if - else(True || false)
/**
 * 0
 * false
 * "_"
 * underfined
 * NaN
 * null
 * thuộc 6 giá trị này thì boolean trả về fale
 * k thuộc 6 giá trị này thì boolean trả về true
*/
// var isSuccess = 1 > 2
//  if(isSuccess){
//     console.log("Điều kiện đúng")
//  } else {
//     console.log("Điều kiện sai")
// }

//  Toán tử Logical
/** function
 * Toán tử logic
 * 1.&& - And Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.
 * 2. ||- or Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.
 * 3.! -not phủ định, đúng -> sai , sai -> đúng
*/
// var a = 1;
// var b = 2;
// var c = 3;

// if(a > 0 && b > 0 && c > 0){
//     console.log("Điều kiện đúng");//một trong hai vế sai thì k thục thi chương trình
// }

// if(a > 0 || b > 0 || c > 0){
//     console.log("Điều kiện đúng");
// }

// if(!(a > 0)){
//     console.log("Điều kiện đúng");
// } else{
//     console.log("Điều kiện sai")
// }

// Kiểu dữ liệu
/*
kiểu dữ liệu trong js

1. Dữ liệu nguyên thủy - primitive Data
    -Number: var a = 1; console.log(typeof number)
    -String: var fullName = 'Nguyễn Ngọc Huy'; console.log(typeof string)
    -Boolean: true || false; console.log(typeof boolean)
    -Underfined: var age;  console.log(typeof underfined)
    -Null: var isNull = null //nothing console.log(typeof isNull)
    -symbol var id = Symbol('id);// unique console.log(typeof symbol)
2.Dữ liệu phức tạp - Complex Data
    -Function
    var myFunction = function(){
        alert('hi. xin chào các bạn);
    }
    myFunction();
    console.log(typeof myFunction)

    -Object
    var myObject ={
        name: 'huy',
        age: 25,
        address: 'tpHCM'
        myFunction: function(){

        }
    };
    console.log("myObject",myObject);
    console.log(typeof myObject)

    -Array
    var myArray =[
        'js', 
        'PHP', 
        'Ruby', 
    ];
    console.log("myArray",myArray);
    console.log(typeof myArray);
*/    
/*
0," ",underfined,NaN,false,null ---> False;
*/

// var a = 1;
// var b = 2;

// var result = 'A' && 'B' && 'C' && 'D';- && thuộc 1 trong 6 Falsy thì lấy value đầu tiên nó tìm được
// var result = 'A' || 'B' || 'C' || 'D'; || thuộc Truthy (ngoài 6 Falsy) thì lấy value đầu tiên nó tìm được
//- Nếu k0 tìm được sẽ lấy value còn lại

// console.log("result",result);
