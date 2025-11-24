// Tạo hàm tính tổng các phần tử trong mảng, với các mảng như sau:

const arr1 = [1, 2, 3, 4, 5, 6]; // sum=21
const arr2 = [10, 20, 30, 40, 50, 60]; // sum=210
const arr3 = [1, 3, 5, 7, 9]; // sum=25

// dùng function sum() để tính
function sum(arr) {
  let sum = 0;
  for (index in arr) {
    sum += arr[index];
  }
  return sum;
}
console.log(arr1);
console.log(`Tổng của mảng 1 là ${sum(arr1)}`);

// dùng reduce()
// const arr2 = [10, 20, 30, 40, 50, 60]
let sum2 = arr2.reduce(
  //Tham số thứ nhất là function, mỗi lần gọi hàm sẽ duyệt từng ptu của mảng
  (previousValue, currentValue) => previousValue + currentValue,
  // Tham số thứ 2: là giá trị khởi tạo ban đầu cho gt trước
  0
);
console.log(`Tổng của mảng 2 là ${sum2}`);
