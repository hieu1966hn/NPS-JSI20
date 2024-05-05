import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

// Nhúng firebase config vào dự án để kết nối server và website.

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyB0idO27D7iflot3DciKOjO6gf9v-KjEqA",
  authDomain: "nps-jsi20.firebaseapp.com",
  projectId: "nps-jsi20",
  storageBucket: "nps-jsi20.appspot.com",
  messagingSenderId: "1043542820951",
  appId: "1:1043542820951:web:136df6d3e64f79e1123b12",
  measurementId: "G-WWKE11W95Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
const db = getFirestore(app);

// Lấy ra 3 thẻ bên html và lưu trữu lại  vào biến để dễ dàng gọi.
const taskInput = document.getElementById("taskInput"); // input
const addTaskBtn = document.getElementById("addTaskBtn"); // button
const taskList = document.getElementById("taskList"); // ul

////// Liệt kê các hàm cần sử dụng để hoàn thành todolist

//// Hiển thị toàn bộ task mới nhất từ firestore ra UI

//// Cập nhật dữ liệu mới nhất từ firestore.

//// Thêm 1 task vào trong firebase firestore
const addTask = async (description)=>{
    await addDoc(collection(db,"tasks"), {description});
    
    getTasks(); // Lấy dữ liệu mới nhất từ DB về web.
}

//// Xóa 1 task trong firebase firestore

//// Lắng nghe sự kiện người dùng click nút "thêm"
addTaskBtn.addEventListener("click", () => {
  const description = taskInput.value.toLowerCase().trim();
  console.log("description: ", description);
  if (description !== "") {
    addTask(description); // Chỉ lưu dữ liệu khi task không rỗng. Gọi hàm thêm 1 task vào trong DB.
  } else {
    alert("task rỗng!!!");
  }
});
