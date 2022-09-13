//1.Tạo chuỗi

// var fullName ='Nguyễn Ngọc Huy'// nên dùng cách 1

// var fullName = new String('Ngoc Huy')
// console.log(typeof fullName);//--> object

// var fullName = 'Ngoc Huy la \'siêu nhân\'';// một số Case sử dụng backlash(\)
// console.log(fullName);

// var fullName = 'Ngoc Huy'
// console.log(fullName.length);//kiểm tra độ dài của chuỗi

// var fullName = 'Một số case sử dụng backlash'
// +'1.Một số case sử dụng backlash'
// +'2.Một số case sử dụng backlash'
// console.log(fullName);// cách xuống dòng

//Template string ES6

// var firstName = 'Huy';
// var lastName = 'Ngoc';
// console.log(`toi la : ${firstName} ${lastName}`);

// LÀM VIỆC VỚI CHUỖI

var myString = '  Học js tại js js nhà  '

//1.length

// console.log(myString.length);//kiểm tra độ dài chuỗi

//2.Finde index: tìm kiếm vị trí ký tự nằm trong 1 chuỗi

// console.log(myString.indexOf('js',7));

// console.log(myString.lastIndexOf('js')) // tìm vị trí cuối cùng nằm trong 1 chuỗi

// console.log(myString.search('js'));

//3.Cut string: cắt chuỗi

// console.log(myString.slice(4, 6))
// console.log(myString.slice(4))
// console.log(myString.slice(0))

//4. Replace thay thế hoặc ghi đè
// console.log(myString.replace('js','Javascript'))
// console.log(myString.replace(/js/g,'Javascript'))

//5.Convert to upper case: chuyển đổi chữ thường thành chữ hoa
// console.log(myString.toUpperCase());

//6.Convert to lower case: chuyển đổi chữ hoa thành chữ thường
// console.log(myString.toLowerCase());

//7.Trim Loại bỏ khoảng trắng 
// console.log(myString.trim().length);

//8.split cắt 1 chuỗi thành array
// var languages = 'javascript, ruby, php, java'
// console.log(languages.split(','));

//9.Get a character by index lấy 1 ký tự tù index
// const myString2 = 'Huy Nguyen';

// console.log(myString2.charAt(10));

// console.log(myString2[1]);