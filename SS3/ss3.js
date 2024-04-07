/*
Lập trình hướng đối tượng: OOP
- Khái niệm: Là mô hình lập trình dựa trên khái niệm của các 
"đối tượng", có thể chứa dữ liệu, dưới dạng trường (thuộc tính
, phương thức). Giúp tổ chức mã theo mô phỏng thế giới thực.

- Ứng dụng OOP trong JS: 
+ Tạo ra các chương trình có cấu trúc rõ ràng, dễ mở rộng 
& bảo trì.
+ Sử dụng để tạo ra các cấu trúc dữ liệu phức tạp.
+ Xây dựng thư viện và framework
*/

//// Các kiểu dữ liệu: Object, String, Number, boolean

// Khởi tạo đối tượng Nguoi
class Nguoi {
  // Hàm khởi tạo thuộc tính cho class này
  constructor(id, name, age, address, hobbies, gender) {
    // Tiến hành lưu trữ giá trị truyền vào class
    this._id = id;
    this._name = name;
    this._age = age;
    this._address = address;
    this._hobbies = hobbies;
    this._gender = gender;
  }

  // Khai báo phương thức cho class này
  introduct() {
    return (`My name is ${this._name} and I ${this._age} years old`);
  }

  cry() {
    alert("I am crying");
  }
}

// Khởi tạo đối tượng có kiểu dữ liệu Nguoi
// let Hieu = new Nguoi(
//   "0123456789",
//   "Nguyễn Trung Hiếu",
//   26,
//   "Tây Hồ",
//   ["ngủ", "thức"],
//   "nam"
// );

/// In ra tên của Hiếu
// console.log(Hieu._name);

// Gọi ra phương thức giới thiệu bản thân
// Hieu.introduct();

/////// Tính kế thừa trong lập trình OOP
class GiaoVien extends Nguoi{
    constructor(id, name, age, address, hobbies, gender, idTeacher, classs, rateTeacher) {
        super(id, name, age, address, hobbies, gender);
        // Từ khóa super giúp kế thừa hết các thuộc tính từ class cha
        this._idTeacher = idTeacher;
        this._classs = classs;
        this._rateTeacher= rateTeacher;
    }

    ////// Kế thừa phương thức
    //// Kế thừa hoàn toàn mà không thay đổi cái gì(ko cần viết lại các phương thức từ người cha)
    

    //// Kế thừa và ghi đè hoặc phát triển tiếp từ người cha
    introduct() {
        return super.introduct() + `. And now I am teaching at ${this._classs} with teacher id is ${this._idTeacher}. Finaly my rate is ${5}`;
    }
}

///// Khởi tạo 1 giáo viên
// let Hieu = new GiaoVien(
//     "0123456789",
//   "Nguyễn Trung Hiếu",
//   26,
//   "Tây Hồ",
//   ["ngủ", "thức"],
//   "nam",
//   "hieunt",
//   "NPS-JSI20",
//   5,
// );

// console.log(Hieu);
// alert(
//     Hieu.introduct()
// )


/*
Bài 1: Tạo 1 lớp Hình chữ nhật gồm 2 thuộc tính là: width & height
Yêu cầu: 
- Xây dựng phương thức tính diện tích HCN
- Xây dựng phương thức tính chu vi HCN


Bài 2: Tạo 1 lớp "Vehicle" với các thuộc tính và phương thức cơ bản
- thuộc tính: make, model, year
- phương thức: displayDetails(){} hiển thị thông số phương tiện bằng văn bản

Yêu cầu: Tạo 1 lớp "Car" kế thừa từ lớp "Vehicle" và thêm thuộc tính: "numberOfDoors"

*/

class Vehicle{
    constructor(make, model, year){
        this._make = make;
        this._model = model;
        this._year = year;
    }
    
    displayDetails(){
        return `Make: ${this._make}, Model: ${this._model}, Year: ${this._year}`;
    }
    
}

class Car extends Vehicle{
    constructor(make, model, year, numberOfDoors){
        super(make, model, year);
        this._numberOfDoors = numberOfDoors;
    }

    displayDetails(){
        return super.displayDetails() + `, Number of Doors: ${this._numberOfDoors}`
    }
}

let myCar= new Car('Toyota', 'Corolla', 2021, 4);

console.log(myCar.displayDetails());