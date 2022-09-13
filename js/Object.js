// var emailKey = 'email';
// var myInfo ={
//     name: 'Huy',
//     age: 25,
//     address: 'HCM, VN',
//     [emailKey]: 'ngochuy8397@gamil.com',
//     getName: function(){
//         return this.name;
//     }

// };
// myInfo.email = 'ngochuy8397@gamil.com'
// myInfo['my-email'] = 'ngochuy8397@gamil.com'
// console.log(myInfo.age);
// console.log(myInfo['age']);

// delete myInfo.age
// delete myInfo.address

//Function --> phương thức /method
// Other --> Thuộc tính /property
// console.log(myInfo.getName())

// console.log(myInfo);

// var myKey ='address'
// console.log(myInfo[myKey]);


//OBJECT CONSTRUCTOR

// function User (firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
   

// }


// var author = new User('Huy', 'Nguyễn', 'Avatar');
// var user = new User('Vũ', 'Nguyễn', 'Avatar');

// author.title ='chia sẻ dạo tại F8'//thêm phương thức
// user.comments = 'Học sao cho hiệu quả'//thêm phương thức

// console.log(author.getName());
// console.log(user.getName());

//OBJECT PROTOTYPE

// function User (firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
   

// }

// User.prototype.className = 'Huy';
// User.prototype.getClassName = function(){
//     return this.className
// }


// var author = new User('Huy', 'Nguyễn', 'Avatar');
// var user = new User('Vũ', 'Nguyễn', 'Avatar');

// author.title ='chia sẻ dạo tại F8'//thêm phương thức
// user.comments = 'Học sao cho hiệu quả'//thêm phương thức

// console.log(author.getName());
// console.log(user.getClassName());

//ĐỐI TƯỢNG DATE

// var date = new Date();
// // console.log(date);

// var year = date.getFullYear();
// // console.log(year);

// var month = date.getMonth() + 1;
// // console.log(month);

// var day = date.getDate();
// // console.log(day);

// var date = Date();
// // console.log(date);

// console.log(`${day}/ ${month} /${year}`);

//javascript date object mozilla

//MATH OBJECT
Math.PI
Math.round();//làm tròn số
Math.abs();// giá trị tuyệt đối
Math.ceil();// làm tròn trên
Math.floor();//làm tròn dưới
Math.random();//ngẫu nhiên
Math.min();//giá trị nhỏ nhất
Math.max();//giá trị lớn nhất