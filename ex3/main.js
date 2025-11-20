// Viết một hàm sum() nhận vào hai số và trả về tổng của chúng, và thực hiện hiển thị lên màn hình bằng hàm alert()

function sum() {
  let a = Number(prompt("Nhập số a:"));
  let b = Number(prompt("Nhập số b:"));
  while (isNaN(a) || isNaN(b)) {
    alert("Dữ liệu không đúng, mời nhập lại");
    a = Number(prompt("Nhập số a:"));
    b = Number(prompt("Nhập số b:"));
  }
  return a + b;
}
// alert(`Tổng của ${a} + ${b} = ${sum()}`);
alert("Tổng bằng " + sum());
