// sync / Async //đồng bộ // bất đồng bộ

// setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
// request animation frame

// callback

//slepp
// setTimeout(function(){
//     console.log(1);
// },1000);

// console.log(2);

// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)

// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

//Promise (Pain)*

// setTimeout(function(){
//     console.log(1);// viec1
//     setTimeout(function(){
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//             setTimeout(function(){
//                 console.log(4);
//             },1000);
//         },1000);
//     },1000);
// },1000);

//promise (concept)*

//1.new Promise
//2. Executor

//trạng thái
//1.pendding
//2.Fulfilled
//3.Rejected
var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve();
        // Thất bại: reject();

        // Fake call API
        resolve();
        // reject('Co loi!'); 
    
});

// promise
//     .then(function() {
//         console.log('Successfully!');
//     })
//     .catch(function() {
//         console.log('Failed!');
//     })
//     .finally(function() {
//         console.log('Done!');
//     });

// promise(chain)* 

// promise
//     .then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1,2,3]); 
//             },3000);
//         });
//     })
//     .then(function(data) {
//         console.log(data);// in ra kết quả từ trên [1,2,3]; 
//     })
//     .catch(function() {
//         console.log('Failed!');
//     })
//     .finally(function() {
//         console.log('Done!');
//     });


// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2);
//         return sleep(1000)
//     })
//         .then(function() {
//         console.log(3);
//         return sleep(1000)
//     })
//         .then(function() {
//         console.log(4);
//         return sleep(1000)
//     })

// function hell(value, cb) {
//     cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell 
// hell(1, function (valueFromA) {
//     hell(valueFromA + 1, function (valueFromB) {
//         hell(valueFromB + 1, function (valueFromC) {
//             hell(valueFromC + 1, function (valueFromD) {
//                 console.log(valueFromD + 1);
//             });
//         });
//     });
// });

// // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// notHell(1)
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });

//Promise methods (resolve, reject, all)*

// promise.resolve
//promise.reject
//promise.all

// Thư viện: output luôn luôn là một promise

// var promise = new Promise(function (resolve, reject){
//     // resolve('Success!');
//     reject('Error!');
// });
// var promise = Promise.resolve('Succcess!');
// var promise = Promise.reject('Error')

// promise
//     .then(function (result) {
//         console.log('result:',result);
//     })
//     .catch(function (err) {
//         console.log('err:', err);
//     })


// var promise2 = Promise.reject('co loi!')

// var promise1 = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve([1]);
//     }, 1000);
// });

 
// Promise.all([promise1, promise2])
//     .then(function ([result1, result2]) {
//         // var result1 = result[0];
//         // var result2 = result[1]; 

//         console.log(result1.concat(result2));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

//PROMISE EXAMPLE*

var users = [
    {
        id: 1,
        name: 'Ngoc Huy',
    },

    {
        id: 2,
        name: 'Sơn Dang',
    },

    {
        id: 3,
        name: 'Hung Dam',
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Huy chua ra video:('
    },

    {
        id: 2,
        user_id: 2,
        content: 'Vừa ra xong em ơi!'
    },

      {
        id: 3,
        user_id: 1,
        content: 'cam on anh ^^'
    },
];

//1.Lấy comments
//2.Từ comments lấy ra user_id
//từ user_id lấy ra user tương ứng

//Fake API
//1.Array
//2.function, callback
//3.promise
//4.Dom

function getComments(){//ham lay noi dung comment qua mang
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(comments);
        },1000)
    })
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var results = users.filter(function(user){
            return userIds.includes(user.id)
        })
        resolve(results);
    },1000);
}

getComments()
    .then(function(comments){
        // console.log(comments);
        var userIds = comments.map(function(comment){
            return comment.user_id
        })
       return getUsersByIds(userIds)
            .then(function(users){
             console.log(users);
            return {
                user: users,
                comments: comments,
            }
          });
        // console.log(userIds);
    })

    .then(function(data){
        // console.log(data);
        var commentBlock = document.getElementById("comment-block");
        var html = "";
        data.comments.forEach(function(comment){
            var user = data.user.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li> ${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });

