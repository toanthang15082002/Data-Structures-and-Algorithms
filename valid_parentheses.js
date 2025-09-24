/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true
*/

//STACK có quy tắc LIFO (Last In First Out)

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  //Tạo mảng stack để phục vụ kiểm tra ngoặc
  var stack = [];

  for (let i = 0; i < s.length; i++) {
    //Kiểm tra nếu là ngoặc mở thì đẩy vào stack
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      //Nếu input có ngoặc đóng mà trong stack không có ngoặc mở thì invalid
      if (stack.length === 0) {
        return false;
      } else {
        // Nếu input có ngoặc đóng, kiểm tra xem có khớp với phần tử trên cùng của stack không (phần tử trên cùng stack là phần tử cuối cùng của array)
        if (s[i] === ')' && stack.pop() !== '(') {
          return false;
        }
        if (s[i] === ']' && stack.pop() !== '[') {
          return false;
        }
        if (s[i] === '}' && stack.pop() !== '{') {
          return false;
        }
      }
    }
  }
  //Sau khi các phần tử ngoặc mở trong stack bị xóa hết có nghĩa là string hợp lệ
  return stack.length === 0;
};