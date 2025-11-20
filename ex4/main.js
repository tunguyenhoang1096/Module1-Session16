// Viết một hàm isEven nhận vào một số và trả về true nếu số đó là số chẵn, ngược lại trả về false.
// Yêu cầu người dùng nhập vào 1 số nguyên bất kỳ bằng hàm prompt()
// Hiển thị kết quả bằng alert()

// khởi tạo  hàm kiểm tra số chẵn
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// nhập số từ ng dùng
let number = Number(prompt("Mời nhập số nguyên bất kỳ"));
while (isNaN(number) || number % 1 !== 0) {
  number = Number(prompt("Dữ liệu k đúng, nhập lại số nguyên"));
}
if (isEven(number)) {
  alert(`${number} là số chẵn`);
} else {
  alert(`${number} là số lẻ`);
}
