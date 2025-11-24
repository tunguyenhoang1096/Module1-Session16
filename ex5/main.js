// Cho người dùng nhập vào chuỗi ký tự và viết hàm kiểm tra xem đó có phải chuỗi ký tự đối xứng không:
// Người dùng nhập chuỗi bằng hàm prompt()
// Viết hàm isPalindrome() để kiểm tra chuỗi đối xứng
// Thực hiện thông báo cho người dùng bằng alert() có phải chuỗi đối xứng không

let str = prompt("Mời nhập 1 chuỗi bất kỳ");
// khỏi tạo hàm kiểm tra chuỗi đối xứng
function isPalindrome(str) {
  let check = false;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === str[str.length - i - 1]) {
      check = true;
    } else {
      check = false;
    }
  }
  if (check) {
    return true;
  } else {
    return false;
  }
}
// gọi hàm
if (isPalindrome(str)) {
  alert("chuỗi đối xứng");
} else {
  alert("chuỗi không đối xứng");
}
