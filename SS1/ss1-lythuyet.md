1. Ôn tập lại về HTML, CSS, Javascript
2. Ôn tập lại về API và cách lấy dữ liệu.


1.
- HTML cấu tạo như nào: từ các thẻ/cặp thẻ
+ Tiêu đề: h1 -> h6, head,..
+ Văn bản: p, a, i, b, ul, li, span, mark


- CSS: Trang trí cho HTML
+ color, background-image, width, justify-content, align-items
+ display, height, background-color, text-align
+ Vũ Dũng: false
+ padding, margin, box-sizing, overflow, box-shadow

- JS: Điều khiển, xây dựng tính năng.
+ Khai báo biến: let, const (hằng số), var 
+ Kiểu dữ liệu cơ bản: String: chuỗi, Boolean: true/false, Number: số, null: rỗng, undefinded: không xác định, Object: đối tượng.

///// JS toán tử: 
+ Toán tử số học: +, -, *, /, % (chia lấy dư)
+ Toán tử so sánh: >, <, >=, <=, == (ss tương đối), === (ss tuyệt đối)
+ Toán tử logic: &&, ||
+ Toán tử gán: =
+ Toán tử 3 ngôi: (điều kiện)? value1: value2; 

///// JS câu điều kiện;
+ if
+ if/else
+ if/else if, ... else if/ else


///// JS vòng lặp:
+ while
+ do while
+ for

VD:
while(điều kiện){
    /// lệnh
    /// biến thay đổi sau mỗi lần lặp.
}

do{
    /// lệnh
    /// biến thay đổi sau mỗi lần lặp.
}
while(điều kiện);


for(lệnh chạy duy nhất lần đầu; điều kiện; biến thay đổi sau mỗi lần lặp){
    // lệnh...
}

for(let i =0; i<=10; i++){
    console.log(i); /// 0 -> 10;
}

//// JS mảng (Array): danh sách lưu trữ
+ Khai báo mảng; let <biến> = [];
+ Các phần tử mảng cách nhau bởi dấu ","
+ Thêm 1 phần tử vào cuối mảng: arr.push(...);
+ Thêm 1 phần tử vào đầu mảng: arr.unshift(...)
+ Xóa 1 phần tử ở cuối mảng: arr.pop(...);
+ Xóa 1 phần tử ở đầu mảng: arr.shift(...);
+ C,R,U,D 1 phần tử bất kỳ: arr.splice(Vị trí phần tử, Số lượng phần tử muốn xóa, phần tử muốn thêm);


//// JS đối tượng: Object
+ Khai báo đối tượng: let <biến> = {};
+ Cấu tạo đối tượng gồm: các cặp khóa - giá trị
+ Thêm 1 khóa vào đối tượng: obj.<khóa> = ...;
+ Thêm 1 phương thức vào đối tượng: obj.<tên_phương_thức> = function (){ ....}