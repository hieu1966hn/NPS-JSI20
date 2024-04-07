/*
Spread syntax: cho phép bạn "mở rộng" một iterable object (như array, string, object) 
thành các phần tử riêng lẻ trong một biểu thức. Nó được biểu thị bằng đấu ba chấm "..."

Ứng dụng: 
- Kết hợp các Array
- Nối các String
- Sao chép Object
- Gửi các phần tử iterable làm tham số cho 1 hàm.
- Truy cập các phân tử iterable trong 1 loop.


Lưu ý: 
- Spread syntax chỉ hoạt động tốt với iterable object.
*/

////// Yêu cầu 1: Làm thế nào để copy 1 mảng? cú pháp?
// let arr = [123,2,4]; /// Vị trí 1
// Copy sang mảng mới;
// let arr1 = arr; // Flase?
// let arr1 = [...arr]; /// Vị trí 2 sao cho: Các phần tử trong arr1 đều được copy từ arr và khác vị trí lưu trữ trong bộ nhớ
// console.log("arr1: ", arr1); /// ?

// let chi = "Biệt thự";
// let em1 = chi;
// let em2 = chi;

////// Yêu cầu 2: Ghép 2 mảng thành 1 mảng mới và in ra màn hình console
// let a = [1,2,3];
// let b = [4,5,6];

// let c = [...a,...b]; /// [phần tử mảng a, phần tử mảng b];
// console.log("c: ", c);

////// Yêu cầu 3: Mở rộng string
// let str1 = "Hello";
// let str2 = "World";
//// C1
// let str3 = str1 + str2
// console.log("str3: ", str3);

//// C2:
// let str3 = [...str1 , ...str2];
// console.log("str3: ", str3);
// console.log(str3.join("")); /// Hàm join dùng để tách mảng thành chuỗi.

////// Tìm hiểu về map() & filter(): method với array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
////// Yêu cầu 4: In ra  1 mảng arr2 với các phần tử của arr được bình phương. Output: 1,4,9,..
//// C1:
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i] * arr[i]);
// }
// console.log(arr2);

//// C2: Sử dụng map(): trả về kết quả là 1 array sao cho arr này đã thực hiện yêu cầu với toàn bộ phần tử mảng gốc.
// Viết ban đầu
// let arr2 = arr.map((item) => {
//   return item * item;
// });

// Viết tắt:
// let arr2 = arr.map(item => item*item);
// console.log(arr2);

////// Yêu cầu 5: In ra từng phần tử mảng arr nhưng bị giảm đi 1 đơn vị mỗi phần tử.
// let arr2 = arr.map(item => item - 1);
// console.log("arr2: ", arr2);

////// Tìm hiểu về filter: lọc ra và trả về mảng thỏa mãn điều kiện yêu cầu;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// /////// Yêu cầu 6: In ra mảng arr với các phần tử nhỏ hơn 6;
// let arr2 = arr.filter((item) => item < 6);
// console.log("arr2: ", arr2);

////// Thực hành với bài tập tổng hợp
let NPS_JSI20 = [
  {
    name: "Chi",
    age: 15,
    jobs: "students"
  },
  {
    name: "Lê Anh",
    age: 15,
    jobs: "students"
  },
  {
    name: "Vũ Dũng",
    age: 16,
    jobs: "students"
  },
  {
    name: "Hoàng Quân",
    age: 14,
    jobs: "students"
  },
  {
    name: "Trung Hiếu",
    age: 26,
    jobs: "Dev"
  },
];


/*
Yêu cầu:
1. Cho phép người dùng nhập vào số tuổi. In ra name các bạn học sinh đúng với số tuổi đó, nếu không có name thỏa mãn thì in ra "..."
Example: Number(prompt("Mời người dùng ..."));

2. In ra tên các bạn có jobs là "students"

3. In ra tên các bạn có jobs là "students" và độ tuổi phải >= 15
*/