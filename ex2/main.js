// Xây dựng hàm nhận vào một tham số là một mảng cho trước. Hàm thực hiện tìm giá trị nhỏ nhất trong mảng và trả về giá trị đó

const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];

function minOfArray(array) {
  if (array.length === 0) {
    return;
  }
  let min = 0;
  for (index in array) {
    if (min > array[index]) {
      min = array[index];
    }
  }
  return min;
}
let min1 = minOfArray(arr1);
console.log("Mảng 1: ", arr1);
console.log(`Giá trị nhỏ nhất của mảng 1 là ${min1} `);
let min2 = minOfArray(arr2);
console.log("Mảng 2: ", arr2);
console.log(`Giá trị nhỏ nhất của mảng 2 là ${min2} `);
let min3 = minOfArray(arr3);
console.log("Mảng 3: ", arr3);
console.log(`Giá trị nhỏ nhất của mảng 3 là ${min3} `);
let min4 = minOfArray(arr4);
console.log("Mảng 4: ", arr4);
console.log(`Giá trị nhỏ nhất của mảng 4 là ${min4} `);
