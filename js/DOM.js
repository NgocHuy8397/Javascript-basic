//Dom có 3 thành phần
/**
 * 1.element: thẻ tag html || ID, class, tag, css selector, html collection
 * 2.attribute: thuộc tính nằm trong các thẻ
 * 3.text: là một đoạn chữ 
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
console.log(document.anchors);
