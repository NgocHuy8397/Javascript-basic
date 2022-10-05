//Dom có 3 thành phần
/**
 * 1.element: thẻ tag html || ID, class, tag, css selector, html collection
 * 2.attribute: thuộc tính nằm trong các thẻ
 * 3.text: là một đoạn chữ
 * getelementByid: trả về element
 * getElementByclassName : trả về html collection
 * getElementByTagName: trả về html collection
 * queryselector: trả về element
 * queryselectorAll : trả về một cái nodelist
 */

// Node 
// 1. HTML DOM
// Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.
// 2. DOM API
// Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt. DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM.
//Javascript: Browser | server (NodeJS)

// application programming interface
// Browser: HTML ->DOM-> WED API

// Document object

// Get element methods
// ID
// var headingNodes = document.getElementById('heading')
// console.log([headingNodes]);

// class
// var headingNodes = document.getElementsByClassName('heading')
// console.log(headingNodes);

// tag
// var headingNodes = document.getElementsByTagName('p')
// console.log(headingNodes);

// css selector

// var headingNode = document.querySelector('.heading-2');
// var headingNode = document.querySelector('.box .heading-2:first-child');
// var headingNode = document.querySelector('.box .heading-2:nth-child(3)');
// var headingNode = document.querySelectorAll('.heading-2');
// console.log(headingNode[2]);

// html collection
// console.log(document.forms.testform);
// console.log(document.anchors);

// Ôn tập 1
// var boxNode = document.querySelector('.box-1')
// // công việc 1: sử dụng với `boxNode`
// // ...
// console.log(boxNode);
// // công việc 2: sử dụng tới các li element
// // là con cuar`box-1`
// console.log(boxNode.querySelectorAll('li'));
// console.log(boxNode.querySelector('p'));


// 1.getelementByid: trả về element
// 2.getElementByclassName : trả về html collection
// 3.getElementByTagName: trả về html collection
// 4.queryselector: trả về element
// 5.queryselectorAll : trả về một cái nodelist
// 6.html collection:các thẻ như img, form, a
// console.log(document.forms['form-1']);
//7.document.write
// document.write('Hello');


// ATTRIBUTE NODE & TEXT NODE
 




// DOM attributes


// var headingElement = document.querySelector('h1');
// console.log(headingElement);
// headingElement.title ='Title test' truy suất trực tiếp qua dấu chấm
// headingElement.setAttribute('data', 'test data');//truy suất qua phuong thức hàm getAttribute/setAttribute truyền đối số
// alert(headingElement.getAttribute('data'));
// console.log(headingElement.getAttribute('class'));
// console.log(headingElement.getAttribute('title'));
// headingElement.setAttribute('class', 'heading');
// headingElement.getAttribute('class', 'heading');
//EX1:
//-Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
// var headingElement = document.querySelector('h1');
// headingElement.setAttribute('title','"F8 - Học lập trình để đi làm"')
//-Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
// var headingElement = document.querySelector('h1');
// headingElement.setAttribute('data-title','"F8 - Học lập trình để đi làm"')
//-Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
// var headingElement = document.querySelector('a');
// headingElement.setAttribute('href',"https://fullstack.edu.vn/")
//-Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
// var headingElement = document.querySelector('a');
// headingElement.setAttribute('target',"_blank")


//INNERTEXT VS TEXTCONTENT PROPERTY

// INNERTEXT 
// var headingElement = document.querySelector('.heading');
// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// headingElement.innerText = 'New Heading' //thay doi noi dung cua mot doi tuong



// InnerHTML vs OuterHTML Property

// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1>NEW HEADING</h1>';
// var newHeading = document.querySelector('h1')
// console.log(newHeading.innerText);

// EX1:Các bạn hãy viết hàm render nhận vào 1 tham số là html, hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.
// function render(html) {
//     return document.querySelector('ul').innerHTML = html
// }

// EX2:

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses){
//     var courseList = document.querySelector('.courses-list');
//     var course = courses.map(function(ele){
//         return `<li>${ele}</li>`
//     }).join("")
//     courseList.innerHTML = course;
//     return courseList;
// }

//NODE PROPERTIES:

// var boxElement = document.querySelector('.box');
// console.log([boxElement]);


// DOM CSS


// var boxElement = document.querySelector('.box');
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'red'
// console.log(boxElement.style);

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green',
// });


// CLASSliST PROPERTY(classList)
// add
// contains
// remove
//toggle

var boxElement = document.querySelector('.box'); 
// console.log(boxElement.classList);
// boxElement.classList.add('red')//thêm class

// console.log(boxElement.classList.contains('red'));

// boxElement.classList.remove('red');

// setInterval(function() {
//     // boxElement.classList.remove('red');
//     boxElement.classList.toggle('red');


// },1000)


// DOM EVENTS
//1.Attribute events
// <h1 onclick="console.log(Math.random())">DOM events</h1>
//2.Assign event using the element node 

// var h1Element = document.querySelectorAll('h1');

// for(var i=0; i < h1Element.length; i++){
//     h1Element[i].onclick = function(e){
//         console.log(e.target);
//     }
// }

//DOM event example

//1.Input / select
//2. key up/ down

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// };


// var inputElement = document.querySelector('input[type="checkbox"]');
// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// };

// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// };


// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeydown = function(e){
//     console.log(e.target.value);
// };

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(e){
//     console.log(e.target.value);
// };

// document.onkeypress = function(e){
//     switch(e.which) {
//         case 27:
//              console.log('EXIT');
//              break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }


//PREVENTDEFAULT AND STOPPROPAGATION

//1.preventDefault
//2.stopPropagation

// var aElement = document.links;

// for(var i=0; i<aElement.length; i++){
//     aElement[i].onclick = function(e){
//         console.log(e.target.href);
//     }
// }

//Event listener

var btn = document.getElementById("btn");
// setTimeout(function(){
//     btn.onclick = function(){
//         //việc 1
//         console.log('việc 1');
//         //việc 2
//         console.log('việc 2');
//         //viêc 3
//         alert('việc 3');
//     }
// },3000)

// setTimeout(function(){
//     btn.onclick = function(){}
// },3000);

// function viec4(){
//     console.log('viec 4');
// }

// function viec5(){
//     console.log('viec 5');
// }

// btn.addEventListener('click',function(e){
//     console.log('Event 1');
// })

// btn.addEventListener('click',function(e){
//     console.log('Event 2');
// })

// btn.addEventListener('click',function(e){
//     console.log('Event 3');
// })

// btn.addEventListener('click',viec4);
// btn.addEventListener('click',viec5);

// setTimeout(function(){
//     btn.removeEventListener('click',viec5)
// },3000);