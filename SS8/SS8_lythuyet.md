Mục lục:
1. Tìm hiểu về đối tượng Date trong js
2. Các phương thức của Date
- Các phương thức get dữ liệu
- Các phương thức set
- Các phương thức khác


Đối tượng date: là nơi xử lý các vấn đề về thời gian.

Để khởi tạo đối tượng Date trong JS ta có 4 cách:


Bài tập thực hành:
1. Tạo đối tượng Date cho ngày 20 tháng 2 năm 2020, 3:12 sáng. Múi giờ là địa phương. Hiển thị nó bằng cách sử dụng alert();
2. Viết hàm getDateAgo(date, days) để hiển thị ngày trong tuần ở định dạng ngắn gọn: "SU","MO", "TU", "WE","TH", "FR", "SA".
3. Tạo một hàm getDateAgo(date, days) để trả về ngày của tháng, ngày trước kể từ ngày. Ví dụ: Nếu hôm nay là ngày 20 thì hàm trả getDateAgo(new Date(), 1) về phải là 19 và getDateAgo(new Date(), 2) phải là 18.