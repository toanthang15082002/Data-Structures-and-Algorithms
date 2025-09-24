/*
Given two integers, calculate the sum of the even numbers between the two given numbers.

Example 1:
Input: startNumber = 1, endNumber = 10
Output: 30
Explanation: 2+4+6+8+10 = 30

Example 2:
Input: startNumber = 2, endNumber = 8
Output: 20

Example 3:
Input: startNumber = 5000, endNumber = 10000
Output: 18757500
*/
/**
 * @param {number} startNumber
 * @param {number} endNumber
 * @return {number}
 */

// thuật toán 1 vòng lặp độ phức tạp O(n)
var totalValueEvenNumber = function (startNumber, endNumber) {
  if (typeof startNumber !== 'number' || typeof endNumber !== 'number') {
    console.log("Vui lòng truyền đúng tham số dạng number");
    return null;
  }
  if (startNumber >= endNumber) {
    console.log("Số bắt đầu phải nhỏ hơn số kết thúc");
    return null;
  }
  let total = 0;
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 0) total += i;
  }
  return total;
};

// thuật toán 1 vòng lặp độ phức tạp O(1)
var totalValueEvenNumberBestPerformance = function (startNumber, endNumber) {
  if (typeof startNumber !== 'number' || typeof endNumber !== 'number') {
    console.log("Vui lòng truyền đúng tham số dạng number");
    return null;
  }
  if (startNumber >= endNumber) {
    console.log("Số bắt đầu phải nhỏ hơn số kết thúc");
    return null;
  }
  const startEvenNumber = (startNumber % 2 === 0) ? startNumber : startNumber + 1;
  const endEvenNumber = (endNumber % 2 === 0) ? endNumber : endNumber - 1;

  const countEvenNumber = ((endEvenNumber - startEvenNumber) / 2) + 1;

  // tổng theo công thức cấp số cộng: n * (first + last) / 2
  return sum = countEvenNumber * (startEvenNumber + endEvenNumber) / 2;
};
console.log(totalValueEvenNumberBestPerformance(1, 10));
console.log(totalValueEvenNumberBestPerformance(2, 8));
console.log(totalValueEvenNumberBestPerformance(5000, 10000));
