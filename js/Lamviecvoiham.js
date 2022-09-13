/*
Hàm functionm trong js
1.Hàm?
    -Một khối mã
    -làm 1 việc cụ thể
2.Loại hàm
    -Built - in    
    -Tự định nghĩa
3.Tính chất
    -Không thục thi khi định nghĩa
    - sẽ thực thi khi được gọi
    -Có thể trả về 1 giá trị     
*/    

// function showDialog(){
//     alert('Hi xin chào các bạn!');
// }
// showDialog();

//Tham số trong hàm
// function writeLog(message, message2){
//     console.log(message);
//     console.log(message2);
// }
// writeLog('Test message', 'Test message_2');

//đối tượng arguments là một mảng
// function writeLog(){
//     var myString ='';
//     for(var param of arguments){ 
//         myString += `${param} -`
//     }
//     console.log(myString);
// }
// writeLog('Test message', 'Test message_2','log 3', 'log 4','log 5', 'log 6');

// function writeLog(){
//     console.log(arguments)
// }
// writeLog('Test message', 'Test message_2','log 3', 'log 4','log 5', 'log 6');

//Return trong hàm - Javascript cơ bản

// function cong(a,b){
//     return a + b;
// }
// var result = cong(2, 8);
// console.log(result);

//Khi function đặt trùng tên

// function message(){
//     console.log('message1');
// }

// function message(){
//     console.log('message2');
// }

// function message(){
//     console.log('message3');// đc thực thi
// }

// message();

//Khai báo biến trong Hàm

// function showMessage(){
//     var fullName = 'Nguyễn Ngọc Huy'//tính riêng tư nên k in ra đc fullName
// }
// showMessage();

// function showMessage(){
//     function showMessage2(){ 
//         console.log('message2')
//     }
//     showMessage2();
// }
// showMessage();


//CÁC LOẠI HÀM
/*
 Các loại hàm
 1.Declaration function:
 function showMessage() {
    console.log('Declaration function')
 }
 showMessage();
 2.Express function:
 var showMessage = function(){
    console.log('Express function')
 }

 showMessage();

 setTimeout(function autoLogin(){

 });

 var myObject = {
    myFunction: function(){

    }
 }
 3.Arrow function 

  var arrowFunction = () => {
  // Your logic
   // console.log(this); //window
   console.log('Arrow Function');
// };
  4. function* (Star function)
  5. IIFE
 */


