/*
1. Tìm hiểu về Spread Syntax
2. Giới thiệu về Map và filter
3. Thực hành xây dựng tính tìm kiếm với kiến thức được học.

Spread cho phép bạn "mở rộng" một iterable object (như array, string, object)
thành các phần tử riêng lẻ trong một biểu thức. Nó được biểu thị bằng dấu chấm (...)

Ứng dụng
- Kết hợp các Array
- Nối các string
- Sao chép object
- Gửi các phần tử iterable làm tham số cho 1 hàm
- truy cập các phần tử iterable trong 1 loop

Lưu ý 
- Spread syntax chỉ hoạt động với iterable object

VD dưới đây;
*/

//// Câu hỏi: Làm thế nào để copy 1 mảng? cú pháp?
// let a = 2; 
// sao chép giá trị biến a vào biến b
// let b = a;


// let arr = [123, 2,4];
// Copy mảng arr sang mảng arr2?
// let arr2 = arr
// console.log("arr2: ", arr2);
// //// => cú pháp này là sai!

// Cú pháp spead syntax
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// Sử dụng spread syntax để kết hợp 2 array
// const arr3 = [...arr1, ...arr2];
///////        1,2,3  ,  4,5,6


// Mở rộng string
// const str1 = "Hello";
// const str2 = "World";

// Sử dụng spread syntax để nối 2 string
// const str3 = [...str1, "", ...str2];
// console.log(str3);// ?

/// Mở rộng Object
// const obj1 = {name: "Hieu", age: 26}
// const obj2 = {address: "Tay Ho"}

// Sử dụng spread syntax để kết hợp 2 object
// const obj3  = { ...obj1, ...obj2}
// console.log("obj3: ", obj3);


///// tìm hiểu về map trong JS

//// Bài toán
// let arr = [1,2,3,4,5,6,7,8];

// Yêu cầu: In ra 1 mảng arr2 với các phần tử của arr được bình phương. Output: 1, 4, 9, ...
//  C1
// let arr2 = [];
// for(let i =0 ;i < arr.length; i++){
//     arr2[i] = arr[i] * arr[i]
// }

// console.log(arr2);// ??

//C2: sử dụng map
// let arr3 = arr.map(item => item*item);
// console.log("arr3: ", arr3);

//// in ra từng phần tử mảng arr nhưng bị giảm đi 1 đơn vị
// let arr4 = arr.map(item => item - 1);
// console.log("arr4: ", arr4);

/*
Cú pháp của map gồm
let <tên biến>  = <array>.map(<tên tham số> => ... thực hiện hành động sau mỗi lần lặp)

- map(): trả về kết quả là 1 array mới đã thực thi hành động với ô chứa mới không trùng lặp
 với mảng gốc.
*/

///// Tìm hiểu về filter
// let arr = [1,2,3,'hello', 4,5,6, "hi", null, 0];

//// lọc ra và trả về mảng chỉ chứa kiểu dữ liệu số.
// let arr1 = arr.filter(item => typeof item == 'number');
// console.log("arr1: ", arr1);

//// Lọc ra và trả về mảng các số chẵn từ mảng arr
// let arrSoChan = arr1.filter(item => item % 2 == 0 )
// console.log("arrSoChan: ", arrSoChan);

//// Lọc ra và trả về mảng các số nhỏ hơn 4.
// let arrSoNhoHon4 = arr1.filter(item => item <4 )
// console.log("arrSoChan: ", arrSoNhoHon4);

////Thực hành với bài tập

// let NPS_JSI20 = [
//     {
//         name: "Lê Anh",
//         age: 15,
//         jobs: "student"
//     },
//     {
//         name: "Vũ Dũng",
//         age: 16,
//         jobs: "student"
//     },
//     {
//         name: "Hoàng Quân",
//         age: 14,
//         jobs: "student"
//     },
//     {
//         name: "Trung Hiếu",
//         age: 14,
//         jobs: "Dev"
//     },
    
// ];
/*
Yêu cầu: 
1. Nhập vào số tuổi. In ra name các học sinh đúng với số tuổi đó 
example: Number(prompt("mời người dùng nhập ..."))
2. In ra tên các bạn có jobs là "student"
3. In ra tên các bạn có jobs là "student" và độ tuổi phải >= 15
*/

// Câu 1: 
// let nhapTuoi = Number(prompt("Mời người dùng nhập tuổi học sinh"));
// let arrAgeStudent = NPS_JSI20.filter(item => item.age == nhapTuoi)
// // Đoạn code in ra tên
// arrAgeStudent.forEach(element => {
//     console.log(element.name + " với số tuổi là: " + element.age);
// });

// Câu 2 + 3
// let arrJobStudent = NPS_JSI20.filter(item => 
//     item.jobs === "student" && item.age >= 15)
// console.log("arrJobStudent: ", arrJobStudent); // {}, {}, {}

// arrJobStudent.forEach(element => {
//     console.log(element.name);
// });

// Đề bài: Yêu cầu sắp xếp lại các phần tử trong 1 array theo độ dài tăng dần.
let arr = ["abcd", "abc", "qwertyuiop"];

/// Đề bài: Tạo 1 object mới từ một array, với key là tên của phần tử và
/// value là vị trí của phần tử trong Array
let arr1 = ['apple', "banana", "orange"];

// Đề bài; Loại bỏ các phần tử trùng lặp trong 1 array
let arr2 = [1,2,3,1,2,4,5];

for(let i = 0 ; i< arr.length; i++){
    for(let j = i+1; j< arr.length; j++ ){
        if(arr[i].length > arr[j].length){
            // thuật toán đổi vị trí phần tử trong mảng
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }        
    }
}
console.log(arr);
